import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const PHYSIK_POOLS: Record<number, SachkundeVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ph-5-mc-1",
        title: "Energieformen",
        prompt: "Fange nur Energieformen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "kin", label: "Kinetische Energie", emoji: "⚡" },
          { id: "pot", label: "Potenzielle Energie", emoji: "🧗" },
          { id: "waerme", label: "Wärmeenergie", emoji: "🔥" },
          { id: "elek", label: "Elektrische Energie", emoji: "💡" },
          { id: "licht", label: "Lichtenergie", emoji: "☀️" },
          { id: "chem", label: "Chemische Energie", emoji: "🔋" }
        ],
        wrongItems: [
          { id: "x1", label: "Dichte", emoji: "🧱" },
          { id: "x2", label: "Masse", emoji: "⚖️" },
          { id: "x3", label: "Volumen", emoji: "📦" }
        ]
      },
      {
        id: "ph-5-mc-2",
        title: "Einfache Maschinen",
        prompt: "Fange nur einfache Maschinen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "hebel", label: "Hebel", emoji: "🕹️" },
          { id: "rolle", label: "Flaschenzug", emoji: "⛓️" },
          { id: "ebene", label: "Schiefe Ebene", emoji: "📐" },
          { id: "keil", label: "Keil", emoji: "🪓" },
          { id: "rad", label: "Rad und Achse", emoji: "🎡" },
          { id: "schraube", label: "Schraube", emoji: "🔩" }
        ],
        wrongItems: [
          { id: "x4", label: "Thermometer", emoji: "🌡️" },
          { id: "x5", label: "Batterie", emoji: "🔋" },
          { id: "x6", label: "Magnet", emoji: "🧲" },
          { id: "x7", label: "Glühlampe", emoji: "💡" }
        ]
      },
      {
        id: "ph-5-mc-3",
        title: "Wärmequellen",
        prompt: "Fange nur Wärmequellen ein!",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "sonne", label: "Sonne", emoji: "☀️" },
          { id: "feuer", label: "Lagerfeuer", emoji: "🔥" },
          { id: "heizung", label: "Heizkörper", emoji: "♨️" },
          { id: "reibung", label: "Reibung", emoji: "👏" },
          { id: "herd", label: "Herdplatte", emoji: "🍳" }
        ],
        wrongItems: [
          { id: "x8", label: "Eiswürfel", emoji: "🧊" },
          { id: "x9", label: "Schatten", emoji: "👤" },
          { id: "x10", label: "Spiegel", emoji: "🪞" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-5-os-1",
        title: "Kräfte sortieren",
        instruction: "Sortiere in Kontakt- oder Fernkraft.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "kontakt", label: "Kontaktkraft", color: "#3b82f6" },
          { id: "fern", label: "Fernkraft", color: "#ef4444" }
        ],
        items: [
          { id: "reib", label: "Reibung", emoji: "🤝", bucketId: "kontakt" },
          { id: "zug", label: "Zugkraft", emoji: "🪢", bucketId: "kontakt" },
          { id: "druck", label: "Druckkraft", emoji: "👇", bucketId: "kontakt" },
          { id: "luft", label: "Luftwiderstand", emoji: "💨", bucketId: "kontakt" },
          { id: "schwer", label: "Schwerkraft", emoji: "🌍", bucketId: "fern" },
          { id: "magn", label: "Magnetismus", emoji: "🧲", bucketId: "fern" },
          { id: "elek", label: "Elektrische Kraft", emoji: "⚡", bucketId: "fern" }
        ]
      },
      {
        id: "ph-5-os-2",
        title: "Wärmeleiter & Isolatoren",
        instruction: "Sortiere in Wärmeleiter oder Isolator.",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "leiter", label: "Wärmeleiter", color: "#f59e0b" },
          { id: "isolator", label: "Isolator", color: "#8b5cf6" }
        ],
        items: [
          { id: "kupfer", label: "Kupfer", emoji: "🥉", bucketId: "leiter" },
          { id: "eisen", label: "Eisen", emoji: "🔩", bucketId: "leiter" },
          { id: "alu", label: "Aluminium", emoji: "🥫", bucketId: "leiter" },
          { id: "holz", label: "Holz", emoji: "🪵", bucketId: "isolator" },
          { id: "plastik", label: "Plastik", emoji: "🧴", bucketId: "isolator" },
          { id: "wolle", label: "Wolle", emoji: "🧶", bucketId: "isolator" },
          { id: "luft", label: "Luft", emoji: "💨", bucketId: "isolator" }
        ]
      },
      {
        id: "ph-5-os-3",
        title: "Energiequellen",
        instruction: "Erneuerbar oder Nicht erneuerbar?",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "ern", label: "Erneuerbar", color: "#10b981" },
          { id: "nicht", label: "Nicht erneuerbar", color: "#64748b" }
        ],
        items: [
          { id: "sonne", label: "Sonnenenergie", emoji: "☀️", bucketId: "ern" },
          { id: "wind", label: "Windenergie", emoji: "🌬️", bucketId: "ern" },
          { id: "wasser", label: "Wasserkraft", emoji: "🌊", bucketId: "ern" },
          { id: "kohle", label: "Kohle", emoji: "🪨", bucketId: "nicht" },
          { id: "oel", label: "Erdöl", emoji: "🛢️", bucketId: "nicht" },
          { id: "gas", label: "Erdgas", emoji: "🔥", bucketId: "nicht" },
          { id: "uran", label: "Uran", emoji: "☢️", bucketId: "nicht" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-5-sr-1",
        title: "Kräfte-Sprint",
        questions: [
          { id: "q1", text: "Was misst ein Kraftmesser?", correct: "Kraft", wrong: ["Masse", "Temperatur", "Volumen"] },
          { id: "q2", text: "In welcher Einheit wird die Kraft angegeben?", correct: "Newton (N)", wrong: ["Kilogramm (kg)", "Joule (J)", "Watt (W)"] },
          { id: "q3", text: "Welche Kraft zieht Gegenstände zur Erde?", correct: "Schwerkraft", wrong: ["Reibung", "Magnetismus", "Auftrieb"] },
          { id: "q4", text: "Was bremst einen rollenden Ball?", correct: "Reibungskraft", wrong: ["Schwerkraft", "Zentrifugalkraft", "Elektrische Kraft"] },
          { id: "q5", text: "Womit kann man Kraft darstellen?", correct: "Mit einem Pfeil", wrong: ["Mit einem Kreis", "Mit einer Waage", "Mit einem Thermometer"] }
        ]
      },
      {
        id: "ph-5-sr-2",
        title: "Energie-Sprint",
        questions: [
          { id: "q1", text: "Welche Energieform hat ein gespannter Bogen?", correct: "Spannenergie", wrong: ["Kinetische Energie", "Wärmeenergie", "Lichtenergie"] },
          { id: "q2", text: "Welche Energie hat ein fahrendes Auto?", correct: "Kinetische Energie", wrong: ["Lageenergie", "Spannenergie", "Chemische Energie"] },
          { id: "q3", text: "Was besagt der Energieerhaltungssatz?", correct: "Energie geht nicht verloren", wrong: ["Energie kann verbraucht werden", "Energie wird zerstört", "Energie entsteht aus dem Nichts"] },
          { id: "q4", text: "In welcher Einheit wird Energie gemessen?", correct: "Joule (J)", wrong: ["Newton (N)", "Volt (V)", "Ampere (A)"] },
          { id: "q5", text: "Welche Energie steckt in unserer Nahrung?", correct: "Chemische Energie", wrong: ["Wärmeenergie", "Elektrische Energie", "Kinetische Energie"] }
        ]
      },
      {
        id: "ph-5-sr-3",
        title: "Wärme-Sprint",
        questions: [
          { id: "q1", text: "Was misst ein Thermometer?", correct: "Temperatur", wrong: ["Druck", "Masse", "Volumen"] },
          { id: "q2", text: "Bei welcher Temperatur schmilzt Eis (Celsius)?", correct: "0°C", wrong: ["100°C", "-10°C", "50°C"] },
          { id: "q3", text: "Bei welcher Temperatur kocht Wasser (Celsius)?", correct: "100°C", wrong: ["0°C", "50°C", "200°C"] },
          { id: "q4", text: "Was passiert mit Stoffen, wenn sie erwärmt werden?", correct: "Sie dehnen sich aus", wrong: ["Sie ziehen sich zusammen", "Sie werden schwerer", "Sie verschwinden"] },
          { id: "q5", text: "Wie nennt man den Übergang von flüssig zu gasförmig?", correct: "Verdampfen", wrong: ["Schmelzen", "Kondensieren", "Erstarren"] }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-5-cb-1",
        title: "Größen & Einheiten",
        instruction: "Verbinde jede physikalische Größe mit ihrer Einheit.",
        pairs: [
          { id: "p1", left: "Kraft", right: "Newton (N)" },
          { id: "p2", left: "Energie", right: "Joule (J)" },
          { id: "p3", left: "Masse", right: "Kilogramm (kg)" },
          { id: "p4", left: "Temperatur", right: "Grad Celsius (°C)" },
          { id: "p5", left: "Länge", right: "Meter (m)" }
        ]
      },
      {
        id: "ph-5-cb-2",
        title: "Maschinen & Werkzeuge",
        instruction: "Verbinde das Werkzeug mit der einfachen Maschine.",
        pairs: [
          { id: "p1", left: "Wippe", right: "Hebel" },
          { id: "p2", left: "Axt", right: "Keil" },
          { id: "p3", left: "Kran", right: "Flaschenzug" },
          { id: "p4", left: "Rollstuhlrampe", right: "Schiefe Ebene" },
          { id: "p5", left: "Lenkrad", right: "Rad und Achse" }
        ]
      },
      {
        id: "ph-5-cb-3",
        title: "Aggregatzustände",
        instruction: "Verbinde den Vorgang mit der richtigen Bezeichnung.",
        pairs: [
          { id: "p1", left: "fest zu flüssig", right: "Schmelzen" },
          { id: "p2", left: "flüssig zu gasförmig", right: "Verdampfen" },
          { id: "p3", left: "gasförmig zu flüssig", right: "Kondensieren" },
          { id: "p4", left: "flüssig zu fest", right: "Erstarren" },
          { id: "p5", left: "fest zu gasförmig", right: "Sublimieren" }
        ]
      }
    ],
    memoryRadar: [
      {
        id: "ph-5-mr-1",
        title: "Kräfte-Radar",
        instruction: "Finde die passenden Paare zur Kraft!",
        pairs: [
          { id: "pr1", termA: "Schwerkraft", termB: "zieht Massen an" },
          { id: "pr2", termA: "Reibung", termB: "bremst Bewegung" },
          { id: "pr3", termA: "Kraftmesser", termB: "hat eine Spiralfeder" },
          { id: "pr4", termA: "Pfeillänge", termB: "zeigt die Stärke der Kraft" },
          { id: "pr5", termA: "Isaac Newton", termB: "Entdecker der Schwerkraft" },
          { id: "pr6", termA: "Verformung", termB: "Wirkung einer Kraft" }
        ]
      },
      {
        id: "ph-5-mr-2",
        title: "Energie-Radar",
        instruction: "Welche Form passt zu welcher Situation?",
        pairs: [
          { id: "pr1", termA: "Fahrendes Auto", termB: "Kinetische Energie" },
          { id: "pr2", termA: "Buch im Regal", termB: "Lageenergie" },
          { id: "pr3", termA: "Gespannte Feder", termB: "Spannenergie" },
          { id: "pr4", termA: "Lagerfeuer", termB: "Wärmeenergie" },
          { id: "pr5", termA: "Batterie", termB: "Chemische Energie" },
          { id: "pr6", termA: "Glühlampe leuchtet", termB: "Lichtenergie" }
        ]
      },
      {
        id: "ph-5-mr-3",
        title: "Maschinen-Radar",
        instruction: "Finde die passenden Paare zu den Maschinen!",
        pairs: [
          { id: "pr1", termA: "Goldene Regel", termB: "Was man an Kraft spart, muss man an Weg zusetzen" },
          { id: "pr2", termA: "Feste Rolle", termB: "Ändert nur die Kraftrichtung" },
          { id: "pr3", termA: "Lose Rolle", termB: "Halbiert die benötigte Kraft" },
          { id: "pr4", termA: "Hebelgesetz", termB: "Kraft mal Kraftarm gleich Last mal Lastarm" },
          { id: "pr5", termA: "Zweiseitiger Hebel", termB: "Beispiel: Schere" },
          { id: "pr6", termA: "Einseitiger Hebel", termB: "Beispiel: Schubkarre" }
        ]
      }
    ]
  },
  6: {
    grade: 6,
    meteorCatch: [
      {
        id: "ph-6-mc-1",
        title: "Elektrische Leiter",
        prompt: "Fange nur Stoffe ein, die Strom leiten!",
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#eab308", accent: "#fde047" },
        correctItems: [
          { id: "kupfer", label: "Kupfer", emoji: "🥉" },
          { id: "eisen", label: "Eisen", emoji: "🔩" },
          { id: "silber", label: "Silber", emoji: "🥈" },
          { id: "gold", label: "Gold", emoji: "🥇" },
          { id: "alu", label: "Aluminium", emoji: "🥫" },
          { id: "salz", label: "Salzwasser", emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x1", label: "Holz", emoji: "🪵" },
          { id: "x2", label: "Gummi", emoji: "🛞" },
          { id: "x3", label: "Plastik", emoji: "🧴" },
          { id: "x4", label: "Glas", emoji: "🪟" }
        ]
      },
      {
        id: "ph-6-mc-2",
        title: "Magnetische Stoffe",
        prompt: "Fange nur magnetische Materialien ein!",
        goal: 4,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "eisen", label: "Eisen", emoji: "🔩" },
          { id: "nickel", label: "Nickel", emoji: "🪙" },
          { id: "kobalt", label: "Kobalt", emoji: "🪨" },
          { id: "stahl", label: "Stahl", emoji: "🏗️" }
        ],
        wrongItems: [
          { id: "x5", label: "Kupfer", emoji: "🥉" },
          { id: "x6", label: "Aluminium", emoji: "🥫" },
          { id: "x7", label: "Silber", emoji: "🥈" },
          { id: "x8", label: "Gold", emoji: "🥇" }
        ]
      },
      {
        id: "ph-6-mc-3",
        title: "Druck erhöhen",
        prompt: "Fange Objekte ein, die viel Druck erzeugen!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#a855f7", accent: "#c084fc" },
        correctItems: [
          { id: "nadel", label: "Nadel", emoji: "🪡" },
          { id: "messer", label: "Scharfes Messer", emoji: "🔪" },
          { id: "nagel", label: "Nagel", emoji: "📌" },
          { id: "absatz", label: "Stöckelschuh", emoji: "👠" },
          { id: "stift", label: "Spitzer Bleistift", emoji: "✏️" }
        ],
        wrongItems: [
          { id: "x9", label: "Schneeschuh", emoji: "🥾" },
          { id: "x10", label: "Breiter Reifen", emoji: "🚜" },
          { id: "x11", label: "Skier", emoji: "🎿" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-6-os-1",
        title: "Schwimmen oder Sinken",
        instruction: "Sortiere, ob der Gegenstand in Wasser schwimmt oder sinkt.",
        theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#60a5fa" },
        buckets: [
          { id: "schwimmt", label: "Schwimmt", color: "#10b981" },
          { id: "sinkt", label: "Sinkt", color: "#ef4444" }
        ],
        items: [
          { id: "holz", label: "Holzblock", emoji: "🪵", bucketId: "schwimmt" },
          { id: "korken", label: "Korken", emoji: "🍾", bucketId: "schwimmt" },
          { id: "luft", label: "Luftballon", emoji: "🎈", bucketId: "schwimmt" },
          { id: "eisen", label: "Eisennagel", emoji: "📌", bucketId: "sinkt" },
          { id: "stein", label: "Stein", emoji: "🪨", bucketId: "sinkt" },
          { id: "gold", label: "Goldmünze", emoji: "🪙", bucketId: "sinkt" }
        ]
      },
      {
        id: "ph-6-os-2",
        title: "Stromkreis-Teile",
        instruction: "Ist es eine Stromquelle oder ein Verbraucher?",
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "quelle", label: "Stromquelle", color: "#f59e0b" },
          { id: "verbr", label: "Verbraucher", color: "#a855f7" }
        ],
        items: [
          { id: "batt", label: "Batterie", emoji: "🔋", bucketId: "quelle" },
          { id: "akku", label: "Akku", emoji: "📱", bucketId: "quelle" },
          { id: "solar", label: "Solarzelle", emoji: "☀️", bucketId: "quelle" },
          { id: "lampe", label: "Glühlampe", emoji: "💡", bucketId: "verbr" },
          { id: "motor", label: "Elektromotor", emoji: "⚙️", bucketId: "verbr" },
          { id: "heiz", label: "Heizspirale", emoji: "♨️", bucketId: "verbr" },
          { id: "led", label: "LED", emoji: "🚦", bucketId: "verbr" }
        ]
      },
      {
        id: "ph-6-os-3",
        title: "Pole des Magneten",
        instruction: "Ziehen sie sich an oder stoßen sie sich ab?",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "anziehung", label: "Ziehen sich an", color: "#10b981" },
          { id: "abstoss", label: "Stoßen sich ab", color: "#ef4444" }
        ],
        items: [
          { id: "ns", label: "Nord und Süd", emoji: "🧲", bucketId: "anziehung" },
          { id: "sn", label: "Süd und Nord", emoji: "🧲", bucketId: "anziehung" },
          { id: "nn", label: "Nord und Nord", emoji: "🛑", bucketId: "abstoss" },
          { id: "ss", label: "Süd und Süd", emoji: "🛑", bucketId: "abstoss" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-6-sr-1",
        title: "Druck-Sprint",
        questions: [
          { id: "q1", text: "In welcher Einheit wird Druck gemessen?", correct: "Pascal (Pa)", wrong: ["Newton (N)", "Joule (J)", "Watt (W)"] },
          { id: "q2", text: "Wie berechnet man den Druck?", correct: "Kraft geteilt durch Fläche", wrong: ["Kraft mal Fläche", "Masse geteilt durch Fläche", "Kraft plus Fläche"] },
          { id: "q3", text: "Was passiert mit dem Luftdruck, wenn man auf einen Berg steigt?", correct: "Er sinkt", wrong: ["Er steigt", "Er bleibt gleich", "Er verdoppelt sich"] },
          { id: "q4", text: "Wieso sinkt man mit Schneeschuhen nicht ein?", correct: "Die Fläche ist größer", wrong: ["Das Gewicht ist geringer", "Schneeschuhe sind magisch", "Der Schnee wird härter"] },
          { id: "q5", text: "Welcher Druck herrscht unter Wasser?", correct: "Schweredruck", wrong: ["Luftdruck", "Reibungsdruck", "Elektrischer Druck"] }
        ]
      },
      {
        id: "ph-6-sr-2",
        title: "Elektro-Sprint",
        questions: [
          { id: "q1", text: "Aus welchen Teilen besteht ein einfacher Stromkreis?", correct: "Quelle, Leiter, Verbraucher", wrong: ["Magnet, Kabel, Schalter", "Batterie, Wasser, Lampe", "Holz, Eisen, Plastik"] },
          { id: "q2", text: "Welche Ladungen stoßen sich ab?", correct: "Gleiche Ladungen", wrong: ["Ungleiche Ladungen", "Positive und Negative", "Neutrale Ladungen"] },
          { id: "q3", text: "Was misst man in Ampere (A)?", correct: "Stromstärke", wrong: ["Spannung", "Widerstand", "Leistung"] },
          { id: "q4", text: "Was misst man in Volt (V)?", correct: "Spannung", wrong: ["Stromstärke", "Widerstand", "Kraft"] },
          { id: "q5", text: "Was schützt einen Stromkreis vor Überlastung?", correct: "Eine Sicherung", wrong: ["Ein Schalter", "Ein Motor", "Ein Transformator"] }
        ]
      },
      {
        id: "ph-6-sr-3",
        title: "Magnetismus-Sprint",
        questions: [
          { id: "q1", text: "Wo ist die Magnetkraft am stärksten?", correct: "An den Polen", wrong: ["In der Mitte", "Überall gleich", "Nur am Nordpol"] },
          { id: "q2", text: "Welches Material ist magnetisch?", correct: "Eisen", wrong: ["Kupfer", "Aluminium", "Holz"] },
          { id: "q3", text: "Was passiert, wenn man einen Magneten zerbricht?", correct: "Es entstehen zwei neue Magnete", wrong: ["Er verliert seine Kraft", "Er wird nur noch ein Nordpol", "Er schmilzt"] },
          { id: "q4", text: "Welcher Pol einer Kompassnadel zeigt nach Norden?", correct: "Der Nordpol der Nadel", wrong: ["Der Südpol der Nadel", "Die Mitte der Nadel", "Das Gehäuse"] },
          { id: "q5", text: "Wie nennt man den Raum um einen Magneten, in dem Kräfte wirken?", correct: "Magnetfeld", wrong: ["Elektrisches Feld", "Schwerefeld", "Kraftraum"] }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-6-cb-1",
        title: "Größen & Einheiten",
        instruction: "Verbinde die elektrische oder mechanische Größe mit ihrer Einheit.",
        pairs: [
          { id: "p1", left: "Spannung", right: "Volt (V)" },
          { id: "p2", left: "Stromstärke", right: "Ampere (A)" },
          { id: "p3", left: "Widerstand", right: "Ohm (Ω)" },
          { id: "p4", left: "Druck", right: "Pascal (Pa)" },
          { id: "p5", left: "Fläche", right: "Quadratmeter (m²)" }
        ]
      },
      {
        id: "ph-6-cb-2",
        title: "Schaltzeichen",
        instruction: "Verbinde das Bauteil mit seiner Funktion im Stromkreis.",
        pairs: [
          { id: "p1", left: "Schalter", right: "Öffnet oder schließt den Kreis" },
          { id: "p2", left: "Glühlampe", right: "Wandelt Strom in Licht um" },
          { id: "p3", left: "Batterie", right: "Liefert die elektrische Spannung" },
          { id: "p4", left: "Kabel", right: "Leitet den elektrischen Strom" },
          { id: "p5", left: "Sicherung", right: "Unterbricht bei zu hohem Strom" }
        ]
      },
      {
        id: "ph-6-cb-3",
        title: "Auftrieb & Dichte",
        instruction: "Verbinde das Phänomen mit der richtigen Bedingung.",
        pairs: [
          { id: "p1", left: "Körper schwimmt", right: "Auftrieb = Gewichtskraft" },
          { id: "p2", left: "Körper sinkt", right: "Auftrieb < Gewichtskraft" },
          { id: "p3", left: "Körper steigt auf", right: "Auftrieb > Gewichtskraft" },
          { id: "p4", left: "Dichte", right: "Masse geteilt durch Volumen" },
          { id: "p5", left: "Archimedisches Prinzip", right: "Auftrieb = Gewicht der verdrängten Flüssigkeit" }
        ]
      }
    ],
    memoryRadar: [
      {
        id: "ph-6-mr-1",
        title: "Druck-Radar",
        instruction: "Finde die passenden Paare zum Thema Druck!",
        pairs: [
          { id: "pr1", termA: "Druck Definition", termB: "Kraft pro Fläche" },
          { id: "pr2", termA: "Große Fläche", termB: "Geringer Druck" },
          { id: "pr3", termA: "Kleine Fläche", termB: "Hoher Druck" },
          { id: "pr4", termA: "Barometer", termB: "Misst den Luftdruck" },
          { id: "pr5", termA: "Vakuum", termB: "Luftleerer Raum" },
          { id: "pr6", termA: "Kolbendruck", termB: "Druck in einer Flüssigkeit" }
        ]
      },
      {
        id: "ph-6-mr-2",
        title: "Elektro-Radar",
        instruction: "Ordne die Begriffe aus der Elektrizitätslehre zu!",
        pairs: [
          { id: "pr1", termA: "Reihenschaltung", termB: "Lampen leuchten schwächer" },
          { id: "pr2", termA: "Parallelschaltung", termB: "Lampen leuchten gleich hell" },
          { id: "pr3", termA: "Kurzschluss", termB: "Strom fließt ohne Widerstand" },
          { id: "pr4", termA: "Elektronen", termB: "Träger der negativen Ladung" },
          { id: "pr5", termA: "Protonen", termB: "Träger der positiven Ladung" },
          { id: "pr6", termA: "Isolator", termB: "Verhindert Stromfluss" }
        ]
      },
      {
        id: "ph-6-mr-3",
        title: "Magnet-Radar",
        instruction: "Finde die passenden Paare zum Magnetismus!",
        pairs: [
          { id: "pr1", termA: "Magnetfeldlinien", termB: "Verlaufen von Nord nach Süd" },
          { id: "pr2", termA: "Erdmagnetfeld", termB: "Schützt vor Sonnenwinden" },
          { id: "pr3", termA: "Geografischer Nordpol", termB: "Magnetischer Südpol" },
          { id: "pr4", termA: "Missweisung (Deklination)", termB: "Abweichung der Kompassnadel" },
          { id: "pr5", termA: "Magnetisieren", termB: "Elementarmagnete ausrichten" },
          { id: "pr6", termA: "Entmagnetisieren", termB: "Durch Erschütterung oder Hitze" }
        ]
      }
    ]
  },
  7: {
    grade: 7,
    meteorCatch: [
      {
        id: "ph-7-mc-1",
        title: "Lichtquellen",
        prompt: "Fange nur selbstleuchtende Lichtquellen ein!",
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "sonne", label: "Sonne", emoji: "☀️" },
          { id: "kerze", label: "Kerze", emoji: "🕯️" },
          { id: "lampe", label: "Glühlampe", emoji: "💡" },
          { id: "stern", label: "Stern", emoji: "⭐" },
          { id: "feuer", label: "Lagerfeuer", emoji: "🔥" },
          { id: "led", label: "LED-Diode", emoji: "🚦" }
        ],
        wrongItems: [
          { id: "x1", label: "Mond", emoji: "🌕" },
          { id: "x2", label: "Spiegel", emoji: "🪞" },
          { id: "x3", label: "Buch", emoji: "📖" },
          { id: "x4", label: "Reflektor", emoji: "🚲" }
        ]
      },
      {
        id: "ph-7-mc-2",
        title: "Schallerzeuger",
        prompt: "Fange nur Dinge ein, die Schall erzeugen!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "stimmgabel", label: "Stimmgabel", emoji: "🪚" },
          { id: "lautsprecher", label: "Lautsprecher", emoji: "🔊" },
          { id: "gitarre", label: "Gitarrensaite", emoji: "🎸" },
          { id: "trommel", label: "Trommel", emoji: "🥁" },
          { id: "stimme", label: "Menschliche Stimme", emoji: "🗣️" }
        ],
        wrongItems: [
          { id: "x5", label: "Vakuum", emoji: "🌌" },
          { id: "x6", label: "Lichtstrahl", emoji: "🔦" },
          { id: "x7", label: "Schatten", emoji: "👤" }
        ]
      },
      {
        id: "ph-7-mc-3",
        title: "Arbeit & Leistung",
        prompt: "Fange nur Einheiten für Arbeit und Leistung ein!",
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "joule", label: "Joule (J)", emoji: "⚡" },
          { id: "watt", label: "Watt (W)", emoji: "🔌" },
          { id: "kilowatt", label: "Kilowatt (kW)", emoji: "🏭" },
          { id: "newtonmeter", label: "Newtonmeter (Nm)", emoji: "📏" }
        ],
        wrongItems: [
          { id: "x8", label: "Newton (N)", emoji: "🍎" },
          { id: "x9", label: "Volt (V)", emoji: "🔋" },
          { id: "x10", label: "Ampere (A)", emoji: "🌊" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-7-os-1",
        title: "Lichtdurchlässigkeit",
        instruction: "Ist das Material lichtdurchlässig oder undurchlässig?",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "durch", label: "Lichtdurchlässig", color: "#3b82f6" },
          { id: "undurch", label: "Lichtundurchlässig", color: "#64748b" }
        ],
        items: [
          { id: "glas", label: "Fensterglas", emoji: "🪟", bucketId: "durch" },
          { id: "wasser", label: "Klares Wasser", emoji: "💧", bucketId: "durch" },
          { id: "luft", label: "Luft", emoji: "💨", bucketId: "durch" },
          { id: "holz", label: "Holzbrett", emoji: "🪵", bucketId: "undurch" },
          { id: "stein", label: "Ziegelstein", emoji: "🧱", bucketId: "undurch" },
          { id: "pappe", label: "Karton", emoji: "📦", bucketId: "undurch" }
        ]
      },
      {
        id: "ph-7-os-2",
        title: "Töne sortieren",
        instruction: "Gehört die Eigenschaft zu einem hohen oder tiefen Ton?",
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "hoch", label: "Hoher Ton", color: "#ec4899" },
          { id: "tief", label: "Tiefer Ton", color: "#3b82f6" }
        ],
        items: [
          { id: "kurz", label: "Kurze Schallwellen", emoji: "〰️", bucketId: "hoch" },
          { id: "schnell", label: "Schnelle Schwingung", emoji: "⚡", bucketId: "hoch" },
          { id: "hfrequenz", label: "Hohe Frequenz", emoji: "📈", bucketId: "hoch" },
          { id: "lang", label: "Lange Schallwellen", emoji: "🌊", bucketId: "tief" },
          { id: "langsam", label: "Langsame Schwingung", emoji: "🐢", bucketId: "tief" },
          { id: "nfrequenz", label: "Niedrige Frequenz", emoji: "📉", bucketId: "tief" }
        ]
      },
      {
        id: "ph-7-os-3",
        title: "Arbeit vs. Leistung",
        instruction: "Gehört der Begriff zur mechanischen Arbeit oder zur Leistung?",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "arbeit", label: "Arbeit (W)", color: "#f59e0b" },
          { id: "leistung", label: "Leistung (P)", color: "#ef4444" }
        ],
        items: [
          { id: "joule", label: "Einheit: Joule (J)", emoji: "⚡", bucketId: "arbeit" },
          { id: "kraftweg", label: "Kraft mal Weg", emoji: "📏", bucketId: "arbeit" },
          { id: "hub", label: "Hubarbeit", emoji: "🏗️", bucketId: "arbeit" },
          { id: "watt", label: "Einheit: Watt (W)", emoji: "💡", bucketId: "leistung" },
          { id: "arbeittime", label: "Arbeit pro Zeit", emoji: "⏱️", bucketId: "leistung" },
          { id: "schnell", label: "Wie schnell Arbeit verrichtet wird", emoji: "🏃", bucketId: "leistung" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-7-sr-1",
        title: "Optik-Sprint",
        questions: [
          { id: "q1", text: "Wie breitet sich Licht aus?", correct: "Geradlinig", wrong: ["In Kurven", "Im Zickzack", "Gar nicht"] },
          { id: "q2", text: "Was passiert, wenn Licht auf einen Spiegel trifft?", correct: "Es wird reflektiert", wrong: ["Es wird absorbiert", "Es wird gebrochen", "Es verschwindet"] },
          { id: "q3", text: "Was entsteht hinter einem lichtundurchlässigen Körper?", correct: "Ein Schatten", wrong: ["Ein Regenbogen", "Ein Prisma", "Ein Vakuum"] },
          { id: "q4", text: "Wie nennt man die Ablenkung von Licht an einer Grenzfläche (z.B. Luft zu Wasser)?", correct: "Brechung", wrong: ["Reflexion", "Streuung", "Beugung"] },
          { id: "q5", text: "Welche Linse bündelt das Licht?", correct: "Sammellinse (Konvex)", wrong: ["Zerstreuungslinse (Konkav)", "Flache Glasscheibe", "Milchglas"] }
        ]
      },
      {
        id: "ph-7-sr-2",
        title: "Akustik-Sprint",
        questions: [
          { id: "q1", text: "Was ist Schall physikalisch gesehen?", correct: "Eine Schwingung", wrong: ["Ein Strahl", "Ein Magnetfeld", "Ein Teilchen"] },
          { id: "q2", text: "In welcher Einheit wird die Frequenz gemessen?", correct: "Hertz (Hz)", wrong: ["Dezibel (dB)", "Joule (J)", "Watt (W)"] },
          { id: "q3", text: "In welcher Einheit misst man die Lautstärke?", correct: "Dezibel (dB)", wrong: ["Hertz (Hz)", "Pascal (Pa)", "Newton (N)"] },
          { id: "q4", text: "Wo kann sich Schall NICHT ausbreiten?", correct: "Im Vakuum", wrong: ["Im Wasser", "In der Luft", "In Metall"] },
          { id: "q5", text: "Was bestimmt die Tonhöhe?", correct: "Die Frequenz", wrong: ["Die Amplitude", "Die Temperatur", "Die Lautstärke"] }
        ]
      },
      {
        id: "ph-7-sr-3",
        title: "Mechanik-Sprint",
        questions: [
          { id: "q1", text: "Wie lautet die Formel für mechanische Arbeit?", correct: "W = F * s", wrong: ["W = m * a", "W = F / s", "W = P * t"] },
          { id: "q2", text: "Was berechnet man mit P = W / t ?", correct: "Die Leistung", wrong: ["Die Arbeit", "Die Kraft", "Die Geschwindigkeit"] },
          { id: "q3", text: "Welche Arbeit verrichtest du, wenn du eine Kiste anhebst?", correct: "Hubarbeit", wrong: ["Reibungsarbeit", "Beschleunigungsarbeit", "Spannarbeit"] },
          { id: "q4", text: "Ein Motor leistet viel Arbeit in kurzer Zeit. Seine Leistung ist...", correct: "Hoch", wrong: ["Gering", "Null", "Negativ"] },
          { id: "q5", text: "1000 Watt entsprechen...", correct: "1 Kilowatt (kW)", wrong: ["1 Megawatt (MW)", "1 Joule (J)", "1 Newton (N)"] }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-7-cb-1",
        title: "Optische Instrumente",
        instruction: "Verbinde das optische Bauteil mit seiner Funktion.",
        pairs: [
          { id: "p1", left: "Sammellinse", right: "Bündelt Lichtstrahlen (Brennpunkt)" },
          { id: "p2", left: "Zerstreuungslinse", right: "Fächert Lichtstrahlen auf" },
          { id: "p3", left: "Prisma", right: "Zerlegt weißes Licht in Spektralfarben" },
          { id: "p4", left: "Ebener Spiegel", right: "Reflektiert das Licht gerichtet" },
          { id: "p5", left: "Lochblende", right: "Erzeugt ein umgekehrtes Bild (Camera Obscura)" }
        ]
      },
      {
        id: "ph-7-cb-2",
        title: "Schall & Gehör",
        instruction: "Verbinde den akustischen Begriff mit seiner Bedeutung.",
        pairs: [
          { id: "p1", left: "Frequenz", right: "Schwingungen pro Sekunde" },
          { id: "p2", left: "Amplitude", right: "Maximale Auslenkung (Lautstärke)" },
          { id: "p3", left: "Ultraschall", right: "Töne über 20.000 Hz (Menschen hören es nicht)" },
          { id: "p4", left: "Schallgeschwindigkeit", right: "Ca. 340 m/s in der Luft" },
          { id: "p5", left: "Echo", right: "Reflektierter Schall" }
        ]
      },
      {
        id: "ph-7-cb-3",
        title: "Formeln der Mechanik",
        instruction: "Verbinde die Formel mit der gesuchten Größe.",
        pairs: [
          { id: "p1", left: "W = F · s", right: "Mechanische Arbeit" },
          { id: "p2", left: "P = W / t", right: "Leistung" },
          { id: "p3", left: "F = m · g", right: "Gewichtskraft" },
          { id: "p4", left: "v = s / t", right: "Geschwindigkeit" },
          { id: "p5", left: "p = F / A", right: "Druck" }
        ]
      }
    ],
    memoryRadar: [
      {
        id: "ph-7-mr-1",
        title: "Licht-Radar",
        instruction: "Finde die Paare zum Thema Optik!",
        pairs: [
          { id: "pr1", termA: "Reflexionsgesetz", termB: "Einfallswinkel = Ausfallswinkel" },
          { id: "pr2", termA: "Lichtgeschwindigkeit", termB: "Ca. 300.000 km/s im Vakuum" },
          { id: "pr3", termA: "Absorption", termB: "Verschlucken von Licht" },
          { id: "pr4", termA: "Weißes Licht", termB: "Gemisch aller Spektralfarben" },
          { id: "pr5", termA: "Konvexe Linse", termB: "In der Mitte dicker als am Rand" },
          { id: "pr6", termA: "Konkave Linse", termB: "In der Mitte dünner als am Rand" }
        ]
      },
      {
        id: "ph-7-mr-2",
        title: "Schall-Radar",
        instruction: "Ordne die akustischen Paare zu!",
        pairs: [
          { id: "pr1", termA: "Hoher Ton", termB: "Hohe Frequenz" },
          { id: "pr2", termA: "Lauter Ton", termB: "Große Amplitude" },
          { id: "pr3", termA: "Hertz (Hz)", termB: "Einheit der Frequenz" },
          { id: "pr4", termA: "Dezibel (dB)", termB: "Einheit des Schallpegels" },
          { id: "pr5", termA: "Schallausbreitung", termB: "Braucht ein Medium (z.B. Luft, Wasser)" },
          { id: "pr6", termA: "Gehörschutz", termB: "Verhindert Gehörschäden bei Lärm" }
        ]
      },
      {
        id: "ph-7-mr-3",
        title: "Arbeits-Radar",
        instruction: "Finde die Paare zur mechanischen Arbeit!",
        pairs: [
          { id: "pr1", termA: "Hubarbeit", termB: "Einen Gegenstand hochheben" },
          { id: "pr2", termA: "Reibungsarbeit", termB: "Eine Kiste über den Boden schieben" },
          { id: "pr3", termA: "Beschleunigungsarbeit", termB: "Ein Auto anfahren lassen" },
          { id: "pr4", termA: "1 Joule (J)", termB: "Entspricht 1 Newtonmeter (Nm)" },
          { id: "pr5", termA: "Leistung", termB: "Gibt an, wie schnell Arbeit verrichtet wird" },
          { id: "pr6", termA: "James Watt", termB: "Namensgeber der Leistungseinheit" }
        ]
      }
    ]
  },
  8: {
    grade: 8,
    meteorCatch: [
      {
        id: "ph-8-mc-1",
        title: "Atombausteine",
        prompt: "Fange nur Bausteine des Atoms ein!",
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#8b5cf6", accent: "#a855f7" },
        correctItems: [
          { id: "proton", label: "Proton", emoji: "➕" },
          { id: "neutron", label: "Neutron", emoji: "⚪" },
          { id: "elektron", label: "Elektron", emoji: "➖" },
          { id: "atomkern", label: "Atomkern", emoji: "⚛️" }
        ],
        wrongItems: [
          { id: "x1", label: "Bakterium", emoji: "🦠" },
          { id: "x2", label: "Zelle", emoji: "🧬" },
          { id: "x3", label: "Lichtjahr", emoji: "🌌" },
          { id: "x4", label: "Molekül", emoji: "🔗" }
        ]
      },
      {
        id: "ph-8-mc-2",
        title: "Elektromagnetismus",
        prompt: "Fange Bauteile für einen Elektromagneten ein!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "spule", label: "Kupferspule", emoji: "🧵" },
          { id: "eisenkern", label: "Eisenkern", emoji: "🔩" },
          { id: "strom", label: "Gleichstrom", emoji: "⚡" },
          { id: "batterie", label: "Stromquelle", emoji: "🔋" },
          { id: "schalter", label: "Schalter", emoji: "🕹️" }
        ],
        wrongItems: [
          { id: "x5", label: "Prisma", emoji: "🔺" },
          { id: "x6", label: "Holzstab", emoji: "🪵" },
          { id: "x7", label: "Plastikrohr", emoji: "🪈" }
        ]
      },
      {
        id: "ph-8-mc-3",
        title: "Erneuerbare Energien",
        prompt: "Fange klimafreundliche Energiequellen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "wind", label: "Windkraft", emoji: "🌬️" },
          { id: "solar", label: "Sonnenenergie", emoji: "☀️" },
          { id: "wasser", label: "Wasserkraft", emoji: "🌊" },
          { id: "geothermie", label: "Erdwärme", emoji: "🌋" },
          { id: "biomasse", label: "Biomasse", emoji: "🌱" },
          { id: "gezeiten", label: "Gezeitenkraft", emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x8", label: "Kohlekraft", emoji: "🏭" },
          { id: "x9", label: "Erdgas", emoji: "🔥" },
          { id: "x10", label: "Kernkraft", emoji: "☢️" },
          { id: "x11", label: "Erdöl", emoji: "🛢️" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-8-os-1",
        title: "Atomkern vs. Atomhülle",
        instruction: "Wo befindet sich das Teilchen oder die Eigenschaft?",
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "kern", label: "Atomkern", color: "#ef4444" },
          { id: "huelle", label: "Atomhülle", color: "#3b82f6" }
        ],
        items: [
          { id: "proton", label: "Protonen", emoji: "➕", bucketId: "kern" },
          { id: "neutron", label: "Neutronen", emoji: "⚪", bucketId: "kern" },
          { id: "masse", label: "Fast die gesamte Masse", emoji: "⚖️", bucketId: "kern" },
          { id: "elektron", label: "Elektronen", emoji: "➖", bucketId: "huelle" },
          { id: "negativ", label: "Negative Ladung", emoji: "⚡", bucketId: "huelle" },
          { id: "volumen", label: "Fast das gesamte Volumen", emoji: "🌌", bucketId: "huelle" }
        ]
      },
      {
        id: "ph-8-os-2",
        title: "Gleichstrom vs. Wechselstrom",
        instruction: "Gehört die Eigenschaft zu DC (Gleichstrom) oder AC (Wechselstrom)?",
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "dc", label: "Gleichstrom (DC)", color: "#10b981" },
          { id: "ac", label: "Wechselstrom (AC)", color: "#f59e0b" }
        ],
        items: [
          { id: "batt", label: "Batterie liefert es", emoji: "🔋", bucketId: "dc" },
          { id: "richtung1", label: "Fließt nur in eine Richtung", emoji: "➡️", bucketId: "dc" },
          { id: "steckdose", label: "Kommt aus der Steckdose", emoji: "🔌", bucketId: "ac" },
          { id: "richtung2", label: "Wechselt ständig die Richtung", emoji: "🔀", bucketId: "ac" },
          { id: "hertz", label: "Hat in Europa 50 Hz", emoji: "📈", bucketId: "ac" },
          { id: "trafo", label: "Kann gut transformiert werden", emoji: "🏗️", bucketId: "ac" }
        ]
      },
      {
        id: "ph-8-os-3",
        title: "Strahlungsarten",
        instruction: "Sortiere nach Alpha- oder Betastrahlung.",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "alpha", label: "Alphastrahlung (α)", color: "#ef4444" },
          { id: "beta", label: "Betastrahlung (β)", color: "#3b82f6" }
        ],
        items: [
          { id: "heli", label: "Heliumkerne", emoji: "⚛️", bucketId: "alpha" },
          { id: "papier", label: "Wird durch Papier gestoppt", emoji: "📄", bucketId: "alpha" },
          { id: "positiv", label: "Positiv geladen", emoji: "➕", bucketId: "alpha" },
          { id: "elektr", label: "Schnelle Elektronen", emoji: "⚡", bucketId: "beta" },
          { id: "alu", label: "Wird durch Aluminium gestoppt", emoji: "🥫", bucketId: "beta" },
          { id: "negativ", label: "Negativ geladen", emoji: "➖", bucketId: "beta" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-8-sr-1",
        title: "Atom-Sprint",
        questions: [
          { id: "q1", text: "Welche Ladung hat ein Proton?", correct: "Positiv", wrong: ["Negativ", "Neutral", "Es hat keine Ladung"] },
          { id: "q2", text: "Welche Ladung hat ein Elektron?", correct: "Negativ", wrong: ["Positiv", "Neutral", "Wechselnd"] },
          { id: "q3", text: "Wo befindet sich das Elektron?", correct: "In der Atomhülle", wrong: ["Im Atomkern", "Zwischen Protonen", "Außerhalb des Atoms"] },
          { id: "q4", text: "Was gibt die Ordnungszahl im Periodensystem an?", correct: "Die Anzahl der Protonen", wrong: ["Die Anzahl der Neutronen", "Das Gewicht", "Die Größe der Hülle"] },
          { id: "q5", text: "Wie nennt man Atome desselben Elements mit unterschiedlicher Neutronenzahl?", correct: "Isotope", wrong: ["Ionen", "Moleküle", "Quarks"] }
        ]
      },
      {
        id: "ph-8-sr-2",
        title: "Induktions-Sprint",
        questions: [
          { id: "q1", text: "Was passiert, wenn sich ein Magnet in einer Spule bewegt?", correct: "Es entsteht Spannung (Induktion)", wrong: ["Der Magnet schmilzt", "Die Spule wird magnetisch isoliert", "Nichts"] },
          { id: "q2", text: "Ein Generator wandelt mechanische Energie um in...", correct: "Elektrische Energie", wrong: ["Wärmeenergie", "Chemische Energie", "Lichtenergie"] },
          { id: "q3", text: "Ein Elektromotor wandelt elektrische Energie um in...", correct: "Mechanische Energie", wrong: ["Spannenergie", "Kernenergie", "Schallenergie"] },
          { id: "q4", text: "Wofür braucht man einen Transformator?", correct: "Spannung hoch- oder runterregeln", wrong: ["Strom speichern", "Gleichstrom erzeugen", "Widerstand messen"] },
          { id: "q5", text: "Welche Spannung kommt im Haushalt aus der Steckdose?", correct: "230 Volt", wrong: ["12 Volt", "1000 Volt", "5 Volt"] }
        ]
      },
      {
        id: "ph-8-sr-3",
        title: "Umwelt-Sprint",
        questions: [
          { id: "q1", text: "Welches Gas gilt als Hauptverursacher des Klimawandels?", correct: "Kohlenstoffdioxid (CO2)", wrong: ["Sauerstoff (O2)", "Stickstoff (N2)", "Helium (He)"] },
          { id: "q2", text: "Was beschreibt der Treibhauseffekt?", correct: "Wärme wird in der Atmosphäre gehalten", wrong: ["Die Sonne kühlt ab", "Pflanzen wachsen schneller", "Ozon wird abgebaut"] },
          { id: "q3", text: "Welches Kraftwerk nutzt Kernspaltung?", correct: "Atomkraftwerk", wrong: ["Kohlekraftwerk", "Wasserkraftwerk", "Geothermie-Kraftwerk"] },
          { id: "q4", text: "Was ist ein großer Nachteil von Kernkraft?", correct: "Radioaktiver Abfall", wrong: ["Viel CO2-Ausstoß", "Sehr teurer Brennstoff", "Braucht viel Wind"] },
          { id: "q5", text: "Wie nennt man Energie aus Sonnenlicht?", correct: "Photovoltaik", wrong: ["Geothermie", "Wasserkraft", "Biomasse"] }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-8-cb-1",
        title: "Bausteine des Atoms",
        instruction: "Verbinde das Elementarteilchen mit seiner Ladung.",
        pairs: [
          { id: "p1", left: "Proton", right: "Positiv geladen (+)" },
          { id: "p2", left: "Elektron", right: "Negativ geladen (-)" },
          { id: "p3", left: "Neutron", right: "Elektrisch neutral (0)" },
          { id: "p4", left: "Atomkern", right: "Gesamtladung positiv" },
          { id: "p5", left: "Gesamtes Atom", right: "Nach außen neutral" }
        ]
      },
      {
        id: "ph-8-cb-2",
        title: "Elektromagnetische Anwendungen",
        instruction: "Verbinde die Maschine mit ihrem Prinzip.",
        pairs: [
          { id: "p1", left: "Generator", right: "Bewegung → Strom" },
          { id: "p2", left: "Elektromotor", right: "Strom → Bewegung" },
          { id: "p3", left: "Transformator", right: "Ändert die Wechselspannung" },
          { id: "p4", left: "Elektromagnet", right: "Ist nur magnetisch, wenn Strom fließt" },
          { id: "p5", left: "Lautsprecher", right: "Stromschwankungen → Schall" }
        ]
      },
      {
        id: "ph-8-cb-3",
        title: "Kraftwerke & Energie",
        instruction: "Welches Kraftwerk nutzt welche Energiequelle?",
        pairs: [
          { id: "p1", left: "Wasserkraftwerk", right: "Lageenergie von aufgestautem Wasser" },
          { id: "p2", left: "Windkraftanlage", right: "Kinetische Energie der Luft" },
          { id: "p3", left: "Kohlekraftwerk", right: "Chemische Energie von Fossilien" },
          { id: "p4", left: "Kernkraftwerk", right: "Bindungsenergie von Atomkernen" },
          { id: "p5", left: "Photovoltaikanlage", right: "Strahlungsenergie der Sonne" }
        ]
      }
    ],
    memoryRadar: [
      {
        id: "ph-8-mr-1",
        title: "Atom-Radar",
        instruction: "Finde die passenden Paare zur Atomphysik!",
        pairs: [
          { id: "pr1", termA: "Rutherford-Versuch", termB: "Entdeckung des kleinen Atomkerns" },
          { id: "pr2", termA: "Bohrsches Atommodell", termB: "Elektronen auf festen Schalen" },
          { id: "pr3", termA: "Isotope", termB: "Gleiche Protonen, verschiedene Neutronen" },
          { id: "pr4", termA: "Ionen", termB: "Elektrisch geladene Atome" },
          { id: "pr5", termA: "Ordnungszahl", termB: "Anzahl der Protonen" },
          { id: "pr6", termA: "Massenzahl", termB: "Protonen + Neutronen" }
        ]
      },
      {
        id: "ph-8-mr-2",
        title: "Induktions-Radar",
        instruction: "Ordne die Begriffe des Elektromagnetismus zu!",
        pairs: [
          { id: "pr1", termA: "Induktion", termB: "Spannung durch Magnetfeldänderung" },
          { id: "pr2", termA: "Lenzsche Regel", termB: "Induktionsstrom hemmt seine Ursache" },
          { id: "pr3", termA: "Primärspule", termB: "Eingangsseite am Transformator" },
          { id: "pr4", termA: "Sekundärspule", termB: "Ausgangsseite am Transformator" },
          { id: "pr5", termA: "Wechselstrom", termB: "Notwendig für einen Transformator" },
          { id: "pr6", termA: "Lorentzkraft", termB: "Kraft auf bewegte Ladungen im Magnetfeld" }
        ]
      },
      {
        id: "ph-8-mr-3",
        title: "Radioaktivitäts-Radar",
        instruction: "Finde die Paare zur Radioaktivität und Strahlung!",
        pairs: [
          { id: "pr1", termA: "Alphastrahlung", termB: "Heliumkerne" },
          { id: "pr2", termA: "Betastrahlung", termB: "Schnelle Elektronen" },
          { id: "pr3", termA: "Gammastrahlung", termB: "Hochenergetische elektromagnetische Wellen" },
          { id: "pr4", termA: "Halbwertszeit", termB: "Zeit, bis die Hälfte zerfallen ist" },
          { id: "pr5", termA: "Geiger-Müller-Zählrohr", termB: "Gerät zum Messen von Radioaktivität" },
          { id: "pr6", termA: "Kernspaltung", termB: "Urankern wird durch ein Neutron geteilt" }
        ]
      }
    ]
  },
};