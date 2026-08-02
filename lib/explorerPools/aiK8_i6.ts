// @ts-nocheck
// lib/explorerPools/aiK8_i6.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Insel: Die Zukunft",
    t1_title: "AGI (Allgemeine KI)", t1_text: "AGI ist eine KI, die wie ein Mensch jede intellektuelle Aufgabe verstehen oder lernen kann.", t1_inst: "Ordne die Paare zu:", t1_h1: "Spezialist vs. Generalist.", t1_h2: "Zukünftige Vision.", t1_q: "Was unterscheidet AGI von heutiger KI?", t1_qa: "Vielseitigkeit wie beim Menschen", t1_qb: "Sie ist nur schneller", t1_qc: "Sie braucht keinen Strom", t1_qd: "Sie ist aus Holz",
    t1_l1: "Schach-KI", t1_r1: "Spezialisiert", t1_l2: "AGI", t1_r2: "Universell", t1_l3: "Mensch", t1_r3: "Flexibel",
    t2_title: "Superintelligenz", t2_text: "Eine hypothetische KI, die die menschliche Intelligenz in allen Bereichen weit übertrifft.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Jenseits des Menschen.", t2_h2: "Enormes Wissen.", t2_q: "Wie nennt man eine Intelligenz, die klüger als alle Menschen zusammen ist?", t2_qa: "Superintelligenz", t2_qb: "Taschenrechner", t2_qc: "Radio", t2_qd: "Batterie",
    t2_sent: "Superintelligenz könnte Probleme lösen, die für uns heute ___ sind.", t2_qa2: "unmöglich", t2_qb2: "einfach", t2_qc2: "langweilig", t2_qd2: "bunt",
    t3_title: "KI und Weltraum", t3_text: "KI steuert Sonden und analysiert Daten von fernen Planeten, wo Menschen nicht hinkommen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Erde vs. All.", t3_h2: "KI als Entdecker.", t3_q: "Was macht KI im Weltraum?", t3_qa: "Navigation von Sonden", t3_qb: "Sterne putzen", t3_qc: "Pizza liefern", t3_qd: "Nichts",
    t3_bl1: "Auf der Erde", t3_bl2: "Im Weltraum", t3_i1: "Staubsauger", t3_i2: "Mars-Rover", t3_i3: "Ampelschaltung", t3_i4: "Exoplaneten-Suche",
    t4_title: "Quantencomputer & KI", t4_text: "Quantencomputer könnten KI-Berechnungen millionenfach beschleunigen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Neue Art von Computer.", t4_h2: "Turbo für die KI.", t4_q: "Was ist der Vorteil von Quantencomputern für KI?", t4_qa: "Extreme Geschwindigkeit", t4_qb: "Sie sind billiger", t4_qc: "Sie brauchen kein Internet", t4_qd: "Sie sind kleiner",
    t4_w1: "Quanten-KI", t4_w2: "löst", t4_w3: "komplexe", t4_w4: "Probleme", t4_w5: "in", t4_w6: "wenigen", t4_w7: "Sekunden.",
    t5_title: "Brain-Computer Interface", t5_text: "Technologie, die das Gehirn direkt mit einem Computer verbindet.", t5_inst: "Markiere das Wort für Gehirn-Computer-Schnittstellen:", t5_h1: "Gedankensteuerung.", t5_h2: "Direktleitung.", t5_q: "Was erlaubt ein Brain-Computer Interface (BCI)?", t5_qa: "Steuerung durch Gedanken", t5_qb: "Schnelleres Laufen", t5_qc: "Besseres Hören", t5_qd: "Essen ohne Mund",
    t5_tk1: "BCIs", t5_tk2: "verbinden", t5_tk3: "menschliche", t5_tk4: "Neuronen", t5_tk5: "mit", t5_tk6: "digitalen", t5_tk7: "Chips.",
    t6_title: "KI-Kreativität", t6_text: "Kann eine Maschine wirklich kreativ sein oder kombiniert sie nur Vorhandenes?", t6_inst: "Ordne die Paare zu:", t6_h1: "Kunst und Code.", t6_h2: "Schöpferkraft.", t6_q: "Was erstellt eine 'kreative' KI?", t6_qa: "Neue Bilder und Musik", t6_qb: "Echte Gemälde aus Öl", t6_qc: "Gefühle", t6_qd: "Hunger",
    t6_l1: "KI", t6_r1: "Algorithmus", t6_l2: "Mensch", t6_r2: "Inspiration", t6_l3: "Ergebnis", t6_r3: "Kunstwerk",
    t7_title: "Die Singularität", t7_text: "Der Zeitpunkt, an dem das technologische Wachstum unkontrollierbar und unumkehrbar wird.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Ein Wendepunkt.", t7_h2: "Zukunftstheorie.", t7_q: "Was passiert laut Theorie bei der Singularität?", t7_qa: "KI verbessert sich selbst", t7_qb: "Das Internet geht aus", t7_qc: "Alle Roboter tanzen", t7_qd: "Nichts ändert sich",
    t7_sent: "Bei der Singularität überholt die ___ die menschliche Intelligenz.", t7_qa2: "Technologie", t7_qb2: "Schnecke", t7_qc2: "Post", t7_qd2: "Sonne",
    t8_title: "Reinforcement Learning", t8_text: "Lernen durch Belohnung und Bestrafung, wie ein Hund (oder AlphaGo).", t8_inst: "Sortiere in die Eimer:", t8_h1: "Versuch und Irrtum.", t8_h2: "Optimaler Weg.", t8_q: "Wie lernt AlphaGo?", t8_qa: "Durch Spielen gegen sich selbst", t8_qb: "Durch Lesen von Büchern", t8_qc: "Gar nicht", t8_qd: "Durch Zusehen",
    t8_bl1: "Aktion", t8_bl2: "Feedback", t8_i1: "Zug machen", t8_i2: "Punkt erhalten", t8_i3: "Fehler machen", t8_i4: "Punktabzug",
    t9_title: "KI gegen Klimawandel", t9_text: "KI hilft, den Energieverbrauch zu optimieren und Wetterextreme vorherzusagen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "KI als Retter?", t9_h2: "Umweltschutz.", t9_q: "Wie hilft KI der Umwelt?", t9_qa: "Effiziente Energienutzung", t9_qb: "Sie pflanzt Bäume von Hand", t9_qc: "Sie macht es kälter", t9_qd: "Gar nicht",
    t9_w1: "Intelligente", t9_w2: "Systeme", t9_w3: "reduzieren", t9_w4: "den", t9_w5: "weltweiten", t9_w6: "CO2", t9_w7: "Ausstoß.",
    t10_title: "Explainable AI (XAI)", t10_text: "Das Ziel, Entscheidungen der KI für Menschen verständlich zu machen.", t10_inst: "Markiere die Abkürzung für 'erklärbare KI':", t10_h1: "Keine Black Box.", t10_h2: "Warum hat sie das getan?", t10_q: "Was ist XAI?", t10_qa: "Erklärbare KI", t10_qb: "Extra starke KI", t10_qc: "X-beliebige KI", t10_qd: "Xylophon-KI",
    t10_tk1: "XAI", t10_tk2: "macht", t10_tk3: "KI-Entscheidungen", t10_tk4: "für", t10_tk5: "Menschen", t10_tk6: "nachvollziehbar.", t10_tk7: "",
    t11_title: "Synthetische Daten", t11_text: "KI-generierte Daten, die zum Training anderer KIs genutzt werden.", t11_inst: "Ordne die Paare zu:", t11_h1: "Echt vs. Künstlich.", t11_h2: "Trainingsmaterial.", t11_q: "Was sind synthetische Daten?", t11_qa: "Künstlich erzeugte Daten", t11_qb: "Daten aus Papier", t11_qc: "Gefährliche Viren", t11_qd: "Alte Fotos",
    t11_l1: "Real", t11_r1: "Gemessen", t11_l2: "Synthetisch", t11_r2: "Generiert", t11_l3: "Datensatz", t11_r3: "Training",
    t12_title: "Edge AI", t12_text: "KI, die direkt auf dem Gerät (Handy, Sensor) läuft, ohne Cloud.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Lokal statt Cloud.", t12_h2: "Schnell und privat.", t12_q: "Wo läuft Edge AI?", t12_qa: "Direkt auf dem Gerät", t12_qb: "In einem großen Rechenzentrum", t12_qc: "Auf dem Mond", t12_qd: "Gar nicht",
    t12_sent: "Edge AI funktioniert auch ohne aktive ___.", t12_qa2: "Internetverbindung", t12_qb2: "Batterie", t12_qc2: "Software", t12_qd2: "Hardware",
    t13_title: "KI-Governance", t13_text: "Die Verwaltung und Kontrolle von KI-Systemen auf globaler Ebene.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Kontrolle.", t13_h2: "Regeln setzen.", t13_q: "Wer sollte KI-Regeln festlegen?", t13_qa: "Internationale Organisationen", t13_qb: "Niemand", t13_qc: "Nur eine Firma", t13_qd: "Die KI selbst",
    t13_bl1: "Staatlich", t13_bl2: "Ethisch", t13_i1: "Gesetze", t13_i2: "Werte", t13_i3: "Verbote", t13_i4: "Fairness",
    t14_title: "Emotionale KI", t14_text: "KI, die menschliche Gefühle erkennen und darauf reagieren kann.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Gefühle verstehen.", t14_h2: "Empathische Maschinen.", t14_q: "Was erkennt eine emotionale KI?", t14_qa: "Gesichtsausdruck und Tonfall", t14_qb: "Dein Alter", t14_qc: "Dein Gewicht", t14_qd: "Deine Schuhgröße",
    t14_w1: "Emotionale", t14_w2: "KI", t14_w3: "reagiert", t14_w4: "auf", t14_w5: "die", t14_w6: "Stimmung", t14_w7: "des Nutzers.",
    t15_title: "KI-Karrieren", t15_text: "Es entstehen viele neue Berufe wie Prompt Engineer oder KI-Ethiker.", t15_inst: "Markiere das Wort für neue Berufe:", t15_h1: "Jobs der Zukunft.", t15_h2: "Deine Karriere.", t15_q: "Was macht ein Prompt Engineer?", t15_qa: "KI-Anfragen optimieren", t15_qb: "Computer reparieren", t15_qc: "Kaffee kochen", t15_qd: "Briefe austragen",
    t15_tk1: "KI", t15_tk2: "schafft", t15_tk3: "spannende", t15_tk4: "neue", t15_tk5: "Berufsfelder", t15_tk6: "für", t15_tk7: "Technik-Begeisterte."
  },
  en: {
    explorer_title: "AI Island: The Future",
    t1_title: "AGI (General AI)", t1_text: "AGI is an AI that, like a human, can understand or learn any intellectual task.", t1_inst: "Match the pairs:", t1_h1: "Specialist vs. Generalist.", t1_h2: "Future vision.", t1_q: "What distinguishes AGI from today's AI?", t1_qa: "Versatility like a human", t1_qb: "It's just faster", t1_qc: "It doesn't need power", t1_qd: "It's made of wood",
    t1_l1: "Chess AI", t1_r1: "Specialized", t1_l2: "AGI", t1_r2: "Universal", t1_l3: "Human", t1_r3: "Flexible",
    t2_title: "Superintelligence", t2_text: "A hypothetical AI that far surpasses human intelligence in all areas.", t2_inst: "Fill in the blank:", t2_h1: "Beyond human.", t2_h2: "Enormous knowledge.", t2_q: "What do you call an intelligence smarter than all humans combined?", t2_qa: "Superintelligence", t2_qb: "Calculator", t2_qc: "Radio", t2_qd: "Battery",
    t2_sent: "Superintelligence could solve problems that are ___ for us today.", t2_qa2: "impossible", t2_qb2: "easy", t2_qc2: "boring", t2_qd2: "colorful",
    t3_title: "AI and Space", t3_text: "AI controls probes and analyzes data from distant planets where humans can't reach.", t3_inst: "Sort into buckets:", t3_h1: "Earth vs. Space.", t3_h2: "AI as explorer.", t3_q: "What does AI do in space?", t3_qa: "Navigation of probes", t3_qb: "Cleaning stars", t3_qc: "Delivering pizza", t3_qd: "Nothing",
    t3_bl1: "On Earth", t3_bl2: "In Space", t3_i1: "Vacuum cleaner", t3_i2: "Mars Rover", t3_i3: "Traffic lights", t3_i4: "Exoplanet search",
    t4_title: "Quantum Computing & AI", t4_text: "Quantum computers could speed up AI calculations millions of times.", t4_inst: "Put the words in order:", t4_h1: "New type of computer.", t4_h2: "Turbo for AI.", t4_q: "What is the benefit of quantum computers for AI?", t4_qa: "Extreme speed", t4_qb: "They are cheaper", t4_qc: "They don't need internet", t4_qd: "They are smaller",
    t4_w1: "Quantum", t4_w2: "AI", t4_w3: "solves", t4_w4: "complex", t4_w5: "problems", t4_w6: "in", t4_w7: "seconds.",
    t5_title: "Brain-Computer Interface", t5_text: "Technology that connects the brain directly to a computer.", t5_inst: "Highlight the word for brain-computer interfaces:", t5_h1: "Thought control.", t5_h2: "Direct line.", t5_q: "What does a Brain-Computer Interface (BCI) allow?", t5_qa: "Control by thoughts", t5_qb: "Faster running", t5_qc: "Better hearing", t5_qd: "Eating without mouth",
    t5_tk1: "BCIs", t5_tk2: "connect", t5_tk3: "human", t5_tk4: "neurons", t5_tk5: "with", t5_tk6: "digital", t5_tk7: "chips.",
    t6_title: "AI Creativity", t6_text: "Can a machine really be creative or does it just combine existing things?", t6_inst: "Match the pairs:", t6_h1: "Art and code.", t6_h2: "Creative power.", t6_q: "What does a 'creative' AI create?", t6_qa: "New images and music", t6_qb: "Real oil paintings", t6_qc: "Feelings", t6_qd: "Hunger",
    t6_l1: "AI", t6_r1: "Algorithm", t6_l2: "Human", t6_r2: "Inspiration", t6_l3: "Result", t6_r3: "Artwork",
    t7_title: "The Singularity", t7_text: "The point where technological growth becomes uncontrollable and irreversible.", t7_inst: "Fill in the blank:", t7_h1: "A turning point.", t7_h2: "Future theory.", t7_q: "What happens at the singularity according to theory?", t7_qa: "AI improves itself", t7_qb: "The internet goes out", t7_qc: "All robots dance", t7_qd: "Nothing changes",
    t7_sent: "At the singularity, ___ overtakes human intelligence.", t7_qa2: "technology", t7_qb2: "snail", t7_qc2: "post", t7_qd2: "sun",
    t8_title: "Reinforcement Learning", t8_text: "Learning through reward and punishment, like a dog (or AlphaGo).", t8_inst: "Sort into buckets:", t8_h1: "Trial and error.", t8_h2: "Optimal path.", t8_q: "How does AlphaGo learn?", t8_qa: "By playing against itself", t8_qb: "By reading books", t8_qc: "Not at all", t8_qd: "By watching",
    t8_bl1: "Action", t8_bl2: "Feedback", t8_i1: "Make a move", t8_i2: "Receive point", t8_i3: "Make mistake", t8_i4: "Point deduction",
    t9_title: "AI vs. Climate Change", t9_text: "AI helps optimize energy consumption and predict weather extremes.", t9_inst: "Put the words in order:", t9_h1: "AI as savior?", t9_h2: "Environmental protection.", t9_q: "How does AI help the environment?", t9_qa: "Efficient energy use", t9_qb: "It plants trees by hand", t9_qc: "It makes it colder", t9_qd: "Not at all",
    t9_w1: "Intelligent", t9_w2: "systems", t9_w3: "reduce", t9_w4: "global", t9_w5: "CO2", t9_w6: "emissions", t9_w7: "effectively.",
    t10_title: "Explainable AI (XAI)", t10_text: "The goal of making AI decisions understandable for humans.", t10_inst: "Highlight the abbreviation for 'explainable AI':", t10_h1: "No black box.", t10_h2: "Why did it do that?", t10_q: "What is XAI?", t10_qa: "Explainable AI", t10_qb: "Extra strong AI", t10_qc: "X-any AI", t10_qd: "Xylophone AI",
    t10_tk1: "XAI", t10_tk2: "makes", t10_tk3: "AI", t10_tk4: "decisions", t10_tk5: "understandable", t10_tk6: "for", t10_tk7: "humans.",
    t11_title: "Synthetic Data", t11_text: "AI-generated data used to train other AIs.", t11_inst: "Match the pairs:", t11_h1: "Real vs. Artificial.", t11_h2: "Training material.", t11_q: "What is synthetic data?", t11_qa: "Artificially generated data", t11_qb: "Data made of paper", t11_qc: "Dangerous viruses", t11_qd: "Old photos",
    t11_l1: "Real", t11_r1: "Measured", t11_l2: "Synthetic", t11_r2: "Generated", t11_l3: "Dataset", t11_r3: "Training",
    t12_title: "Edge AI", t12_text: "AI that runs directly on the device (phone, sensor) without cloud.", t12_inst: "Fill in the blank:", t12_h1: "Local instead of cloud.", t12_h2: "Fast and private.", t12_q: "Where does Edge AI run?", t12_qa: "Directly on the device", t12_qb: "In a large data center", t12_qc: "On the moon", t12_qd: "Not at all",
    t12_sent: "Edge AI works even without an active ___.", t12_qa2: "internet connection", t12_qb2: "battery", t12_qc2: "software", t12_qd2: "hardware",
    t13_title: "AI Governance", t13_text: "Management and control of AI systems on a global level.", t13_inst: "Sort into buckets:", t13_h1: "Control.", t13_h2: "Setting rules.", t13_q: "Who should set AI rules?", t13_qa: "International organizations", t13_qb: "Nobody", t13_qc: "Only one company", t13_qd: "The AI itself",
    t13_bl1: "Governmental", t13_bl2: "Ethical", t13_i1: "Laws", t13_i2: "Values", t13_i3: "Bans", t13_i4: "Fairness",
    t14_title: "Emotional AI", t14_text: "AI that can recognize and respond to human emotions.", t14_inst: "Put the words in order:", t14_h1: "Understanding feelings.", t14_h2: "Empathic machines.", t14_q: "What does emotional AI recognize?", t14_qa: "Facial expression and tone", t14_qb: "Your age", t14_qc: "Your weight", t14_qd: "Your shoe size",
    t14_w1: "Emotional", t14_w2: "AI", t14_w3: "reacts", t14_w4: "to", t14_w5: "the", t14_w6: "user's", t14_w7: "mood.",
    t15_title: "AI Careers", t15_text: "Many new professions are emerging like Prompt Engineer or AI Ethicist.", t15_inst: "Highlight the word that means 'professions':", t15_h1: "Jobs of the future.", t15_h2: "Your career.", t15_q: "What does a Prompt Engineer do?", t15_qa: "Optimize AI requests", t15_qb: "Repair computers", t15_qc: "Make coffee", t15_qd: "Deliver letters",
    t15_tk1: "AI", t15_tk2: "creates", t15_tk3: "many", t15_tk4: "exciting", t15_tk5: "careers", t15_tk6: "worldwide.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Sziget: A jövő",
    t1_title: "AGI (Általános MI)", t1_text: "Az AGI egy olyan MI, amely az emberhez hasonlóan bármilyen szellemi feladatot képes megérteni vagy megtanulni.", t1_inst: "Párosítsd össze:", t1_h1: "Specialista vs. Generalista.", t1_h2: "Jövőbeli vízió.", t1_q: "Mi különbözteti meg az AGI-t a mai MI-től?", t1_qa: "Emberi sokoldalúság", t1_qb: "Csak gyorsabb", t1_qc: "Nincs szüksége áramra", t1_qd: "Fából van",
    t1_l1: "Sakk-MI", t1_r1: "Speciális", t1_l2: "AGI", t1_r2: "Univerzális", t1_l3: "Ember", t1_r3: "Rugalmas",
    t2_title: "Szuperintelligencia", t2_text: "Egy hipotetikus MI, amely minden területen messze felülmúlja az emberi intelligenciát.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Az emberen túl.", t2_h2: "Hatalmas tudás.", t2_q: "Hogyan nevezzük az összes embernél okosabb intelligenciát?", t2_qa: "Szuperintelligencia", t2_qb: "Számológép", t2_qc: "Rádió", t2_qd: "Akku",
    t2_sent: "A szuperintelligencia olyan problémákat oldhatna meg, amik ma ___ nekünk.", t2_qa2: "lehetetlenek", t2_qb2: "egyszerűek", t2_qc2: "unalmasak", t2_qd2: "színesek",
    t3_title: "MI és a világűr", t3_text: "A MI irányítja az űrszondákat és elemzi a távoli bolygók adatait, ahová ember nem jut el.", t3_inst: "Válogasd szét:", t3_h1: "Föld vs. Világűr.", t3_h2: "MI mint felfedező.", t3_q: "Mit csinál a MI az űrben?", t3_qa: "Űrszondák navigálása", t3_qb: "Csillagok takarítása", t3_qc: "Pizza kiszállítás", t3_qd: "Semmit",
    t3_bl1: "A Földön", t3_bl2: "Az űrben", t3_i1: "Porszívó", t3_i2: "Mars-járó", t3_i3: "Jelzőlámpa", t3_i4: "Exobolygó keresés",
    t4_title: "Kvantumszámítógép és MI", t4_text: "A kvantumszámítógépek milliószorosára gyorsíthatják a MI számításait.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Új típusú gép.", t4_h2: "Turbó a MI-nek.", t4_q: "Mi az előnye a kvantumszámítógépnek a MI számára?", t4_qa: "Extrém sebesség", t4_qb: "Olcsóbbak", t4_qc: "Nem kell internet", t4_qd: "Kisebbek",
    t4_w1: "A kvantum-MI", t4_w2: "komplex", t4_w3: "problémákat", t4_w4: "old", t4_w5: "meg", t4_w6: "pár", t4_w7: "másodperc alatt.",
    t5_title: "Agy-gép interfész", t5_text: "Technológia, amely az agyat közvetlenül összeköti a számítógéppel.", t5_inst: "Jelöld meg az agy-gép interfészeket jelölő szót:", t5_h1: "Gondolatvezérlés.", t5_h2: "Közvetlen vonal.", t5_q: "Mit tesz lehetővé az agy-gép interfész (BCI)?", t5_qa: "Gondolattal való vezérlést", t5_qb: "Gyorsabb futást", t5_qc: "Jobb hallást", t5_qd: "Evést száj nélkül",
    t5_tk1: "A BCI-k", t5_tk2: "összekötik", t5_tk3: "az emberi", t5_tk4: "neurónokat", t5_tk5: "digitális", t5_tk6: "chipekkel.", t5_tk7: "",
    t6_title: "MI-kreativitás", t6_text: "Vajon egy gép lehet-e valóban kreatív, vagy csak a meglévőt kombinálja?", t6_inst: "Párosítsd össze:", t6_h1: "Művészet és kód.", t6_h2: "Alkotóerő.", t6_q: "Mit hoz létre egy 'kreatív' MI?", t6_qa: "Új képeket és zenét", t6_qb: "Valódi olajfestményt", t6_qc: "Érzéseket", t6_qd: "Éhséget",
    t6_l1: "MI", t6_r1: "Algoritmus", t6_l2: "Ember", t6_r2: "Inspiráció", t6_l3: "Eredmény", t6_r3: "Műalkotás",
    t7_title: "A szingularitás", t7_text: "Az a pont, ahol a technológiai fejlődés irányíthatatlanná és visszafordíthatatlanná válik.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Egy fordulópont.", t7_h2: "Jövőbeli elmélet.", t7_q: "Mi történik az elmélet szerint a szingularitáskor?", t7_qa: "A MI önmagát fejleszti", t7_qb: "Kimegy az internet", t7_qc: "Minden robot táncol", t7_qd: "Semmi nem változik",
    t7_sent: "A szingularitásnál a ___ lehagyja az emberi intelligenciát.", t7_qa2: "technológia", t7_qb2: "csiga", t7_qc2: "posta", t7_qd2: "nap",
    t8_title: "Megerősítéses tanulás", t8_text: "Tanulás jutalmazás és büntetés útján, mint egy kutyánál (vagy AlphaGo-nál).", t8_inst: "Válogasd szét:", t8_h1: "Próba-szerencse.", t8_h2: "Optimális út.", t8_q: "Hogyan tanul az AlphaGo?", t8_qa: "Önmaga ellen játszva", t8_qb: "Könyveket olvasva", t8_qc: "Sehogy", t8_qd: "Nézelődve",
    t8_bl1: "Akció", t8_bl2: "Visszajelzés", t8_i1: "Lépés tétel", t8_i2: "Pont szerzés", t8_i3: "Hiba elkövetése", t8_i4: "Pontlevonás",
    t9_title: "MI a klímaváltozás ellen", t9_text: "A MI segít optimalizálni az energiafogyasztást és jósolni a szélsőséges időjárást.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "MI mint megmentő?", t9_h2: "Környezetvédelem.", t9_q: "Hogyan segíti a MI a környezetet?", t9_qa: "Hatékony energiahasználat", t9_qb: "Fákat ültet kézzel", t9_qc: "Hidegebbet csinál", t9_qd: "Sehogy",
    t9_w1: "Az intelligens", t9_w2: "rendszerek", t9_w3: "csökkentik", t9_w4: "a globális", t9_w5: "szén-dioxid", t9_w6: "kibocsátást.", t9_w7: "",
    t10_title: "Értelmezhető MI (XAI)", t10_text: "A cél, hogy a MI döntései az emberek számára is érthetőek legyenek.", t10_inst: "Jelöld meg az 'értelmezhető MI' rövidítését:", t10_h1: "Nincs fekete doboz.", t10_h2: "Miért tette ezt?", t10_q: "Mi az a XAI?", t10_qa: "Értelmezhető MI", t10_qb: "Extra erős MI", t10_qc: "X-edik MI", t10_qd: "Xilofon MI",
    t10_tk1: "A XAI", t10_tk2: "érthetővé", t10_tk3: "teszi", t10_tk4: "a MI", t10_tk5: "döntéseit", t10_tk6: "az", t10_tk7: "embereknek.",
    t11_title: "Szintetikus adatok", t11_text: "MI által generált adatok, amelyeket más MI-k tanítására használnak.", t11_inst: "Párosítsd össze:", t11_h1: "Valódi vs. Mesterséges.", t11_h2: "Tanítóanyag.", t11_q: "Mik a szintetikus adatok?", t11_qa: "Mesterségesen előállított adatok", t11_qb: "Papírból készült adatok", t11_qc: "Veszélyes vírusok", t11_qd: "Régi fotók",
    t11_l1: "Valódi", t11_r1: "Mért", t11_l2: "Szintetikus", t11_r2: "Generált", t11_l3: "Adathalmaz", t11_r3: "Tanítás",
    t12_title: "Edge AI", t12_text: "MI, amely közvetlenül az eszközön (telefon, szenzor) fut, felhő nélkül.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Helyi a felhő helyett.", t12_h2: "Gyors és privát.", t12_q: "Hol fut az Edge AI?", t12_qa: "Közvetlenül az eszközön", t12_qb: "Egy nagy adatközpontban", t12_qc: "A Holdon", t12_qd: "Sehol",
    t12_sent: "Az Edge AI aktív ___ nélkül is működik.", t12_qa2: "internetkapcsolat", t12_qb2: "akkumulátor", t12_qc2: "szoftver", t12_qd2: "hardver",
    t13_title: "MI-irányítás", t13_text: "Az MI-rendszerek kezelése és ellenőrzése globális szinten.", t13_inst: "Válogasd szét:", t13_h1: "Ellenőrzés.", t13_h2: "Szabályok alkotása.", t13_q: "Kinek kellene MI-szabályokat hoznia?", t13_qa: "Nemzetközi szervezeteknek", t13_qb: "Senkinek", t13_qc: "Csak egy cégnek", t13_qd: "Magának a MI-nek",
    t13_bl1: "Állami", t13_bl2: "Etikai", t13_i1: "Törvények", t13_i2: "Értékek", t13_i3: "Tilalmak", t13_i4: "Méltányosság",
    t14_title: "Érzelmi MI", t14_text: "MI, amely képes felismerni az emberi érzelmeket és reagálni rájuk.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Érzések megértése.", t14_h2: "Empatikus gépek.", t14_q: "Mit ismer fel egy érzelmi MI?", t14_qa: "Arckifejezést és hangszínt", t14_qb: "A korodat", t14_qc: "A súlyodat", t14_qd: "A cipőméreted",
    t14_w1: "Az", t14_w2: "érzelmi", t14_w3: "MI", t14_w4: "reagál", t14_w5: "a", t14_w6: "felhasználó", t14_w7: "hangulatára.",
    t15_title: "MI-karrierek", t15_text: "Sok új szakma jön létre, mint a Prompt Engineer vagy az MI-etikus.", t15_h1: "A jövő munkái.", t15_h2: "A te karriered.", t15_q: "Mit csinál egy Prompt Engineer?", t15_qa: "MI-kéréseket optimalizál", t15_qb: "Számítógépet javít", t15_qc: "Kávét főz", t15_qd: "Leveleket kézbesít",
    t15_inst: "Jelöld meg a 'szakmák' jelentésű szót:",
    t15_tk1: "Az MI", t15_tk2: "mindig", t15_tk3: "izgalmas", t15_tk4: "új", t15_tk5: "szakmákat", t15_tk6: "teremt.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula IA: Viitorul",
    t1_title: "AGI (IA Generală)", t1_text: "AGI este o IA care, la fel ca un om, poate înțelege sau învăța orice sarcină intelectuală.", t1_inst: "Potrivește perechile:", t1_h1: "Specialist vs. Generalist.", t1_h2: "Viziune viitoare.", t1_q: "Ce distinge AGI de IA de azi?", t1_qa: "Versatilitate umană", t1_qb: "E doar mai rapidă", t1_qc: "Nu are nevoie de curent", t1_qd: "E din lemn",
    t1_l1: "IA șah", t1_r1: "Specializată", t1_l2: "AGI", t1_r2: "Universală", t1_l3: "Om", t1_r3: "Flexibil",
    t2_title: "Superinteligența", t2_text: "O IA ipotetică ce depășește cu mult inteligența umană în toate domeniile.", t2_inst: "Completează spațiul liber:", t2_h1: "Dincolo de om.", t2_h2: "Cunoștințe enorme.", t2_q: "Cum numim o inteligență mai deșteaptă decât toți oamenii la un loc?", t2_qa: "Superinteligență", t2_qb: "Calculator", t2_qc: "Radio", t2_qd: "Baterie",
    t2_sent: "Superinteligența ar putea rezolva probleme care azi sunt ___ pentru noi.", t2_qa2: "imposibile", t2_qb2: "ușoare", t2_qc2: "plictisitoare", t2_qd2: "colorate",
    t3_title: "IA și Spațiul", t3_text: "IA controlează sondele și analizează date de pe planete îndepărtate.", t3_inst: "Sortează în găleți:", t3_h1: "Pământ vs. Spațiu.", t3_h2: "IA ca explorator.", t3_q: "Ce face IA în spațiu?", t3_qa: "Navigarea sondelor", t3_qb: "Curățarea stelelor", t3_qc: "Livrare pizza", t3_qd: "Nimic",
    t3_bl1: "Pe Pământ", t3_bl2: "În Spațiu", t3_i1: "Aspirator", t3_i2: "Rover marțian", t3_i3: "Semafor", t3_i4: "Căutare exoplanete",
    t4_title: "Calculul Cuantic & IA", t4_text: "Calculatoarele cuantice ar putea accelera calculele IA de milioane de ori.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Nou tip de calculator.", t4_h2: "Turbo pentru IA.", t4_q: "Care este beneficiul calculului cuantic pentru IA?", t4_qa: "Viteză extremă", t4_qb: "Sunt mai ieftine", t4_qc: "Nu au nevoie de internet", t4_qd: "Sunt mai mici",
    t4_w1: "IA", t4_w2: "cuantică", t4_w3: "rezolvă", t4_w4: "probleme", t4_w5: "complexe", t4_w6: "în câteva", t4_w7: "secunde.",
    t5_title: "Interfață Creier-Computer", t5_text: "Tehnologie care conectează creierul direct la un computer.", t5_inst: "Evidențiază cuvântul pentru interfețele creier-computer:", t5_h1: "Control prin gânduri.", t5_h2: "Linie directă.", t5_q: "Ce permite o interfață creier-computer (BCI)?", t5_qa: "Control prin gânduri", t5_qb: "Alergat mai rapid", t5_qc: "Auz mai bun", t5_qd: "Mâncat fără gură",
    t5_tk1: "BCI-urile", t5_tk2: "conectează", t5_tk3: "neuronii", t5_tk4: "umani", t5_tk5: "cu", t5_tk6: "cipuri", t5_tk7: "digitale.",
    t6_title: "Creativitatea IA", t6_text: "Poate o mașină să fie cu adevărat creativă sau doar combină ce există deja?", t6_inst: "Potrivește perechile:", t6_h1: "Artă și cod.", t6_h2: "Putere creatoare.", t6_q: "Ce creează o IA 'creativă'?", t6_qa: "Imagini și muzică noi", t6_qb: "Picturi reale în ulei", t6_qc: "Sentimente", t6_qd: "Foame",
    t6_l1: "IA", t6_r1: "Algoritm", t6_l2: "Om", t6_r2: "Inspirație", t6_l3: "Rezultat", t6_r3: "Operă de artă",
    t7_title: "Singularitatea", t7_text: "Momentul în care creșterea tehnologică devine necontrolabilă și ireversibilă.", t7_inst: "Completează spațiul liber:", t7_h1: "Un punct de cotitură.", t7_h2: "Teorie viitoare.", t7_q: "Ce se întâmplă la singularitate conform teoriei?", t7_qa: "IA se auto-îmbunătățește", t7_qb: "Se oprește internetul", t7_qc: "Roboții dansează", t7_qd: "Nimic nu se schimbă",
    t7_sent: "La singularitate, ___ depășește inteligența umană.", t7_qa2: "tehnologia", t7_qb2: "melcul", t7_qc2: "poșta", t7_qd2: "soarele",
    t8_title: "Învățare prin Recompensă", t8_text: "Învățare prin recompensă și pedeapsă, ca la un câine (sau AlphaGo).", t8_inst: "Sortează în găleți:", t8_h1: "Încercare și eroare.", t8_h2: "Calea optimă.", t8_q: "Cum învață AlphaGo?", t8_qa: "Jucând împotriva sa", t8_qb: "Citind cărți", t8_qc: "Deloc", t8_qd: "Privind",
    t8_bl1: "Acțiune", t8_bl2: "Feedback", t8_i1: "Face o mișcare", t8_i2: "Primește punct", t8_i3: "Face greșeală", t8_i4: "Pierde punct",
    t9_title: "IA vs. Schimbări Climatice", t9_text: "IA ajută la optimizarea consumului de energie și la prezicerea fenomenelor meteo.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "IA ca salvator?", t9_h2: "Protecția mediului.", t9_q: "Cum ajută IA mediul?", t9_qa: "Utilizarea eficientă a energiei", t9_qb: "Plantează copaci manual", t9_qc: "Face mai rece", t9_qd: "Deloc",
    t9_w1: "Sistemele", t9_w2: "inteligente", t9_w3: "reduc", t9_w4: "emisiile", t9_w5: "globale", t9_w6: "de", t9_w7: "CO2.",
    t10_title: "IA Explicabilă (XAI)", t10_text: "Scopul de a face deciziile IA de înțeles pentru oameni.", t10_inst: "Evidențiază abrevierea pentru 'IA explicabilă':", t10_h1: "Fără cutie neagră.", t10_h2: "De ce a făcut asta?", t10_q: "Ce este XAI?", t10_qa: "IA explicabilă", t10_qb: "IA extra tare", t10_qc: "IA oarecare", t10_qd: "IA xilofon",
    t10_tk1: "XAI", t10_tk2: "face", t10_tk3: "deciziile", t10_tk4: "IA", t10_tk5: "inteligibile", t10_tk6: "pentru", t10_tk7: "oameni.",
    t11_title: "Date sintetice", t11_text: "Date generate de IA, folosite pentru a antrena alte IA.", t11_inst: "Potrivește perechile:", t11_h1: "Real vs. Artificial.", t11_h2: "Material de antrenament.", t11_q: "Ce sunt datele sintetice?", t11_qa: "Date generate artificial", t11_qb: "Date făcute din hârtie", t11_qc: "Viruși periculoși", t11_qd: "Fotografii vechi",
    t11_l1: "Real", t11_r1: "Măsurat", t11_l2: "Sintetic", t11_r2: "Generat", t11_l3: "Set de date", t11_r3: "Antrenament",
    t12_title: "Edge AI", t12_text: "IA care rulează direct pe dispozitiv (telefon, senzor), fără cloud.", t12_inst: "Completează spațiul liber:", t12_h1: "Local în loc de cloud.", t12_h2: "Rapid și privat.", t12_q: "Unde rulează Edge AI?", t12_qa: "Direct pe dispozitiv", t12_qb: "Într-un centru de date mare", t12_qc: "Pe Lună", t12_qd: "Deloc",
    t12_sent: "Edge AI funcționează chiar și fără o ___ activă.", t12_qa2: "conexiune la internet", t12_qb2: "baterie", t12_qc2: "aplicație", t12_qd2: "componentă hardware",
    t13_title: "Guvernanța IA", t13_text: "Gestionarea și controlul sistemelor IA la nivel global.", t13_inst: "Sortează în găleți:", t13_h1: "Control.", t13_h2: "Stabilirea regulilor.", t13_q: "Cine ar trebui să stabilească regulile IA?", t13_qa: "Organizații internaționale", t13_qb: "Nimeni", t13_qc: "Doar o companie", t13_qd: "IA însăși",
    t13_bl1: "Guvernamental", t13_bl2: "Etic", t13_i1: "Legi", t13_i2: "Valori", t13_i3: "Interdicții", t13_i4: "Corectitudine",
    t14_title: "IA Emoțională", t14_text: "IA care poate recunoaște și răspunde emoțiilor umane.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Înțelegerea sentimentelor.", t14_h2: "Mașini empatice.", t14_q: "Ce recunoaște o IA emoțională?", t14_qa: "Expresia feței și tonul", t14_qb: "Vârsta ta", t14_qc: "Greutatea ta", t14_qd: "Mărimea pantofilor",
    t14_w1: "IA", t14_w2: "emoțională", t14_w3: "reacționează", t14_w4: "la", t14_w5: "starea", t14_w6: "de spirit", t14_w7: "a utilizatorului.",
    t15_title: "Cariere în IA", t15_text: "Apar multe profesii noi, precum Prompt Engineer sau Etician IA.", t15_h1: "Joburile viitorului.", t15_h2: "Cariera ta.", t15_q: "Ce face un Prompt Engineer?", t15_qa: "Optimizează cererile IA", t15_qb: "Repară calculatoare", t15_qc: "Face cafea", t15_qd: "Distribuie scrisori",
    t15_inst: "Evidențiază cuvântul care înseamnă 'profesii':",
    t15_tk1: "IA", t15_tk2: "creează", t15_tk3: "mereu", t15_tk4: "noi", t15_tk5: "profesii", t15_tk6: "interesante.", t15_tk7: ""
  }
};

export const INFO_K8_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🌍",label:"Earth"},{emoji:"🛸",label:"Space"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚛️", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔌", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "✨", color: "#FFEB3B" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🕹️",label:"Action"},{emoji:"🏆",label:"Reward"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "📱", color: "#212121" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"⚖️",label:"Governance"},{emoji:"💡",label:"Ethics"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "💖", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"Jobs",bg:"#fff",color:"#000",emoji:"📈"},{text:"AI",bg:"#fff",color:"#000",emoji:"🤖"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

