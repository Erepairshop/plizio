// lib/plizioStickers.ts
// 20 Plizio space-sticker definiciok 4 nyelven (de/en/hu/ro)
// Forras: public/stickers-preview/sticker-data.js (Claude Design prototipus)

export type StickerRarity = "common" | "rare" | "epic" | "legendary";

export type LocalizedText = {
  de: string;
  en: string;
  hu: string;
  ro: string;
};

export interface StickerStat {
  label: LocalizedText;
  // Ha szam/mertekegyseg nyelvfuggetlen (pl. "5.500 °C", "95+"), string.
  // Ha nyelvi sajatossag van (pl. "Yellow dwarf" / "Sárga törpe"), LocalizedText.
  value: string | LocalizedText;
}

export function resolveStatValue(value: string | LocalizedText, lang: "de" | "en" | "hu" | "ro"): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.de;
}

export interface StickerDef {
  id: string;
  name: LocalizedText;
  category: LocalizedText;
  rarity: StickerRarity;
  halo: string; // rgba vagy hex szin, halo-nak a kartyan
  fact: LocalizedText;
  stats: StickerStat[];
}

// Kategoriak nyelvi map (ujrahasznalhato)
const CAT: Record<string, LocalizedText> = {
  Planet: { de: "Planet", en: "Planet", hu: "Bolygó", ro: "Planetă" },
  Stern: { de: "Stern", en: "Star", hu: "Csillag", ro: "Stea" },
  Mond: { de: "Mond", en: "Moon", hu: "Hold", ro: "Lună" },
  Zwergplanet: { de: "Zwergplanet", en: "Dwarf planet", hu: "Törpebolygó", ro: "Planetă pitică" },
  Objekt: { de: "Objekt", en: "Object", hu: "Objektum", ro: "Obiect" },
  Technik: { de: "Technik", en: "Tech", hu: "Technika", ro: "Tehnologie" },
  Mensch: { de: "Mensch", en: "Human", hu: "Ember", ro: "Om" },
  Phaenomen: { de: "Phänomen", en: "Phenomenon", hu: "Jelenség", ro: "Fenomen" },
  Phantasie: { de: "Phantasie", en: "Fantasy", hu: "Képzelet", ro: "Fantezie" },
};

// Gyakran elofordulo stat-cimkek (ujrahasznalhato)
const L = {
  monde: { de: "Monde", en: "Moons", hu: "Holdak", ro: "Luni" } as LocalizedText,
  groesse: { de: "Größe", en: "Size", hu: "Méret", ro: "Mărime" } as LocalizedText,
  alter: { de: "Alter", en: "Age", hu: "Kor", ro: "Vârstă" } as LocalizedText,
  abstand: { de: "Abstand", en: "Distance", hu: "Távolság", ro: "Distanță" } as LocalizedText,
  oberflaeche: { de: "Oberfläche", en: "Surface", hu: "Felszín", ro: "Suprafață" } as LocalizedText,
  typ: { de: "Typ", en: "Type", hu: "Típus", ro: "Tip" } as LocalizedText,
  tag: { de: "Tag", en: "Day", hu: "Nap", ro: "Zi" } as LocalizedText,
  jahr: { de: "Jahr", en: "Year", hu: "Év", ro: "An" } as LocalizedText,
  temp: { de: "Temp.", en: "Temp.", hu: "Hőm.", ro: "Temp." } as LocalizedText,
  farbe: { de: "Farbe", en: "Color", hu: "Szín", ro: "Culoare" } as LocalizedText,
  winde: { de: "Winde", en: "Winds", hu: "Szelek", ro: "Vânturi" } as LocalizedText,
  status: { de: "Status", en: "Status", hu: "Státusz", ro: "Statut" } as LocalizedText,
  berg: { de: "Berg", en: "Mountain", hu: "Hegy", ro: "Munte" } as LocalizedText,
  ring: { de: "Ring", en: "Ring", hu: "Gyűrű", ro: "Inel" } as LocalizedText,
  ringe: { de: "Ringe", en: "Rings", hu: "Gyűrűk", ro: "Inele" } as LocalizedText,
  dichte: { de: "Dichte", en: "Density", hu: "Sűrűség", ro: "Densitate" } as LocalizedText,
  neigung: { de: "Neigung", en: "Tilt", hu: "Dőlés", ro: "Înclinare" } as LocalizedText,
  sturm: { de: "Sturm", en: "Storm", hu: "Vihar", ro: "Furtună" } as LocalizedText,
  wasser: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" } as LocalizedText,
  bewohner: { de: "Bewohner", en: "Inhabitants", hu: "Lakók", ro: "Locuitori" } as LocalizedText,
  kraft: { de: "Kraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } as LocalizedText,
  phasen: { de: "Phasen", en: "Phases", hu: "Fázisok", ro: "Faze" } as LocalizedText,
  tagtemp: { de: "Tagtemp.", en: "Day temp.", hu: "Nappal", ro: "Zi temp." } as LocalizedText,
  nacht: { de: "Nacht", en: "Night", hu: "Éjszaka", ro: "Noapte" } as LocalizedText,
  wolken: { de: "Wolken", en: "Clouds", hu: "Felhők", ro: "Nori" } as LocalizedText,
  guertel: { de: "Gürtel", en: "Belt", hu: "Öv", ro: "Centură" } as LocalizedText,
  anzahl: { de: "Anzahl", en: "Count", hu: "Darabszám", ro: "Număr" } as LocalizedText,
  form: { de: "Form", en: "Shape", hu: "Alak", ro: "Formă" } as LocalizedText,
  schweif: { de: "Schweif", en: "Tail", hu: "Csóva", ro: "Coadă" } as LocalizedText,
  material: { de: "Material", en: "Material", hu: "Anyag", ro: "Material" } as LocalizedText,
  bahn: { de: "Bahn", en: "Orbit", hu: "Pálya", ro: "Orbită" } as LocalizedText,
  leuchten: { de: "Leuchten", en: "Glow", hu: "Fény", ro: "Strălucire" } as LocalizedText,
  tempo: { de: "Tempo", en: "Speed", hu: "Sebesség", ro: "Viteză" } as LocalizedText,
  stufen: { de: "Stufen", en: "Stages", hu: "Fokozatok", ro: "Trepte" } as LocalizedText,
  treibstoff: { de: "Treibstoff", en: "Fuel", hu: "Üzemanyag", ro: "Combustibil" } as LocalizedText,
  ziel: { de: "Ziel", en: "Destination", hu: "Cél", ro: "Destinație" } as LocalizedText,
  anzug: { de: "Anzug", en: "Suit", hu: "Ruha", ro: "Costum" } as LocalizedText,
  schlaf: { de: "Schlaf", en: "Sleep", hu: "Alvás", ro: "Somn" } as LocalizedText,
  ausflug: { de: "Ausflug", en: "Outing", hu: "Séta", ro: "Plimbare" } as LocalizedText,
  motto: { de: "Motto", en: "Motto", hu: "Mottó", ro: "Moto" } as LocalizedText,
  raeder: { de: "Räder", en: "Wheels", hu: "Kerekek", ro: "Roți" } as LocalizedText,
  energie: { de: "Energie", en: "Energy", hu: "Energia", ro: "Energie" } as LocalizedText,
  heimat: { de: "Heimat", en: "Home", hu: "Otthon", ro: "Acasă" } as LocalizedText,
  job: { de: "Job", en: "Job", hu: "Feladat", ro: "Sarcină" } as LocalizedText,
  hoehe: { de: "Höhe", en: "Altitude", hu: "Magasság", ro: "Altitudine" } as LocalizedText,
  anziehung: { de: "Anziehung", en: "Gravity", hu: "Vonzás", ro: "Atracție" } as LocalizedText,
  licht: { de: "Licht", en: "Light", hu: "Fény", ro: "Lumină" } as LocalizedText,
  horizont: { de: "Horizont", en: "Horizon", hu: "Horizont", ro: "Orizont" } as LocalizedText,
  sterne: { de: "Sterne", en: "Stars", hu: "Csillagok", ro: "Stele" } as LocalizedText,
  typen: { de: "Typen", en: "Types", hu: "Típusok", ro: "Tipuri" } as LocalizedText,
  unsere: { de: "Unsere", en: "Ours", hu: "A miénk", ro: "A noastră" } as LocalizedText,
  sichtungen: { de: "Sichtungen", en: "Sightings", hu: "Észlelések", ro: "Observări" } as LocalizedText,
  beweis: { de: "Beweis", en: "Proof", hu: "Bizonyíték", ro: "Dovadă" } as LocalizedText,
};

export const PLIZIO_STICKERS: StickerDef[] = [
  {
    id: "sonne",
    name: { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare" },
    category: CAT.Stern,
    rarity: "legendary",
    halo: "#ffcc2a55",
    fact: {
      de: "Die Sonne ist so groß, dass mehr als eine Million Erden hineinpassen würden!",
      en: "The Sun is so big that more than one million Earths could fit inside!",
      hu: "A Nap olyan hatalmas, hogy több mint egymillió Föld férne bele!",
      ro: "Soarele este atât de mare, încât peste un milion de Pământuri ar încăpea în el!",
    },
    stats: [
      { label: L.oberflaeche, value: "5.500 °C" },
      { label: L.alter, value: { de: "4,6 Mrd. J.", en: "4.6 B yrs", hu: "4,6 Mrd év", ro: "4,6 mld. ani" } },
      { label: L.typ, value: { de: "Gelber Zwerg", en: "Yellow dwarf", hu: "Sárga törpe", ro: "Pitică galbenă" } },
      { label: L.abstand, value: { de: "150 Mio km", en: "150M km", hu: "150 M km", ro: "150 mil. km" } },
    ],
  },
  {
    id: "merkur",
    name: { de: "Merkur", en: "Mercury", hu: "Merkúr", ro: "Mercur" },
    category: CAT.Planet,
    rarity: "common",
    halo: "#a59e8c55",
    fact: {
      de: "Merkur ist der schnellste Planet — er rast in nur 88 Tagen um die Sonne.",
      en: "Mercury is the fastest planet — it races around the Sun in just 88 days.",
      hu: "A Merkúr a leggyorsabb bolygó — mindössze 88 nap alatt kerüli meg a Napot.",
      ro: "Mercur este cea mai rapidă planetă — înconjoară Soarele în doar 88 de zile.",
    },
    stats: [
      { label: L.groesse, value: { de: "Klein", en: "Small", hu: "Kicsi", ro: "Mică" } },
      { label: L.monde, value: "0" },
      { label: L.tagtemp, value: "430 °C" },
      { label: L.nacht, value: "−180 °C" },
    ],
  },
  {
    id: "venus",
    name: { de: "Venus", en: "Venus", hu: "Vénusz", ro: "Venus" },
    category: CAT.Planet,
    rarity: "common",
    halo: "#ffb86a55",
    fact: {
      de: "Auf der Venus ist es heißer als in einem Pizzaofen — etwa 465 °C!",
      en: "Venus is hotter than a pizza oven — about 465 °C!",
      hu: "A Vénuszon forróbb van, mint egy pizzakemencében — kb. 465 °C!",
      ro: "Pe Venus este mai cald decât într-un cuptor de pizza — aproximativ 465 °C!",
    },
    stats: [
      { label: L.groesse, value: { de: "Erdähnlich", en: "Earth-like", hu: "Földméretű", ro: "Ca Pământul" } },
      { label: L.monde, value: "0" },
      { label: L.wolken, value: { de: "Schwefel", en: "Sulfur", hu: "Kén", ro: "Sulf" } },
      { label: L.tag, value: { de: "243 Erdentage", en: "243 Earth days", hu: "243 földi nap", ro: "243 zile Pământ" } },
    ],
  },
  {
    id: "erde",
    name: { de: "Erde", en: "Earth", hu: "Föld", ro: "Pământ" },
    category: CAT.Planet,
    rarity: "rare",
    halo: "#4aa8ff55",
    fact: {
      de: "Die Erde ist der einzige Planet, auf dem wir Leben kennen — auch dich!",
      en: "Earth is the only planet we know with life — including you!",
      hu: "A Föld az egyetlen bolygó, amin életet ismerünk — téged is!",
      ro: "Pământul este singura planetă pe care cunoaștem viață — inclusiv tu!",
    },
    stats: [
      { label: L.monde, value: "1" },
      { label: L.wasser, value: "71 %" },
      { label: L.alter, value: { de: "4,5 Mrd. J.", en: "4.5 B yrs", hu: "4,5 Mrd év", ro: "4,5 mld. ani" } },
      { label: L.bewohner, value: { de: "Viele!", en: "Many!", hu: "Rengeteg!", ro: "Mulți!" } },
    ],
  },
  {
    id: "mond",
    name: { de: "Mond", en: "Moon", hu: "Hold", ro: "Luna" },
    category: CAT.Mond,
    rarity: "rare",
    halo: "#e8e4f055",
    fact: {
      de: "Auf dem Mond sind noch heute Fußabdrücke der Astronauten zu sehen.",
      en: "Astronauts' footprints are still visible on the Moon today.",
      hu: "A Holdon még ma is látszanak az űrhajósok lábnyomai.",
      ro: "Pe Lună se pot vedea și astăzi urmele pașilor astronauților.",
    },
    stats: [
      { label: L.abstand, value: "384.000 km" },
      { label: L.alter, value: { de: "4,5 Mrd. J.", en: "4.5 B yrs", hu: "4,5 Mrd év", ro: "4,5 mld. ani" } },
      { label: L.kraft, value: { de: "1/6 der Erde", en: "1/6 of Earth", hu: "A Föld 1/6-a", ro: "1/6 din Pământ" } },
      { label: L.phasen, value: "8" },
    ],
  },
  {
    id: "mars",
    name: { de: "Mars", en: "Mars", hu: "Mars", ro: "Marte" },
    category: CAT.Planet,
    rarity: "rare",
    halo: "#ff664455",
    fact: {
      de: "Mars wird der 'Rote Planet' genannt — wegen Rost im Staub auf dem Boden.",
      en: "Mars is called the 'Red Planet' — because of rust in the dust on its surface.",
      hu: "A Marsot a „Vörös Bolygónak\" hívják — a talaj porában lévő rozsda miatt.",
      ro: "Marte este numită „Planeta Roșie\" — din cauza ruginii din praful de pe sol.",
    },
    stats: [
      { label: L.monde, value: "2" },
      { label: L.berg, value: "Olympus Mons" },
      { label: L.tag, value: { de: "24,6 Std.", en: "24.6 hrs", hu: "24,6 óra", ro: "24,6 ore" } },
      { label: L.jahr, value: { de: "687 Tage", en: "687 days", hu: "687 nap", ro: "687 zile" } },
    ],
  },
  {
    id: "jupiter",
    name: { de: "Jupiter", en: "Jupiter", hu: "Jupiter", ro: "Jupiter" },
    category: CAT.Planet,
    rarity: "epic",
    halo: "#d99c6855",
    fact: {
      de: "Jupiter hat einen Sturm, der größer ist als die ganze Erde — seit 300 Jahren!",
      en: "Jupiter has a storm bigger than the whole Earth — for 300 years!",
      hu: "A Jupiteren 300 éve dúl egy vihar, ami nagyobb az egész Földnél!",
      ro: "Jupiter are o furtună mai mare decât întregul Pământ — de 300 de ani!",
    },
    stats: [
      { label: L.monde, value: "95+" },
      { label: L.ring, value: { de: "Ja, dünn", en: "Yes, thin", hu: "Van, vékony", ro: "Da, subțire" } },
      { label: L.groesse, value: { de: "Größter Planet", en: "Largest planet", hu: "Legnagyobb bolygó", ro: "Cea mai mare planetă" } },
      { label: L.sturm, value: { de: "Großer Fleck", en: "Great Spot", hu: "Nagy Vörös Folt", ro: "Marea Pată" } },
    ],
  },
  {
    id: "saturn",
    name: { de: "Saturn", en: "Saturn", hu: "Szaturnusz", ro: "Saturn" },
    category: CAT.Planet,
    rarity: "epic",
    halo: "#ffd97a55",
    fact: {
      de: "Saturns Ringe bestehen aus Millionen Stücken Eis und Staub.",
      en: "Saturn's rings are made of millions of pieces of ice and dust.",
      hu: "A Szaturnusz gyűrűi jégből és porból álló millió darabból készültek.",
      ro: "Inelele lui Saturn sunt formate din milioane de bucăți de gheață și praf.",
    },
    stats: [
      { label: L.monde, value: "146" },
      { label: L.ringe, value: { de: "7 Hauptringe", en: "7 main rings", hu: "7 fő gyűrű", ro: "7 inele principale" } },
      { label: L.dichte, value: { de: "Leichter als Wasser!", en: "Lighter than water!", hu: "Könnyebb a víznél!", ro: "Mai ușor ca apa!" } },
      { label: L.tag, value: { de: "10,7 Std.", en: "10.7 hrs", hu: "10,7 óra", ro: "10,7 ore" } },
    ],
  },
  {
    id: "uranus",
    name: { de: "Uranus", en: "Uranus", hu: "Uránusz", ro: "Uranus" },
    category: CAT.Planet,
    rarity: "rare",
    halo: "#7fd4d455",
    fact: {
      de: "Uranus liegt auf der Seite und rollt wie ein Ball um die Sonne.",
      en: "Uranus lies on its side and rolls around the Sun like a ball.",
      hu: "Az Uránusz az oldalán fekszik és labdaként gurul a Nap körül.",
      ro: "Uranus stă pe o parte și se rostogolește ca o minge în jurul Soarelui.",
    },
    stats: [
      { label: L.monde, value: "27" },
      { label: L.neigung, value: "98°" },
      { label: L.temp, value: "−224 °C" },
      { label: L.farbe, value: { de: "Blaugrün", en: "Blue-green", hu: "Kékeszöld", ro: "Albastru-verzui" } },
    ],
  },
  {
    id: "neptun",
    name: { de: "Neptun", en: "Neptune", hu: "Neptunusz", ro: "Neptun" },
    category: CAT.Planet,
    rarity: "rare",
    halo: "#4a6fff55",
    fact: {
      de: "Auf Neptun wehen die schnellsten Winde im Sonnensystem — bis 2.000 km/h!",
      en: "Neptune has the fastest winds in the Solar System — up to 2,000 km/h!",
      hu: "A Neptunuszon fújnak a Naprendszer leggyorsabb szelei — akár 2 000 km/h!",
      ro: "Pe Neptun suflă cei mai rapizi vânturi din Sistemul Solar — până la 2.000 km/h!",
    },
    stats: [
      { label: L.monde, value: "14" },
      { label: L.winde, value: "2.000 km/h" },
      { label: L.farbe, value: { de: "Tiefblau", en: "Deep blue", hu: "Mélykék", ro: "Albastru-închis" } },
      { label: L.jahr, value: { de: "165 Erdenjahre", en: "165 Earth years", hu: "165 földi év", ro: "165 ani Pământ" } },
    ],
  },
  {
    id: "pluto",
    name: { de: "Pluto", en: "Pluto", hu: "Plútó", ro: "Pluto" },
    category: CAT.Zwergplanet,
    rarity: "epic",
    halo: "#d4bfa855",
    fact: {
      de: "Pluto hat ein riesiges Herz aus Eis auf seiner Oberfläche!",
      en: "Pluto has a giant heart made of ice on its surface!",
      hu: "A Plútó felszínén egy hatalmas, jégből álló szív van!",
      ro: "Pluto are pe suprafața sa o inimă uriașă din gheață!",
    },
    stats: [
      { label: L.monde, value: "5" },
      { label: L.status, value: { de: "Zwergplanet", en: "Dwarf planet", hu: "Törpebolygó", ro: "Planetă pitică" } },
      { label: L.temp, value: "−230 °C" },
      { label: L.jahr, value: { de: "248 Erdenjahre", en: "248 Earth years", hu: "248 földi év", ro: "248 ani Pământ" } },
    ],
  },
  {
    id: "asteroid",
    name: { de: "Asteroid", en: "Asteroid", hu: "Aszteroida", ro: "Asteroid" },
    category: CAT.Objekt,
    rarity: "common",
    halo: "#8a7a6a55",
    fact: {
      de: "Zwischen Mars und Jupiter fliegen Millionen von Asteroiden — ein echter Weltraumgürtel.",
      en: "Between Mars and Jupiter, millions of asteroids fly around — a real space belt.",
      hu: "A Mars és a Jupiter között milliónyi aszteroida kering — egy igazi űrbéli öv.",
      ro: "Între Marte și Jupiter zboară milioane de asteroizi — o adevărată centură spațială.",
    },
    stats: [
      { label: L.guertel, value: { de: "Hauptgürtel", en: "Main belt", hu: "Fő-öv", ro: "Centura principală" } },
      { label: L.groesse, value: { de: "Sehr verschieden", en: "Very varied", hu: "Nagyon változó", ro: "Foarte variată" } },
      { label: L.anzahl, value: { de: "Millionen", en: "Millions", hu: "Milliók", ro: "Milioane" } },
      { label: L.form, value: { de: "Kartoffelig", en: "Potato-shaped", hu: "Krumpli-alak", ro: "Ca un cartof" } },
    ],
  },
  {
    id: "komet",
    name: { de: "Komet", en: "Comet", hu: "Üstökös", ro: "Cometă" },
    category: CAT.Objekt,
    rarity: "rare",
    halo: "#7bdfff55",
    fact: {
      de: "Ein Komet ist wie ein schmutziger Schneeball mit einem glühenden Schweif.",
      en: "A comet is like a dirty snowball with a glowing tail.",
      hu: "Az üstökös olyan, mint egy piszkos hógolyó izzó csóvával.",
      ro: "O cometă este ca un bulgăre de zăpadă murdar cu o coadă strălucitoare.",
    },
    stats: [
      { label: L.schweif, value: { de: "Bis 100 Mio km", en: "Up to 100M km", hu: "Akár 100 M km", ro: "Până la 100 mil. km" } },
      { label: L.material, value: { de: "Eis + Staub", en: "Ice + dust", hu: "Jég és por", ro: "Gheață și praf" } },
      { label: L.bahn, value: { de: "Elliptisch", en: "Elliptical", hu: "Elliptikus", ro: "Eliptică" } },
      { label: L.leuchten, value: { de: "Am Sonnennähsten", en: "Near the Sun", hu: "A Nap közelében", ro: "Aproape de Soare" } },
    ],
  },
  {
    id: "rakete",
    name: { de: "Rakete", en: "Rocket", hu: "Rakéta", ro: "Rachetă" },
    category: CAT.Technik,
    rarity: "common",
    halo: "#ff4f6f55",
    fact: {
      de: "Eine Rakete braucht 28.000 km/h, um die Erde zu verlassen — das ist megaschnell!",
      en: "A rocket needs 28,000 km/h to leave Earth — that's super fast!",
      hu: "Egy rakétának 28 000 km/h kell, hogy elhagyja a Földet — ez mega gyors!",
      ro: "O rachetă are nevoie de 28.000 km/h ca să părăsească Pământul — e super rapid!",
    },
    stats: [
      { label: L.tempo, value: "28.000 km/h" },
      { label: L.stufen, value: { de: "Meist 2–3", en: "Usually 2–3", hu: "Többnyire 2–3", ro: "De obicei 2–3" } },
      { label: L.treibstoff, value: { de: "Flüssig + fest", en: "Liquid + solid", hu: "Folyékony és szilárd", ro: "Lichid și solid" } },
      { label: L.ziel, value: { de: "All", en: "Space", hu: "Világűr", ro: "Spațiu" } },
    ],
  },
  {
    id: "astronaut",
    name: { de: "Astronaut:in", en: "Astronaut", hu: "Űrhajós", ro: "Astronaut" },
    category: CAT.Mensch,
    rarity: "epic",
    halo: "#ffffff44",
    fact: {
      de: "Im All schwebt alles — sogar dein Mittagessen muss man festhalten!",
      en: "In space everything floats — even your lunch has to be held down!",
      hu: "Az űrben minden lebeg — még az ebédet is le kell fogni!",
      ro: "În spațiu totul plutește — chiar și prânzul trebuie ținut!",
    },
    stats: [
      { label: L.anzug, value: { de: "Ca. 127 kg", en: "Approx. 127 kg", hu: "Kb. 127 kg", ro: "Cca. 127 kg" } },
      { label: L.schlaf, value: { de: "Im Schlafsack", en: "In a sleeping bag", hu: "Hálózsákban", ro: "În sac de dormit" } },
      { label: L.ausflug, value: { de: "Weltraumspaziergang", en: "Spacewalk", hu: "Űrséta", ro: "Plimbare spațială" } },
      { label: L.motto, value: { de: "Schwerelos!", en: "Weightless!", hu: "Súlytalan!", ro: "Fără greutate!" } },
    ],
  },
  {
    id: "rover",
    name: { de: "Mars-Rover", en: "Mars Rover", hu: "Mars-rover", ro: "Rover marțian" },
    category: CAT.Technik,
    rarity: "rare",
    halo: "#d4a54a55",
    fact: {
      de: "Der Rover Curiosity fährt seit 2012 auf dem Mars und schickt Fotos zur Erde.",
      en: "The Curiosity rover has been driving on Mars since 2012 and sends photos to Earth.",
      hu: "A Curiosity rover 2012 óta járja a Marsot és fotókat küld a Földre.",
      ro: "Roverul Curiosity circulă pe Marte din 2012 și trimite fotografii pe Pământ.",
    },
    stats: [
      { label: L.tempo, value: { de: "4 cm pro Sekunde", en: "4 cm per second", hu: "4 cm/másodperc", ro: "4 cm pe secundă" } },
      { label: L.raeder, value: "6" },
      { label: L.energie, value: { de: "Plutonium", en: "Plutonium", hu: "Plutónium", ro: "Plutoniu" } },
      { label: L.heimat, value: { de: "Mars", en: "Mars", hu: "Mars", ro: "Marte" } },
    ],
  },
  {
    id: "satellit",
    name: { de: "Satellit", en: "Satellite", hu: "Műhold", ro: "Satelit" },
    category: CAT.Technik,
    rarity: "common",
    halo: "#4a8fff55",
    fact: {
      de: "Über deinem Kopf kreisen gerade über 8.000 Satelliten um die Erde!",
      en: "Right above your head, over 8,000 satellites are orbiting Earth!",
      hu: "Most épp a fejed felett több mint 8 000 műhold kering a Föld körül!",
      ro: "Chiar deasupra capului tău, peste 8.000 de sateliți orbitează Pământul!",
    },
    stats: [
      { label: L.anzahl, value: "8.000+" },
      { label: L.bahn, value: { de: "Erdumlauf", en: "Earth orbit", hu: "Földkörüli pálya", ro: "Orbită terestră" } },
      { label: L.job, value: { de: "Internet, TV, GPS", en: "Internet, TV, GPS", hu: "Internet, TV, GPS", ro: "Internet, TV, GPS" } },
      { label: L.hoehe, value: "400–36.000 km" },
    ],
  },
  {
    id: "blackhole",
    name: { de: "Schwarzes Loch", en: "Black Hole", hu: "Fekete lyuk", ro: "Gaură neagră" },
    category: CAT.Phaenomen,
    rarity: "legendary",
    halo: "#ff4fb855",
    fact: {
      de: "Nicht einmal Licht kann einem Schwarzen Loch entkommen — wow!",
      en: "Not even light can escape a black hole — wow!",
      hu: "Egy fekete lyukból még a fény sem tud elszökni — hűha!",
      ro: "Nici măcar lumina nu poate scăpa dintr-o gaură neagră — uau!",
    },
    stats: [
      { label: L.anziehung, value: { de: "Riesig", en: "Huge", hu: "Hatalmas", ro: "Uriașă" } },
      { label: L.licht, value: { de: "Bleibt drin", en: "Stays inside", hu: "Bent ragad", ro: "Rămâne înăuntru" } },
      { label: L.groesse, value: { de: "Winzig bis XXL", en: "Tiny to XXL", hu: "Parányitól XXL-ig", ro: "De la minuscul la XXL" } },
      { label: L.horizont, value: { de: "Ereignishorizont", en: "Event horizon", hu: "Eseményhorizont", ro: "Orizontul evenimentelor" } },
    ],
  },
  {
    id: "galaxie",
    name: { de: "Galaxie", en: "Galaxy", hu: "Galaxis", ro: "Galaxie" },
    category: CAT.Phaenomen,
    rarity: "epic",
    halo: "#c77bff55",
    fact: {
      de: "Unsere Milchstraße hat über 100 Milliarden Sterne — so viele Sandkörner gibt's am Strand!",
      en: "Our Milky Way has over 100 billion stars — that's as many as grains of sand on a beach!",
      hu: "A Tejút galaxisunkban több mint 100 milliárd csillag van — annyi, mint homokszem a tengerparton!",
      ro: "Calea Lactee are peste 100 de miliarde de stele — cât grăunțele de nisip de pe plajă!",
    },
    stats: [
      { label: L.sterne, value: { de: "100 Mrd+", en: "100B+", hu: "100 Mrd+", ro: "100 mld.+" } },
      { label: L.typen, value: { de: "Spiral, ellipt., irreg.", en: "Spiral, elliptical, irreg.", hu: "Spirál, elliptikus, szabálytalan", ro: "Spirală, eliptică, neregulată" } },
      { label: L.unsere, value: { de: "Milchstraße", en: "Milky Way", hu: "Tejút", ro: "Calea Lactee" } },
      { label: L.alter, value: { de: "13 Mrd. J.", en: "13 B yrs", hu: "13 Mrd év", ro: "13 mld. ani" } },
    ],
  },
  {
    id: "ufo",
    name: { de: "UFO", en: "UFO", hu: "UFO", ro: "OZN" },
    category: CAT.Phantasie,
    rarity: "legendary",
    halo: "#22d3a055",
    fact: {
      de: "UFO heißt 'Unbekanntes Flugobjekt'. Ob Aliens uns besuchen? Niemand weiß es sicher!",
      en: "UFO means 'Unidentified Flying Object'. Do aliens visit us? Nobody knows for sure!",
      hu: "Az UFO = „Azonosítatlan Repülő Tárgy\". Meglátogatnak minket a földönkívüliek? Senki sem tudja biztosan!",
      ro: "OZN înseamnă „Obiect Zburător Neidentificat\". Ne vizitează extratereștrii? Nimeni nu știe sigur!",
    },
    stats: [
      { label: L.status, value: { de: "Unbekannt", en: "Unknown", hu: "Ismeretlen", ro: "Necunoscut" } },
      { label: L.farbe, value: { de: "Silbrig?", en: "Silvery?", hu: "Ezüstös?", ro: "Argintiu?" } },
      { label: L.sichtungen, value: { de: "Viele", en: "Many", hu: "Sok", ro: "Multe" } },
      { label: L.beweis, value: { de: "Gesucht", en: "Wanted", hu: "Keressük", ro: "Se caută" } },
    ],
  },
];

// ---------------- Helper API ----------------

export function getStickerById(id: string): StickerDef | undefined {
  return PLIZIO_STICKERS.find((s) => s.id === id);
}

export function stickerName(sticker: StickerDef, lang: "de" | "en" | "hu" | "ro"): string {
  return sticker.name[lang] ?? sticker.name.de;
}

export const RARITY_COLOR: Record<StickerRarity, string> = {
  common: "#9aa0c4",
  rare: "#4aa8ff",
  epic: "#c77bff",
  legendary: "#ffcc2a",
};

export const RARITY_LABEL_4L: Record<StickerRarity, LocalizedText> = {
  common: { de: "Häufig", en: "Common", hu: "Gyakori", ro: "Obișnuit" },
  rare: { de: "Selten", en: "Rare", hu: "Ritka", ro: "Rar" },
  epic: { de: "Episch", en: "Epic", hu: "Epikus", ro: "Epic" },
  legendary: { de: "Legendär", en: "Legendary", hu: "Legendás", ro: "Legendar" },
};
