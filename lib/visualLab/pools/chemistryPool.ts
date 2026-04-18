import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const CHEMISTRY_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Chemistry",
  meteorCatch: [
    {
      id: "chem-elements",
      title: { de: "Elemente fangen", en: "Catch the Elements", hu: "Elemvadászat", ro: "Prinde elementele" },
      prompt: { de: "Fange nur Metalle.", en: "Catch only metals.", hu: "Csak fémeket fogj ki.", ro: "Prinde doar metalele." },
      goal: 6,
      speed: 5,
      theme: { sky: "#1e1b4b", glow: "#818cf8", accent: "#c7d2fe" },
      correctItems: [
        { id: "iron", label: { de: "Eisen (Fe)", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩" },
        { id: "gold", label: { de: "Gold (Au)", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙" },
        { id: "copper", label: { de: "Kupfer (Cu)", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🧲" },
      ],
      wrongItems: [
        { id: "oxygen", label: { de: "Sauerstoff (O)", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "carbon", label: { de: "Kohlenstoff (C)", en: "Carbon", hu: "Szén", ro: "Carbon" }, emoji: "🪨" },
      ],
    },
    {
      id: "chem-nonmetals",
      title: { de: "Nichtmetalle fangen", en: "Catch Non-metals", hu: "Nemfémek vadászata", ro: "Prinde Nemetalele" },
      prompt: { de: "Fange nur Nichtmetalle.", en: "Catch only non-metals.", hu: "Csak nemfémeket fogj.", ro: "Prinde doar nemetalele." },
      goal: 6,
      speed: 5,
      theme: { sky: "#0f172a", glow: "#f43f5e", accent: "#fda4af" },
      correctItems: [
        { id: "sulfur", label: { de: "Schwefel (S)", en: "Sulfur", hu: "Kén", ro: "Sulf" }, emoji: "🪨" },
        { id: "nitrogen", label: { de: "Stickstoff (N)", en: "Nitrogen", hu: "Nitrogén", ro: "Azot" }, emoji: "💨" },
        { id: "chlorine", label: { de: "Chlor (Cl)", en: "Chlorine", hu: "Klór", ro: "Clor" }, emoji: "🧪" },
      ],
      wrongItems: [
        { id: "sodium", label: { de: "Natrium (Na)", en: "Sodium", hu: "Nátrium", ro: "Sodiu" }, emoji: "🧂" },
        { id: "calcium", label: { de: "Calcium (Ca)", en: "Calcium", hu: "Kalcium", ro: "Calciu" }, emoji: "🦴" },
      ],
    },
    {
      id: "chem-acids",
      title: { de: "Säuren fangen", en: "Catch Acids", hu: "Savak vadászata", ro: "Prinde Acizii" },
      prompt: { de: "Fange Substanzen mit pH < 7.", en: "Catch substances with pH < 7.", hu: "Fogd ki a pH < 7 anyagokat.", ro: "Prinde substanțele cu pH < 7." },
      goal: 6,
      speed: 5,
      theme: { sky: "#450a0a", glow: "#ef4444", accent: "#fca5a5" },
      correctItems: [
        { id: "lemon", label: { de: "Zitronensaft", en: "Lemon Juice", hu: "Citromlé", ro: "Suc de lămâie" }, emoji: "🍋" },
        { id: "vinegar", label: { de: "Essig", en: "Vinegar", hu: "Ecet", ro: "Oțet" }, emoji: "🍶" },
        { id: "stomach_acid", label: { de: "Magensäure", en: "Stomach Acid", hu: "Gyomorsav", ro: "Acid gastric" }, emoji: "🧪" },
      ],
      wrongItems: [
        { id: "soap", label: { de: "Seife", en: "Soap", hu: "Szappan", ro: "Săpun" }, emoji: "🧼" },
        { id: "water", label: { de: "Reines Wasser", en: "Pure Water", hu: "Tiszta víz", ro: "Apă pură" }, emoji: "💧" },
      ],
    },
    {
      id: "chem-bases",
      title: { de: "Basen fangen", en: "Catch Bases", hu: "Bázisok vadászata", ro: "Prinde Bazele" },
      prompt: { de: "Fange Substanzen mit pH > 7.", en: "Catch substances with pH > 7.", hu: "Fogd ki a pH > 7 anyagokat.", ro: "Prinde substanțele cu pH > 7." },
      goal: 6,
      speed: 5,
      theme: { sky: "#082f49", glow: "#0ea5e9", accent: "#7dd3fc" },
      correctItems: [
        { id: "soap", label: { de: "Seife", en: "Soap", hu: "Szappan", ro: "Săpun" }, emoji: "🧼" },
        { id: "bleach", label: { de: "Bleichmittel", en: "Bleach", hu: "Fehérítő", ro: "Înălbitor" }, emoji: "🧴" },
        { id: "baking_soda", label: { de: "Natron", en: "Baking Soda", hu: "Szódabikarbóna", ro: "Bicarbonat" }, emoji: "🥄" },
      ],
      wrongItems: [
        { id: "lemon", label: { de: "Zitronensaft", en: "Lemon Juice", hu: "Citromlé", ro: "Suc de lămâie" }, emoji: "🍋" },
        { id: "water", label: { de: "Reines Wasser", en: "Pure Water", hu: "Tiszta víz", ro: "Apă pură" }, emoji: "💧" },
      ],
    },
    {
      id: "chem-lab-glassware",
      title: { de: "Laborgeräte", en: "Lab Equipment", hu: "Laboreszközök", ro: "Echipament de laborator" },
      prompt: { de: "Fange nur Glasgeräte.", en: "Catch only glassware.", hu: "Csak üvegeszközöket fogj.", ro: "Prinde doar sticlăria." },
      goal: 6,
      speed: 6,
      theme: { sky: "#172554", glow: "#3b82f6", accent: "#93c5fd" },
      correctItems: [
        { id: "beaker", label: { de: "Becherglas", en: "Beaker", hu: "Főzőpohár", ro: "Pahar Berzelius" }, emoji: "🥛" },
        { id: "flask", label: { de: "Erlenmeyerkolben", en: "Flask", hu: "Lombik", ro: "Balon" }, emoji: "🧪" },
        { id: "test_tube", label: { de: "Reagenzglas", en: "Test Tube", hu: "Kémcső", ro: "Eprubetă" }, emoji: "🧪" },
      ],
      wrongItems: [
        { id: "bunsen", label: { de: "Bunsenbrenner", en: "Bunsen Burner", hu: "Bunsen-égő", ro: "Arzător Bunsen" }, emoji: "🔥" },
        { id: "scale", label: { de: "Waage", en: "Scale", hu: "Mérleg", ro: "Cântar" }, emoji: "⚖️" },
      ],
    },
    {
      id: "chem-gases",
      title: { de: "Gase fangen", en: "Catch Gases", hu: "Gázok vadászata", ro: "Prinde Gazele" },
      prompt: { de: "Fange Stoffe, die bei Raumtemperatur gasförmig sind.", en: "Catch substances that are gases at room temperature.", hu: "Fogd ki a szobahőmérsékleten gáz halmazállapotú anyagokat.", ro: "Prinde substanțele care sunt gaze la temperatura camerei." },
      goal: 6,
      speed: 6,
      theme: { sky: "#064e3b", glow: "#10b981", accent: "#6ee7b7" },
      correctItems: [
        { id: "oxygen", label: { de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "hydrogen", label: { de: "Wasserstoff", en: "Hydrogen", hu: "Hidrogén", ro: "Hidrogen" }, emoji: "🎈" },
        { id: "helium", label: { de: "Helium", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "🎈" },
      ],
      wrongItems: [
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
      ],
    },
    {
      id: "chem-solids",
      title: { de: "Feststoffe fangen", en: "Catch Solids", hu: "Szilárd anyagok", ro: "Prinde Solidele" },
      prompt: { de: "Fange Stoffe, die bei Raumtemperatur fest sind.", en: "Catch substances that are solid at room temperature.", hu: "Fogd ki a szobahőmérsékleten szilárd anyagokat.", ro: "Prinde substanțele solide la temperatura camerei." },
      goal: 6,
      speed: 6,
      theme: { sky: "#27272a", glow: "#71717a", accent: "#d4d4d8" },
      correctItems: [
        { id: "salt", label: { de: "Salz", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂" },
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩" },
        { id: "carbon", label: { de: "Kohle", en: "Coal", hu: "Szén", ro: "Cărbune" }, emoji: "🪨" },
      ],
      wrongItems: [
        { id: "oxygen", label: { de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
      ],
    },
    {
      id: "chem-compounds",
      title: { de: "Verbindungen", en: "Compounds", hu: "Vegyületek", ro: "Compuși" },
      prompt: { de: "Fange nur chemische Verbindungen.", en: "Catch only chemical compounds.", hu: "Csak kémiai vegyületeket fogj.", ro: "Prinde doar compușii chimici." },
      goal: 6,
      speed: 5,
      theme: { sky: "#3b0764", glow: "#a855f7", accent: "#e9d5ff" },
      correctItems: [
        { id: "water", label: { de: "Wasser (H2O)", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "salt", label: { de: "Salz (NaCl)", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂" },
        { id: "co2", label: { de: "Kohlendioxid", en: "Carbon dioxide", hu: "Szén-dioxid", ro: "Dioxid de carbon" }, emoji: "💨" },
      ],
      wrongItems: [
        { id: "gold", label: { de: "Gold (Au)", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙" },
        { id: "iron", label: { de: "Eisen (Fe)", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩" },
      ],
    },
    {
      id: "chem-elements-only",
      title: { de: "Nur Elemente", en: "Elements Only", hu: "Csak elemek", ro: "Doar Elemente" },
      prompt: { de: "Fange nur chemische Elemente.", en: "Catch only chemical elements.", hu: "Csak kémiai elemeket fogj.", ro: "Prinde doar elementele chimice." },
      goal: 6,
      speed: 5,
      theme: { sky: "#450a0a", glow: "#f97316", accent: "#fed7aa" },
      correctItems: [
        { id: "gold", label: { de: "Gold (Au)", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙" },
        { id: "oxygen", label: { de: "Sauerstoff (O)", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "carbon", label: { de: "Kohlenstoff (C)", en: "Carbon", hu: "Szén", ro: "Carbon" }, emoji: "🪨" },
      ],
      wrongItems: [
        { id: "water", label: { de: "Wasser (H2O)", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "salt", label: { de: "Salz (NaCl)", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂" },
      ],
    },
    {
      id: "chem-halogens",
      title: { de: "Halogene", en: "Halogens", hu: "Halogének", ro: "Halogeni" },
      prompt: { de: "Fange Halogene (7. Hauptgruppe).", en: "Catch Halogens (Group 17).", hu: "Fogj halogéneket (17. csoport).", ro: "Prinde Halogeni (Grupa 17)." },
      goal: 6,
      speed: 6,
      theme: { sky: "#0f172a", glow: "#14b8a6", accent: "#99f6e4" },
      correctItems: [
        { id: "fluorine", label: { de: "Fluor (F)", en: "Fluorine", hu: "Fluor", ro: "Fluor" }, emoji: "💨" },
        { id: "chlorine", label: { de: "Chlor (Cl)", en: "Chlorine", hu: "Klór", ro: "Clor" }, emoji: "🧪" },
        { id: "iodine", label: { de: "Iod (I)", en: "Iodine", hu: "Jód", ro: "Iod" }, emoji: "🪨" },
      ],
      wrongItems: [
        { id: "sodium", label: { de: "Natrium (Na)", en: "Sodium", hu: "Nátrium", ro: "Sodiu" }, emoji: "🧂" },
        { id: "neon", label: { de: "Neon (Ne)", en: "Neon", hu: "Neon", ro: "Neon" }, emoji: "💡" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "chem-mixtures",
      title: { de: "Gemische oder Stoffe", en: "Mixtures or Pure Substances", hu: "Keverékek vagy tiszta anyagok", ro: "Amestecuri sau Substanțe pure" },
      instruction: { de: "Ist es ein Gemisch?", en: "Is it a mixture or a pure substance?", hu: "Keverék vagy tiszta anyag?", ro: "Este un amestec sau o substanță pură?" },
      theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
      buckets: [
        { id: "mixture", label: { de: "Gemisch", en: "Mixture", hu: "Keverék", ro: "Amestec" }, color: "#10b981" },
        { id: "pure", label: { de: "Reinstoff", en: "Pure Substance", hu: "Tiszta anyag", ro: "Substanță pură" }, color: "#3b82f6" },
      ],
      items: [
        { id: "air", label: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }, emoji: "🌬️", bucketId: "mixture" },
        { id: "saltwater", label: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" }, emoji: "🌊", bucketId: "mixture" },
        { id: "gold", label: { de: "Gold", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙", bucketId: "pure" },
        { id: "distilled", label: { de: "Dest. Wasser", en: "Distilled Water", hu: "Desztillált víz", ro: "Apă distilată" }, emoji: "🧪", bucketId: "pure" },
      ],
    },
    {
      id: "chem-metal-nonmetal",
      title: { de: "Metalle & Nichtmetalle", en: "Metals & Non-metals", hu: "Fémek és nemfémek", ro: "Metale și Nemetale" },
      instruction: { de: "Sortiere nach Metall oder Nichtmetall.", en: "Sort into metal or non-metal.", hu: "Válogasd szét fémekre és nemfémekre.", ro: "Sortează în metale și nemetale." },
      theme: { bg: "#1e1b4b", orbit: "#8b5cf6", accent: "#c4b5fd" },
      buckets: [
        { id: "metal", label: { de: "Metall", en: "Metal", hu: "Fém", ro: "Metal" }, color: "#8b5cf6" },
        { id: "nonmetal", label: { de: "Nichtmetall", en: "Non-metal", hu: "Nemfém", ro: "Nemetal" }, color: "#f43f5e" },
      ],
      items: [
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩", bucketId: "metal" },
        { id: "copper", label: { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🧲", bucketId: "metal" },
        { id: "oxygen", label: { de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨", bucketId: "nonmetal" },
        { id: "carbon", label: { de: "Kohlenstoff", en: "Carbon", hu: "Szén", ro: "Carbon" }, emoji: "🪨", bucketId: "nonmetal" },
      ],
    },
    {
      id: "chem-states-sl",
      title: { de: "Fest oder Flüssig", en: "Solid or Liquid", hu: "Szilárd vagy Folyékony", ro: "Solid sau Lichid" },
      instruction: { de: "Aggregatzustand bei Raumtemperatur.", en: "State of matter at room temperature.", hu: "Halmazállapot szobahőmérsékleten.", ro: "Starea de agregare la temperatura camerei." },
      theme: { bg: "#082f49", orbit: "#0ea5e9", accent: "#7dd3fc" },
      buckets: [
        { id: "solid", label: { de: "Fest", en: "Solid", hu: "Szilárd", ro: "Solid" }, color: "#0ea5e9" },
        { id: "liquid", label: { de: "Flüssig", en: "Liquid", hu: "Folyékony", ro: "Lichid" }, color: "#2dd4bf" },
      ],
      items: [
        { id: "ice", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "🧊", bucketId: "solid" },
        { id: "salt", label: { de: "Salz", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂", bucketId: "solid" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧", bucketId: "liquid" },
        { id: "oil", label: { de: "Öl", en: "Oil", hu: "Olaj", ro: "Ulei" }, emoji: "🛢️", bucketId: "liquid" },
      ],
    },
    {
      id: "chem-ph",
      title: { de: "Säure oder Base", en: "Acid or Base", hu: "Sav vagy Bázis", ro: "Acid sau Bază" },
      instruction: { de: "Ist es sauer oder basisch?", en: "Is it acidic or basic?", hu: "Savas vagy lúgos?", ro: "Este acid sau bazic?" },
      theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#fca5a5" },
      buckets: [
        { id: "acid", label: { de: "Säure", en: "Acid", hu: "Sav", ro: "Acid" }, color: "#ef4444" },
        { id: "base", label: { de: "Base", en: "Base", hu: "Bázis", ro: "Bază" }, color: "#3b82f6" },
      ],
      items: [
        { id: "lemon", label: { de: "Zitrone", en: "Lemon", hu: "Citrom", ro: "Lămâie" }, emoji: "🍋", bucketId: "acid" },
        { id: "vinegar", label: { de: "Essig", en: "Vinegar", hu: "Ecet", ro: "Oțet" }, emoji: "🍶", bucketId: "acid" },
        { id: "soap", label: { de: "Seife", en: "Soap", hu: "Szappan", ro: "Săpun" }, emoji: "🧼", bucketId: "base" },
        { id: "bleach", label: { de: "Bleichmittel", en: "Bleach", hu: "Fehérítő", ro: "Înălbitor" }, emoji: "🧴", bucketId: "base" },
      ],
    },
    {
      id: "chem-org-inorg",
      title: { de: "Organisch oder Anorganisch", en: "Organic or Inorganic", hu: "Szerves vagy Szervetlen", ro: "Organic sau Anorganic" },
      instruction: { de: "Enthält es typischerweise Kohlenstoff?", en: "Does it typically contain carbon?", hu: "Szerves vagy szervetlen vegyület?", ro: "Este un compus organic sau anorganic?" },
      theme: { bg: "#064e3b", orbit: "#10b981", accent: "#6ee7b7" },
      buckets: [
        { id: "organic", label: { de: "Organisch", en: "Organic", hu: "Szerves", ro: "Organic" }, color: "#10b981" },
        { id: "inorganic", label: { de: "Anorganisch", en: "Inorganic", hu: "Szervetlen", ro: "Anorganic" }, color: "#64748b" },
      ],
      items: [
        { id: "sugar", label: { de: "Zucker", en: "Sugar", hu: "Cukor", ro: "Zahăr" }, emoji: "🍬", bucketId: "organic" },
        { id: "plastic", label: { de: "Plastik", en: "Plastic", hu: "Műanyag", ro: "Plastic" }, emoji: "🛍️", bucketId: "organic" },
        { id: "salt", label: { de: "Salz", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂", bucketId: "inorganic" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧", bucketId: "inorganic" },
      ],
    },
    {
      id: "chem-elem-comp",
      title: { de: "Element oder Verbindung", en: "Element or Compound", hu: "Elem vagy Vegyület", ro: "Element sau Compus" },
      instruction: { de: "Besteht es aus einer oder mehreren Atomarten?", en: "Made of one or more types of atoms?", hu: "Egy vagy több atomfajtából áll?", ro: "Este format dintr-unul sau mai multe tipuri de atomi?" },
      theme: { bg: "#3b0764", orbit: "#a855f7", accent: "#e9d5ff" },
      buckets: [
        { id: "element", label: { de: "Element", en: "Element", hu: "Elem", ro: "Element" }, color: "#a855f7" },
        { id: "compound", label: { de: "Verbindung", en: "Compound", hu: "Vegyület", ro: "Compus" }, color: "#14b8a6" },
      ],
      items: [
        { id: "oxygen", label: { de: "Sauerstoff (O2)", en: "Oxygen (O2)", hu: "Oxigén (O2)", ro: "Oxigen (O2)" }, emoji: "💨", bucketId: "element" },
        { id: "gold", label: { de: "Gold (Au)", en: "Gold (Au)", hu: "Arany (Au)", ro: "Aur (Au)" }, emoji: "🪙", bucketId: "element" },
        { id: "water", label: { de: "Wasser (H2O)", en: "Water (H2O)", hu: "Víz (H2O)", ro: "Apă (H2O)" }, emoji: "💧", bucketId: "compound" },
        { id: "co2", label: { de: "Kohlendioxid (CO2)", en: "Carbon dioxide", hu: "Szén-dioxid", ro: "Dioxid de carbon" }, emoji: "💨", bucketId: "compound" },
      ],
    },
    {
      id: "chem-phys-chem",
      title: { de: "Physikalisch / Chemisch", en: "Physical / Chemical Change", hu: "Fizikai vagy Kémiai", ro: "Fizic sau Chimic" },
      instruction: { de: "Ist es eine physikalische oder chemische Änderung?", en: "Physical or chemical change?", hu: "Fizikai vagy kémiai változás?", ro: "Schimbare fizică sau chimică?" },
      theme: { bg: "#4a044e", orbit: "#d946ef", accent: "#f5d0fe" },
      buckets: [
        { id: "physical", label: { de: "Physikalisch", en: "Physical", hu: "Fizikai", ro: "Fizic" }, color: "#d946ef" },
        { id: "chemical", label: { de: "Chemisch", en: "Chemical", hu: "Kémiai", ro: "Chimic" }, color: "#f97316" },
      ],
      items: [
        { id: "melting", label: { de: "Eis schmilzt", en: "Ice melting", hu: "Jég olvadása", ro: "Topirea gheții" }, emoji: "🧊", bucketId: "physical" },
        { id: "breaking", label: { de: "Glas bricht", en: "Glass breaking", hu: "Üvegtörés", ro: "Spargerea sticlei" }, emoji: "🔨", bucketId: "physical" },
        { id: "burning", label: { de: "Holz brennt", en: "Wood burning", hu: "Fa égése", ro: "Arderea lemnului" }, emoji: "🔥", bucketId: "chemical" },
        { id: "rusting", label: { de: "Eisen rostet", en: "Iron rusting", hu: "Vas rozsdásodása", ro: "Ruginirea fierului" }, emoji: "🧲", bucketId: "chemical" },
      ],
    },
    {
      id: "chem-homo-hetero",
      title: { de: "Homogen oder Heterogen", en: "Homogeneous vs Heterogeneous", hu: "Homogén vs Heterogén", ro: "Omogen vs Eterogen" },
      instruction: { de: "Welche Art von Gemisch ist das?", en: "What kind of mixture is it?", hu: "Milyen típusú keverék?", ro: "Ce fel de amestec este?" },
      theme: { bg: "#172554", orbit: "#3b82f6", accent: "#93c5fd" },
      buckets: [
        { id: "homo", label: { de: "Homogen", en: "Homogeneous", hu: "Homogén", ro: "Omogen" }, color: "#3b82f6" },
        { id: "hetero", label: { de: "Heterogen", en: "Heterogeneous", hu: "Heterogén", ro: "Eterogen" }, color: "#eab308" },
      ],
      items: [
        { id: "saltwater", label: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" }, emoji: "🌊", bucketId: "homo" },
        { id: "air", label: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }, emoji: "🌬️", bucketId: "homo" },
        { id: "sandwater", label: { de: "Sand & Wasser", en: "Sand & Water", hu: "Homok és víz", ro: "Nisip & Apă" }, emoji: "🏖️", bucketId: "hetero" },
        { id: "oilwater", label: { de: "Öl & Wasser", en: "Oil & Water", hu: "Olaj és víz", ro: "Ulei & Apă" }, emoji: "🛢️", bucketId: "hetero" },
      ],
    },
    {
      id: "chem-exo-endo",
      title: { de: "Exotherm oder Endotherm", en: "Exothermic or Endothermic", hu: "Exoterm vagy Endoterm", ro: "Exoterm sau Endoterm" },
      instruction: { de: "Gibt es Wärme ab oder nimmt es Wärme auf?", en: "Does it release or absorb heat?", hu: "Hőt ad le vagy vesz fel?", ro: "Eliberează sau absoarbe căldură?" },
      theme: { bg: "#27272a", orbit: "#ef4444", accent: "#fca5a5" },
      buckets: [
        { id: "exo", label: { de: "Exotherm", en: "Exothermic", hu: "Exoterm", ro: "Exoterm" }, color: "#ef4444" },
        { id: "endo", label: { de: "Endotherm", en: "Endothermic", hu: "Endoterm", ro: "Endoterm" }, color: "#3b82f6" },
      ],
      items: [
        { id: "fire", label: { de: "Feuer", en: "Fire", hu: "Tűz", ro: "Foc" }, emoji: "🔥", bucketId: "exo" },
        { id: "explosion", label: { de: "Explosion", en: "Explosion", hu: "Robbanás", ro: "Explozie" }, emoji: "💥", bucketId: "exo" },
        { id: "melting", label: { de: "Eis schmelzen", en: "Melting ice", hu: "Jégolvadás", ro: "Topirea gheții" }, emoji: "🧊", bucketId: "endo" },
        { id: "evap", label: { de: "Wasser kochen", en: "Boiling water", hu: "Vízforralás", ro: "Fierberea apei" }, emoji: "♨️", bucketId: "endo" },
      ],
    },
    {
      id: "chem-alkali-noble",
      title: { de: "Alkalimetalle & Edelgase", en: "Alkali Metals & Noble Gases", hu: "Alkalifémek és Nemesgázok", ro: "Metale alcaline & Gaze nobile" },
      instruction: { de: "Ordne die Elemente zu.", en: "Sort the elements.", hu: "Csoportosítsd az elemeket.", ro: "Sortează elementele." },
      theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fde68a" },
      buckets: [
        { id: "alkali", label: { de: "Alkalimetall", en: "Alkali Metal", hu: "Alkalifém", ro: "Metal alcalin" }, color: "#f59e0b" },
        { id: "noble", label: { de: "Edelgas", en: "Noble Gas", hu: "Nemesgáz", ro: "Gaz nobil" }, color: "#8b5cf6" },
      ],
      items: [
        { id: "sodium", label: { de: "Natrium (Na)", en: "Sodium", hu: "Nátrium", ro: "Sodiu" }, emoji: "🧂", bucketId: "alkali" },
        { id: "potassium", label: { de: "Kalium (K)", en: "Potassium", hu: "Kálium", ro: "Potasiu" }, emoji: "🍌", bucketId: "alkali" },
        { id: "helium", label: { de: "Helium (He)", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "🎈", bucketId: "noble" },
        { id: "neon", label: { de: "Neon (Ne)", en: "Neon", hu: "Neon", ro: "Neon" }, emoji: "💡", bucketId: "noble" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "chem-scene-1",
      title: { de: "Lackmus rot", en: "Litmus Red", hu: "Piros lakmusz", ro: "Turnesol roșu" },
      instruction: { de: "Wähle die richtige Eigenschaft.", en: "Choose the correct property.", hu: "Válaszd ki a helyes tulajdonságot.", ro: "Alege proprietatea corectă." },
      scenes: [
        {
          id: "s1",
          title: { de: "Lackmustest", en: "Litmus Test", hu: "Lakmuszteszt", ro: "Testul Turnesol" },
          prompt: { de: "Lackmuspapier färbt sich rot. Was ist es?", en: "Litmus paper turns red. What is it?", hu: "A lakmuszpapír piros lesz. Mi ez?", ro: "Hârtia de turnesol devine roșie. Ce este?" },
          sceneType: "science",
          visual: { icon: "🧪", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "c1", label: { de: "Säure", en: "Acid", hu: "Sav", ro: "Acid" } },
            { id: "c2", label: { de: "Base", en: "Base", hu: "Bázis", ro: "Bază" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig! Säuren färben Lackmus rot.", en: "Correct! Acids turn litmus red.", hu: "Helyes! A savak pirosra festik a lakmuszt.", ro: "Corect! Acizii înroșesc turnesolul." },
          failFeedback: { de: "Falsch, Basen färben es blau.", en: "Wrong, bases turn it blue.", hu: "Hibás, a bázisok kékre festik.", ro: "Greșit, bazele îl albăstresc." }
        }
      ]
    },
    {
      id: "chem-scene-2",
      title: { de: "Lackmus blau", en: "Litmus Blue", hu: "Kék lakmusz", ro: "Turnesol albastru" },
      instruction: { de: "Wähle die richtige Eigenschaft.", en: "Choose the correct property.", hu: "Válaszd ki a helyes tulajdonságot.", ro: "Alege proprietatea corectă." },
      scenes: [
        {
          id: "s1",
          title: { de: "Lackmustest", en: "Litmus Test", hu: "Lakmuszteszt", ro: "Testul Turnesol" },
          prompt: { de: "Lackmuspapier färbt sich blau. Was ist es?", en: "Litmus paper turns blue. What is it?", hu: "A lakmuszpapír kék lesz. Mi ez?", ro: "Hârtia de turnesol devine albastră. Ce este?" },
          sceneType: "science",
          visual: { icon: "🧪", bg: "#082f49", accent: "#3b82f6" },
          choices: [
            { id: "c1", label: { de: "Säure", en: "Acid", hu: "Sav", ro: "Acid" } },
            { id: "c2", label: { de: "Base", en: "Base", hu: "Bázis", ro: "Bază" } },
          ],
          correctChoiceId: "c2",
          successFeedback: { de: "Richtig! Basen färben Lackmus blau.", en: "Correct! Bases turn litmus blue.", hu: "Helyes! A bázisok kékre festik a lakmuszt.", ro: "Corect! Bazele albăstresc turnesolul." },
          failFeedback: { de: "Falsch, Säuren färben es rot.", en: "Wrong, acids turn it red.", hu: "Hibás, a savak pirosra festik.", ro: "Greșit, acizii îl înroșesc." }
        }
      ]
    },
    {
      id: "chem-scene-3",
      title: { de: "Verbrennung", en: "Combustion", hu: "Égés", ro: "Combustie" },
      instruction: { de: "Welche Art von Reaktion ist das?", en: "What kind of reaction is this?", hu: "Milyen típusú reakció ez?", ro: "Ce fel de reacție este aceasta?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Lagerfeuer", en: "Campfire", hu: "Tábortűz", ro: "Foc de tabără" },
          prompt: { de: "Holz brennt und gibt Wärme ab.", en: "Wood burns and releases heat.", hu: "A fa ég és hőt ad le.", ro: "Lemnul arde și eliberează căldură." },
          sceneType: "science",
          visual: { icon: "🔥", bg: "#27272a", accent: "#f97316" },
          choices: [
            { id: "c1", label: { de: "Exotherm", en: "Exothermic", hu: "Exoterm", ro: "Exoterm" } },
            { id: "c2", label: { de: "Endotherm", en: "Endothermic", hu: "Endoterm", ro: "Endoterm" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig! Wärme wird freigesetzt.", en: "Correct! Heat is released.", hu: "Helyes! Hő szabadul fel.", ro: "Corect! Se eliberează căldură." },
          failFeedback: { de: "Falsch, endotherm nimmt Wärme auf.", en: "Wrong, endothermic absorbs heat.", hu: "Hibás, az endoterm hőt vesz fel.", ro: "Greșit, endoterm absoarbe căldură." }
        }
      ]
    },
    {
      id: "chem-scene-4",
      title: { de: "Schmelzendes Eis", en: "Melting Ice", hu: "Olvadó jég", ro: "Gheață topită" },
      instruction: { de: "Bestimme die Art der Veränderung.", en: "Determine the type of change.", hu: "Határozd meg a változás típusát.", ro: "Determinati tipul de schimbare." },
      scenes: [
        {
          id: "s1",
          title: { de: "Schmelzen", en: "Melting", hu: "Olvadás", ro: "Topire" },
          prompt: { de: "Eis schmilzt zu Wasser.", en: "Ice melts into water.", hu: "A jég vízzé olvad.", ro: "Gheața se topește în apă." },
          sceneType: "science",
          visual: { icon: "🧊", bg: "#0c4a6e", accent: "#38bdf8" },
          choices: [
            { id: "c1", label: { de: "Physikalisch", en: "Physical", hu: "Fizikai", ro: "Fizic" } },
            { id: "c2", label: { de: "Chemisch", en: "Chemical", hu: "Kémiai", ro: "Chimic" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig! Es ist immer noch H2O.", en: "Correct! It is still H2O.", hu: "Helyes! Továbbra is H2O maradt.", ro: "Corect! Rămâne tot H2O." },
          failFeedback: { de: "Falsch, es entsteht kein neuer Stoff.", en: "Wrong, no new substance is formed.", hu: "Hibás, nem jön létre új anyag.", ro: "Greșit, nu se formează o substanță nouă." }
        }
      ]
    },
    {
      id: "chem-scene-5",
      title: { de: "Rostiges Eisen", en: "Rusting Iron", hu: "Rozsdásodó vas", ro: "Fier ruginind" },
      instruction: { de: "Bestimme die Art der Veränderung.", en: "Determine the type of change.", hu: "Határozd meg a változás típusát.", ro: "Determinati tipul de schimbare." },
      scenes: [
        {
          id: "s1",
          title: { de: "Rosten", en: "Rusting", hu: "Rozsdásodás", ro: "Ruginire" },
          prompt: { de: "Ein Nagel rostet an der Luft.", en: "A nail rusts in the air.", hu: "Egy szög megrozsdásodik a levegőn.", ro: "Un cui ruginește în aer." },
          sceneType: "science",
          visual: { icon: "🧲", bg: "#3f2c25", accent: "#ea580c" },
          choices: [
            { id: "c1", label: { de: "Physikalisch", en: "Physical", hu: "Fizikai", ro: "Fizic" } },
            { id: "c2", label: { de: "Chemisch", en: "Chemical", hu: "Kémiai", ro: "Chimic" } },
          ],
          correctChoiceId: "c2",
          successFeedback: { de: "Richtig! Eisenoxid entsteht.", en: "Correct! Iron oxide is formed.", hu: "Helyes! Vas-oxid jött létre.", ro: "Corect! Se formează oxid de fier." },
          failFeedback: { de: "Falsch, ein neuer Stoff entsteht.", en: "Wrong, a new substance is formed.", hu: "Hibás, új anyag jött létre.", ro: "Greșit, se formează o substanță nouă." }
        }
      ]
    },
    {
      id: "chem-scene-6",
      title: { de: "Backpulver & Essig", en: "Baking Soda & Vinegar", hu: "Szódabikarbóna és ecet", ro: "Bicarbonat & Oțet" },
      instruction: { de: "Was passiert hier?", en: "What happens here?", hu: "Mi történik itt?", ro: "Ce se întâmplă aici?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Mischen", en: "Mixing", hu: "Keverés", ro: "Amestecare" },
          prompt: { de: "Es sprudelt beim Mischen. Was entsteht?", en: "It bubbles when mixed. What is produced?", hu: "Pezseg a keveréskor. Mi keletkezik?", ro: "Face spume când se amestecă. Ce se produce?" },
          sceneType: "science",
          visual: { icon: "🌋", bg: "#14532d", accent: "#4ade80" },
          choices: [
            { id: "c1", label: { de: "Gas (CO2)", en: "Gas (CO2)", hu: "Gáz (CO2)", ro: "Gaz (CO2)" } },
            { id: "c2", label: { de: "Feststoff", en: "Solid", hu: "Szilárd anyag", ro: "Solid" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig! CO2-Gas wird frei.", en: "Correct! CO2 gas is released.", hu: "Helyes! CO2 gáz szabadul fel.", ro: "Corect! Se eliberează gaz CO2." },
          failFeedback: { de: "Falsch, Blasen bedeuten Gas.", en: "Wrong, bubbles mean gas.", hu: "Hibás, a buborékok gázt jeleznek.", ro: "Greșit, bulele înseamnă gaz." }
        }
      ]
    },
    {
      id: "chem-scene-7",
      title: { de: "Filtrieren", en: "Filtration", hu: "Szűrés", ro: "Filtrare" },
      instruction: { de: "Welche Methode wird genutzt?", en: "Which method is used?", hu: "Milyen módszert használunk?", ro: "Ce metodă este folosită?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Sandiges Wasser", en: "Sandy Water", hu: "Homokos víz", ro: "Apă nisipoasă" },
          prompt: { de: "Wie trennt man Sand von Wasser?", en: "How to separate sand from water?", hu: "Hogyan választjuk el a homokot a víztől?", ro: "Cum separăm nisipul de apă?" },
          sceneType: "science",
          visual: { icon: "☕", bg: "#422006", accent: "#d97706" },
          choices: [
            { id: "c1", label: { de: "Filtrieren", en: "Filtration", hu: "Szűrés", ro: "Filtrare" } },
            { id: "c2", label: { de: "Destillieren", en: "Distillation", hu: "Desztilláció", ro: "Distilare" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig! Der Filter hält Feststoffe auf.", en: "Correct! The filter traps solids.", hu: "Helyes! A szűrő felfogja a szilárd anyagot.", ro: "Corect! Filtrul reține solidele." },
          failFeedback: { de: "Falsch, Destillieren wäre für gelöste Stoffe.", en: "Wrong, distillation is for dissolved substances.", hu: "Hibás, a desztilláció oldott anyagokhoz való.", ro: "Greșit, distilarea este pentru substanțe dizolvate." }
        }
      ]
    },
    {
      id: "chem-scene-8",
      title: { de: "Salz gewinnen", en: "Extracting Salt", hu: "Só kinyerése", ro: "Extragerea sării" },
      instruction: { de: "Welche Methode wird genutzt?", en: "Which method is used?", hu: "Milyen módszert használunk?", ro: "Ce metodă este folosită?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" },
          prompt: { de: "Wie gewinnt man Salz aus Meerwasser?", en: "How to get salt from seawater?", hu: "Hogyan nyerünk sót tengervízből?", ro: "Cum obținem sare din apa de mare?" },
          sceneType: "science",
          visual: { icon: "☀️", bg: "#0c4a6e", accent: "#fcd34d" },
          choices: [
            { id: "c1", label: { de: "Filtrieren", en: "Filtration", hu: "Szűrés", ro: "Filtrare" } },
            { id: "c2", label: { de: "Verdampfen", en: "Evaporation", hu: "Párologtatás", ro: "Evaporare" } },
          ],
          correctChoiceId: "c2",
          successFeedback: { de: "Richtig! Das Wasser verdunstet.", en: "Correct! The water evaporates.", hu: "Helyes! A víz elpárolog.", ro: "Corect! Apa se evaporă." },
          failFeedback: { de: "Falsch, Salz geht durch den Filter.", en: "Wrong, salt passes through a filter.", hu: "Hibás, a só átmegy a szűrőn.", ro: "Greșit, sarea trece prin filtru." }
        }
      ]
    },
    {
      id: "chem-scene-9",
      title: { de: "Atomkern", en: "Atomic Nucleus", hu: "Atommag", ro: "Nucleu atomic" },
      instruction: { de: "Was ist im Kern?", en: "What is in the nucleus?", hu: "Mi van az atommagban?", ro: "Ce se află în nucleu?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Das Atom", en: "The Atom", hu: "Az atom", ro: "Atomul" },
          prompt: { de: "Welche Teilchen sind im Atomkern?", en: "Which particles are in the atomic nucleus?", hu: "Milyen részecskék vannak az atommagban?", ro: "Ce particule sunt în nucleul atomic?" },
          sceneType: "science",
          visual: { icon: "⚛️", bg: "#1e1b4b", accent: "#a855f7" },
          choices: [
            { id: "c1", label: { de: "Protonen & Neutronen", en: "Protons & Neutrons", hu: "Protonok és neutronok", ro: "Protoni & Neutroni" } },
            { id: "c2", label: { de: "Elektronen", en: "Electrons", hu: "Elektronok", ro: "Electroni" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch, Elektronen sind in der Hülle.", en: "Wrong, electrons are in the shell.", hu: "Hibás, az elektronok a burokban vannak.", ro: "Greșit, electronii sunt în înveliș." }
        }
      ]
    },
    {
      id: "chem-scene-10",
      title: { de: "Ordnungszahl", en: "Atomic Number", hu: "Rendszám", ro: "Număr atomic" },
      instruction: { de: "Was bestimmt die Ordnungszahl?", en: "What does the atomic number determine?", hu: "Mit határoz meg a rendszám?", ro: "Ce determină numărul atomic?" },
      scenes: [
        {
          id: "s1",
          title: { de: "Periodensystem", en: "Periodic Table", hu: "Periódusos rendszer", ro: "Tabelul periodic" },
          prompt: { de: "Die Ordnungszahl ist gleich der Anzahl der...", en: "The atomic number is equal to the number of...", hu: "A rendszám egyenlő a ... számával", ro: "Numărul atomic este egal cu numărul de..." },
          sceneType: "science",
          visual: { icon: "📊", bg: "#064e3b", accent: "#34d399" },
          choices: [
            { id: "c1", label: { de: "Protonen", en: "Protons", hu: "Protonok", ro: "Protoni" } },
            { id: "c2", label: { de: "Neutronen", en: "Neutrons", hu: "Neutronok", ro: "Neutroni" } },
          ],
          correctChoiceId: "c1",
          successFeedback: { de: "Richtig!", en: "Correct!", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch.", en: "Wrong.", hu: "Hibás.", ro: "Greșit." }
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "chem-water",
      title: { de: "Wasser bauen", en: "Build Water", hu: "Víz építése", ro: "Construiește Apă" },
      instruction: { de: "Baue ein Wassermolekül (H2O).", en: "Build a water molecule (H2O).", hu: "Építs egy vízmolekulát (H2O).", ro: "Construiește o moleculă de apă (H2O)." },
      hint: { de: "2 Wasserstoff, 1 Sauerstoff.", en: "2 Hydrogen, 1 Oxygen.", hu: "2 hidrogén, 1 oxigén.", ro: "2 hidrogen, 1 oxigen." },
      theme: { bg: "#082f49", accent: "#38bdf8", card: "#0c4a6e" },
      parts: [
        { id: "h1", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "h2", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "o1", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
      ],
      slots: [
        { id: "s1", label: { de: "Atom 1", en: "Atom 1", hu: "1. atom", ro: "Atom 1" } },
        { id: "s2", label: { de: "Atom 2", en: "Atom 2", hu: "2. atom", ro: "Atom 2" } },
        { id: "s3", label: { de: "Atom 3", en: "Atom 3", hu: "3. atom", ro: "Atom 3" } },
      ],
      solution: ["h1", "o1", "h2"]
    },
    {
      id: "chem-co2",
      title: { de: "Kohlendioxid", en: "Carbon Dioxide", hu: "Szén-dioxid", ro: "Dioxid de carbon" },
      instruction: { de: "Baue CO2.", en: "Build CO2.", hu: "Építs CO2-t.", ro: "Construiește CO2." },
      hint: { de: "1 Kohlenstoff in der Mitte, 2 Sauerstoff außen.", en: "1 Carbon in middle, 2 Oxygen outside.", hu: "1 szén középen, 2 oxigén kívül.", ro: "1 carbon la mijloc, 2 oxigen la exterior." },
      theme: { bg: "#27272a", accent: "#a1a1aa", card: "#3f3f46" },
      parts: [
        { id: "o1", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
        { id: "c1", label: { de: "C", en: "C", hu: "C", ro: "C" }, color: "#3f3f46" },
        { id: "o2", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
      ],
      slots: [
        { id: "s1", label: { de: "Links", en: "Left", hu: "Bal", ro: "Stânga" } },
        { id: "s2", label: { de: "Mitte", en: "Center", hu: "Közép", ro: "Mijloc" } },
        { id: "s3", label: { de: "Rechts", en: "Right", hu: "Jobb", ro: "Dreapta" } },
      ],
      solution: ["o1", "c1", "o2"]
    },
    {
      id: "chem-salt",
      title: { de: "Kochsalz", en: "Table Salt", hu: "Konyhasó", ro: "Sare de masă" },
      instruction: { de: "Baue Natriumchlorid (NaCl).", en: "Build Sodium chloride (NaCl).", hu: "Építs nátrium-kloridot (NaCl).", ro: "Construiește clorură de sodiu (NaCl)." },
      hint: { de: "Ein Na und ein Cl.", en: "One Na and one Cl.", hu: "Egy Na és egy Cl.", ro: "Un Na și un Cl." },
      theme: { bg: "#1e1b4b", accent: "#818cf8", card: "#312e81" },
      parts: [
        { id: "na", label: { de: "Na", en: "Na", hu: "Na", ro: "Na" }, color: "#f59e0b" },
        { id: "cl", label: { de: "Cl", en: "Cl", hu: "Cl", ro: "Cl" }, color: "#10b981" },
      ],
      slots: [
        { id: "s1", label: { de: "Ion 1", en: "Ion 1", hu: "1. ion", ro: "Ion 1" } },
        { id: "s2", label: { de: "Ion 2", en: "Ion 2", hu: "2. ion", ro: "Ion 2" } },
      ],
      solution: ["na", "cl"]
    },
    {
      id: "chem-ch4",
      title: { de: "Methan", en: "Methane", hu: "Metán", ro: "Metan" },
      instruction: { de: "Baue Methan (CH4).", en: "Build Methane (CH4).", hu: "Építs metánt (CH4).", ro: "Construiește metan (CH4)." },
      hint: { de: "1 C und 4 H.", en: "1 C and 4 H.", hu: "1 C és 4 H.", ro: "1 C și 4 H." },
      theme: { bg: "#064e3b", accent: "#34d399", card: "#065f46" },
      parts: [
        { id: "h1", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "h2", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "c", label: { de: "C", en: "C", hu: "C", ro: "C" }, color: "#3f3f46" },
        { id: "h3", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "h4", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
      ],
      slots: [
        { id: "s1", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "s2", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "sc", label: { de: "Zentrum", en: "Center", hu: "Közép", ro: "Centru" } },
        { id: "s3", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "s4", label: { de: "H", en: "H", hu: "H", ro: "H" } },
      ],
      solution: ["h1", "h2", "c", "h3", "h4"]
    },
    {
      id: "chem-nh3",
      title: { de: "Ammoniak", en: "Ammonia", hu: "Ammónia", ro: "Amoniac" },
      instruction: { de: "Baue Ammoniak (NH3).", en: "Build Ammonia (NH3).", hu: "Építs ammóniát (NH3).", ro: "Construiește amoniac (NH3)." },
      hint: { de: "1 N und 3 H.", en: "1 N and 3 H.", hu: "1 N és 3 H.", ro: "1 N și 3 H." },
      theme: { bg: "#4a044e", accent: "#e879f9", card: "#701a75" },
      parts: [
        { id: "h1", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "n", label: { de: "N", en: "N", hu: "N", ro: "N" }, color: "#3b82f6" },
        { id: "h2", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "h3", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
      ],
      slots: [
        { id: "s1", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "sn", label: { de: "N", en: "N", hu: "N", ro: "N" } },
        { id: "s2", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "s3", label: { de: "H", en: "H", hu: "H", ro: "H" } },
      ],
      solution: ["h1", "n", "h2", "h3"]
    },
    {
      id: "chem-hcl",
      title: { de: "Salzsäure", en: "Hydrochloric Acid", hu: "Sósav", ro: "Acid clorhidric" },
      instruction: { de: "Baue HCl.", en: "Build HCl.", hu: "Építs HCl-t.", ro: "Construiește HCl." },
      hint: { de: "1 H und 1 Cl.", en: "1 H and 1 Cl.", hu: "1 H és 1 Cl.", ro: "1 H și 1 Cl." },
      theme: { bg: "#450a0a", accent: "#f87171", card: "#7f1d1d" },
      parts: [
        { id: "h", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "cl", label: { de: "Cl", en: "Cl", hu: "Cl", ro: "Cl" }, color: "#10b981" },
      ],
      slots: [
        { id: "sh", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "scl", label: { de: "Cl", en: "Cl", hu: "Cl", ro: "Cl" } },
      ],
      solution: ["h", "cl"]
    },
    {
      id: "chem-o2",
      title: { de: "Sauerstoffgas", en: "Oxygen Gas", hu: "Oxigéngáz", ro: "Gaz oxigen" },
      instruction: { de: "Baue O2.", en: "Build O2.", hu: "Építs O2-t.", ro: "Construiește O2." },
      hint: { de: "Zwei Sauerstoffatome.", en: "Two oxygen atoms.", hu: "Két oxigénatom.", ro: "Doi atomi de oxigen." },
      theme: { bg: "#082f49", accent: "#38bdf8", card: "#0c4a6e" },
      parts: [
        { id: "o1", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
        { id: "o2", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
      ],
      slots: [
        { id: "s1", label: { de: "O", en: "O", hu: "O", ro: "O" } },
        { id: "s2", label: { de: "O", en: "O", hu: "O", ro: "O" } },
      ],
      solution: ["o1", "o2"]
    },
    {
      id: "chem-n2",
      title: { de: "Stickstoffgas", en: "Nitrogen Gas", hu: "Nitrogéngáz", ro: "Gaz azot" },
      instruction: { de: "Baue N2.", en: "Build N2.", hu: "Építs N2-t.", ro: "Construiește N2." },
      hint: { de: "Zwei Stickstoffatome.", en: "Two nitrogen atoms.", hu: "Két nitrogénatom.", ro: "Doi atomi de azot." },
      theme: { bg: "#1e1b4b", accent: "#818cf8", card: "#312e81" },
      parts: [
        { id: "n1", label: { de: "N", en: "N", hu: "N", ro: "N" }, color: "#3b82f6" },
        { id: "n2", label: { de: "N", en: "N", hu: "N", ro: "N" }, color: "#3b82f6" },
      ],
      slots: [
        { id: "s1", label: { de: "N", en: "N", hu: "N", ro: "N" } },
        { id: "s2", label: { de: "N", en: "N", hu: "N", ro: "N" } },
      ],
      solution: ["n1", "n2"]
    },
    {
      id: "chem-co",
      title: { de: "Kohlenmonoxid", en: "Carbon Monoxide", hu: "Szén-monoxid", ro: "Monoxid de carbon" },
      instruction: { de: "Baue CO.", en: "Build CO.", hu: "Építs CO-t.", ro: "Construiește CO." },
      hint: { de: "Ein C und ein O.", en: "One C and one O.", hu: "Egy C és egy O.", ro: "Un C și un O." },
      theme: { bg: "#3f3f46", accent: "#a1a1aa", card: "#52525b" },
      parts: [
        { id: "c", label: { de: "C", en: "C", hu: "C", ro: "C" }, color: "#3f3f46" },
        { id: "o", label: { de: "O", en: "O", hu: "O", ro: "O" }, color: "#ef4444" },
      ],
      slots: [
        { id: "s1", label: { de: "C", en: "C", hu: "C", ro: "C" } },
        { id: "s2", label: { de: "O", en: "O", hu: "O", ro: "O" } },
      ],
      solution: ["c", "o"]
    },
    {
      id: "chem-h2",
      title: { de: "Wasserstoffgas", en: "Hydrogen Gas", hu: "Hidrogéngáz", ro: "Gaz hidrogen" },
      instruction: { de: "Baue H2.", en: "Build H2.", hu: "Építs H2-t.", ro: "Construiește H2." },
      hint: { de: "Zwei Wasserstoffatome.", en: "Two hydrogen atoms.", hu: "Két hidrogénatom.", ro: "Doi atomi de hidrogen." },
      theme: { bg: "#0f172a", accent: "#94a3b8", card: "#1e293b" },
      parts: [
        { id: "h1", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
        { id: "h2", label: { de: "H", en: "H", hu: "H", ro: "H" }, color: "#e2e8f0" },
      ],
      slots: [
        { id: "s1", label: { de: "H", en: "H", hu: "H", ro: "H" } },
        { id: "s2", label: { de: "H", en: "H", hu: "H", ro: "H" } },
      ],
      solution: ["h1", "h2"]
    }
  ],
  memoryRadar: [
    {
      id: "chem-symbols-1",
      title: { de: "Symbole 1", en: "Symbols 1", hu: "Vegyjelek 1", ro: "Simboluri 1" },
      instruction: { de: "Finde die passenden Paare (Element und Symbol).", en: "Find the matching pairs (Element and Symbol).", hu: "Keresd meg a párokat (Elem és Vegyjel).", ro: "Găsește perechile (Element și Simbol)." },
      flashDurationMs: 3000,
      selectionLimit: 2,
      theme: { bg: "#0f172a", accent: "#3b82f6", radar: "#60a5fa" },
      targetItems: [
        { id: "h1", label: { de: "Wasserstoff", en: "Hydrogen", hu: "Hidrogén", ro: "Hidrogen" }, emoji: "🎈" },
        { id: "h2", label: { de: "H", en: "H", hu: "H", ro: "H" }, emoji: "🔤" },
        { id: "o1", label: { de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "o2", label: { de: "O", en: "O", hu: "O", ro: "O" }, emoji: "🔤" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "N", en: "N", hu: "N", ro: "N" }, emoji: "❌" },
        { id: "d2", label: { de: "C", en: "C", hu: "C", ro: "C" }, emoji: "❌" },
      ]
    },
    {
      id: "chem-symbols-2",
      title: { de: "Symbole 2", en: "Symbols 2", hu: "Vegyjelek 2", ro: "Simboluri 2" },
      instruction: { de: "Finde die passenden Paare.", en: "Find the matching pairs.", hu: "Keresd meg a párokat.", ro: "Găsește perechile." },
      flashDurationMs: 3000,
      selectionLimit: 2,
      theme: { bg: "#1e1b4b", accent: "#8b5cf6", radar: "#a855f7" },
      targetItems: [
        { id: "c1", label: { de: "Kohlenstoff", en: "Carbon", hu: "Szén", ro: "Carbon" }, emoji: "🪨" },
        { id: "c2", label: { de: "C", en: "C", hu: "C", ro: "C" }, emoji: "🔤" },
        { id: "n1", label: { de: "Stickstoff", en: "Nitrogen", hu: "Nitrogén", ro: "Azot" }, emoji: "💨" },
        { id: "n2", label: { de: "N", en: "N", hu: "N", ro: "N" }, emoji: "🔤" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "He", en: "He", hu: "He", ro: "He" }, emoji: "❌" },
        { id: "d2", label: { de: "Na", en: "Na", hu: "Na", ro: "Na" }, emoji: "❌" },
      ]
    },
    {
      id: "chem-formulas-1",
      title: { de: "Formeln", en: "Formulas", hu: "Képletek", ro: "Formule" },
      instruction: { de: "Paare aus Stoff und Formel.", en: "Match substance and formula.", hu: "Párosítsd az anyagot és a képletet.", ro: "Asociați substanța și formula." },
      flashDurationMs: 3500,
      selectionLimit: 2,
      theme: { bg: "#064e3b", accent: "#10b981", radar: "#34d399" },
      targetItems: [
        { id: "w1", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "w2", label: { de: "H2O", en: "H2O", hu: "H2O", ro: "H2O" }, emoji: "🔤" },
        { id: "s1", label: { de: "Salz", en: "Salt", hu: "Só", ro: "Sare" }, emoji: "🧂" },
        { id: "s2", label: { de: "NaCl", en: "NaCl", hu: "NaCl", ro: "NaCl" }, emoji: "🔤" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "CO2", en: "CO2", hu: "CO2", ro: "CO2" }, emoji: "❌" },
        { id: "d2", label: { de: "HCl", en: "HCl", hu: "HCl", ro: "HCl" }, emoji: "❌" },
      ]
    },
    {
      id: "chem-tools",
      title: { de: "Laborgeräte", en: "Lab Tools", hu: "Laboreszközök", ro: "Unelte de laborator" },
      instruction: { de: "Finde die passenden Geräte.", en: "Find the matching tools.", hu: "Keresd meg a megfelelő eszközöket.", ro: "Găsește uneltele potrivite." },
      flashDurationMs: 3000,
      selectionLimit: 2,
      theme: { bg: "#450a0a", accent: "#ef4444", radar: "#f87171" },
      targetItems: [
        { id: "t1", label: { de: "Becherglas", en: "Beaker", hu: "Főzőpohár", ro: "Pahar Berzelius" }, emoji: "🥛" },
        { id: "t2", label: { de: "Becher", en: "Beaker", hu: "Pohár", ro: "Pahar" }, emoji: "🔍" },
        { id: "f1", label: { de: "Reagenzglas", en: "Test Tube", hu: "Kémcső", ro: "Eprubetă" }, emoji: "🧪" },
        { id: "f2", label: { de: "Glasröhrchen", en: "Glass Tube", hu: "Üvegcső", ro: "Tub de sticlă" }, emoji: "🔍" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Waage", en: "Scale", hu: "Mérleg", ro: "Cântar" }, emoji: "⚖️" },
      ]
    },
    {
      id: "chem-ph-examples",
      title: { de: "Säure & Base", en: "Acid & Base", hu: "Sav és Bázis", ro: "Acid & Bază" },
      instruction: { de: "Paare: Beispiel und pH-Typ.", en: "Pairs: Example and pH type.", hu: "Párok: Példa és pH típus.", ro: "Perechi: Exemplu și tip pH." },
      flashDurationMs: 3500,
      selectionLimit: 2,
      theme: { bg: "#3b0764", accent: "#a855f7", radar: "#c084fc" },
      targetItems: [
        { id: "a1", label: { de: "Zitrone", en: "Lemon", hu: "Citrom", ro: "Lămâie" }, emoji: "🍋" },
        { id: "a2", label: { de: "Säure", en: "Acid", hu: "Sav", ro: "Acid" }, emoji: "🔴" },
        { id: "b1", label: { de: "Seife", en: "Soap", hu: "Szappan", ro: "Săpun" }, emoji: "🧼" },
        { id: "b2", label: { de: "Base", en: "Base", hu: "Bázis", ro: "Bază" }, emoji: "🔵" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Neutral", en: "Neutral", hu: "Semleges", ro: "Neutru" }, emoji: "⚪" },
      ]
    },
    {
      id: "chem-states",
      title: { de: "Aggregatzustände", en: "States of Matter", hu: "Halmazállapotok", ro: "Stări de Agregare" },
      instruction: { de: "Paare: Zustand und Beispiel.", en: "Pairs: State and example.", hu: "Párok: Állapot és példa.", ro: "Perechi: Stare și exemplu." },
      flashDurationMs: 3500,
      selectionLimit: 2,
      theme: { bg: "#082f49", accent: "#0ea5e9", radar: "#38bdf8" },
      targetItems: [
        { id: "s1", label: { de: "Fest", en: "Solid", hu: "Szilárd", ro: "Solid" }, emoji: "🧊" },
        { id: "s2", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "❄️" },
        { id: "g1", label: { de: "Gas", en: "Gas", hu: "Gáz", ro: "Gaz" }, emoji: "💨" },
        { id: "g2", label: { de: "Dampf", en: "Steam", hu: "Gőz", ro: "Abur" }, emoji: "♨️" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Plasma", en: "Plasma", hu: "Plazma", ro: "Plasmă" }, emoji: "⚡" },
      ]
    },
    {
      id: "chem-groups",
      title: { de: "Elementgruppen", en: "Element Groups", hu: "Elemcsoportok", ro: "Grupe de elemente" },
      instruction: { de: "Paare: Element und Gruppe.", en: "Pairs: Element and group.", hu: "Párok: Elem és csoport.", ro: "Perechi: Element și grupă." },
      flashDurationMs: 4000,
      selectionLimit: 2,
      theme: { bg: "#172554", accent: "#3b82f6", radar: "#60a5fa" },
      targetItems: [
        { id: "g1", label: { de: "Helium", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "🎈" },
        { id: "g2", label: { de: "Edelgas", en: "Noble Gas", hu: "Nemesgáz", ro: "Gaz Nobil" }, emoji: "✨" },
        { id: "a1", label: { de: "Natrium", en: "Sodium", hu: "Nátrium", ro: "Sodiu" }, emoji: "🧂" },
        { id: "a2", label: { de: "Alkalimetall", en: "Alkali Metal", hu: "Alkalifém", ro: "Metal Alcalin" }, emoji: "⚡" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Halogen", en: "Halogen", hu: "Halogén", ro: "Halogen" }, emoji: "❌" },
      ]
    },
    {
      id: "chem-atomic-numbers",
      title: { de: "Ordnungszahlen", en: "Atomic Numbers", hu: "Rendszámok", ro: "Numere Atomice" },
      instruction: { de: "Paare: Element und Ordnungszahl.", en: "Pairs: Element and atomic number.", hu: "Párok: Elem és rendszám.", ro: "Perechi: Element și număr atomic." },
      flashDurationMs: 4000,
      selectionLimit: 2,
      theme: { bg: "#27272a", accent: "#71717a", radar: "#a1a1aa" },
      targetItems: [
        { id: "h1", label: { de: "Wasserstoff", en: "Hydrogen", hu: "Hidrogén", ro: "Hidrogen" }, emoji: "H" },
        { id: "h2", label: { de: "1", en: "1", hu: "1", ro: "1" }, emoji: "1️⃣" },
        { id: "he1", label: { de: "Helium", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "He" },
        { id: "he2", label: { de: "2", en: "2", hu: "2", ro: "2" }, emoji: "2️⃣" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "6", en: "6", hu: "6", ro: "6" }, emoji: "6️⃣" },
      ]
    },
    {
      id: "chem-ions",
      title: { de: "Ionen", en: "Ions", hu: "Ionok", ro: "Ioni" },
      instruction: { de: "Paare: Begriff und Ladung.", en: "Pairs: Term and charge.", hu: "Párok: Fogalom és töltés.", ro: "Perechi: Termen și sarcină." },
      flashDurationMs: 3500,
      selectionLimit: 2,
      theme: { bg: "#3f2c25", accent: "#ea580c", radar: "#f97316" },
      targetItems: [
        { id: "p1", label: { de: "Kation", en: "Cation", hu: "Kation", ro: "Cation" }, emoji: "➕" },
        { id: "p2", label: { de: "Positiv", en: "Positive", hu: "Pozitív", ro: "Pozitiv" }, emoji: "👍" },
        { id: "n1", label: { de: "Anion", en: "Anion", hu: "Anion", ro: "Anion" }, emoji: "➖" },
        { id: "n2", label: { de: "Negativ", en: "Negative", hu: "Negatív", ro: "Negativ" }, emoji: "👎" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Neutral", en: "Neutral", hu: "Semleges", ro: "Neutru" }, emoji: "⚪" },
      ]
    },
    {
      id: "chem-indicators",
      title: { de: "Indikatoren", en: "Indicators", hu: "Indikátorok", ro: "Indicatori" },
      instruction: { de: "Paare: Lackmusfarbe und pH.", en: "Pairs: Litmus color and pH.", hu: "Párok: Lakmusz színe és pH.", ro: "Perechi: Culoare turnesol și pH." },
      flashDurationMs: 4000,
      selectionLimit: 2,
      theme: { bg: "#4a044e", accent: "#d946ef", radar: "#e879f9" },
      targetItems: [
        { id: "r1", label: { de: "Rot", en: "Red", hu: "Piros", ro: "Roșu" }, emoji: "🔴" },
        { id: "r2", label: { de: "Säure", en: "Acid", hu: "Sav", ro: "Acid" }, emoji: "🍋" },
        { id: "b1", label: { de: "Blau", en: "Blue", hu: "Kék", ro: "Albastru" }, emoji: "🔵" },
        { id: "b2", label: { de: "Base", en: "Base", hu: "Bázis", ro: "Bază" }, emoji: "🧼" },
      ],
      decoyItems: [
        { id: "d1", label: { de: "Grün", en: "Green", hu: "Zöld", ro: "Verde" }, emoji: "🟢" },
      ]
    }
  ]
};
