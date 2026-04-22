import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const PHYSICS_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Physics",
  meteorCatch: [
    {
      id: "phys-matter-states",
      title: { de: "Aggregatzustände", en: "States of Matter", hu: "Halmazállapotok", ro: "Stări de agregare" },
      prompt: { de: "Fange nur gasförmige Dinge.", en: "Catch only gaseous items.", hu: "Csak a gáz halmazállapotúakat fogd ki.", ro: "Prinde doar stările gazoase." },
      goal: 6,
      speed: 5,
      theme: { sky: "#0c4a6e", glow: "#7dd3fc", accent: "#38bdf8" },
      correctItems: [
        { id: "steam", label: { de: "Wasserdampf", en: "Steam", hu: "Vízgőz", ro: "Abur" }, emoji: "💨" },
        { id: "air", label: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }, emoji: "🌬️" },
        { id: "helium", label: { de: "Helium", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "🎈" },
      ],
      wrongItems: [
        { id: "ice", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "🧊" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "stone", label: { de: "Stein", en: "Stone", hu: "Kő", ro: "Piatră" }, emoji: "🪨" },
      ],
    },
    {
      id: "phys-light-sources",
      title: { de: "Lichtquellen", en: "Light Sources", hu: "Fényforrások", ro: "Surse de lumină" },
      prompt: { de: "Fange Lichtquellen.", en: "Catch light sources.", hu: "Fogd ki a fényforrásokat.", ro: "Prinde sursele de lumină." },
      goal: 6,
      speed: 5,
      theme: { sky: "#1e3a8a", glow: "#fef08a", accent: "#eab308" },
      correctItems: [
        { id: "sun", label: { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare" }, emoji: "☀️" },
        { id: "lamp", label: { de: "Lampe", en: "Lamp", hu: "Lámpa", ro: "Lampă" }, emoji: "💡" },
        { id: "candle", label: { de: "Kerze", en: "Candle", hu: "Gyertya", ro: "Lumânare" }, emoji: "🕯️" }
      ],
      wrongItems: [
        { id: "mirror", label: { de: "Spiegel", en: "Mirror", hu: "Tükör", ro: "Oglindă" }, emoji: "🪞" },
        { id: "moon", label: { de: "Mond", en: "Moon", hu: "Hold", ro: "Lună" }, emoji: "🌙" },
        { id: "book", label: { de: "Buch", en: "Book", hu: "Könyv", ro: "Carte" }, emoji: "📖" }
      ]
    },
    {
      id: "phys-magnetic-items",
      title: { de: "Magnetische Gegenstände", en: "Magnetic Items", hu: "Mágneses tárgyak", ro: "Obiecte magnetice" },
      prompt: { de: "Fange magnetische Dinge.", en: "Catch magnetic items.", hu: "Fogd ki a mágneses tárgyakat.", ro: "Prinde obiectele magnetice." },
      goal: 6,
      speed: 5,
      theme: { sky: "#312e81", glow: "#a5b4fc", accent: "#6366f1" },
      correctItems: [
        { id: "iron_nail", label: { de: "Eisennagel", en: "Iron nail", hu: "Vasszög", ro: "Cui de fier" }, emoji: "📍" },
        { id: "steel_clip", label: { de: "Büroklammer", en: "Steel clip", hu: "Gémkapocs", ro: "Agrafă" }, emoji: "📎" },
        { id: "magnet", label: { de: "Magnet", en: "Magnet", hu: "Mágnes", ro: "Magnet" }, emoji: "🧲" }
      ],
      wrongItems: [
        { id: "plastic_spoon", label: { de: "Plastiklöffel", en: "Plastic spoon", hu: "Műanyag kanál", ro: "Lingură de plastic" }, emoji: "🥄" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵" },
        { id: "glass", label: { de: "Glas", en: "Glass", hu: "Üveg", ro: "Sticlă" }, emoji: "🥃" }
      ]
    },
    {
      id: "phys-heat-conductors",
      title: { de: "Wärmeleiter", en: "Heat Conductors", hu: "Hővezetők", ro: "Conductori termici" },
      prompt: { de: "Fange gute Wärmeleiter.", en: "Catch good heat conductors.", hu: "Fogd ki a jó hővezetőket.", ro: "Prinde buni conductori termici." },
      goal: 6,
      speed: 5,
      theme: { sky: "#7f1d1d", glow: "#fca5a5", accent: "#ef4444" },
      correctItems: [
        { id: "copper_wire", label: { de: "Kupferdraht", en: "Copper wire", hu: "Rézdrót", ro: "Sârmă de cupru" }, emoji: "🔌" },
        { id: "iron_pan", label: { de: "Eisenpfanne", en: "Iron pan", hu: "Vasserpenyő", ro: "Tigaie de fier" }, emoji: "🍳" },
        { id: "silver_coin", label: { de: "Silbermünze", en: "Silver coin", hu: "Ezüstérme", ro: "Monedă de argint" }, emoji: "🪙" }
      ],
      wrongItems: [
        { id: "wool", label: { de: "Wolle", en: "Wool", hu: "Gyapjú", ro: "Lână" }, emoji: "🧣" },
        { id: "plastic", label: { de: "Plastik", en: "Plastic", hu: "Műanyag", ro: "Plastic" }, emoji: "🥤" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵" }
      ]
    },
    {
      id: "phys-elastic-materials",
      title: { de: "Elastische Materialien", en: "Elastic Materials", hu: "Rugalmas anyagok", ro: "Materiale elastice" },
      prompt: { de: "Fange elastische Dinge.", en: "Catch elastic materials.", hu: "Fogd ki a rugalmas anyagokat.", ro: "Prinde materialele elastice." },
      goal: 6,
      speed: 5,
      theme: { sky: "#064e3b", glow: "#6ee7b7", accent: "#10b981" },
      correctItems: [
        { id: "rubber_band", label: { de: "Gummiband", en: "Rubber band", hu: "Gumiszalag", ro: "Elastic" }, emoji: "🪢" },
        { id: "spring", label: { de: "Feder", en: "Spring", hu: "Rugó", ro: "Arc" }, emoji: "➰" },
        { id: "balloon", label: { de: "Luftballon", en: "Balloon", hu: "Lufi", ro: "Balon" }, emoji: "🎈" }
      ],
      wrongItems: [
        { id: "stone", label: { de: "Stein", en: "Stone", hu: "Kő", ro: "Piatră" }, emoji: "🪨" },
        { id: "glass", label: { de: "Glas", en: "Glass", hu: "Üveg", ro: "Sticlă" }, emoji: "🥃" },
        { id: "clay", label: { de: "Ton", en: "Clay", hu: "Agyag", ro: "Argilă" }, emoji: "🏺" }
      ]
    },
    {
      id: "phys-transparent-objects",
      title: { de: "Transparente Objekte", en: "Transparent Objects", hu: "Átlátszó tárgyak", ro: "Obiecte transparente" },
      prompt: { de: "Fange transparente Dinge.", en: "Catch transparent objects.", hu: "Fogd ki az átlátszó tárgyakat.", ro: "Prinde obiectele transparente." },
      goal: 6,
      speed: 5,
      theme: { sky: "#0f172a", glow: "#cbd5e1", accent: "#94a3b8" },
      correctItems: [
        { id: "window", label: { de: "Fensterglas", en: "Window glass", hu: "Ablaküveg", ro: "Geam" }, emoji: "🪟" },
        { id: "clear_plastic", label: { de: "Klares Plastik", en: "Clear plastic", hu: "Átlátszó műanyag", ro: "Plastic transparent" }, emoji: "🧴" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" }
      ],
      wrongItems: [
        { id: "brick", label: { de: "Ziegel", en: "Brick", hu: "Tégla", ro: "Cărămidă" }, emoji: "🧱" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵" },
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🛡️" }
      ]
    },
    {
      id: "phys-sound-makers",
      title: { de: "Klangerzeuger", en: "Sound Makers", hu: "Hangforrások", ro: "Surse de sunet" },
      prompt: { de: "Fange Dinge, die Töne erzeugen.", en: "Catch sound makers.", hu: "Fogd ki a hangforrásokat.", ro: "Prinde sursele de sunet." },
      goal: 6,
      speed: 5,
      theme: { sky: "#4c1d95", glow: "#c4b5fd", accent: "#8b5cf6" },
      correctItems: [
        { id: "bell", label: { de: "Glocke", en: "Bell", hu: "Harang", ro: "Clopot" }, emoji: "🔔" },
        { id: "guitar", label: { de: "Gitarre", en: "Guitar", hu: "Gitár", ro: "Chitară" }, emoji: "🎸" },
        { id: "radio", label: { de: "Radio", en: "Radio", hu: "Rádió", ro: "Radio" }, emoji: "📻" }
      ],
      wrongItems: [
        { id: "pillow", label: { de: "Kissen", en: "Pillow", hu: "Párna", ro: "Pernă" }, emoji: "🛏️" },
        { id: "painting", label: { de: "Gemälde", en: "Painting", hu: "Festmény", ro: "Pictură" }, emoji: "🖼️" },
        { id: "book", label: { de: "Buch", en: "Book", hu: "Könyv", ro: "Carte" }, emoji: "📖" }
      ]
    },
    {
      id: "phys-renewable-energy",
      title: { de: "Erneuerbare Energien", en: "Renewable Energy", hu: "Megújuló energiák", ro: "Energii regenerabile" },
      prompt: { de: "Fange erneuerbare Energiequellen.", en: "Catch renewable sources.", hu: "Fogd ki a megújuló forrásokat.", ro: "Prinde sursele regenerabile." },
      goal: 6,
      speed: 5,
      theme: { sky: "#14532d", glow: "#86efac", accent: "#22c55e" },
      correctItems: [
        { id: "solar_panel", label: { de: "Solarpanel", en: "Solar panel", hu: "Napelem", ro: "Panou solar" }, emoji: "☀️" },
        { id: "wind_turbine", label: { de: "Windrad", en: "Wind turbine", hu: "Szélturbina", ro: "Turbină eoliană" }, emoji: "🌬️" },
        { id: "water_dam", label: { de: "Staudamm", en: "Water dam", hu: "Vízigát", ro: "Baraj de apă" }, emoji: "🌊" }
      ],
      wrongItems: [
        { id: "coal", label: { de: "Kohle", en: "Coal", hu: "Szén", ro: "Cărbune" }, emoji: "🪨" },
        { id: "oil", label: { de: "Öl", en: "Oil", hu: "Olaj", ro: "Petrol" }, emoji: "🛢️" },
        { id: "gas", label: { de: "Gas", en: "Gas", hu: "Gáz", ro: "Gaz" }, emoji: "🔥" }
      ]
    },
    {
      id: "phys-heavy-objects",
      title: { de: "Hohe Dichte", en: "High Density", hu: "Nagy sűrűség", ro: "Densitate mare" },
      prompt: { de: "Fange sehr dichte Gegenstände.", en: "Catch high density objects.", hu: "Fogd ki a nagy sűrűségű tárgyakat.", ro: "Prinde obiectele cu densitate mare." },
      goal: 6,
      speed: 5,
      theme: { sky: "#3f3f46", glow: "#d4d4d8", accent: "#a1a1aa" },
      correctItems: [
        { id: "gold", label: { de: "Gold", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🥇" },
        { id: "lead", label: { de: "Blei", en: "Lead", hu: "Ólom", ro: "Plumb" }, emoji: "🪨" },
        { id: "anvil", label: { de: "Amboss", en: "Anvil", hu: "Üllő", ro: "Nicovală" }, emoji: "⚒️" }
      ],
      wrongItems: [
        { id: "cotton", label: { de: "Baumwolle", en: "Cotton", hu: "Pamut", ro: "Bumbac" }, emoji: "☁️" },
        { id: "styrofoam", label: { de: "Styropor", en: "Styrofoam", hu: "Hungarocell", ro: "Polistiren" }, emoji: "📦" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵" }
      ]
    },
    {
      id: "phys-electrical-conductors",
      title: { de: "Elektrische Leiter", en: "Electrical Conductors", hu: "Elektromos vezetők", ro: "Conductori electrici" },
      prompt: { de: "Fange elektrische Leiter.", en: "Catch electrical conductors.", hu: "Fogd ki az elektromos vezetőket.", ro: "Prinde conductorii electrici." },
      goal: 6,
      speed: 5,
      theme: { sky: "#831843", glow: "#f9a8d4", accent: "#f43f5e" },
      correctItems: [
        { id: "copper", label: { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🔌" },
        { id: "steel_nail", label: { de: "Stahlnagel", en: "Steel nail", hu: "Acélszög", ro: "Cui de oțel" }, emoji: "📍" },
        { id: "saltwater", label: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" }, emoji: "🌊" }
      ],
      wrongItems: [
        { id: "rubber", label: { de: "Gummi", en: "Rubber", hu: "Gumi", ro: "Cauciuc" }, emoji: "🛞" },
        { id: "pure_water", label: { de: "Reines Wasser", en: "Pure water", hu: "Tiszta víz", ro: "Apă pură" }, emoji: "💧" },
        { id: "plastic", label: { de: "Plastik", en: "Plastic", hu: "Műanyag", ro: "Plastic" }, emoji: "🧴" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "phys-conductors",
      title: { de: "Leiter oder Isolatoren", en: "Conductors or Insulators", hu: "Vezetők oder szigetelők", ro: "Conductori sau Izolatori" },
      instruction: { de: "Leitet es Strom?", en: "Does it conduct electricity?", hu: "Vezeti az áramot?", ro: "Conduce electricitatea?" },
      theme: { bg: "#0f172a", orbit: "#facc15", accent: "#fbbf24" },
      buckets: [
        { id: "conductor", label: { de: "Leiter", en: "Conductor", hu: "Vezető", ro: "Conductor" }, color: "#fbbf24" },
        { id: "insulator", label: { de: "Isolator", en: "Insulator", hu: "Szigetelő", ro: "Izolator" }, color: "#64748b" },
      ],
      items: [
        { id: "copper", label: { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🧲", bucketId: "conductor" },
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩", bucketId: "conductor" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵", bucketId: "insulator" },
        { id: "rubber", label: { de: "Gummi", en: "Rubber", hu: "Gumi", ro: "Cauciuc" }, emoji: "🦆", bucketId: "insulator" },
      ],
    },
    {
      id: "phys-energy-forms",
      title: { de: "Energieformen", en: "Energy Forms", hu: "Energiaformák", ro: "Forme de energie" },
      instruction: { de: "Kinetisch oder Potenziell?", en: "Kinetic or Potential?", hu: "Kinetikus vagy Potenciális?", ro: "Cinetică sau Potențială?" },
      theme: { bg: "#1e1b4b", orbit: "#c084fc", accent: "#a855f7" },
      buckets: [
        { id: "kinetic", label: { de: "Kinetisch", en: "Kinetic", hu: "Kinetikus", ro: "Cinetică" }, color: "#a855f7" },
        { id: "potential", label: { de: "Potenziell", en: "Potential", hu: "Potenciális", ro: "Potențială" }, color: "#38bdf8" },
      ],
      items: [
        { id: "car", label: { de: "Fahrendes Auto", en: "Running car", hu: "Mozgó autó", ro: "Mașină în mișcare" }, emoji: "🚗", bucketId: "kinetic" },
        { id: "bird", label: { de: "Fliegender Vogel", en: "Flying bird", hu: "Repülő madár", ro: "Pasăre în zbor" }, emoji: "🦅", bucketId: "kinetic" },
        { id: "bow", label: { de: "Gespannter Bogen", en: "Stretched bow", hu: "Kifeszített íj", ro: "Arc întins" }, emoji: "🏹", bucketId: "potential" },
        { id: "book", label: { de: "Buch im Regal", en: "Book on shelf", hu: "Könyv a polcon", ro: "Carte pe raft" }, emoji: "📚", bucketId: "potential" },
      ],
    },
    {
      id: "phys-forces",
      title: { de: "Kräfte", en: "Forces", hu: "Erők", ro: "Forțe" },
      instruction: { de: "Kontaktkraft oder Fernkraft?", en: "Contact or Action-at-a-distance?", hu: "Érintkezési vagy Távolhatású?", ro: "De contact sau La distanță?" },
      theme: { bg: "#022c22", orbit: "#34d399", accent: "#10b981" },
      buckets: [
        { id: "contact", label: { de: "Kontaktkraft", en: "Contact", hu: "Érintkezési", ro: "Contact" }, color: "#10b981" },
        { id: "distance", label: { de: "Fernkraft", en: "Distance", hu: "Távolhatású", ro: "La distanță" }, color: "#f43f5e" },
      ],
      items: [
        { id: "push", label: { de: "Schieben", en: "Push", hu: "Tolás", ro: "Împingere" }, emoji: "🖐️", bucketId: "contact" },
        { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" }, emoji: "⛸️", bucketId: "contact" },
        { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" }, emoji: "🍎", bucketId: "distance" },
        { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" }, emoji: "🧲", bucketId: "distance" },
      ],
    },
    {
      id: "phys-states-of-matter",
      title: { de: "Aggregatzustände", en: "States of Matter", hu: "Halmazállapotok", ro: "Stări de agregare" },
      instruction: { de: "Fest, Flüssig oder Gasförmig?", en: "Solid, Liquid or Gas?", hu: "Szilárd, Folyékony vagy Gáz?", ro: "Solid, Lichid sau Gaz?" },
      theme: { bg: "#1e3a8a", orbit: "#60a5fa", accent: "#3b82f6" },
      buckets: [
        { id: "solid", label: { de: "Fest", en: "Solid", hu: "Szilárd", ro: "Solid" }, color: "#94a3b8" },
        { id: "liquid", label: { de: "Flüssig", en: "Liquid", hu: "Folyékony", ro: "Lichid" }, color: "#3b82f6" },
        { id: "gas", label: { de: "Gasförmig", en: "Gas", hu: "Gáz", ro: "Gaz" }, color: "#cbd5e1" },
      ],
      items: [
        { id: "ice", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "🧊", bucketId: "solid" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵", bucketId: "solid" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧", bucketId: "liquid" },
        { id: "steam", label: { de: "Wasserdampf", en: "Steam", hu: "Vízgőz", ro: "Abur" }, emoji: "💨", bucketId: "gas" },
      ],
    },
    {
      id: "phys-optics",
      title: { de: "Optik", en: "Optics", hu: "Optika", ro: "Optică" },
      instruction: { de: "Reflexion oder Brechung?", en: "Reflection or Refraction?", hu: "Visszaverődés vagy Törés?", ro: "Reflexie sau Refracție?" },
      theme: { bg: "#4c1d95", orbit: "#a78bfa", accent: "#8b5cf6" },
      buckets: [
        { id: "reflection", label: { de: "Reflexion", en: "Reflection", hu: "Visszaverődés", ro: "Reflexie" }, color: "#fbbf24" },
        { id: "refraction", label: { de: "Brechung", en: "Refraction", hu: "Törés", ro: "Refracție" }, color: "#2dd4bf" },
      ],
      items: [
        { id: "mirror", label: { de: "Spiegel", en: "Mirror", hu: "Tükör", ro: "Oglindă" }, emoji: "🪞", bucketId: "reflection" },
        { id: "lake", label: { de: "Ruhiger See", en: "Calm lake", hu: "Csendes tó", ro: "Lac liniștit" }, emoji: "🏞️", bucketId: "reflection" },
        { id: "lens", label: { de: "Lupe", en: "Magnifying glass", hu: "Nagyító", ro: "Lupă" }, emoji: "🔍", bucketId: "refraction" },
        { id: "prism", label: { de: "Prisma", en: "Prism", hu: "Prizma", ro: "Prismă" }, emoji: "🌈", bucketId: "refraction" },
      ],
    },
    {
      id: "phys-heat-transfer",
      title: { de: "Wärmeübertragung", en: "Heat Transfer", hu: "Hőterjedés", ro: "Transfer de căldură" },
      instruction: { de: "Leitung, Konvektion oder Strahlung?", en: "Conduction, Convection or Radiation?", hu: "Hővezetés, Hőáramlás vagy Hősugárzás?", ro: "Conducție, Convecție sau Radiație?" },
      theme: { bg: "#7f1d1d", orbit: "#fca5a5", accent: "#ef4444" },
      buckets: [
        { id: "conduction", label: { de: "Leitung", en: "Conduction", hu: "Hővezetés", ro: "Conducție" }, color: "#f97316" },
        { id: "convection", label: { de: "Konvektion", en: "Convection", hu: "Hőáramlás", ro: "Convecție" }, color: "#38bdf8" },
        { id: "radiation", label: { de: "Strahlung", en: "Radiation", hu: "Hősugárzás", ro: "Radiație" }, color: "#facc15" },
      ],
      items: [
        { id: "pan", label: { de: "Heiße Pfanne", en: "Hot pan", hu: "Forró serpenyő", ro: "Tigaie fierbinte" }, emoji: "🍳", bucketId: "conduction" },
        { id: "boil", label: { de: "Kochendes Wasser", en: "Boiling water", hu: "Forró víz", ro: "Apă clocotită" }, emoji: "🍲", bucketId: "convection" },
        { id: "sun", label: { de: "Sonnenlicht", en: "Sunlight", hu: "Napfény", ro: "Lumina soarelui" }, emoji: "☀️", bucketId: "radiation" },
        { id: "fire", label: { de: "Lagerfeuer", en: "Campfire", hu: "Tábortűz", ro: "Foc de tabără" }, emoji: "🔥", bucketId: "radiation" },
      ],
    },
    {
      id: "phys-circuits",
      title: { de: "Stromkreise", en: "Circuits", hu: "Áramkörök", ro: "Circuite" },
      instruction: { de: "Reihen- oder Parallelschaltung?", en: "Series or Parallel circuit?", hu: "Soros vagy Párhuzamos?", ro: "Serie sau Paralel?" },
      theme: { bg: "#0f172a", orbit: "#94a3b8", accent: "#cbd5e1" },
      buckets: [
        { id: "series", label: { de: "Reihenschaltung", en: "Series", hu: "Soros", ro: "Serie" }, color: "#ef4444" },
        { id: "parallel", label: { de: "Parallelschaltung", en: "Parallel", hu: "Párhuzamos", ro: "Paralel" }, color: "#10b981" },
      ],
      items: [
        { id: "tree", label: { de: "Lichterkette", en: "String lights", hu: "Fényfüzér", ro: "Instalație brad" }, emoji: "🎄", bucketId: "series" },
        { id: "flash", label: { de: "Taschenlampe", en: "Flashlight", hu: "Zseblámpa", ro: "Lanternă" }, emoji: "🔦", bucketId: "series" },
        { id: "house", label: { de: "Hausverkabelung", en: "House wiring", hu: "Ház vezetékei", ro: "Cablaj casă" }, emoji: "🏠", bucketId: "parallel" },
        { id: "outlets", label: { de: "Steckdosen", en: "Power outlets", hu: "Konnektorok", ro: "Prize" }, emoji: "🔌", bucketId: "parallel" },
      ],
    },
    {
      id: "phys-motion",
      title: { de: "Bewegung", en: "Motion", hu: "Mozgás", ro: "Mișcare" },
      instruction: { de: "Gleichförmig oder Beschleunigt?", en: "Uniform or Accelerated?", hu: "Egyenletes vagy Gyorsuló?", ro: "Uniformă sau Accelerată?" },
      theme: { bg: "#172554", orbit: "#60a5fa", accent: "#2563eb" },
      buckets: [
        { id: "uniform", label: { de: "Gleichförmig", en: "Uniform", hu: "Egyenletes", ro: "Uniformă" }, color: "#34d399" },
        { id: "accelerated", label: { de: "Beschleunigt", en: "Accelerated", hu: "Gyorsuló", ro: "Accelerată" }, color: "#f43f5e" },
      ],
      items: [
        { id: "cruise", label: { de: "Tempomat-Auto", en: "Cruise control car", hu: "Tempomatos autó", ro: "Mașină pe pilot automat" }, emoji: "🚗", bucketId: "uniform" },
        { id: "escalator", label: { de: "Rolltreppe", en: "Escalator", hu: "Mozgólépcső", ro: "Scară rulantă" }, emoji: "🪜", bucketId: "uniform" },
        { id: "apple", label: { de: "Fallender Apfel", en: "Falling apple", hu: "Leeső alma", ro: "Măr în cădere" }, emoji: "🍎", bucketId: "accelerated" },
        { id: "plane", label: { de: "Startendes Flugzeug", en: "Taking off plane", hu: "Felszálló repülő", ro: "Avion la decolare" }, emoji: "✈️", bucketId: "accelerated" },
      ],
    },
    {
      id: "phys-wave-types",
      title: { de: "Wellenarten", en: "Wave Types", hu: "Hullámtípusok", ro: "Tipuri de unde" },
      instruction: { de: "Longitudinal oder Transversal?", en: "Longitudinal or Transverse?", hu: "Longitudinális vagy Transzverzális?", ro: "Longitudinală sau Transversală?" },
      theme: { bg: "#3b0764", orbit: "#c084fc", accent: "#9333ea" },
      buckets: [
        { id: "longitudinal", label: { de: "Longitudinal", en: "Longitudinal", hu: "Longitudinális", ro: "Longitudinală" }, color: "#fcd34d" },
        { id: "transverse", label: { de: "Transversal", en: "Transverse", hu: "Transzverzális", ro: "Transversală" }, color: "#6ee7b7" },
      ],
      items: [
        { id: "sound", label: { de: "Schallwelle", en: "Sound wave", hu: "Hanghullám", ro: "Undă sonoră" }, emoji: "🗣️", bucketId: "longitudinal" },
        { id: "bat", label: { de: "Ultraschall", en: "Ultrasound", hu: "Ultrahang", ro: "Ultrasunet" }, emoji: "🦇", bucketId: "longitudinal" },
        { id: "light", label: { de: "Lichtwelle", en: "Light wave", hu: "Fényhullám", ro: "Undă luminoasă" }, emoji: "💡", bucketId: "transverse" },
        { id: "water", label: { de: "Wasserwelle", en: "Water wave", hu: "Vízhullám", ro: "Undă pe apă" }, emoji: "🌊", bucketId: "transverse" },
      ],
    },
    {
      id: "phys-simple-machines",
      title: { de: "Einfache Maschinen", en: "Simple Machines", hu: "Egyszerű gépek", ro: "Mașini simple" },
      instruction: { de: "Hebel, Schiefe Ebene oder Rolle?", en: "Lever, Inclined Plane or Pulley?", hu: "Emelő, Lejtő vagy Csigasor?", ro: "Pârghie, Plan înclinat sau Scripete?" },
      theme: { bg: "#1f2937", orbit: "#9ca3af", accent: "#6b7280" },
      buckets: [
        { id: "lever", label: { de: "Hebel", en: "Lever", hu: "Emelő", ro: "Pârghie" }, color: "#3b82f6" },
        { id: "inclined", label: { de: "Schiefe Ebene", en: "Inclined Plane", hu: "Lejtő", ro: "Plan înclinat" }, color: "#10b981" },
        { id: "pulley", label: { de: "Rolle", en: "Pulley", hu: "Csigasor", ro: "Scripete" }, color: "#f59e0b" },
      ],
      items: [
        { id: "seesaw", label: { de: "Wippe", en: "Seesaw", hu: "Mérleghinta", ro: "Balansoar" }, emoji: "⚖️", bucketId: "lever" },
        { id: "wheelbarrow", label: { de: "Schubkarre", en: "Wheelbarrow", hu: "Talicska", ro: "Roabă" }, emoji: "🛒", bucketId: "lever" },
        { id: "ramp", label: { de: "Rampe", en: "Ramp", hu: "Rámpa", ro: "Rampă" }, emoji: "🛹", bucketId: "inclined" },
        { id: "crane", label: { de: "Kranhaken", en: "Crane hook", hu: "Daruhurok", ro: "Cârlig macara" }, emoji: "🏗️", bucketId: "pulley" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "phys-sr-friction",
      title: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-friction",
          title: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" },
          prompt: { de: "Ein auf der Straße bremsendes Auto. Welche Kraft hält es an?", en: "Car braking on the road. What force stops it?", hu: "Az úton fékező autó. Milyen erő állítja meg?", ro: "O mașină care frânează pe drum. Ce forță o oprește?" },
          sceneType: "traffic",
          visual: { icon: "🚗", bg: "#1e293b", accent: "#ef4444" },
          choices: [
            { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" } },
            { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } },
            { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" } }
          ],
          correctChoiceId: "friction",
          successFeedback: { de: "Richtig! Reibung stoppt das Auto.", en: "Correct! Friction stops the car.", hu: "Helyes! A súrlódás megállítja az autót.", ro: "Corect! Frecarea oprește mașina." },
          failFeedback: { de: "Falsch, es ist die Reibung.", en: "Incorrect, it is friction.", hu: "Helytelen, ez a súrlódás.", ro: "Incorect, este frecarea." }
        }
      ]
    },
    {
      id: "phys-sr-gravity",
      title: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-gravity",
          title: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" },
          prompt: { de: "Ein Apfel fällt vom Baum. Was zieht ihn nach unten?", en: "An apple falls from a tree. What pulls it down?", hu: "Egy alma esik le a fáról. Mi húzza le?", ro: "Un măr cade din copac. Ce îl trage în jos?" },
          sceneType: "nature",
          visual: { icon: "🍎", bg: "#064e3b", accent: "#34d399" },
          choices: [
            { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } },
            { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" } },
            { id: "buoyancy", label: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Flotabilitate" } }
          ],
          correctChoiceId: "gravity",
          successFeedback: { de: "Richtig! Die Schwerkraft zieht alles an.", en: "Correct! Gravity pulls things down.", hu: "Helyes! A gravitáció húzza lefelé.", ro: "Corect! Gravitația trage lucrurile în jos." },
          failFeedback: { de: "Falsch, es ist die Schwerkraft.", en: "Incorrect, it is gravity.", hu: "Helytelen, ez a gravitáció.", ro: "Incorect, este gravitația." }
        }
      ]
    },
    {
      id: "phys-sr-magnetism",
      title: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-magnetism",
          title: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" },
          prompt: { de: "Eine Kompassnadel zeigt nach Norden. Welche Kraft wirkt?", en: "A compass needle points North. What force?", hu: "Az iránytű tűje északra mutat. Milyen erő?", ro: "Un ac de busolă indică nordul. Ce forță?" },
          sceneType: "science",
          visual: { icon: "🧭", bg: "#312e81", accent: "#818cf8" },
          choices: [
            { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" } },
            { id: "tension", label: { de: "Spannung", en: "Tension", hu: "Feszültség", ro: "Tensiune" } },
            { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" } }
          ],
          correctChoiceId: "magnetism",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist Magnetismus.", en: "Incorrect, it is magnetism.", hu: "Helytelen, ez a mágnesesség.", ro: "Incorect, este magnetismul." }
        }
      ]
    },
    {
      id: "phys-sr-buoyancy",
      title: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Flotabilitate" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-buoyancy",
          title: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Flotabilitate" },
          prompt: { de: "Ein Boot schwimmt auf dem Wasser. Was drückt es nach oben?", en: "A boat floats on water. What pushes it up?", hu: "Egy hajó úszik a vízen. Mi nyomja fel?", ro: "O barcă plutește pe apă. Ce o împinge în sus?" },
          sceneType: "nature",
          visual: { icon: "⛵", bg: "#0c4a6e", accent: "#38bdf8" },
          choices: [
            { id: "buoyancy", label: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Flotabilitate" } },
            { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } },
            { id: "air_resistance", label: { de: "Luftwiderstand", en: "Air resistance", hu: "Légellenállás", ro: "Rezistența aerului" } }
          ],
          correctChoiceId: "buoyancy",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist der Auftrieb.", en: "Incorrect, it is buoyancy.", hu: "Helytelen, ez a felhajtóerő.", ro: "Incorect, este flotabilitatea." }
        }
      ]
    },
    {
      id: "phys-sr-sound",
      title: { de: "Schall", en: "Sound", hu: "Hang", ro: "Sunet" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-sound",
          title: { de: "Echo", en: "Echo", hu: "Visszhang", ro: "Ecou" },
          prompt: { de: "Du hörst ein lautes Echo in den Bergen. Was ist das?", en: "You hear a loud echo in the mountains. What is this?", hu: "Hangos visszhangot hallasz a hegyekben. Mi ez?", ro: "Auzi un ecou puternic în munți. Ce este asta?" },
          sceneType: "nature",
          visual: { icon: "🗣️", bg: "#1f2937", accent: "#9ca3af" },
          choices: [
            { id: "reflection", label: { de: "Schallreflexion", en: "Sound reflection", hu: "Hangvisszaverődés", ro: "Reflexia sunetului" } },
            { id: "refraction", label: { de: "Brechung", en: "Refraction", hu: "Fénytörés", ro: "Refracție" } },
            { id: "conduction", label: { de: "Wärmeleitung", en: "Heat conduction", hu: "Hővezetés", ro: "Conducție termică" } }
          ],
          correctChoiceId: "reflection",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist Schallreflexion.", en: "Incorrect, it is sound reflection.", hu: "Helytelen, ez hangvisszaverődés.", ro: "Incorect, este reflexia sunetului." }
        }
      ]
    },
    {
      id: "phys-sr-light",
      title: { de: "Licht", en: "Light", hu: "Fény", ro: "Lumină" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-light",
          title: { de: "Regenbogen", en: "Rainbow", hu: "Szivárvány", ro: "Curcubeu" },
          prompt: { de: "Ein Regenbogen erscheint nach dem Regen. Was passiert?", en: "A rainbow appears after the rain. What happens?", hu: "Szivárvány jelenik meg eső után. Mi történik?", ro: "Un curcubeu apare după ploaie. Ce se întâmplă?" },
          sceneType: "nature",
          visual: { icon: "🌈", bg: "#4c1d95", accent: "#d8b4fe" },
          choices: [
            { id: "dispersion", label: { de: "Lichtstreuung", en: "Light dispersion", hu: "Fényfelbontás", ro: "Dispersia luminii" } },
            { id: "reflection", label: { de: "Schallreflexion", en: "Sound reflection", hu: "Hangvisszaverődés", ro: "Reflexia sunetului" } },
            { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" } }
          ],
          correctChoiceId: "dispersion",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist Lichtstreuung.", en: "Incorrect, it is light dispersion.", hu: "Helytelen, ez fényfelbontás.", ro: "Incorect, este dispersia luminii." }
        }
      ]
    },
    {
      id: "phys-sr-electricity",
      title: { de: "Elektrizität", en: "Electricity", hu: "Elektromosság", ro: "Electricitate" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-electricity",
          title: { de: "Blitz", en: "Lightning", hu: "Villám", ro: "Fulger" },
          prompt: { de: "Ein Blitzschlag während eines Sturms.", en: "A lightning strike during a storm.", hu: "Villámcsapás vihar közben.", ro: "Un fulger în timpul unei furtuni." },
          sceneType: "safety",
          visual: { icon: "⚡", bg: "#713f12", accent: "#fef08a" },
          choices: [
            { id: "static_elec", label: { de: "Statische Elektrizität", en: "Static electricity", hu: "Sztatikus elektromosság", ro: "Electricitate statică" } },
            { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" } },
            { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } }
          ],
          correctChoiceId: "static_elec",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist statische Elektrizität.", en: "Incorrect, it is static electricity.", hu: "Helytelen, ez sztatikus elektromosság.", ro: "Incorect, este electricitate statică." }
        }
      ]
    },
    {
      id: "phys-sr-heat",
      title: { de: "Wärme", en: "Heat", hu: "Hő", ro: "Căldură" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-heat",
          title: { de: "Schmelzen", en: "Melting", hu: "Olvadás", ro: "Topire" },
          prompt: { de: "Ein Schneemann schmilzt in der Sonne.", en: "A snowman melts in the sun.", hu: "Egy hóember elolvad a napon.", ro: "Un om de zăpadă se topește la soare." },
          sceneType: "nature",
          visual: { icon: "⛄", bg: "#0284c7", accent: "#bae6fd" },
          choices: [
            { id: "heat_transfer", label: { de: "Wärmeübertragung", en: "Heat transfer", hu: "Hőátadás", ro: "Transfer de căldură" } },
            { id: "sound_waves", label: { de: "Schallwellen", en: "Sound waves", hu: "Hanghullámok", ro: "Unde sonore" } },
            { id: "magnetism", label: { de: "Magnetismus", en: "Magnetism", hu: "Mágnesesség", ro: "Magnetism" } }
          ],
          correctChoiceId: "heat_transfer",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist Wärmeübertragung.", en: "Incorrect, it is heat transfer.", hu: "Helytelen, ez hőátadás.", ro: "Incorect, este transfer de căldură." }
        }
      ]
    },
    {
      id: "phys-sr-inertia",
      title: { de: "Trägheit", en: "Inertia", hu: "Tehetetlenség", ro: "Inerție" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-inertia",
          title: { de: "Trägheit", en: "Inertia", hu: "Tehetetlenség", ro: "Inerție" },
          prompt: { de: "Du wirst nach hinten gedrückt, wenn der Bus beschleunigt.", en: "You are pushed back when the bus accelerates.", hu: "Hátra dőlsz, amikor a busz felgyorsul.", ro: "Ești împins înapoi când autobuzul accelerează." },
          sceneType: "traffic",
          visual: { icon: "🚌", bg: "#b45309", accent: "#fde68a" },
          choices: [
            { id: "inertia", label: { de: "Trägheit", en: "Inertia", hu: "Tehetetlenség", ro: "Inerție" } },
            { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" } },
            { id: "buoyancy", label: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Flotabilitate" } }
          ],
          correctChoiceId: "inertia",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist die Trägheit.", en: "Incorrect, it is inertia.", hu: "Helytelen, ez tehetetlenség.", ro: "Incorect, este inerția." }
        }
      ]
    },
    {
      id: "phys-sr-aerodynamics",
      title: { de: "Aerodynamik", en: "Aerodynamics", hu: "Aerodinamika", ro: "Aerodinamică" },
      instruction: { de: "Wähle die richtige Antwort.", en: "Choose the correct answer.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
      scenes: [
        {
          id: "scene-aero",
          title: { de: "Flugzeug", en: "Airplane", hu: "Repülőgép", ro: "Avion" },
          prompt: { de: "Ein Flugzeug fliegt am Himmel.", en: "An airplane flies in the sky.", hu: "Egy repülőgép repül az égen.", ro: "Un avion zboară pe cer." },
          sceneType: "traffic",
          visual: { icon: "✈️", bg: "#1d4ed8", accent: "#93c5fd" },
          choices: [
            { id: "lift", label: { de: "Auftrieb (Luft)", en: "Lift", hu: "Felhajtóerő", ro: "Portanță" } },
            { id: "gravity", label: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" } },
            { id: "friction", label: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" } }
          ],
          correctChoiceId: "lift",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, es ist der dynamische Auftrieb.", en: "Incorrect, it is lift.", hu: "Helytelen, ez a felhajtóerő.", ro: "Incorect, este portanța." }
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "phys-cb-circuit-1",
      title: { de: "Einfacher Stromkreis", en: "Simple Circuit", hu: "Egyszerű áramkör", ro: "Circuit simplu" },
      instruction: { de: "Baue einen einfachen Stromkreis.", en: "Build a simple circuit.", hu: "Építs egy egyszerű áramkört.", ro: "Construiește un circuit simplu." },
      hint: { de: "Verbinde Batterie, Kabel und Lampe.", en: "Connect battery, wire, and bulb.", hu: "Köss össze elemet, vezetéket és izzót.", ro: "Conectează bateria, cablul și becul." },
      theme: { bg: "#020617", accent: "#fbbf24", card: "#1e293b" },
      parts: [
        { id: "battery", label: { de: "Batterie", en: "Battery", hu: "Elem", ro: "Baterie" }, emoji: "🔋" },
        { id: "wire", label: { de: "Kabel", en: "Wire", hu: "Vezeték", ro: "Cablu" }, emoji: "🔌" },
        { id: "bulb", label: { de: "Glühbirne", en: "Bulb", hu: "Izzó", ro: "Bec" }, emoji: "💡" }
      ],
      slots: [
        { id: "power", label: { de: "Stromquelle", en: "Power Source", hu: "Áramforrás", ro: "Sursă de curent" } },
        { id: "path", label: { de: "Leiter", en: "Path", hu: "Vezető", ro: "Conductor" } },
        { id: "load", label: { de: "Verbraucher", en: "Load", hu: "Fogyasztó", ro: "Consumator" } }
      ],
      solution: ["battery:power", "wire:path", "bulb:load"]
    },
    {
      id: "phys-cb-circuit-2",
      title: { de: "Stromkreis mit Schalter", en: "Circuit with Switch", hu: "Áramkör kapcsolóval", ro: "Circuit cu întrerupător" },
      instruction: { de: "Füge einen Schalter hinzu.", en: "Add a switch to the circuit.", hu: "Adj hozzá egy kapcsolót.", ro: "Adaugă un întrerupător." },
      hint: { de: "Batterie, Schalter, Lampe.", en: "Battery, switch, bulb.", hu: "Elem, kapcsoló, izzó.", ro: "Baterie, întrerupător, bec." },
      theme: { bg: "#020617", accent: "#fbbf24", card: "#1e293b" },
      parts: [
        { id: "battery2", label: { de: "Batterie", en: "Battery", hu: "Elem", ro: "Baterie" }, emoji: "🔋" },
        { id: "switch", label: { de: "Schalter", en: "Switch", hu: "Kapcsoló", ro: "Întrerupător" }, emoji: "🎚️" },
        { id: "bulb2", label: { de: "Glühbirne", en: "Bulb", hu: "Izzó", ro: "Bec" }, emoji: "💡" }
      ],
      slots: [
        { id: "power_slot", label: { de: "Stromquelle", en: "Power Source", hu: "Áramforrás", ro: "Sursă de curent" } },
        { id: "switch_slot", label: { de: "Steuerung", en: "Control", hu: "Vezérlés", ro: "Control" } },
        { id: "load_slot", label: { de: "Verbraucher", en: "Load", hu: "Fogyasztó", ro: "Consumator" } }
      ],
      solution: ["battery2:power_slot", "switch:switch_slot", "bulb2:load_slot"]
    },
    {
      id: "phys-cb-magnet",
      title: { de: "Stabmagnet", en: "Bar Magnet", hu: "Rúdmágnes", ro: "Magnet bară" },
      instruction: { de: "Beschrifte den Stabmagneten.", en: "Label the bar magnet.", hu: "Címkézd fel a rúdmágnest.", ro: "Etichetează magnetul bară." },
      hint: { de: "Nord- und Südpol.", en: "North and South pole.", hu: "Északi és déli pólus.", ro: "Polul Nord și Sud." },
      theme: { bg: "#1e1b4b", accent: "#ef4444", card: "#312e81" },
      parts: [
        { id: "north", label: { de: "Nordpol", en: "North Pole", hu: "Északi pólus", ro: "Polul Nord" }, emoji: "🔴" },
        { id: "south", label: { de: "Südpol", en: "South Pole", hu: "Déli pólus", ro: "Polul Sud" }, emoji: "🔵" }
      ],
      slots: [
        { id: "n_slot", label: { de: "N-Pol", en: "N-Pole", hu: "É-pólus", ro: "Polul N" } },
        { id: "s_slot", label: { de: "S-Pol", en: "S-Pole", hu: "D-pólus", ro: "Polul S" } }
      ],
      solution: ["north:n_slot", "south:s_slot"]
    },
    {
      id: "phys-cb-lever",
      title: { de: "Hebel", en: "Lever", hu: "Emelő", ro: "Pârghie" },
      instruction: { de: "Teile eines Hebels.", en: "Parts of a lever.", hu: "Az emelő részei.", ro: "Părțile unei pârghii." },
      hint: { de: "Drehpunkt, Kraft, Last.", en: "Fulcrum, Effort, Load.", hu: "Alátámasztás, Erő, Teher.", ro: "Punct de sprijin, Forță, Sarcină." },
      theme: { bg: "#064e3b", accent: "#10b981", card: "#0f766e" },
      parts: [
        { id: "fulcrum", label: { de: "Drehpunkt", en: "Fulcrum", hu: "Alátámasztás", ro: "Punct de sprijin" }, emoji: "🔺" },
        { id: "effort", label: { de: "Kraft", en: "Effort", hu: "Erő", ro: "Forță" }, emoji: "💪" },
        { id: "load", label: { de: "Last", en: "Load", hu: "Teher", ro: "Sarcină" }, emoji: "🪨" }
      ],
      slots: [
        { id: "f_slot", label: { de: "Zentrum", en: "Center", hu: "Középpont", ro: "Centru" } },
        { id: "e_slot", label: { de: "Schieben", en: "Push", hu: "Nyomás", ro: "Împingere" } },
        { id: "l_slot", label: { de: "Gewicht", en: "Weight", hu: "Súly", ro: "Greutate" } }
      ],
      solution: ["fulcrum:f_slot", "effort:e_slot", "load:l_slot"]
    },
    {
      id: "phys-cb-pulley",
      title: { de: "Flaschenzug", en: "Pulley System", hu: "Csigasor", ro: "Sistem de scripeți" },
      instruction: { de: "Teile einer Rolle.", en: "Parts of a pulley.", hu: "A csiga részei.", ro: "Părțile unui scripete." },
      hint: { de: "Rad, Seil, Last.", en: "Wheel, rope, load.", hu: "Kerék, kötél, teher.", ro: "Roată, frânghie, sarcină." },
      theme: { bg: "#451a03", accent: "#f59e0b", card: "#78350f" },
      parts: [
        { id: "wheel", label: { de: "Rad", en: "Wheel", hu: "Kerék", ro: "Roată" }, emoji: "⚙️" },
        { id: "rope", label: { de: "Seil", en: "Rope", hu: "Kötél", ro: "Frânghie" }, emoji: "🪢" },
        { id: "load_pulley", label: { de: "Last", en: "Load", hu: "Teher", ro: "Sarcină" }, emoji: "📦" }
      ],
      slots: [
        { id: "w_slot", label: { de: "Dreht sich", en: "Turns", hu: "Forog", ro: "Se rotește" } },
        { id: "r_slot", label: { de: "Zieht", en: "Pulls", hu: "Húz", ro: "Trage" } },
        { id: "lp_slot", label: { de: "Gewicht", en: "Weight", hu: "Súly", ro: "Greutate" } }
      ],
      solution: ["wheel:w_slot", "rope:r_slot", "load_pulley:lp_slot"]
    },
    {
      id: "phys-cb-water-cycle",
      title: { de: "Aggregatzustände", en: "States of Water", hu: "A víz halmazállapotai", ro: "Stările apei" },
      instruction: { de: "Ordne die Zustände zu.", en: "Match the states.", hu: "Párosítsd a halmazállapotokat.", ro: "Asociază stările." },
      hint: { de: "Eis, Wasser, Dampf.", en: "Ice, Water, Steam.", hu: "Jég, Víz, Gőz.", ro: "Gheață, Apă, Abur." },
      theme: { bg: "#0c4a6e", accent: "#38bdf8", card: "#0284c7" },
      parts: [
        { id: "ice", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "🧊" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "steam", label: { de: "Dampf", en: "Steam", hu: "Gőz", ro: "Abur" }, emoji: "💨" }
      ],
      slots: [
        { id: "solid", label: { de: "Fest", en: "Solid", hu: "Szilárd", ro: "Solid" } },
        { id: "liquid", label: { de: "Flüssig", en: "Liquid", hu: "Folyékony", ro: "Lichid" } },
        { id: "gas", label: { de: "Gasförmig", en: "Gas", hu: "Gáz", ro: "Gaz" } }
      ],
      solution: ["ice:solid", "water:liquid", "steam:gas"]
    },
    {
      id: "phys-cb-pendulum",
      title: { de: "Pendel", en: "Pendulum", hu: "Inga", ro: "Pendul" },
      instruction: { de: "Positionen des Pendels.", en: "Pendulum positions.", hu: "Az inga helyzetei.", ro: "Pozițiile pendulului." },
      hint: { de: "Höchster und tiefster Punkt.", en: "Highest and lowest point.", hu: "Legmagasabb és legalacsonyabb pont.", ro: "Cel mai înalt și cel mai jos punct." },
      theme: { bg: "#312e81", accent: "#a78bfa", card: "#4c1d95" },
      parts: [
        { id: "high", label: { de: "Höchster Punkt", en: "Highest Point", hu: "Legmagasabb pont", ro: "Punctul maxim" }, emoji: "⬆️" },
        { id: "low", label: { de: "Tiefster Punkt", en: "Lowest Point", hu: "Legalacsonyabb pont", ro: "Punctul minim" }, emoji: "⬇️" }
      ],
      slots: [
        { id: "pot", label: { de: "Max. Potenziell", en: "Max Potential", hu: "Max Potenciális", ro: "Max Potențială" } },
        { id: "kin", label: { de: "Max. Kinetisch", en: "Max Kinetic", hu: "Max Kinetikus", ro: "Max Cinetică" } }
      ],
      solution: ["high:pot", "low:kin"]
    },
    {
      id: "phys-cb-lens",
      title: { de: "Sammellinse", en: "Convex Lens", hu: "Domború lencse", ro: "Lentilă convexă" },
      instruction: { de: "Teile einer Linse.", en: "Parts of a lens.", hu: "A lencse részei.", ro: "Părțile unei lentile." },
      hint: { de: "Optisches Zentrum, Brennpunkt.", en: "Optical Center, Focal Point.", hu: "Optikai középpont, Fókuszpont.", ro: "Centrul optic, Focar." },
      theme: { bg: "#0f172a", accent: "#2dd4bf", card: "#1e293b" },
      parts: [
        { id: "center", label: { de: "Optisches Zentrum", en: "Optical Center", hu: "Optikai középpont", ro: "Centru optic" }, emoji: "⏺️" },
        { id: "focus", label: { de: "Brennpunkt", en: "Focal Point", hu: "Fókuszpont", ro: "Focar" }, emoji: "🔥" }
      ],
      slots: [
        { id: "c_slot", label: { de: "Mitte", en: "Middle", hu: "Közép", ro: "Mijloc" } },
        { id: "f_slot", label: { de: "Fokus", en: "Focus", hu: "Fókusz", ro: "Focar" } }
      ],
      solution: ["center:c_slot", "focus:f_slot"]
    },
    {
      id: "phys-cb-motor",
      title: { de: "Einfacher Motor", en: "Simple Motor", hu: "Egyszerű motor", ro: "Motor simplu" },
      instruction: { de: "Baue den Motor.", en: "Build the motor.", hu: "Építsd meg a motort.", ro: "Construiește motorul." },
      hint: { de: "Magnet, Spule, Achse.", en: "Magnet, Coil, Axle.", hu: "Mágnes, Tekercs, Tengely.", ro: "Magnet, Bobină, Ax." },
      theme: { bg: "#7f1d1d", accent: "#fca5a5", card: "#991b1b" },
      parts: [
        { id: "magnet", label: { de: "Magnet", en: "Magnet", hu: "Mágnes", ro: "Magnet" }, emoji: "🧲" },
        { id: "coil", label: { de: "Spule", en: "Coil", hu: "Tekercs", ro: "Bobină" }, emoji: "🧵" },
        { id: "axle", label: { de: "Achse", en: "Axle", hu: "Tengely", ro: "Ax" }, emoji: "⚙️" }
      ],
      slots: [
        { id: "mag_slot", label: { de: "Magnetfeld", en: "Magnetic Field", hu: "Mágneses mező", ro: "Câmp magnetic" } },
        { id: "cur_slot", label: { de: "Strom", en: "Current", hu: "Áram", ro: "Curent" } },
        { id: "rot_slot", label: { de: "Drehung", en: "Rotation", hu: "Forgás", ro: "Rotație" } }
      ],
      solution: ["magnet:mag_slot", "coil:cur_slot", "axle:rot_slot"]
    },
    {
      id: "phys-cb-atom",
      title: { de: "Atommodell", en: "Atom Model", hu: "Atommodell", ro: "Modelul atomului" },
      instruction: { de: "Beschrifte das Atom.", en: "Label the atom.", hu: "Címkézd fel az atomot.", ro: "Etichetează atomul." },
      hint: { de: "Kern, Elektron.", en: "Nucleus, Electron.", hu: "Atommag, Elektron.", ro: "Nucleu, Electron." },
      theme: { bg: "#172554", accent: "#60a5fa", card: "#1e3a8a" },
      parts: [
        { id: "nucleus", label: { de: "Atomkern", en: "Nucleus", hu: "Atommag", ro: "Nucleu" }, emoji: "⚛️" },
        { id: "electron", label: { de: "Elektron", en: "Electron", hu: "Elektron", ro: "Electron" }, emoji: "⚡" }
      ],
      slots: [
        { id: "cen_slot", label: { de: "Zentrum", en: "Center", hu: "Középpont", ro: "Centru" } },
        { id: "orb_slot", label: { de: "Umlaufbahn", en: "Orbit", hu: "Keringési pálya", ro: "Orbită" } }
      ],
      solution: ["nucleus:cen_slot", "electron:orb_slot"]
    }
  ],
  memoryRadar: [
    {
      id: "phys-mr-length",
      title: { de: "Länge", en: "Length", hu: "Hosszúság", ro: "Lungime" },
      instruction: { de: "Erinnere dich an die Längeneinheiten!", en: "Remember the units of length!", hu: "Jegyezd meg a hosszúság mértékegységeit!", ro: "Amintește-ți unitățile de lungime!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#0f172a", accent: "#10b981", radar: "#047857" },
      targetItems: [
        { id: "meter", label: { de: "Meter (m)", en: "Meter (m)", hu: "Méter (m)", ro: "Metru (m)" } },
        { id: "kilometer", label: { de: "Kilometer (km)", en: "Kilometer (km)", hu: "Kilométer (km)", ro: "Kilometru (km)" } },
        { id: "centimeter", label: { de: "Zentimeter (cm)", en: "Centimeter (cm)", hu: "Centiméter (cm)", ro: "Centimetru (cm)" } }
      ],
      decoyItems: [
        { id: "kilogram", label: { de: "Kilogramm (kg)", en: "Kilogram (kg)", hu: "Kilogramm (kg)", ro: "Kilogram (kg)" } },
        { id: "second", label: { de: "Sekunde (s)", en: "Second (s)", hu: "Másodperc (s)", ro: "Secundă (s)" } }
      ]
    },
    {
      id: "phys-mr-mass",
      title: { de: "Masse", en: "Mass", hu: "Tömeg", ro: "Masă" },
      instruction: { de: "Erinnere dich an die Masseneinheiten!", en: "Remember the units of mass!", hu: "Jegyezd meg a tömeg mértékegységeit!", ro: "Amintește-ți unitățile de masă!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#1e1b4b", accent: "#a855f7", radar: "#7e22ce" },
      targetItems: [
        { id: "kg", label: { de: "Kilogramm (kg)", en: "Kilogram (kg)", hu: "Kilogramm (kg)", ro: "Kilogram (kg)" } },
        { id: "g", label: { de: "Gramm (g)", en: "Gram (g)", hu: "Gramm (g)", ro: "Gram (g)" } },
        { id: "t", label: { de: "Tonne (t)", en: "Tonne (t)", hu: "Tonna (t)", ro: "Tonă (t)" } }
      ],
      decoyItems: [
        { id: "m", label: { de: "Meter (m)", en: "Meter (m)", hu: "Méter (m)", ro: "Metru (m)" } },
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } }
      ]
    },
    {
      id: "phys-mr-time",
      title: { de: "Zeit", en: "Time", hu: "Idő", ro: "Timp" },
      instruction: { de: "Erinnere dich an die Zeiteinheiten!", en: "Remember the units of time!", hu: "Jegyezd meg az idő mértékegységeit!", ro: "Amintește-ți unitățile de timp!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#022c22", accent: "#34d399", radar: "#059669" },
      targetItems: [
        { id: "s", label: { de: "Sekunde (s)", en: "Second (s)", hu: "Másodperc (s)", ro: "Secundă (s)" } },
        { id: "min", label: { de: "Minute (min)", en: "Minute (min)", hu: "Perc (min)", ro: "Minut (min)" } },
        { id: "h", label: { de: "Stunde (h)", en: "Hour (h)", hu: "Óra (h)", ro: "Oră (h)" } }
      ],
      decoyItems: [
        { id: "n", label: { de: "Newton (N)", en: "Newton (N)", hu: "Newton (N)", ro: "Newton (N)" } },
        { id: "w", label: { de: "Watt (W)", en: "Watt (W)", hu: "Watt (W)", ro: "Watt (W)" } }
      ]
    },
    {
      id: "phys-mr-force",
      title: { de: "Kraft", en: "Force", hu: "Erő", ro: "Forță" },
      instruction: { de: "Erinnere dich an die Krafteinheiten!", en: "Remember the units of force!", hu: "Jegyezd meg az erő mértékegységeit!", ro: "Amintește-ți unitățile de forță!" },
      flashDurationMs: 3000,
      selectionLimit: 2,
      theme: { bg: "#4c1d95", accent: "#fbbf24", radar: "#b45309" },
      targetItems: [
        { id: "n", label: { de: "Newton (N)", en: "Newton (N)", hu: "Newton (N)", ro: "Newton (N)" } },
        { id: "kn", label: { de: "Kilonewton (kN)", en: "Kilonewton (kN)", hu: "Kilonewton (kN)", ro: "Kilonewton (kN)" } }
      ],
      decoyItems: [
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } },
        { id: "pa", label: { de: "Pascal (Pa)", en: "Pascal (Pa)", hu: "Pascal (Pa)", ro: "Pascal (Pa)" } },
        { id: "w", label: { de: "Watt (W)", en: "Watt (W)", hu: "Watt (W)", ro: "Watt (W)" } }
      ]
    },
    {
      id: "phys-mr-energy",
      title: { de: "Energie", en: "Energy", hu: "Energia", ro: "Energie" },
      instruction: { de: "Erinnere dich an die Energieeinheiten!", en: "Remember the units of energy!", hu: "Jegyezd meg az energia mértékegységeit!", ro: "Amintește-ți unitățile de energie!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#7f1d1d", accent: "#fca5a5", radar: "#ef4444" },
      targetItems: [
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } },
        { id: "kwh", label: { de: "Kilowattstunde (kWh)", en: "Kilowatt-hour (kWh)", hu: "Kilowattóra (kWh)", ro: "Kilowatt-oră (kWh)" } },
        { id: "cal", label: { de: "Kalorie (cal)", en: "Calorie (cal)", hu: "Kalória (cal)", ro: "Calorie (cal)" } }
      ],
      decoyItems: [
        { id: "n", label: { de: "Newton (N)", en: "Newton (N)", hu: "Newton (N)", ro: "Newton (N)" } },
        { id: "a", label: { de: "Ampere (A)", en: "Ampere (A)", hu: "Amper (A)", ro: "Amper (A)" } }
      ]
    },
    {
      id: "phys-mr-speed",
      title: { de: "Geschwindigkeit", en: "Speed", hu: "Sebesség", ro: "Viteză" },
      instruction: { de: "Erinnere dich an die Geschwindigkeitseinheiten!", en: "Remember the units of speed!", hu: "Jegyezd meg a sebesség mértékegységeit!", ro: "Amintește-ți unitățile de viteză!" },
      flashDurationMs: 3000,
      selectionLimit: 2,
      theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#0284c7" },
      targetItems: [
        { id: "ms", label: { de: "m/s", en: "m/s", hu: "m/s", ro: "m/s" } },
        { id: "kmh", label: { de: "km/h", en: "km/h", hu: "km/h", ro: "km/h" } }
      ],
      decoyItems: [
        { id: "kgm3", label: { de: "kg/m³", en: "kg/m³", hu: "kg/m³", ro: "kg/m³" } },
        { id: "w", label: { de: "Watt (W)", en: "Watt (W)", hu: "Watt (W)", ro: "Watt (W)" } },
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } }
      ]
    },
    {
      id: "phys-mr-power",
      title: { de: "Leistung", en: "Power", hu: "Teljesítmény", ro: "Putere" },
      instruction: { de: "Erinnere dich an die Leistungseinheiten!", en: "Remember the units of power!", hu: "Jegyezd meg a teljesítmény mértékegységeit!", ro: "Amintește-ți unitățile de putere!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#3f3f46", accent: "#fde047", radar: "#eab308" },
      targetItems: [
        { id: "w", label: { de: "Watt (W)", en: "Watt (W)", hu: "Watt (W)", ro: "Watt (W)" } },
        { id: "kw", label: { de: "Kilowatt (kW)", en: "Kilowatt (kW)", hu: "Kilowatt (kW)", ro: "Kilowatt (kW)" } },
        { id: "hp", label: { de: "PS (hp)", en: "Horsepower (hp)", hu: "Lóerő (LE)", ro: "Cai putere (CP)" } }
      ],
      decoyItems: [
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } },
        { id: "v", label: { de: "Volt (V)", en: "Volt (V)", hu: "Volt (V)", ro: "Volt (V)" } }
      ]
    },
    {
      id: "phys-mr-voltage",
      title: { de: "Elektrik", en: "Electrical", hu: "Elektromosság", ro: "Electrice" },
      instruction: { de: "Erinnere dich an die elektrischen Einheiten!", en: "Remember the electrical units!", hu: "Jegyezd meg az elektromos mértékegységeket!", ro: "Amintește-ți unitățile electrice!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#831843", accent: "#f43f5e", radar: "#be123c" },
      targetItems: [
        { id: "v", label: { de: "Volt (V)", en: "Volt (V)", hu: "Volt (V)", ro: "Volt (V)" } },
        { id: "a", label: { de: "Ampere (A)", en: "Ampere (A)", hu: "Amper (A)", ro: "Amper (A)" } },
        { id: "ohm", label: { de: "Ohm (Ω)", en: "Ohm (Ω)", hu: "Ohm (Ω)", ro: "Ohm (Ω)" } }
      ],
      decoyItems: [
        { id: "m", label: { de: "Meter (m)", en: "Meter (m)", hu: "Méter (m)", ro: "Metru (m)" } },
        { id: "kg", label: { de: "Kilogramm (kg)", en: "Kilogram (kg)", hu: "Kilogramm (kg)", ro: "Kilogram (kg)" } }
      ]
    },
    {
      id: "phys-mr-temp",
      title: { de: "Temperatur", en: "Temperature", hu: "Hőmérséklet", ro: "Temperatură" },
      instruction: { de: "Erinnere dich an die Temperatureinheiten!", en: "Remember the units of temperature!", hu: "Jegyezd meg a hőmérséklet mértékegységeit!", ro: "Amintește-ți unitățile de temperatură!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#1e3a8a", accent: "#f87171", radar: "#dc2626" },
      targetItems: [
        { id: "c", label: { de: "Celsius (°C)", en: "Celsius (°C)", hu: "Celsius (°C)", ro: "Celsius (°C)" } },
        { id: "k", label: { de: "Kelvin (K)", en: "Kelvin (K)", hu: "Kelvin (K)", ro: "Kelvin (K)" } },
        { id: "f", label: { de: "Fahrenheit (°F)", en: "Fahrenheit (°F)", hu: "Fahrenheit (°F)", ro: "Fahrenheit (°F)" } }
      ],
      decoyItems: [
        { id: "pa", label: { de: "Pascal (Pa)", en: "Pascal (Pa)", hu: "Pascal (Pa)", ro: "Pascal (Pa)" } },
        { id: "j", label: { de: "Joule (J)", en: "Joule (J)", hu: "Joule (J)", ro: "Joule (J)" } }
      ]
    },
    {
      id: "phys-mr-pressure",
      title: { de: "Druck", en: "Pressure", hu: "Nyomás", ro: "Presiune" },
      instruction: { de: "Erinnere dich an die Druckeinheiten!", en: "Remember the units of pressure!", hu: "Jegyezd meg a nyomás mértékegységeit!", ro: "Amintește-ți unitățile de presiune!" },
      flashDurationMs: 3000,
      selectionLimit: 3,
      theme: { bg: "#172554", accent: "#60a5fa", radar: "#2563eb" },
      targetItems: [
        { id: "pa", label: { de: "Pascal (Pa)", en: "Pascal (Pa)", hu: "Pascal (Pa)", ro: "Pascal (Pa)" } },
        { id: "bar", label: { de: "Bar (bar)", en: "Bar (bar)", hu: "Bar (bar)", ro: "Bar (bar)" } },
        { id: "atm", label: { de: "Atmosphäre (atm)", en: "Atmosphere (atm)", hu: "Atmoszféra (atm)", ro: "Atmosferă (atm)" } }
      ],
      decoyItems: [
        { id: "n", label: { de: "Newton (N)", en: "Newton (N)", hu: "Newton (N)", ro: "Newton (N)" } },
        { id: "w", label: { de: "Watt (W)", en: "Watt (W)", hu: "Watt (W)", ro: "Watt (W)" } }
      ]
    }
  ],
};
