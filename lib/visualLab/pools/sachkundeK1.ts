import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const SACHKUNDE_VISUAL_LAB_K1: SachkundeVisualLabGradePool = {
  grade: 1,
  meteorCatch: [
    {
      id: "k1-body-parts",
      title: "Körperteil-Galaxie",
      prompt: "Fange nur Körperteile ein.",
      goal: 6,
      speed: 4,
      theme: { sky: "#0b132b", glow: "#00f5d4", accent: "#00bbf9" },
      correctItems: [
        { id: "arm", label: "Arm", emoji: "💪" },
        { id: "hand", label: "Hand", emoji: "✋" },
        { id: "auge", label: "Auge", emoji: "👁️" },
        { id: "bein", label: "Bein", emoji: "🦵" },
        { id: "ohr", label: "Ohr", emoji: "👂" },
        { id: "nase", label: "Nase", emoji: "👃" },
        { id: "mund", label: "Mund", emoji: "👄" },
        { id: "fuss", label: "Fuß", emoji: "🦶" },
      ],
      wrongItems: [
        { id: "stuhl", label: "Stuhl", emoji: "🪑" },
        { id: "auto", label: "Auto", emoji: "🚗" },
        { id: "ball", label: "Ball", emoji: "⚽" },
        { id: "buch", label: "Buch", emoji: "📖" },
      ],
    },
    {
      id: "k1-gesundheit",
      title: "Gesundheits-Kometen",
      prompt: "Sammle gesunde Dinge ein.",
      goal: 8,
      speed: 5,
      theme: { sky: "#1a0b2e", glow: "#f15bb5", accent: "#9b5de5" },
      correctItems: [
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "karotte", label: "Karotte", emoji: "🥕" },
        { id: "wasser", label: "Wasser", emoji: "💧" },
        { id: "zahnbuerste", label: "Zahnbürste", emoji: "🪥" },
        { id: "seife", label: "Seife", emoji: "🧼" },
        { id: "bett", label: "Schlaf", emoji: "🛌" },
      ],
      wrongItems: [
        { id: "lutscher", label: "Lutscher", emoji: "🍭" },
        { id: "limonade", label: "Limonade", emoji: "🥤" },
        { id: "kuchen", label: "Kuchen", emoji: "🍰" },
        { id: "schmutz", label: "Schmutz", emoji: "🦠" },
      ],
    },
    {
      id: "k1-wildtiere",
      title: "Sternbild der Wildtiere",
      prompt: "Fange nur wilde Tiere ein.",
      goal: 7,
      speed: 5,
      theme: { sky: "#0f172a", glow: "#22c55e", accent: "#10b981" },
      correctItems: [
        { id: "loewe", label: "Löwe", emoji: "🦁" },
        { id: "elefant", label: "Elefant", emoji: "🐘" },
        { id: "baer", label: "Bär", emoji: "🐻" },
        { id: "wolf", label: "Wolf", emoji: "🐺" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
        { id: "reh", label: "Reh", emoji: "🦌" },
      ],
      wrongItems: [
        { id: "hund", label: "Hund", emoji: "🐶" },
        { id: "katze", label: "Katze", emoji: "🐱" },
        { id: "hamster", label: "Hamster", emoji: "🐹" },
        { id: "kuh", label: "Kuh", emoji: "🐄" },
      ],
    },
    {
      id: "k1-muell-papier",
      title: "Recycling-Orbit (Papier)",
      prompt: "Sammle nur Papiermüll für die blaue Tonne.",
      goal: 6,
      speed: 6,
      theme: { sky: "#1e1b4b", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "zeitung", label: "Zeitung", emoji: "📰" },
        { id: "karton", label: "Karton", emoji: "📦" },
        { id: "heft", label: "Heft", emoji: "📓" },
        { id: "brief", label: "Brief", emoji: "✉️" },
      ],
      wrongItems: [
        { id: "flasche", label: "Glasflasche", emoji: "🍾" },
        { id: "apfelgriebs", label: "Apfelrest", emoji: "🍏" },
        { id: "plastiktuete", label: "Plastiktüte", emoji: "🛍️" },
      ],
    },
    {
      id: "k1-verkehr",
      title: "Verkehrs-Kometen",
      prompt: "Fange nur Fahrzeuge ein.",
      goal: 6,
      speed: 4,
      theme: { sky: "#1e293b", glow: "#ef4444", accent: "#f87171" },
      correctItems: [
        { id: "auto", label: "Auto", emoji: "🚗" },
        { id: "bus", label: "Bus", emoji: "🚌" },
        { id: "fahrrad", label: "Fahrrad", emoji: "🚲" },
        { id: "zug", label: "Zug", emoji: "🚂" },
      ],
      wrongItems: [
        { id: "baum", label: "Baum", emoji: "🌳" },
        { id: "haus", label: "Haus", emoji: "🏠" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "k1-animals-home",
      title: "Orbit: Tiere zuordnen",
      instruction: "Ziehe die Tiere auf die richtige Umlaufbahn.",
      theme: { bg: "#020617", orbit: "#eab308", accent: "#f59e0b" },
      buckets: [
        { id: "haustier", label: "Haustier", color: "#f59e0b" },
        { id: "wildtier", label: "Wildtier", color: "#10b981" },
        { id: "bauernhof", label: "Bauernhof", color: "#ef4444" },
      ],
      items: [
        { id: "hund", label: "Hund", emoji: "🐶", bucketId: "haustier" },
        { id: "katze", label: "Katze", emoji: "🐱", bucketId: "haustier" },
        { id: "loewe", label: "Löwe", emoji: "🦁", bucketId: "wildtier" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊", bucketId: "wildtier" },
        { id: "kuh", label: "Kuh", emoji: "🐄", bucketId: "bauernhof" },
        { id: "schwein", label: "Schwein", emoji: "🐖", bucketId: "bauernhof" },
      ],
    },
    {
      id: "k1-sinne-sort",
      title: "Planet der Sinne",
      instruction: "Mit welchem Sinnesorgan machst du das?",
      theme: { bg: "#0f1123", orbit: "#00f5d4", accent: "#9b5de5" },
      buckets: [
        { id: "sehen", label: "Sehen 👁️", color: "#00f5d4" },
        { id: "hoeren", label: "Hören 👂", color: "#f15bb5" },
        { id: "schmecken", label: "Schmecken 👅", color: "#fee440" },
      ],
      items: [
        { id: "regenbogen", label: "Regenbogen", emoji: "🌈", bucketId: "sehen" },
        { id: "buch", label: "Buch lesen", emoji: "📖", bucketId: "sehen" },
        { id: "musik", label: "Musik", emoji: "🎵", bucketId: "hoeren" },
        { id: "glocke", label: "Glocke", emoji: "🔔", bucketId: "hoeren" },
        { id: "apfel", label: "Apfel", emoji: "🍎", bucketId: "schmecken" },
        { id: "eis", label: "Eiscreme", emoji: "🍦", bucketId: "schmecken" },
      ],
    },
    {
      id: "k1-jahreszeiten-sort",
      title: "Kosmische Jahreszeiten",
      instruction: "Ordne die Dinge dem Sommer oder Winter zu.",
      theme: { bg: "#1e293b", orbit: "#38bdf8", accent: "#fbbf24" },
      buckets: [
        { id: "sommer", label: "Sommer ☀️", color: "#fbbf24" },
        { id: "winter", label: "Winter ❄️", color: "#38bdf8" },
      ],
      items: [
        { id: "sonnenbrille", label: "Sonnenbrille", emoji: "🕶️", bucketId: "sommer" },
        { id: "strand", label: "Strand", emoji: "🏖️", bucketId: "sommer" },
        { id: "eis", label: "Eis", emoji: "🍦", bucketId: "sommer" },
        { id: "schneemann", label: "Schneemann", emoji: "⛄", bucketId: "winter" },
        { id: "handschuhe", label: "Handschuhe", emoji: "🧤", bucketId: "winter" },
        { id: "schlitten", label: "Schlitten", emoji: "🛷", bucketId: "winter" },
      ],
    },
    {
      id: "k1-verkehr-sort",
      title: "Fahrzeuge sortieren",
      instruction: "Wo bewegen sich diese Fahrzeuge?",
      theme: { bg: "#020617", orbit: "#3b82f6", accent: "#60a5fa" },
      buckets: [
        { id: "strasse", label: "Straße 🛣️", color: "#64748b" },
        { id: "wasser", label: "Wasser 🌊", color: "#0ea5e9" },
        { id: "luft", label: "Luft ☁️", color: "#f8fafc" },
      ],
      items: [
        { id: "auto", label: "Auto", emoji: "🚗", bucketId: "strasse" },
        { id: "bus", label: "Bus", emoji: "🚌", bucketId: "strasse" },
        { id: "schiff", label: "Schiff", emoji: "🚢", bucketId: "wasser" },
        { id: "boot", label: "Boot", emoji: "⛵", bucketId: "wasser" },
        { id: "flugzeug", label: "Flugzeug", emoji: "✈️", bucketId: "luft" },
        { id: "rakete", label: "Rakete", emoji: "🚀", bucketId: "luft" },
      ],
    },
    {
      id: "k1-tiere-beine",
      title: "Bein-Zähler",
      instruction: "Wie viele Beine hat das Tier?",
      theme: { bg: "#1a2f1c", orbit: "#4ade80", accent: "#22c55e" },
      buckets: [
        { id: "zwei", label: "Zwei Beine", color: "#facc15" },
        { id: "vier", label: "Vier Beine", color: "#fb923c" },
        { id: "keine", label: "Keine Beine", color: "#94a3b8" },
      ],
      items: [
        { id: "vogel", label: "Vogel", emoji: "🐦", bucketId: "zwei" },
        { id: "ente", label: "Ente", emoji: "🦆", bucketId: "zwei" },
        { id: "hund", label: "Hund", emoji: "🐶", bucketId: "vier" },
        { id: "katze", label: "Katze", emoji: "🐱", bucketId: "vier" },
        { id: "schlange", label: "Schlange", emoji: "🐍", bucketId: "keine" },
        { id: "fisch", label: "Fisch", emoji: "🐟", bucketId: "keine" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "k1-safety-route",
      title: "Signal-Läufer: Sicher unterwegs",
      instruction: "Triff in jeder Szene die richtige und sichere Entscheidung.",
      scenes: [
        {
          id: "ampel",
          title: "An der Ampel",
          prompt: "Die Fußgängerampel zeigt Rot. Was machst du?",
          sceneType: "traffic",
          visual: { icon: "🚦", bg: "#1f2937", accent: "#ef4444" },
          choices: [
            { id: "wait", label: "Ich bleibe stehen und warte." },
            { id: "run", label: "Ich laufe schnell rüber." },
          ],
          correctChoiceId: "wait",
          successFeedback: "Richtig! Bei Rot musst du stehen bleiben.",
          failFeedback: "Vorsicht! Bei Rot darfst du niemals gehen.",
        },
        {
          id: "zebra",
          title: "Am Zebrastreifen",
          prompt: "Du willst über den Zebrastreifen. Was tust du?",
          sceneType: "traffic",
          visual: { icon: "🛣️", bg: "#0f172a", accent: "#22c55e" },
          choices: [
            { id: "look", label: "Ich schaue nach links, rechts, links." },
            { id: "jump", label: "Ich gehe einfach los." },
          ],
          correctChoiceId: "look",
          successFeedback: "Genau. Erst schauen, dann sicher gehen.",
          failFeedback: "Falsch. Du musst immer erst prüfen, ob ein Auto kommt.",
        },
        {
          id: "helm",
          title: "Fahrrad fahren",
          prompt: "Du willst mit dem Fahrrad losfahren.",
          sceneType: "safety",
          visual: { icon: "🚲", bg: "#1e1b4b", accent: "#eab308" },
          choices: [
            { id: "helmet", label: "Ich setze meinen Fahrradhelm auf." },
            { id: "nohelmet", label: "Ich brauche keinen Helm." },
          ],
          correctChoiceId: "helmet",
          successFeedback: "Super! Der Helm schützt deinen Kopf.",
          failFeedback: "Gefährlich! Ein Helm ist wichtig für deine Sicherheit.",
        }
      ],
    },
    {
      id: "k1-hygiene-route",
      title: "Gesundheits-Mission",
      instruction: "Wähle das gesündeste Verhalten.",
      scenes: [
        {
          id: "haende",
          title: "Vor dem Essen",
          prompt: "Das Essen ist fertig. Was machst du zuerst?",
          sceneType: "safety",
          visual: { icon: "🧼", bg: "#0b132b", accent: "#00f5d4" },
          choices: [
            { id: "waschen", label: "Hände waschen mit Seife." },
            { id: "essen", label: "Sofort mit den Fingern essen." },
          ],
          correctChoiceId: "waschen",
          successFeedback: "Richtig! So wäschst du Keime weg.",
          failFeedback: "Nein, schmutzige Hände können krank machen.",
        },
        {
          id: "zaehne",
          title: "Am Abend",
          prompt: "Du gehst gleich ins Bett.",
          sceneType: "safety",
          visual: { icon: "🪥", bg: "#1c2541", accent: "#00bbf9" },
          choices: [
            { id: "putzen", label: "Ich putze mir gründlich die Zähne." },
            { id: "schlafen", label: "Ich lege mich einfach schlafen." },
          ],
          correctChoiceId: "putzen",
          successFeedback: "Sehr gut! Das schützt vor Karies.",
          failFeedback: "Nicht vergessen: Abends Zähne putzen ist wichtig!",
        }
      ],
    },
    {
      id: "k1-wetter-route",
      title: "Wetter-Mission",
      instruction: "Wähle das richtige Verhalten beim Wetter.",
      scenes: [
        {
          id: "regen",
          title: "Es regnet",
          prompt: "Es regnet stark. Was brauchst du?",
          sceneType: "safety",
          visual: { icon: "🌧️", bg: "#1e3a8a", accent: "#3b82f6" },
          choices: [
            { id: "schirm", label: "Einen Regenschirm." },
            { id: "sonnenbrille", label: "Eine Sonnenbrille." },
          ],
          correctChoiceId: "schirm",
          successFeedback: "Richtig! So bleibst du trocken.",
          failFeedback: "Die Sonnenbrille hilft nicht gegen Regen.",
        },
        {
          id: "sonne",
          title: "Heißer Sommertag",
          prompt: "Die Sonne scheint sehr stark.",
          sceneType: "safety",
          visual: { icon: "☀️", bg: "#78350f", accent: "#f59e0b" },
          choices: [
            { id: "creme", label: "Ich creme mich mit Sonnencreme ein." },
            { id: "schal", label: "Ich ziehe einen dicken Schal an." },
          ],
          correctChoiceId: "creme",
          successFeedback: "Super! Die Creme schützt deine Haut.",
          failFeedback: "Ein Schal ist im Sommer viel zu warm!",
        }
      ],
    },
    {
      id: "k1-tiere-route",
      title: "Tier-Begegnung",
      instruction: "Wie verhältst du dich bei Tieren richtig?",
      scenes: [
        {
          id: "fremder_hund",
          title: "Fremder Hund",
          prompt: "Ein fremder Hund bellt dich an.",
          sceneType: "safety",
          visual: { icon: "🐕", bg: "#3f2c23", accent: "#f97316" },
          choices: [
            { id: "ruhig", label: "Ich bleibe ruhig stehen." },
            { id: "rennen", label: "Ich renne schreiend weg." },
          ],
          correctChoiceId: "ruhig",
          successFeedback: "Genau! Wenn du ruhig bleibst, beruhigt sich auch der Hund.",
          failFeedback: "Rennen macht Hunde oft noch aufgeregter.",
        },
        {
          id: "vogel",
          title: "Junger Vogel",
          prompt: "Ein kleiner Vogel sitzt hilflos auf dem Weg.",
          sceneType: "safety",
          visual: { icon: "🐣", bg: "#064e3b", accent: "#10b981" },
          choices: [
            { id: "hilfe", label: "Ich rufe einen Erwachsenen." },
            { id: "mitnehmen", label: "Ich nehme ihn einfach mit nach Hause." },
          ],
          correctChoiceId: "hilfe",
          successFeedback: "Richtig! Erwachsene wissen, was zu tun ist.",
          failFeedback: "Besser nicht! Manchmal sind die Eltern des Vogels ganz in der Nähe.",
        }
      ],
    },
    {
      id: "k1-sinne-route",
      title: "Achtsamkeits-Signal",
      instruction: "Nutze deine Sinne klug.",
      scenes: [
        {
          id: "herd",
          title: "In der Küche",
          prompt: "Die Herdplatte leuchtet rot.",
          sceneType: "safety",
          visual: { icon: "🍳", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "weg", label: "Nicht anfassen, sie ist heiß!" },
            { id: "anfassen", label: "Ich lege meine Hand darauf." },
          ],
          correctChoiceId: "weg",
          successFeedback: "Sehr gut! Das schützt dich vor Verbrennungen.",
          failFeedback: "Vorsicht, heiß! Das tut sehr weh.",
        },
        {
          id: "laerm",
          title: "Auf der Straße",
          prompt: "Ein lautes Feuerwehrauto fährt vorbei.",
          sceneType: "safety",
          visual: { icon: "🚒", bg: "#172554", accent: "#3b82f6" },
          choices: [
            { id: "ohren", label: "Ich halte mir die Ohren zu." },
            { id: "schreien", label: "Ich schreie so laut ich kann." },
          ],
          correctChoiceId: "ohren",
          successFeedback: "Richtig! Das schützt dein Gehör.",
          failFeedback: "Schreien macht es nur noch lauter!",
        }
      ],
    }
  ],
  constellationBuilder: [
    {
      id: "k1-body-build",
      title: "Sternbild: Körper",
      instruction: "Baue den Körper von oben nach unten auf.",
      hint: "Was ist ganz oben?",
      theme: { bg: "#0f172a", accent: "#00f5d4", card: "rgba(0, 245, 212, 0.1)" },
      parts: [
        { id: "kopf", label: "Kopf", emoji: "🙂" },
        { id: "rumpf", label: "Bauch/Brust", emoji: "👕" },
        { id: "bein", label: "Beine & Füße", emoji: "👖" },
      ],
      slots: [
        { id: "slot1", label: "Ganz oben" },
        { id: "slot2", label: "In der Mitte" },
        { id: "slot3", label: "Ganz unten" },
      ],
      solution: ["kopf", "rumpf", "bein"],
    },
    {
      id: "k1-baum-build",
      title: "Sternbild: Baum",
      instruction: "Wie ist ein Baum aufgebaut? (Von unten nach oben)",
      hint: "Was steckt in der Erde?",
      theme: { bg: "#1a2f1c", accent: "#4ade80", card: "rgba(74, 222, 128, 0.1)" },
      parts: [
        { id: "wurzel", label: "Wurzeln", emoji: "🌱" },
        { id: "stamm", label: "Baumstamm", emoji: "🪵" },
        { id: "krone", label: "Baumkrone", emoji: "🌳" },
      ],
      slots: [
        { id: "slot1", label: "In der Erde" },
        { id: "slot2", label: "Über der Erde" },
        { id: "slot3", label: "Ganz oben" },
      ],
      solution: ["wurzel", "stamm", "krone"],
    },
    {
      id: "k1-tagesablauf",
      title: "Kosmischer Tagesablauf",
      instruction: "Bringe die Stationen des Tages in die richtige Reihenfolge.",
      hint: "Womit beginnt der Tag?",
      theme: { bg: "#1e1b4b", accent: "#facc15", card: "rgba(250, 204, 21, 0.1)" },
      parts: [
        { id: "aufstehen", label: "Aufstehen", emoji: "🌅" },
        { id: "schule", label: "Schule/Lernen", emoji: "🎒" },
        { id: "schlafen", label: "Schlafen gehen", emoji: "🌃" },
      ],
      slots: [
        { id: "slot1", label: "Am Morgen" },
        { id: "slot2", label: "Am Vormittag" },
        { id: "slot3", label: "Am Abend" },
      ],
      solution: ["aufstehen", "schule", "schlafen"],
    },
    {
      id: "k1-ampel-build",
      title: "Sternbild: Ampel",
      instruction: "Wie sind die Farben einer Ampel angeordnet?",
      hint: "Was leuchtet ganz oben?",
      theme: { bg: "#1f2937", accent: "#ef4444", card: "rgba(239, 68, 68, 0.1)" },
      parts: [
        { id: "rot", label: "Rot", emoji: "🔴" },
        { id: "gelb", label: "Gelb", emoji: "🟡" },
        { id: "gruen", label: "Grün", emoji: "🟢" },
      ],
      slots: [
        { id: "slot1", label: "Ganz oben" },
        { id: "slot2", label: "In der Mitte" },
        { id: "slot3", label: "Ganz unten" },
      ],
      solution: ["rot", "gelb", "gruen"],
    },
    {
      id: "k1-schmetterling-build",
      title: "Kosmische Entwicklung",
      instruction: "Wie wächst ein Schmetterling heran?",
      hint: "Womit fängt es an?",
      theme: { bg: "#2e1025", accent: "#d946ef", card: "rgba(217, 70, 239, 0.1)" },
      parts: [
        { id: "raupe", label: "Raupe", emoji: "🐛" },
        { id: "kokon", label: "Kokon", emoji: "🪹" },
        { id: "schmetterling", label: "Schmetterling", emoji: "🦋" },
      ],
      slots: [
        { id: "slot1", label: "Zuerst" },
        { id: "slot2", label: "Danach" },
        { id: "slot3", label: "Am Ende" },
      ],
      solution: ["raupe", "kokon", "schmetterling"],
    }
  ],
  memoryRadar: [
    {
      id: "k1-weather-radar",
      title: "Wetter-Radar",
      instruction: "Merke dir nur die Symbole, die mit Wetter zu tun haben.",
      flashDurationMs: 1800,
      selectionLimit: 4,
      theme: { bg: "#0b132b", accent: "#38bdf8", radar: "#0ea5e9" },
      targetItems: [
        { id: "sonne", label: "Sonne", emoji: "☀️" },
        { id: "regen", label: "Regen", emoji: "🌧️" },
        { id: "wolke", label: "Wolke", emoji: "☁️" },
        { id: "schnee", label: "Schnee", emoji: "❄️" },
      ],
      decoyItems: [
        { id: "stuhl", label: "Stuhl", emoji: "🪑" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "ball", label: "Ball", emoji: "⚽" },
        { id: "uhr", label: "Uhr", emoji: "⏰" },
      ],
    },
    {
      id: "k1-traffic-radar",
      title: "Verkehrs-Radar",
      instruction: "Präge dir die Dinge aus dem Straßenverkehr ein.",
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#1f2937", accent: "#f87171", radar: "#ef4444" },
      targetItems: [
        { id: "ampel", label: "Ampel", emoji: "🚦" },
        { id: "auto", label: "Auto", emoji: "🚗" },
        { id: "fahrrad", label: "Fahrrad", emoji: "🚲" },
      ],
      decoyItems: [
        { id: "katze", label: "Katze", emoji: "🐱" },
        { id: "baum", label: "Baum", emoji: "🌳" },
        { id: "haus", label: "Haus", emoji: "🏠" },
      ],
    },
    {
      id: "k1-pets-radar",
      title: "Haustier-Scanner",
      instruction: "Merke dir alle Tiere, die man als Haustier halten kann.",
      flashDurationMs: 2000,
      selectionLimit: 4,
      theme: { bg: "#2e1025", accent: "#f472b6", radar: "#ec4899" },
      targetItems: [
        { id: "hund", label: "Hund", emoji: "🐶" },
        { id: "katze", label: "Katze", emoji: "🐱" },
        { id: "fisch", label: "Fisch", emoji: "🐠" },
        { id: "kaninchen", label: "Kaninchen", emoji: "🐰" },
      ],
      decoyItems: [
        { id: "loewe", label: "Löwe", emoji: "🦁" },
        { id: "elefant", label: "Elefant", emoji: "🐘" },
        { id: "affe", label: "Affe", emoji: "🐒" },
        { id: "hai", label: "Hai", emoji: "🦈" },
      ],
    },
    {
      id: "k1-senses-radar",
      title: "Sinnes-Radar",
      instruction: "Merke dir nur die Körperteile für unsere Sinne.",
      flashDurationMs: 1800,
      selectionLimit: 4,
      theme: { bg: "#0f172a", accent: "#a855f7", radar: "#9333ea" },
      targetItems: [
        { id: "auge", label: "Auge", emoji: "👁️" },
        { id: "ohr", label: "Ohr", emoji: "👂" },
        { id: "nase", label: "Nase", emoji: "👃" },
        { id: "mund", label: "Mund", emoji: "👄" },
      ],
      decoyItems: [
        { id: "bauch", label: "Bauch", emoji: "🤰" },
        { id: "knie", label: "Knie", emoji: "🦵" },
        { id: "fuss", label: "Fuß", emoji: "🦶" },
        { id: "arm", label: "Arm", emoji: "💪" },
      ],
    },
    {
      id: "k1-waldtiere-radar",
      title: "Waldtiere-Scanner",
      instruction: "Präge dir die Tiere ein, die im Wald leben.",
      flashDurationMs: 2000,
      selectionLimit: 4,
      theme: { bg: "#14532d", accent: "#4ade80", radar: "#22c55e" },
      targetItems: [
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
        { id: "eule", label: "Eule", emoji: "🦉" },
        { id: "reh", label: "Reh", emoji: "🦌" },
        { id: "wildschwein", label: "Wildschwein", emoji: "🐗" },
      ],
      decoyItems: [
        { id: "kuh", label: "Kuh", emoji: "🐄" },
        { id: "schwein", label: "Schwein", emoji: "🐖" },
        { id: "pferd", label: "Pferd", emoji: "🐎" },
        { id: "hund", label: "Hund", emoji: "🐶" },
      ],
    }
  ],
  sequenceSort: [
    {
      id: "k1-jahreszeiten-seq",
      title: "Jahreszeiten",
      instruction: "Bringe die Jahreszeiten in die richtige Reihenfolge. Beginne mit dem Frühling.",
      theme: { bg: "#0f172a", accent: "#38bdf8" },
      sequence: [
        { id: "fruehling", label: "Frühling", emoji: "🌷" },
        { id: "sommer", label: "Sommer", emoji: "☀️" },
        { id: "herbst", label: "Herbst", emoji: "🍂" },
        { id: "winter", label: "Winter", emoji: "❄️" },
      ]
    },
    {
      id: "k1-apfel-seq",
      title: "Vom Samen zum Apfel",
      instruction: "Wie wächst ein Apfelbaum?",
      theme: { bg: "#1a2f1c", accent: "#4ade80" },
      sequence: [
        { id: "samen", label: "Samen", emoji: "🌱" },
        { id: "baum", label: "Baum", emoji: "🌳" },
        { id: "bluete", label: "Blüte", emoji: "🌸" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
      ]
    },
    {
      id: "k1-schmetterling-seq",
      title: "Der Schmetterling",
      instruction: "Wie wächst ein Schmetterling heran?",
      theme: { bg: "#2e1025", accent: "#d946ef" },
      sequence: [
        { id: "ei", label: "Ei", emoji: "🥚" },
        { id: "raupe", label: "Raupe", emoji: "🐛" },
        { id: "puppe", label: "Puppe", emoji: "🪹" },
        { id: "schmetterling", label: "Schmetterling", emoji: "🦋" },
      ]
    },
    {
      id: "k1-morgen-seq",
      title: "Am Morgen",
      instruction: "Was machst du morgens zuerst?",
      theme: { bg: "#1e1b4b", accent: "#facc15" },
      sequence: [
        { id: "aufstehen", label: "Aufstehen", emoji: "🥱" },
        { id: "waschen", label: "Waschen", emoji: "🧼" },
        { id: "anziehen", label: "Anziehen", emoji: "👕" },
        { id: "fruehstueck", label: "Frühstücken", emoji: "🥣" },
        { id: "zaehneputzen", label: "Zähne putzen", emoji: "🪥" },
      ]
    },
    {
      id: "k1-brot-seq",
      title: "Vom Korn zum Brot",
      instruction: "Wie wird Brot gemacht?",
      theme: { bg: "#3f2c23", accent: "#f97316" },
      sequence: [
        { id: "getreide", label: "Getreide wächst", emoji: "🌾" },
        { id: "mehl", label: "Getreide mahlen (Mehl)", emoji: "🥣" },
        { id: "teig", label: "Teig kneten", emoji: "🥐" },
        { id: "brot", label: "Brot backen", emoji: "🍞" },
      ]
    }
  ],
  factSwipe: [
    {
      id: "k1-tiere-swipe",
      title: "Tier-Fakten",
      instruction: "Stimmt das? Wische nach rechts für JA, nach links für NEIN.",
      theme: { bg: "#064e3b", accent: "#10b981" },
      cards: [
        {
          id: "f1",
          statement: "Hunde können gut riechen.",
          isTrue: true,
          explanation: "Hunde haben eine sehr feine Nase und riechen viel besser als Menschen.",
          emoji: "🐶"
        },
        {
          id: "f2",
          statement: "Kühe geben Limonade.",
          isTrue: false,
          explanation: "Kühe geben Milch, aus der wir Käse und Butter machen können.",
          emoji: "🐄"
        },
        {
          id: "f3",
          statement: "Katzen können im Dunkeln gut sehen.",
          isTrue: true,
          explanation: "Katzenaugen fangen nachts viel Licht ein.",
          emoji: "🐱"
        },
        {
          id: "f4",
          statement: "Fische atmen Luft wie wir.",
          isTrue: false,
          explanation: "Fische atmen unter Wasser durch ihre Kiemen.",
          emoji: "🐟"
        }
      ]
    },
    {
      id: "k1-verkehr-swipe",
      title: "Verkehrs-Check",
      instruction: "Ist das sicher im Verkehr?",
      theme: { bg: "#1f2937", accent: "#ef4444" },
      cards: [
        {
          id: "v1",
          statement: "Bei Rot darf ich über die Ampel gehen.",
          isTrue: false,
          explanation: "Bei Rot musst du stehen bleiben. Nur bei Grün darfst du gehen.",
          emoji: "🚦"
        },
        {
          id: "v2",
          statement: "Ich schaue nach links, rechts und wieder links, bevor ich über die Straße gehe.",
          isTrue: true,
          explanation: "So stellst du sicher, dass kein Auto kommt.",
          emoji: "👀"
        },
        {
          id: "v3",
          statement: "Auf dem Fahrrad trage ich einen Helm.",
          isTrue: true,
          explanation: "Der Helm schützt deinen Kopf, wenn du fällst.",
          emoji: "🚲"
        },
        {
          id: "v4",
          statement: "Ich spiele am liebsten auf der Straße.",
          isTrue: false,
          explanation: "Auf der Straße fahren Autos. Spiele lieber auf dem Spielplatz oder im Garten.",
          emoji: "🚗"
        }
      ]
    },
    {
      id: "k1-koerper-swipe",
      title: "Körper und Sinne",
      instruction: "Stimmt das über deinen Körper?",
      theme: { bg: "#1e1b4b", accent: "#8b5cf6" },
      cards: [
        {
          id: "k1",
          statement: "Mit den Ohren kann ich sehen.",
          isTrue: false,
          explanation: "Mit den Ohren hörst du. Sehen tust du mit den Augen.",
          emoji: "👂"
        },
        {
          id: "k2",
          statement: "Die Zunge hilft mir beim Schmecken.",
          isTrue: true,
          explanation: "Die Zunge merkt, ob etwas süß, sauer, salzig oder bitter ist.",
          emoji: "👅"
        },
        {
          id: "k3",
          statement: "Mit der Nase rieche ich Blumen.",
          isTrue: true,
          explanation: "Deine Nase erkennt viele verschiedene Gerüche.",
          emoji: "👃"
        },
        {
          id: "k4",
          statement: "Ich habe vier Beine.",
          isTrue: false,
          explanation: "Menschen haben zwei Beine und zwei Arme. Tiere wie Hunde haben vier Beine.",
          emoji: "🦵"
        }
      ]
    },
    {
      id: "k1-gesundheit-swipe",
      title: "Fit und Gesund",
      instruction: "Ist das gut für deinen Körper?",
      theme: { bg: "#0b132b", accent: "#00f5d4" },
      cards: [
        {
          id: "g1",
          statement: "Apfel und Karotte sind gesund.",
          isTrue: true,
          explanation: "Obst und Gemüse geben dir wichtige Vitamine.",
          emoji: "🍎"
        },
        {
          id: "g2",
          statement: "Zähneputzen ist nicht wichtig.",
          isTrue: false,
          explanation: "Zähneputzen schützt vor Löchern in den Zähnen (Karies).",
          emoji: "🪥"
        },
        {
          id: "g3",
          statement: "Vor dem Essen wasche ich meine Hände.",
          isTrue: true,
          explanation: "So wäschst du Keime weg, die dich krank machen könnten.",
          emoji: "🧼"
        },
        {
          id: "g4",
          statement: "Ich trinke jeden Tag viel Limonade.",
          isTrue: false,
          explanation: "Limonade hat viel Zucker. Wasser oder ungesüßter Tee sind viel besser.",
          emoji: "🥤"
        }
      ]
    },
    {
      id: "k1-wetter-swipe",
      title: "Wetter-Wissen",
      instruction: "Stimmen diese Aussagen über das Wetter?",
      theme: { bg: "#0f172a", accent: "#38bdf8" },
      cards: [
        {
          id: "w1",
          statement: "Im Winter schneit es oft.",
          isTrue: true,
          explanation: "Wenn es kalt genug ist, gefriert der Regen zu Schnee.",
          emoji: "❄️"
        },
        {
          id: "w2",
          statement: "Wenn es regnet, brauche ich eine Sonnenbrille.",
          isTrue: false,
          explanation: "Bei Regen nimmst du besser einen Regenschirm. Sonnenbrillen schützen vor hellem Licht.",
          emoji: "🌧️"
        },
        {
          id: "w3",
          statement: "Aus Wolken fällt manchmal Regen.",
          isTrue: true,
          explanation: "Wolken bestehen aus winzigen Wassertropfen. Werden sie zu schwer, fallen sie als Regen herunter.",
          emoji: "☁️"
        },
        {
          id: "w4",
          statement: "Die Sonne macht uns kalt.",
          isTrue: false,
          explanation: "Die Sonnenstrahlen wärmen die Erde und uns.",
          emoji: "☀️"
        }
      ]
    }
  ]
};