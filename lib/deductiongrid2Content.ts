import type { DeductionLevelTemplate, DeductionLocale, DeductionLevelView } from "./deductionContent";
import { materializeDeductionLevels } from "./deductionContent";

const DEDUCTIONGRID2_LEVELS: DeductionLevelTemplate[] = [
  {
    level: 1,
    badge: "🚀",
    title: {
      en: "Inner Orbit",
      hu: "Belső pálya",
      de: "Innere Umlaufbahn",
      ro: "Orbita interioară",
    },
    rows: ["Nova", "Orion", "Vega"],
    columns: ["Moon", "Mars", "Venus"],
    cluePacks: {
      en: [
        ["Nova was not on the Moon.", "Orion was on Venus.", "Vega was not on Mars."],
        ["Orion was on Venus.", "Nova was on Mars.", "Vega was not on Mars."],
        ["Vega was on the Moon.", "Nova was on Mars.", "Orion was not on Mars."]
      ],
      hu: [
        ["Nova nem a Holdon volt.", "Orion a Vénuszon volt.", "Vega nem a Marson volt."],
        ["Orion a Vénuszon volt.", "Nova a Marson volt.", "Vega nem a Marson volt."],
        ["Vega a Holdon volt.", "Nova a Marson volt.", "Orion nem a Marson volt."]
      ],
      de: [
        ["Nova war nicht auf dem Mond.", "Orion war auf der Venus.", "Vega war nicht auf dem Mars."],
        ["Orion war auf der Venus.", "Nova war auf dem Mars.", "Vega war nicht auf dem Mars."],
        ["Vega war auf dem Mond.", "Nova war auf dem Mars.", "Orion war nicht auf dem Mars."]
      ],
      ro: [
        ["Nova nu era pe Lună.", "Orion era pe Venus.", "Vega nu era pe Marte."],
        ["Orion era pe Venus.", "Nova era pe Marte.", "Vega nu era pe Marte."],
        ["Vega era pe Lună.", "Nova era pe Marte.", "Orion nu era pe Marte."]
      ]
    },
    solution: [1, 2, 0],
  },
  {
    level: 2,
    badge: "💎",
    title: {
      en: "Lost Relics",
      hu: "Elveszett ereklyék",
      de: "Verlorene Relikte",
      ro: "Relicve pierdute",
    },
    rows: ["Lyra", "Jax", "Kira"],
    columns: ["Gem", "Map", "Key"],
    cluePacks: {
      en: [
        ["Lyra found the Map.", "Jax did not find the Key.", "Kira did not find the Gem."],
        ["Lyra found the Map.", "Jax found the Gem.", "Kira did not find the Gem."],
        ["Kira found the Key.", "Lyra found the Map.", "Jax was not with the Map."]
      ],
      hu: [
        ["Lyra a Térképet találta meg.", "Jax nem a Kulcsot találta meg.", "Kira nem az Ékkövet találta meg."],
        ["Lyra a Térképet találta meg.", "Jax az Ékkövet találta meg.", "Kira nem az Ékkövet találta meg."],
        ["Kira a Kulcsot találta meg.", "Lyra a Térképet találta meg.", "Jax nem a Térképet találta meg."]
      ],
      de: [
        ["Lyra fand die Karte.", "Jax fand nicht den Schlüssel.", "Kira fand nicht den Edelstein."],
        ["Lyra fand die Karte.", "Jax fand den Edelstein.", "Kira fand nicht den Edelstein."],
        ["Kira fand den Schlüssel.", "Lyra fand die Karte.", "Jax war nicht bei der Karte."]
      ],
      ro: [
        ["Lyra a găsit harta.", "Jax nu a găsit cheia.", "Kira nu a găsit gema."],
        ["Lyra a găsit harta.", "Jax a găsit gema.", "Kira nu a găsit gema."],
        ["Kira a găsit cheia.", "Lyra a găsit harta.", "Jax nu era cu harta."]
      ]
    },
    solution: [1, 0, 2],
  },
  {
    level: 3,
    badge: "☀️",
    title: {
      en: "Solar Flare",
      hu: "Naperupció",
      de: "Sonnenausbruch",
      ro: "Erupție solară",
    },
    rows: ["Sol", "Luna", "Terra"],
    columns: ["Red Zone", "Blue Zone", "Gold Zone"],
    cluePacks: {
      en: [
        ["Sol was not in the Red Zone.", "Luna was not in the Gold Zone.", "Terra was in the Blue Zone.", "Sol was not in the Blue Zone."],
        ["Sol was in the Gold Zone.", "Luna was in the Red Zone.", "Terra was not in the Gold Zone."],
        ["Terra was in the Blue Zone.", "Sol was in the Gold Zone.", "Luna was not in the Gold Zone."]
      ],
      hu: [
        ["Sol nem a Vörös zónában volt.", "Luna nem az Arany zónában volt.", "Terra a Kék zónában volt.", "Sol nem a Kék zónában volt."],
        ["Sol az Arany zónában volt.", "Luna a Vörös zónában volt.", "Terra nem az Arany zónában volt."],
        ["Terra a Kék zónában volt.", "Sol az Arany zónában volt.", "Luna nem az Arany zónában volt."]
      ],
      de: [
        ["Sol war nicht in der roten Zone.", "Luna war nicht in der goldenen Zone.", "Terra war in der blauen Zone.", "Sol war nicht in der blauen Zone."],
        ["Sol war in der goldenen Zone.", "Luna war in der roten Zone.", "Terra war nicht in der goldenen Zone."],
        ["Terra war in der blauen Zone.", "Sol war in der goldenen Zone.", "Luna war nicht in der goldenen Zone."]
      ],
      ro: [
        ["Sol nu era în zona roșie.", "Luna nu era în zona aurie.", "Terra era în zona albastră.", "Sol nu era în zona albastră."],
        ["Sol era în zona aurie.", "Luna era în zona roșie.", "Terra nu era în zona aurie."],
        ["Terra era în zona albastră.", "Sol era în zona aurie.", "Luna nu era în zona aurie."]
      ]
    },
    solution: [2, 0, 1],
  },
  {
    level: 4,
    badge: "🛸",
    title: {
      en: "Base Camp",
      hu: "Alaptábor",
      de: "Basislager",
      ro: "Tabăra de bază",
    },
    rows: ["Commander", "Pilot", "Scout"],
    columns: ["Flagship", "Outpost", "Star-Gate"],
    cluePacks: {
      en: [
        ["The Pilot was at the Star-Gate.", "The Scout was not at the Flagship.", "The Commander was not at the Star-Gate."],
        ["The Commander was at the Flagship.", "The Scout was at the Outpost.", "The Pilot was not at the Flagship."],
        ["The Scout was at the Outpost.", "The Pilot was at the Star-Gate.", "The Commander was not at the Star-Gate."]
      ],
      hu: [
        ["A Pilóta a Csillagkapunál volt.", "A Felderítő nem a Főhajónál volt.", "A Parancsnok nem a Csillagkapunál volt."],
        ["A Parancsnok a Főhajónál volt.", "A Felderítő az Alaptáborban volt.", "A Pilóta nem a Főhajónál volt."],
        ["A Felderítő az Alaptáborban volt.", "A Pilóta a Csillagkapunál volt.", "A Parancsnok nem a Csillagkapunál volt."]
      ],
      de: [
        ["Der Pilot war am Sternentor.", "Der Scout war nicht am Flaggschiff.", "Der Kommandant war nicht am Sternentor."],
        ["Der Kommandant war am Flaggschiff.", "Der Scout war am Außenposten.", "Der Pilot war nicht am Flaggschiff."],
        ["Der Scout war am Außenposten.", "Der Pilot war am Sternentor.", "Der Kommandant war nicht am Sternentor."]
      ],
      ro: [
        ["Pilotul era la poarta stelară.", "Scoutul nu era la nava-amiral.", "Comandantul nu era la poarta stelară."],
        ["Comandantul era la nava-amiral.", "Scoutul era la avanpost.", "Pilotul nu era la nava-amiral."],
        ["Scoutul era la avanpost.", "Pilotul era la poarta stelară.", "Comandantul nu era la poarta stelară."]
      ]
    },
    solution: [0, 2, 1],
  },
  {
    level: 5,
    badge: "🌀",
    title: {
      en: "Nebula Core",
      hu: "Ködmag",
      de: "Nebelkern",
      ro: "Nucleul nebuloasei",
    },
    rows: ["Alpha", "Beta", "Delta"],
    columns: ["Sector 1", "Sector 2", "Sector 3"],
    cluePacks: {
      en: [
        ["Alpha was not in Sector 1.", "Beta was in Sector 2.", "Delta was not in Sector 3."],
        ["Alpha was in Sector 3.", "Beta was not in Sector 3.", "Delta was in Sector 1."],
        ["Delta was in Sector 1.", "Beta was in Sector 2.", "Alpha was not in Sector 2."]
      ],
      hu: [
        ["Alpha nem az 1. szektorban volt.", "Beta a 2. szektorban volt.", "Delta nem a 3. szektorban volt."],
        ["Alpha a 3. szektorban volt.", "Beta nem a 3. szektorban volt.", "Delta az 1. szektorban volt."],
        ["Delta az 1. szektorban volt.", "Beta a 2. szektorban volt.", "Alpha nem a 2. szektorban volt."]
      ],
      de: [
        ["Alpha war nicht in Sektor 1.", "Beta war in Sektor 2.", "Delta war nicht in Sektor 3."],
        ["Alpha war in Sektor 3.", "Beta war nicht in Sektor 3.", "Delta war in Sektor 1."],
        ["Delta war in Sektor 1.", "Beta war in Sektor 2.", "Alpha war nicht in Sektor 2."]
      ],
      ro: [
        ["Alpha nu era în sectorul 1.", "Beta era în sectorul 2.", "Delta nu era în sectorul 3."],
        ["Alpha era în sectorul 3.", "Beta nu era în sectorul 3.", "Delta era în sectorul 1."],
        ["Delta era în sectorul 1.", "Beta era în sectorul 2.", "Alpha nu era în sectorul 2."]
      ]
    },
    solution: [2, 1, 0],
  },
  {
    level: 6,
    badge: "🗿",
    title: {
      en: "Statue of Orion",
      hu: "Orion szobra",
      de: "Statue des Orion",
      ro: "Statuia lui Orion",
    },
    rows: ["Nova", "Orion", "Vega", "Lyra"],
    columns: ["Crystal", "Idol", "Map", "Key"],
    cluePacks: {
      en: [
        ["Nova found the Key.", "Vega found the Idol.", "Orion did not find the Crystal.", "Orion did not find the Key."],
        ["Lyra found the Crystal.", "Nova found the Key.", "Orion found the Map.", "Vega did not find the Crystal."],
        ["Orion found the Map.", "Vega found the Idol.", "Nova was not with the Map.", "Lyra was not with the Idol."]
      ],
      hu: [
        ["Nova a Kulcsot találta meg.", "Vega az Idolt találta meg.", "Orion nem a Kristályt találta meg.", "Orion nem a Kulcsot találta meg."],
        ["Lyra a Kristályt találta meg.", "Nova a Kulcsot találta meg.", "Orion a Térképet találta meg.", "Vega nem a Kristályt találta meg."],
        ["Orion a Térképet találta meg.", "Vega az Idolt találta meg.", "Nova nem a Térképet találta meg.", "Lyra nem az Idolt találta meg."]
      ],
      de: [
        ["Nova fand den Schlüssel.", "Vega fand das Idol.", "Orion fand nicht den Kristall.", "Orion fand nicht den Schlüssel."],
        ["Lyra fand den Kristall.", "Nova fand den Schlüssel.", "Orion fand die Karte.", "Vega fand nicht den Kristall."],
        ["Orion fand die Karte.", "Vega fand das Idol.", "Nova war nicht bei der Karte.", "Lyra war nicht beim Idol."]
      ],
      ro: [
        ["Nova a găsit cheia.", "Vega a găsit idolul.", "Orion nu a găsit cristalul.", "Orion nu a găsit cheia."],
        ["Lyra a găsit cristalul.", "Nova a găsit cheia.", "Orion a găsit harta.", "Vega nu a găsit cristalul."],
        ["Orion a găsit harta.", "Vega a găsit idolul.", "Nova nu era cu harta.", "Lyra nu era cu idolul."]
      ]
    },
    solution: [3, 2, 1, 0],
  },
  {
    level: 7,
    badge: "🪐",
    title: {
      en: "Giant Storm",
      hu: "Óriásvihar",
      de: "Riesensturm",
      ro: "Furtuna uriașă",
    },
    rows: ["Jax", "Kira", "Sol", "Luna"],
    columns: ["Mars", "Venus", "Saturn", "Jupiter"],
    cluePacks: {
      en: [
        ["Jax was not on Mars or Venus.", "Kira was on Saturn.", "Sol was on Mars.", "Luna was not on Jupiter."],
        ["Jax was on Jupiter.", "Luna was on Venus.", "Sol was on Mars.", "Kira was not on Mars."],
        ["Luna was on Venus.", "Kira was on Saturn.", "Sol was on Mars.", "Jax was not on Saturn."]
      ],
      hu: [
        ["Jax nem a Marson vagy a Vénuszon volt.", "Kira a Szaturnuszon volt.", "Sol a Marson volt.", "Luna nem a Jupiteren volt."],
        ["Jax a Jupiteren volt.", "Luna a Vénuszon volt.", "Sol a Marson volt.", "Kira nem a Marson volt."],
        ["Luna a Vénuszon volt.", "Kira a Szaturnuszon volt.", "Sol a Marson volt.", "Jax nem a Szaturnuszon volt."]
      ],
      de: [
        ["Jax war nicht auf dem Mars oder der Venus.", "Kira war auf dem Saturn.", "Sol war auf dem Mars.", "Luna war nicht auf dem Jupiter."],
        ["Jax war auf dem Jupiter.", "Luna war auf der Venus.", "Sol war auf dem Mars.", "Kira war nicht auf dem Mars."],
        ["Luna war auf der Venus.", "Kira war auf dem Saturn.", "Sol war auf dem Mars.", "Jax war nicht auf dem Saturn."]
      ],
      ro: [
        ["Jax nu era pe Marte sau Venus.", "Kira era pe Saturn.", "Sol era pe Marte.", "Luna nu era pe Jupiter."],
        ["Jax era pe Jupiter.", "Luna era pe Venus.", "Sol era pe Marte.", "Kira nu era pe Marte."],
        ["Luna era pe Venus.", "Kira era pe Saturn.", "Sol era pe Marte.", "Jax nu era pe Saturn."]
      ]
    },
    solution: [3, 2, 0, 1],
  },
  {
    level: 8,
    badge: "🌟",
    title: {
      en: "Alpha Centauri",
      hu: "Alfa Centauri",
      de: "Alpha Centauri",
      ro: "Alpha Centauri",
    },
    rows: ["Red", "Blue", "Green", "Gold"],
    columns: ["Alpha", "Beta", "Gamma", "Delta"],
    cluePacks: {
      en: [
        ["Red reached Delta.", "Blue was not on Alpha or Beta.", "Green was on Alpha.", "Gold was on Beta."],
        ["Green was on Alpha.", "Gold was on Beta.", "Blue was on Gamma.", "Red was not on Alpha."],
        ["Gold was on Beta.", "Red was on Delta.", "Green was on Alpha.", "Blue was not on Alpha."]
      ],
      hu: [
        ["A Vörös a Deltát érte el.", "A Kék nem az Alfa vagy a Béta pályán volt.", "A Zöld az Alfán volt.", "Az Arany a Bétán volt."],
        ["A Zöld az Alfán volt.", "Az Arany a Bétán volt.", "A Kék a Gammán volt.", "A Vörös nem az Alfán volt."],
        ["Az Arany a Bétán volt.", "A Vörös a Deltán volt.", "A Zöld az Alfán volt.", "A Kék nem az Alfán volt."]
      ],
      de: [
        ["Rot erreichte Delta.", "Blau war nicht auf Alpha oder Beta.", "Grün war auf Alpha.", "Gold war auf Beta."],
        ["Grün war auf Alpha.", "Gold war auf Beta.", "Blau war auf Gamma.", "Rot war nicht auf Alpha."],
        ["Gold war auf Beta.", "Rot war auf Delta.", "Grün war auf Alpha.", "Blau war nicht auf Alpha."]
      ],
      ro: [
        ["Roșu a ajuns la Delta.", "Albastru nu era pe Alpha sau Beta.", "Verde era pe Alpha.", "Auriu era pe Beta."],
        ["Verde era pe Alpha.", "Auriu era pe Beta.", "Albastru era pe Gamma.", "Roșu nu era pe Alpha."],
        ["Auriu era pe Beta.", "Roșu era pe Delta.", "Verde era pe Alpha.", "Albastru nu era pe Alpha."]
      ]
    },
    solution: [3, 2, 0, 1],
  },
  {
    level: 9,
    badge: "🌋",
    title: {
      en: "Elemental Forge",
      hu: "Elemi kovácsműhely",
      de: "Elementarschmiede",
      ro: "Forja elementelor",
    },
    rows: ["Tank", "Healer", "Mage", "Rogue"],
    columns: ["Fire", "Water", "Earth", "Air"],
    cluePacks: {
      en: [
        ["Tank was not linked to Fire or Water.", "The Healer matched Water.", "The Mage matched Fire.", "The Rogue was not linked to Earth."],
        ["The Mage matched Fire.", "The Healer matched Water.", "The Tank was linked to Earth.", "The Rogue was matched with Air."],
        ["The Rogue was matched with Air.", "The Healer matched Water.", "The Mage matched Fire.", "The Tank was not matched with Air."]
      ],
      hu: [
        ["A Tank nem a Tűzhöz vagy a Vízhez kapcsolódott.", "A Gyógyító a Vízhez kapcsolódott.", "A Mágus a Tűzhöz kapcsolódott.", "A Tolvaj nem a Földhöz kapcsolódott."],
        ["A Mágus a Tűzhöz kapcsolódott.", "A Gyógyító a Vízhez kapcsolódott.", "A Tank a Földhöz kapcsolódott.", "A Tolvaj a Levegőhöz kapcsolódott."],
        ["A Tolvaj a Levegőhöz kapcsolódott.", "A Gyógyító a Vízhez kapcsolódott.", "A Mágus a Tűzhöz kapcsolódott.", "A Tank nem a Levegőhöz kapcsolódott."]
      ],
      de: [
        ["Der Tank war nicht mit Feuer oder Wasser verbunden.", "Der Heiler war mit Wasser verbunden.", "Der Magier war mit Feuer verbunden.", "Der Schurke war nicht mit Erde verbunden."],
        ["Der Magier war mit Feuer verbunden.", "Der Heiler war mit Wasser verbunden.", "Der Tank war mit Erde verbunden.", "Der Schurke war mit Luft verbunden."],
        ["Der Schurke war mit Luft verbunden.", "Der Heiler war mit Wasser verbunden.", "Der Magier war mit Feuer verbunden.", "Der Tank war nicht mit Luft verbunden."]
      ],
      ro: [
        ["Tankul nu era asociat cu focul sau apa.", "Vindecătorul era asociat cu apa.", "Magul era asociat cu focul.", "Răufăcătorul nu era asociat cu pământul."],
        ["Magul era asociat cu focul.", "Vindecătorul era asociat cu apa.", "Tankul era asociat cu pământul.", "Răufăcătorul era asociat cu aerul."],
        ["Răufăcătorul era asociat cu aerul.", "Vindecătorul era asociat cu apa.", "Magul era asociat cu focul.", "Tankul nu era asociat cu aerul."]
      ]
    },
    solution: [2, 1, 0, 3],
  },
  {
    level: 10,
    badge: "❄️",
    title: {
      en: "Seasonal Shift",
      hu: "Évszakváltás",
      de: "Jahreszeitenwechsel",
      ro: "Schimbare de anotimp",
    },
    rows: ["North", "South", "East", "West"],
    columns: ["Winter", "Spring", "Summer", "Autumn"],
    cluePacks: {
      en: [
        ["North matches Winter.", "South is not Spring or Summer.", "East matches Summer.", "West matches Spring."],
        ["East matches Summer.", "West matches Spring.", "North matches Winter.", "South matches Autumn."],
        ["South matches Autumn.", "North matches Winter.", "East matches Summer.", "West matches Spring."]
      ],
      hu: [
        ["Észak a Télhez tartozik.", "Dél nem a Tavasz vagy a Nyár.", "Kelet a Nyárhoz tartozik.", "Nyugat a Tavaszhoz tartozik."],
        ["Kelet a Nyárhoz tartozik.", "Nyugat a Tavaszhoz tartozik.", "Észak a Télhez tartozik.", "Dél az Őszhöz tartozik."],
        ["Dél az Őszhöz tartozik.", "Észak a Télhez tartozik.", "Kelet a Nyárhoz tartozik.", "Nyugat a Tavaszhoz tartozik."]
      ],
      de: [
        ["Nord passt zum Winter.", "Süd ist nicht Frühling oder Sommer.", "Ost passt zum Sommer.", "West passt zum Frühling."],
        ["Ost passt zum Sommer.", "West passt zum Frühling.", "Nord passt zum Winter.", "Süd passt zum Herbst."],
        ["Süd passt zum Herbst.", "Nord passt zum Winter.", "Ost passt zum Sommer.", "West passt zum Frühling."]
      ],
      ro: [
        ["Nordul corespunde iernii.", "Sudul nu este primăvara sau vara.", "Estul corespunde verii.", "Vestul corespunde primăverii."],
        ["Estul corespunde verii.", "Vestul corespunde primăverii.", "Nordul corespunde iernii.", "Sudul corespunde toamnei."],
        ["Sudul corespunde toamnei.", "Nordul corespunde iernii.", "Estul corespunde verii.", "Vestul corespunde primăverii."]
      ]
    },
    solution: [0, 3, 2, 1],
  },
];

export function getDeductionGrid2Levels(lang: DeductionLocale, runSeed: number): DeductionLevelView[] {
  return materializeDeductionLevels(DEDUCTIONGRID2_LEVELS, lang, runSeed);
}
