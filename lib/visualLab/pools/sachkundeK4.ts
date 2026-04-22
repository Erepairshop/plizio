import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const SACHKUNDE_VISUAL_LAB_K4: SachkundeVisualLabGradePool = {
  grade: 4,
  meteorCatch: [
    {
      id: "k4-energy-catch",
      title: "Energie-Fangfeld",
      prompt: "Fange nur Energiequellen ein.",
      goal: 8,
      speed: 7,
      theme: { sky: "#101828", glow: "#f59e0b", accent: "#facc15" },
      correctItems: [
        { id: "sonne", label: "Sonne", emoji: "☀️" },
        { id: "wind", label: "Wind", emoji: "🌬️" },
        { id: "wasser", label: "Wasser", emoji: "💧" },
        { id: "holz", label: "Holz", emoji: "🪵" },
        { id: "kohle", label: "Kohle", emoji: "🪨" },
      ],
      wrongItems: [
        { id: "kissen", label: "Kissen", emoji: "🛏️" },
        { id: "socke", label: "Socke", emoji: "🧦" },
        { id: "uhr", label: "Uhr", emoji: "⏰" },
        { id: "glas", label: "Glas", emoji: "🥃" },
      ],
    },
    {
      id: "k4-europa-catch",
      title: "Europa-Asteroiden",
      prompt: "Fange nur europäische Länder oder Hauptstädte ein.",
      goal: 7,
      speed: 6,
      theme: { sky: "#0b132b", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "berlin", label: "Berlin", emoji: "🏛️" },
        { id: "paris", label: "Paris", emoji: "🗼" },
        { id: "rom", label: "Rom", emoji: "🏺" },
        { id: "spanien", label: "Spanien", emoji: "🇪🇸" },
        { id: "wien", label: "Wien", emoji: "🎻" },
      ],
      wrongItems: [
        { id: "tokio", label: "Tokio", emoji: "🗻" },
        { id: "newyork", label: "New York", emoji: "🗽" },
        { id: "kairo", label: "Kairo", emoji: "🏜️" },
        { id: "brasilien", label: "Brasilien", emoji: "🇧🇷" },
      ],
    },
    {
      id: "k4-mineralien",
      title: "Kristall-Sturm",
      prompt: "Sammle Steine und Mineralien.",
      goal: 6,
      speed: 6,
      theme: { sky: "#1e1b4b", glow: "#d946ef", accent: "#e879f9" },
      correctItems: [
        { id: "quarz", label: "Quarz", emoji: "💎" },
        { id: "granit", label: "Granit", emoji: "🪨" },
        { id: "gold", label: "Gold", emoji: "🪙" },
        { id: "sandstein", label: "Sandstein", emoji: "🧱" },
      ],
      wrongItems: [
        { id: "plastik", label: "Plastik", emoji: "🥤" },
        { id: "holz", label: "Holz", emoji: "🪵" },
        { id: "gummi", label: "Gummi", emoji: "🦆" },
      ],
    },
    {
      id: "k4-planeten-catch",
      title: "Planeten-Fänger",
      prompt: "Fange nur Planeten aus unserem Sonnensystem ein.",
      goal: 8,
      speed: 6,
      theme: { sky: "#0f172a", glow: "#38bdf8", accent: "#7dd3fc" },
      correctItems: [
        { id: "erde", label: "Erde", emoji: "🌍" },
        { id: "mars", label: "Mars", emoji: "🔴" },
        { id: "jupiter", label: "Jupiter", emoji: "🪐" },
        { id: "saturn", label: "Saturn", emoji: "🪐" },
        { id: "venus", label: "Venus", emoji: "🌕" },
      ],
      wrongItems: [
        { id: "sonne", label: "Sonne", emoji: "☀️" },
        { id: "mond", label: "Mond", emoji: "🌙" },
        { id: "komet", label: "Komet", emoji: "☄️" },
      ],
    },
    {
      id: "k4-knochen-catch",
      title: "Knochen-Suche",
      prompt: "Sammle nur Teile des menschlichen Skeletts.",
      goal: 6,
      speed: 5,
      theme: { sky: "#1e1b4b", glow: "#f8fafc", accent: "#cbd5e1" },
      correctItems: [
        { id: "schaedel", label: "Schädel", emoji: "💀" },
        { id: "rippe", label: "Rippe", emoji: "🦴" },
        { id: "wirbel", label: "Wirbel", emoji: "🦴" },
        { id: "becken", label: "Becken", emoji: "🦴" },
      ],
      wrongItems: [
        { id: "herz", label: "Herz", emoji: "❤️" },
        { id: "gehirn", label: "Gehirn", emoji: "🧠" },
        { id: "lunge", label: "Lunge", emoji: "🫁" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "k4-living-groups",
      title: "Lebewesen-Orbits",
      instruction: "Ordne die Tiere den richtigen Gruppen zu.",
      theme: { bg: "#111827", orbit: "#22c55e", accent: "#38bdf8" },
      buckets: [
        { id: "saeugetier", label: "Säugetier", color: "#f59e0b" },
        { id: "vogel", label: "Vogel", color: "#38bdf8" },
        { id: "insekt", label: "Insekt", color: "#22c55e" },
      ],
      items: [
        { id: "fuchs", label: "Fuchs", emoji: "🦊", bucketId: "saeugetier" },
        { id: "spatz", label: "Spatz", emoji: "🐦", bucketId: "vogel" },
        { id: "biene", label: "Biene", emoji: "🐝", bucketId: "insekt" },
        { id: "reh", label: "Reh", emoji: "🦌", bucketId: "saeugetier" },
        { id: "eule", label: "Eule", emoji: "🦉", bucketId: "vogel" },
        { id: "ameise", label: "Ameise", emoji: "🐜", bucketId: "insekt" },
      ],
    },
    {
      id: "k4-strom-leiter",
      title: "Elektro-Magnetfeld",
      instruction: "Leitet es Strom oder leitet es keinen Strom?",
      theme: { bg: "#1e293b", orbit: "#facc15", accent: "#a855f7" },
      buckets: [
        { id: "leiter", label: "Stromleiter ⚡", color: "#facc15" },
        { id: "isolator", label: "Isolator 🛑", color: "#94a3b8" },
      ],
      items: [
        { id: "kupfer", label: "Kupferdraht", emoji: "🧲", bucketId: "leiter" },
        { id: "eisen", label: "Eisennagel", emoji: "🔩", bucketId: "leiter" },
        { id: "gold", label: "Goldring", emoji: "💍", bucketId: "leiter" },
        { id: "holz", label: "Holzstück", emoji: "🪵", bucketId: "isolator" },
        { id: "plastik", label: "Plastiklöffel", emoji: "🥄", bucketId: "isolator" },
        { id: "glas", label: "Glasscheibe", emoji: "🪟", bucketId: "isolator" },
      ],
    },
    {
      id: "k4-koerper-organe",
      title: "Anatomie-Scanner",
      instruction: "Gehört es zu den Organen oder zu den Knochen?",
      theme: { bg: "#2e1025", orbit: "#ef4444", accent: "#f87171" },
      buckets: [
        { id: "organ", label: "Organe ❤️", color: "#ef4444" },
        { id: "knochen", label: "Knochen 🦴", color: "#f8fafc" },
      ],
      items: [
        { id: "herz", label: "Herz", emoji: "❤️", bucketId: "organ" },
        { id: "lunge", label: "Lunge", emoji: "🫁", bucketId: "organ" },
        { id: "gehirn", label: "Gehirn", emoji: "🧠", bucketId: "organ" },
        { id: "schaedel", label: "Schädel", emoji: "💀", bucketId: "knochen" },
        { id: "rippe", label: "Rippe", emoji: "🦴", bucketId: "knochen" },
        { id: "wirbel", label: "Wirbelsäule", emoji: "🦴", bucketId: "knochen" },
      ],
    },
    {
      id: "k4-planeten-sort",
      title: "Planeten-Sortierer",
      instruction: "Ordne die Planeten nach Gesteins- und Gasplaneten.",
      theme: { bg: "#0f172a", orbit: "#38bdf8", accent: "#7dd3fc" },
      buckets: [
        { id: "gestein", label: "Gesteinsplaneten 🪨", color: "#f59e0b" },
        { id: "gas", label: "Gasplaneten 💨", color: "#38bdf8" },
      ],
      items: [
        { id: "erde", label: "Erde", emoji: "🌍", bucketId: "gestein" },
        { id: "mars", label: "Mars", emoji: "🔴", bucketId: "gestein" },
        { id: "merkur", label: "Merkur", emoji: "🪐", bucketId: "gestein" },
        { id: "jupiter", label: "Jupiter", emoji: "🪐", bucketId: "gas" },
        { id: "saturn", label: "Saturn", emoji: "🪐", bucketId: "gas" },
        { id: "uranus", label: "Uranus", emoji: "🪐", bucketId: "gas" },
      ],
    },
    {
      id: "k4-europa-sort",
      title: "Europa-Regionen",
      instruction: "Liegt das Land eher im Norden oder im Süden Europas?",
      theme: { bg: "#1e1b4b", orbit: "#22c55e", accent: "#4ade80" },
      buckets: [
        { id: "norden", label: "Nordeuropa ❄️", color: "#60a5fa" },
        { id: "sueden", label: "Südeuropa ☀️", color: "#facc15" },
      ],
      items: [
        { id: "schweden", label: "Schweden", emoji: "🇸🇪", bucketId: "norden" },
        { id: "norwegen", label: "Norwegen", emoji: "🇳🇴", bucketId: "norden" },
        { id: "finnland", label: "Finnland", emoji: "🇫🇮", bucketId: "norden" },
        { id: "italien", label: "Italien", emoji: "🇮🇹", bucketId: "sueden" },
        { id: "spanien", label: "Spanien", emoji: "🇪🇸", bucketId: "sueden" },
        { id: "griechenland", label: "Griechenland", emoji: "🇬🇷", bucketId: "sueden" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "k4-map-safety",
      title: "Signal Runner: Karten & Verantwortung",
      instruction: "Wähle in jeder Situation die beste Handlung.",
      scenes: [
        {
          id: "hike",
          title: "Wanderung",
          prompt: "Du bist auf einer Karte unsicher. Was hilft am meisten?",
          sceneType: "nature",
          visual: { icon: "🧭", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "legend", label: "Ich prüfe Legende und Himmelsrichtung." },
            { id: "guess", label: "Ich laufe einfach drauflos." },
          ],
          correctChoiceId: "legend",
          successFeedback: "Richtig. Karte und Richtung geben Sicherheit.",
          failFeedback: "Zu riskant. Erst orientieren, dann losgehen.",
        },
        {
          id: "storm",
          title: "Gewitter naht",
          prompt: "Auf dem Feld zieht ein Gewitter auf. Was ist die beste Entscheidung?",
          sceneType: "safety",
          visual: { icon: "⛈️", bg: "#312e81", accent: "#a78bfa" },
          choices: [
            { id: "shelter", label: "Ich suche Schutz in einem sicheren Gebäude." },
            { id: "tree", label: "Ich stelle mich unter einen einzelnen Baum." },
          ],
          correctChoiceId: "shelter",
          successFeedback: "Genau. Schutz im Gebäude ist sicherer.",
          failFeedback: "Nein. Ein einzelner Baum ist bei Gewitter gefährlich.",
        },
      ],
    },
    {
      id: "k4-notruf-pro",
      title: "Rettungs-Einsatz",
      instruction: "Wie setzt du einen Notruf richtig ab?",
      scenes: [
        {
          id: "anruf",
          title: "Der Anruf (Die 5 Ws)",
          prompt: "Du rufst die 112 an. Was musst du am Telefon beachten?",
          sceneType: "safety",
          visual: { icon: "📞", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "warten", label: "Ich beantworte die Fragen und lege erst auf, wenn man es mir sagt." },
            { id: "auflegen", label: "Ich sage kurz 'Hilfe' und lege sofort auf." },
          ],
          correctChoiceId: "warten",
          successFeedback: "Lebenswichtig! Die Leitstelle braucht genaue Infos.",
          failFeedback: "Falsch! Auflegen verhindert, dass Hilfe kommt.",
        },
        {
          id: "bewusstlos",
          title: "Erste Hilfe",
          prompt: "Eine Person ist bewusstlos, atmet aber normal.",
          sceneType: "community",
          visual: { icon: "🩹", bg: "#052e16", accent: "#22c55e" },
          choices: [
            { id: "seitenlage", label: "Stabile Seitenlage und Notruf." },
            { id: "schuetteln", label: "Wild schütteln und Wasser ins Gesicht schütten." },
          ],
          correctChoiceId: "seitenlage",
          successFeedback: "Richtig. Die Seitenlage hält die Atemwege frei.",
          failFeedback: "Nein, das kann schaden. Stabile Seitenlage ist richtig.",
        }
      ]
    },
    {
      id: "k4-strom-sicherheit",
      title: "Strom-Sicherheit",
      instruction: "Wie verhältst du dich richtig im Umgang mit Strom?",
      scenes: [
        {
          id: "steckdose",
          title: "Kaputtes Kabel",
          prompt: "Du siehst ein Kabel, bei dem die Isolierung kaputt ist und Drähte herausschauen. Was tust du?",
          sceneType: "safety",
          visual: { icon: "🔌", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "melden", label: "Ich berühre es nicht und sage sofort einem Erwachsenen Bescheid." },
            { id: "reparieren", label: "Ich klebe es selbst mit Klebeband wieder zusammen." },
          ],
          correctChoiceId: "melden",
          successFeedback: "Richtig. Strom ist lebensgefährlich. Erwachsene müssen das reparieren.",
          failFeedback: "Falsch und sehr gefährlich! Niemals selbst an Stromkabeln basteln.",
        },
        {
          id: "wasser",
          title: "Strom und Wasser",
          prompt: "Du möchtest dir im Badezimmer die Haare föhnen, aber das Waschbecken ist noch voll Wasser.",
          sceneType: "safety",
          visual: { icon: "💧", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "abstand", label: "Ich halte den Föhn weit weg vom Wasser oder lasse das Wasser erst ab." },
            { id: "egal", label: "Das Wasser stört nicht, solange der Föhn nicht hineinfällt." },
          ],
          correctChoiceId: "abstand",
          successFeedback: "Sehr gut. Wasser leitet Strom. Abstand halten ist wichtig.",
          failFeedback: "Gefährlich! Auch kleine Wasserspritzer können zu einem Stromschlag führen.",
        }
      ]
    },
    {
      id: "k4-koerper-gesundheit",
      title: "Körper & Gesundheit",
      instruction: "Was ist gut für deinen Körper?",
      scenes: [
        {
          id: "zahn",
          title: "Zahnpflege",
          prompt: "Wie schützt du deine Zähne am besten vor Karies?",
          sceneType: "community",
          visual: { icon: "🦷", bg: "#1e293b", accent: "#f8fafc" },
          choices: [
            { id: "putzen", label: "Ich putze zweimal täglich die Zähne und esse wenig Zucker." },
            { id: "kaugummi", label: "Ich kaue nach jedem Essen nur Kaugummi." },
          ],
          correctChoiceId: "putzen",
          successFeedback: "Richtig. Zähneputzen entfernt Zahnbelag und schützt vor Karies.",
          failFeedback: "Kaugummi allein reicht nicht. Zähneputzen ist wichtig.",
        },
        {
          id: "schlaf",
          title: "Schlaf und Erholung",
          prompt: "Warum ist ausreichend Schlaf für dich so wichtig?",
          sceneType: "community",
          visual: { icon: "🛏️", bg: "#312e81", accent: "#a78bfa" },
          choices: [
            { id: "erholung", label: "Mein Körper wächst und mein Gehirn verarbeitet das Gelernte." },
            { id: "zeitvertreib", label: "Damit der Tag schneller vergeht." },
          ],
          correctChoiceId: "erholung",
          successFeedback: "Genau. Im Schlaf erholt sich der Körper und lernt.",
          failFeedback: "Nein, Schlaf ist lebenswichtig für Erholung und Wachstum.",
        }
      ]
    },
    {
      id: "k4-sonne-erde",
      title: "Sonne und Erde",
      instruction: "Wähle die richtige Aussage zu Sonne und Erde.",
      scenes: [
        {
          id: "tag-nacht",
          title: "Tag und Nacht",
          prompt: "Wie entstehen Tag und Nacht auf der Erde?",
          sceneType: "nature",
          visual: { icon: "🌍", bg: "#1e1b4b", accent: "#facc15" },
          choices: [
            { id: "rotation", label: "Die Erde dreht sich um ihre eigene Achse." },
            { id: "kreisen", label: "Die Sonne kreist jeden Tag einmal um die Erde." },
          ],
          correctChoiceId: "rotation",
          successFeedback: "Richtig. Die Erdrotation sorgt für Tag und Nacht.",
          failFeedback: "Falsch. Nicht die Sonne dreht sich, sondern die Erde.",
        },
        {
          id: "jahreszeiten",
          title: "Jahreszeiten",
          prompt: "Warum haben wir Sommer und Winter?",
          sceneType: "nature",
          visual: { icon: "☀️", bg: "#0f172a", accent: "#f59e0b" },
          choices: [
            { id: "neigung", label: "Wegen der Schrägstellung der Erdachse auf der Bahn um die Sonne." },
            { id: "entfernung", label: "Im Sommer ist die Erde viel näher an der Sonne als im Winter." },
          ],
          correctChoiceId: "neigung",
          successFeedback: "Klasse. Die Neigung der Erdachse ist der Grund.",
          failFeedback: "Nein, die Entfernung ändert sich kaum. Die Achsenneigung ist entscheidend.",
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "k4-food-chain",
      title: "Nahrungskette bauen",
      instruction: "Setze die Nahrungskette in die richtige Reihenfolge.",
      hint: "Beginne mit der Pflanze.",
      theme: { bg: "#052e16", accent: "#4ade80", card: "rgba(74,222,128,0.1)" },
      parts: [
        { id: "gras", label: "Gras", emoji: "🌱" },
        { id: "hase", label: "Hase", emoji: "🐇" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
      ],
      slots: [
        { id: "slot1", label: "Produzent" },
        { id: "slot2", label: "Pflanzenfresser" },
        { id: "slot3", label: "Fleischfresser" },
      ],
      solution: ["gras", "hase", "fuchs"],
    },
    {
      id: "k4-stromkreis",
      title: "Stromkreis-Konstrukteur",
      instruction: "Baue einen einfachen Stromkreis auf.",
      hint: "Von der Quelle über den Draht zur Lampe.",
      theme: { bg: "#1e1b4b", accent: "#facc15", card: "rgba(250,204,21,0.1)" },
      parts: [
        { id: "batterie", label: "Batterie (Stromquelle)", emoji: "🔋" },
        { id: "kabel", label: "Kupferkabel (Leiter)", emoji: "🔌" },
        { id: "lampe", label: "Glühlampe (Verbraucher)", emoji: "💡" },
      ],
      slots: [
        { id: "slot1", label: "Energie kommt von..." },
        { id: "slot2", label: "Strom fließt durch..." },
        { id: "slot3", label: "Strom leuchtet in..." },
      ],
      solution: ["batterie", "kabel", "lampe"],
    },
    {
      id: "k4-planeten",
      title: "Unser Sonnensystem",
      instruction: "Ordne die ersten drei Planeten von der Sonne aus.",
      hint: "Mein Vater Erklärt...",
      theme: { bg: "#0b132b", accent: "#38bdf8", card: "rgba(56,189,248,0.1)" },
      parts: [
        { id: "merkur", label: "Merkur", emoji: "🪐" },
        { id: "venus", label: "Venus", emoji: "🌕" },
        { id: "erde", label: "Erde", emoji: "🌍" },
      ],
      slots: [
        { id: "slot1", label: "Am nächsten zur Sonne" },
        { id: "slot2", label: "Der Zweite" },
        { id: "slot3", label: "Unser Zuhause (Der Dritte)" },
      ],
      solution: ["merkur", "venus", "erde"],
    },
    {
      id: "k4-europa-reise",
      title: "Reise durch Europa",
      instruction: "Ordne die Länder von Westen nach Osten.",
      hint: "Vom Atlantik ins Zentrum Europas.",
      theme: { bg: "#0b132b", accent: "#60a5fa", card: "rgba(96,165,250,0.1)" },
      parts: [
        { id: "spanien", label: "Spanien", emoji: "🇪🇸" },
        { id: "frankreich", label: "Frankreich", emoji: "🇫🇷" },
        { id: "deutschland", label: "Deutschland", emoji: "🇩🇪" },
      ],
      slots: [
        { id: "slot1", label: "Ganz im Westen" },
        { id: "slot2", label: "In der Mitte" },
        { id: "slot3", label: "Weiter im Osten" },
      ],
      solution: ["spanien", "frankreich", "deutschland"],
    },
    {
      id: "k4-atmung",
      title: "Der Weg der Atemluft",
      instruction: "Wie strömt die Luft in unseren Körper?",
      hint: "Von außen bis tief in den Brustkorb.",
      theme: { bg: "#2e1025", accent: "#f87171", card: "rgba(248,113,113,0.1)" },
      parts: [
        { id: "nase", label: "Nase", emoji: "👃" },
        { id: "luftroehre", label: "Luftröhre", emoji: "🪈" },
        { id: "lunge", label: "Lunge", emoji: "🫁" },
      ],
      slots: [
        { id: "slot1", label: "Eintritt" },
        { id: "slot2", label: "Transport" },
        { id: "slot3", label: "Zielorgan" },
      ],
      solution: ["nase", "luftroehre", "lunge"],
    }
  ],
  memoryRadar: [
    {
      id: "k4-europe-radar",
      title: "Radar: Europa merken",
      instruction: "Merke dir nur Länder oder Hauptstädte aus Europa.",
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#111827", accent: "#60a5fa", radar: "#3b82f6" },
      targetItems: [
        { id: "berlin", label: "Berlin", emoji: "🏛️" },
        { id: "wien", label: "Wien", emoji: "🎻" },
        { id: "paris", label: "Paris", emoji: "🗼" },
        { id: "rom", label: "Rom", emoji: "🏺" },
      ],
      decoyItems: [
        { id: "kairo", label: "Kairo", emoji: "🏜️" },
        { id: "tokio", label: "Tokio", emoji: "🗻" },
        { id: "sydney", label: "Sydney", emoji: "🌊" },
        { id: "lima", label: "Lima", emoji: "🦙" },
      ],
    },
    {
      id: "k4-organe-radar",
      title: "Medizinischer Scanner",
      instruction: "Präge dir die inneren Organe des Menschen ein.",
      flashDurationMs: 2200,
      selectionLimit: 4,
      theme: { bg: "#2e1025", accent: "#f87171", radar: "#ef4444" },
      targetItems: [
        { id: "herz", label: "Herz", emoji: "❤️" },
        { id: "lunge", label: "Lunge", emoji: "🫁" },
        { id: "gehirn", label: "Gehirn", emoji: "🧠" },
        { id: "magen", label: "Magen", emoji: "🥩" },
      ],
      decoyItems: [
        { id: "arm", label: "Arm", emoji: "💪" },
        { id: "fuss", label: "Fuß", emoji: "🦶" },
        { id: "auge", label: "Auge", emoji: "👁️" },
        { id: "haar", label: "Haare", emoji: "💇" },
      ],
    },
    {
      id: "k4-strom-radar",
      title: "Radar: Stromleiter",
      instruction: "Merke dir nur die Materialien, die Strom leiten.",
      flashDurationMs: 2200,
      selectionLimit: 4,
      theme: { bg: "#1e1b4b", accent: "#facc15", radar: "#eab308" },
      targetItems: [
        { id: "kupfer", label: "Kupfer", emoji: "🧲" },
        { id: "eisen", label: "Eisen", emoji: "🔩" },
        { id: "silber", label: "Silber", emoji: "🥄" },
        { id: "gold", label: "Gold", emoji: "💍" },
      ],
      decoyItems: [
        { id: "holz", label: "Holz", emoji: "🪵" },
        { id: "plastik", label: "Plastik", emoji: "🥤" },
        { id: "glas", label: "Glas", emoji: "🪟" },
        { id: "gummi", label: "Gummi", emoji: "🦆" },
      ],
    },
    {
      id: "k4-planeten-radar",
      title: "Teleskop-Radar",
      instruction: "Finde nur die Planeten unseres Sonnensystems.",
      flashDurationMs: 2000,
      selectionLimit: 4,
      theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#0284c7" },
      targetItems: [
        { id: "mars", label: "Mars", emoji: "🔴" },
        { id: "venus", label: "Venus", emoji: "🌕" },
        { id: "saturn", label: "Saturn", emoji: "🪐" },
        { id: "jupiter", label: "Jupiter", emoji: "🪐" },
      ],
      decoyItems: [
        { id: "sonne", label: "Sonne", emoji: "☀️" },
        { id: "mond", label: "Mond", emoji: "🌙" },
        { id: "stern", label: "Stern", emoji: "⭐" },
        { id: "komet", label: "Komet", emoji: "☄️" },
      ],
    },
    {
      id: "k4-knochen-radar",
      title: "Röntgen-Radar",
      instruction: "Merke dir nur Knochen des menschlichen Skeletts.",
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#2e1025", accent: "#f8fafc", radar: "#cbd5e1" },
      targetItems: [
        { id: "schaedel", label: "Schädel", emoji: "💀" },
        { id: "rippe", label: "Rippe", emoji: "🦴" },
        { id: "oberschenkel", label: "Oberschenkelknochen", emoji: "🦴" },
        { id: "wirbel", label: "Wirbelsäule", emoji: "🦴" },
      ],
      decoyItems: [
        { id: "herz", label: "Herz", emoji: "❤️" },
        { id: "lunge", label: "Lunge", emoji: "🫁" },
        { id: "blut", label: "Blut", emoji: "🩸" },
        { id: "muskel", label: "Muskel", emoji: "💪" },
      ],
    }
  ],
  sequenceSort: [
    {
      id: "k4-seq-electricity",
      title: "Stromerzeugung",
      instruction: "Bringe die Schritte der Stromerzeugung im Kohlekraftwerk in die richtige Reihenfolge.",
      theme: { bg: "#1e1b4b", accent: "#facc15" },
      sequence: [
        { id: "kohle", label: "Kohle wird verbrannt", emoji: "🪨" },
        { id: "wasser", label: "Wasser verdampft", emoji: "💨" },
        { id: "turbine", label: "Dampf treibt Turbine an", emoji: "⚙️" },
        { id: "generator", label: "Generator erzeugt Strom", emoji: "⚡" },
        { id: "steckdose", label: "Strom kommt aus der Steckdose", emoji: "🔌" }
      ]
    },
    {
      id: "k4-seq-solarsystem",
      title: "Planeten-Reihenfolge",
      instruction: "Ordne die äußeren Planeten von innen nach außen.",
      theme: { bg: "#0f172a", accent: "#38bdf8" },
      sequence: [
        { id: "mars", label: "Mars", emoji: "🔴" },
        { id: "jupiter", label: "Jupiter", emoji: "🪐" },
        { id: "saturn", label: "Saturn", emoji: "🪐" },
        { id: "uranus", label: "Uranus", emoji: "🪐" },
        { id: "neptun", label: "Neptun", emoji: "🔵" }
      ]
    },
    {
      id: "k4-seq-anatomy",
      title: "Verdauungsweg",
      instruction: "Bringe die Stationen der Verdauung in die richtige Reihenfolge.",
      theme: { bg: "#2e1025", accent: "#f87171" },
      sequence: [
        { id: "mund", label: "Mund", emoji: "👄" },
        { id: "speiseroehre", label: "Speiseröhre", emoji: "🪈" },
        { id: "magen", label: "Magen", emoji: "🥩" },
        { id: "duenndarm", label: "Dünndarm", emoji: "🌭" },
        { id: "dickdarm", label: "Dickdarm", emoji: "💩" }
      ]
    },
    {
      id: "k4-seq-europe",
      title: "Flusslauf der Donau",
      instruction: "Ordne die Stationen der Donau von der Quelle bis zur Mündung.",
      theme: { bg: "#0b132b", accent: "#60a5fa" },
      sequence: [
        { id: "schwarzwald", label: "Schwarzwald (Quelle)", emoji: "🌲" },
        { id: "wien", label: "Wien", emoji: "🇦🇹" },
        { id: "budapest", label: "Budapest", emoji: "🇭🇺" },
        { id: "belgrad", label: "Belgrad", emoji: "🇷🇸" },
        { id: "schwarzesmeer", label: "Schwarzes Meer (Mündung)", emoji: "🌊" }
      ]
    },
    {
      id: "k4-seq-watercycle",
      title: "Wasserkreislauf",
      instruction: "Ordne die Schritte des Wasserkreislaufs.",
      theme: { bg: "#0c4a6e", accent: "#22d3ee" },
      sequence: [
        { id: "sonne", label: "Sonne erwärmt Meerwasser", emoji: "☀️" },
        { id: "verdunstung", label: "Wasser verdunstet", emoji: "💨" },
        { id: "wolken", label: "Wolken bilden sich", emoji: "☁️" },
        { id: "regen", label: "Es regnet", emoji: "🌧️" },
        { id: "fluss", label: "Wasser fließt ins Meer", emoji: "🌊" }
      ]
    }
  ],
  factSwipe: [
    {
      id: "k4-fact-electricity",
      title: "Fakten-Check: Strom",
      instruction: "Stimmt das oder nicht?",
      theme: { bg: "#1e1b4b", accent: "#facc15" },
      cards: [
        { id: "c1", statement: "Plastik ist ein sehr guter Stromleiter.", isTrue: false, explanation: "Plastik ist ein Isolator und leitet keinen Strom.", emoji: "🥤" },
        { id: "c2", statement: "Stromkreis muss geschlossen sein, damit eine Lampe leuchtet.", isTrue: true, explanation: "Der Strom kann nur in einem geschlossenen Kreis fließen.", emoji: "💡" },
        { id: "c3", statement: "Wasser aus dem Wasserhahn leitet Strom.", isTrue: true, explanation: "Normales Leitungswasser enthält Mineralien und leitet Strom.", emoji: "💧" }
      ]
    },
    {
      id: "k4-fact-solarsystem",
      title: "Fakten-Check: Weltraum",
      instruction: "Stimmt das oder nicht?",
      theme: { bg: "#0f172a", accent: "#38bdf8" },
      cards: [
        { id: "c1", statement: "Die Sonne ist ein Planet.", isTrue: false, explanation: "Die Sonne ist ein Stern, der aus heißem Gas besteht.", emoji: "☀️" },
        { id: "c2", statement: "Der Jupiter ist der größte Planet in unserem Sonnensystem.", isTrue: true, explanation: "Der Jupiter ist ein riesiger Gasplanet und der größte von allen.", emoji: "🪐" },
        { id: "c3", statement: "Der Mond leuchtet von selbst.", isTrue: false, explanation: "Der Mond wird von der Sonne angestrahlt und reflektiert das Licht.", emoji: "🌙" }
      ]
    },
    {
      id: "k4-fact-anatomy",
      title: "Fakten-Check: Der Körper",
      instruction: "Stimmt das oder nicht?",
      theme: { bg: "#2e1025", accent: "#f87171" },
      cards: [
        { id: "c1", statement: "Das Herz pumpt Blut durch den ganzen Körper.", isTrue: true, explanation: "Das Herz arbeitet wie eine Pumpe für unser Blut.", emoji: "❤️" },
        { id: "c2", statement: "Wir atmen mit dem Magen.", isTrue: false, explanation: "Wir atmen mit der Lunge. Der Magen ist für die Verdauung da.", emoji: "🫁" },
        { id: "c3", statement: "Knochen sind hart, aber auch leicht biegsam.", isTrue: true, explanation: "Knochen sind hart, aber durch Knochenzellen und Kollagen auch leicht elastisch.", emoji: "🦴" }
      ]
    },
    {
      id: "k4-fact-europe",
      title: "Fakten-Check: Europa",
      instruction: "Stimmt das oder nicht?",
      theme: { bg: "#0b132b", accent: "#60a5fa" },
      cards: [
        { id: "c1", statement: "Paris ist die Hauptstadt von Italien.", isTrue: false, explanation: "Paris ist die Hauptstadt von Frankreich. Die Hauptstadt von Italien ist Rom.", emoji: "🗼" },
        { id: "c2", statement: "In Großbritannien bezahlt man mit dem Euro.", isTrue: false, explanation: "In Großbritannien ist die Währung das Britische Pfund.", emoji: "💷" },
        { id: "c3", statement: "Die Alpen sind das höchste Gebirge in Europa.", isTrue: false, explanation: "Der Kaukasus hat mit dem Elbrus (5642m) den höchsten Berg Europas, obwohl oft der Mont Blanc in den Alpen genannt wird.", emoji: "🏔️" }
      ]
    },
    {
      id: "k4-fact-history",
      title: "Fakten-Check: Erfindungen",
      instruction: "Stimmt das oder nicht?",
      theme: { bg: "#451a03", accent: "#fb923c" },
      cards: [
        { id: "c1", statement: "Johannes Gutenberg hat den Buchdruck mit beweglichen Lettern erfunden.", isTrue: true, explanation: "Er erfand diese Technik im 15. Jahrhundert.", emoji: "📖" },
        { id: "c2", statement: "Das erste Auto wurde von Thomas Edison gebaut.", isTrue: false, explanation: "Das erste Auto mit Verbrennungsmotor baute Carl Benz.", emoji: "🚗" },
        { id: "c3", statement: "Das Internet wurde schon im Mittelalter genutzt.", isTrue: false, explanation: "Das Internet gibt es erst seit wenigen Jahrzehnten.", emoji: "💻" }
      ]
    }
  ],
};