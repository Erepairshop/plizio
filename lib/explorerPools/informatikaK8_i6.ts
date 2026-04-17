import type { PoolTopicDef } from "./types";

export const INFO_K8_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "IoT & Smart Devices",
    // t1
    t1_title: "Internet der Dinge (IoT)", t1_text: "IoT bezeichnet das Netzwerk alltäglicher Geräte, die mit dem Internet verbunden sind und Daten austauschen, z. B. Smartwatches oder smarte Glühbirnen.",
    t1_inst: "Ordne die IoT-Begriffe zu.", t1_h1: "IoT = vernetzte Alltagsgeräte", t1_h2: "Jedes IoT-Gerät hat eine eigene IP-Adresse",
    t1_l1: "IoT-Gerät", t1_r1: "mit Internet verbundener Alltagsgegenstand", t1_l2: "Sensor", t1_r2: "misst physikalische Größen (Temp., Licht, usw.)", t1_l3: "Datenaustausch", t1_r3: "Geräte senden und empfangen Informationen",
    t1_q: "Was beschreibt IoT?", t1_qa: "Vernetzte Alltagsgeräte, die Daten austauschen", t1_qb: "Eine neue Programmiersprache", t1_qc: "Ein Betriebssystem für Smartphones", t1_qd: "Ein Datenbankformat",
    
    // t2
    t2_title: "Sensor", t2_text: "Sensoren erfassen physikalische Größen wie Temperatur, Helligkeit oder Bewegung und wandeln sie in digitale Daten um.",
    t2_inst: "Fülle die Lücke aus.", t2_h1: "Sensoren wandeln physikalische Signale in Daten um", t2_h2: "Thermometer, Lichtschranke, Bewegungsmelder sind Sensoren",
    t2_sent: "Ein ___ misst physikalische Größen und gibt sie als digitale Daten weiter.", t2_qa2: "Sensor", t2_qb2: "Router", t2_qc2: "Prozessor", t2_qd2: "Monitor",
    t2_q: "Was macht ein Sensor in einem IoT-System?", t2_qa: "Er misst physikalische Größen und gibt sie als Daten weiter", t2_qb: "Er speichert Daten in der Cloud", t2_qc: "Er verschlüsselt Netzwerkdaten", t2_qd: "Er zeigt Webseiten an",

    // t3
    t3_title: "Smart Home", t3_text: "Ein Smart Home ist eine Wohnung, in der Geräte wie Heizung, Beleuchtung und Sicherheitssysteme über das Internet ferngesteuert werden können.",
    t3_inst: "Sortiere die Wörter in die richtige Reihenfolge.", t3_h1: "Fernsteuerung über Smartphone-App möglich", t3_h2: "Alexa und Google Home sind Smart-Home-Assistenten",
    t3_w1: "Im Smart Home", t3_w2: "können Geräte", t3_w3: "per Smartphone", t3_w4: "oder Sprachbefehl", t3_w5: "gesteuert werden.",
    t3_q: "Was kennzeichnet ein Smart Home?", t3_qa: "Geräte, die über das Internet ferngesteuert werden", t3_qb: "Ein Haus ohne Stromversorgung", t3_qc: "Ein Haus mit besonders schnellem WLAN", t3_qd: "Ein Haus mit vielen Computern",

    // t4
    t4_title: "RFID", t4_text: "RFID (Radio Frequency Identification) identifiziert Objekte per Funkwellen ohne Kontakt. Anwendungen: Bibliothekskarten, Pakettracking, Zugangskarten.",
    t4_inst: "Sortiere die Begriffe in die richtige Kategorie.", t4_h1: "RFID = Funk, Barcode = optisch/sichtbar", t4_h2: "RFID braucht keinen Sichtkontakt",
    t4_bl1: "RFID-Technologie", t4_bl2: "Barcode-Technologie", t4_i1: "kontaktlose Identifikation per Funk", t4_i2: "optisches Scannen mit Laserstrahl", t4_i3: "Zugangskarten, Tierchips", t4_i4: "Supermarktkassen, Pakete",
    t4_q: "Wie überträgt RFID Daten?", t4_qa: "Per Funkwellen, ohne physischen Kontakt", t4_qb: "Per Kabel", t4_qc: "Per Laserscan", t4_qd: "Per Bluetooth",

    // t5
    t5_title: "Edge Computing", t5_text: "Beim Edge Computing werden Daten nicht in der Cloud, sondern direkt am Entstehungsort (am 'Rand' des Netzwerks) verarbeitet. Das reduziert Latenz.",
    t5_inst: "Markiere die Vorteile von Edge Computing.", t5_h1: "Edge = Daten werden lokal verarbeitet", t5_h2: "Weniger Latenz, mehr Datenschutz",
    t5_tk1: "geringere Latenz", t5_tk2: "teurer Speicher", t5_tk3: "lokale Datenverarbeitung", t5_tk4: "langsame Verbindung erforderlich", t5_tk5: "besserer Datenschutz",
    t5_q: "Was ist der Hauptvorteil von Edge Computing?", t5_qa: "Daten werden lokal verarbeitet, was Latenz reduziert", t5_qb: "Daten werden stärker verschlüsselt", t5_qc: "Es werden mehr Server in der Cloud genutzt", t5_qd: "Jedes Gerät benötigt eine eigene IP-Adresse",

    // t6
    t6_title: "Smart City", t6_text: "Smart Cities nutzen IoT, um Verkehr, Abfall und Energie effizient zu verwalten und die Lebensqualität zu verbessern.",
    t6_inst: "Ordne die Smart-City-Lösungen zu.", t6_h1: "IoT hilft Städten.", t6_h2: "Effizienz ist wichtig.",
    t6_l1: "Smarter Verkehr", t6_r1: "Reduziert Staus", t6_l2: "Smarte Mülleimer", t6_r2: "Optimieren Abholung", t6_l3: "Smart Grids", t6_r3: "Sparen Energie",
    t6_q: "Was ist ein Hauptziel einer Smart City?", t6_qa: "Verbesserung des städtischen Lebens mit IoT", t6_qb: "Bau höherer Wolkenkratzer", t6_qc: "Verbot aller Autos", t6_qd: "Nur Papierkarten nutzen",

    // t7
    t7_title: "Wearables", t7_text: "Wearables sind smarte, am Körper getragene Geräte wie Fitnesstracker, die Gesundheits- und Aktivitätsdaten sammeln.",
    t7_inst: "Ordne die Wörter.", t7_h1: "Wearables tracken dich.", t7_h2: "Sie werden am Körper getragen.",
    t7_w1: "Wearables", t7_w2: "sammeln", t7_w3: "Gesundheits-", t7_w4: "und", t7_w5: "Aktivitätsdaten.",
    t7_q: "Was von Folgendem ist ein Wearable?", t7_qa: "Eine Smartwatch", t7_qb: "Ein smarter Kühlschrank", t7_qc: "Ein Desktop-Computer", t7_qd: "Ein Server",

    // t8
    t8_title: "IoT Sicherheit", t8_text: "Da IoT-Geräte mit dem Internet verbunden sind, können sie gehackt werden. Schwache Passwörter und fehlende Updates sind große Risiken.",
    t8_inst: "Markiere die Sicherheitsrisiken.", t8_h1: "Risiken machen Geräte angreifbar.", t8_h2: "Hacker suchen Schwachstellen.",
    t8_tk1: "Starke Verschlüsselung", t8_tk2: "Schwache Passwörter", t8_tk3: "Regelmäßige Updates", t8_tk4: "Ungepatchte Fehler", t8_tk5: "Zwei-Faktor-Auth",
    t8_q: "Was ist ein häufiges IoT-Sicherheitsrisiko?", t8_qa: "Schwache Standardpasswörter", t8_qb: "Zu viel Strom", t8_qc: "Geräte sind zu klein", t8_qd: "Starke Verschlüsselung",

    // t9
    t9_title: "5G & IoT", t9_text: "Das 5G-Netz bietet hohe Geschwindigkeit und geringe Latenz, wodurch Tausende von IoT-Geräten reibungslos in Echtzeit kommunizieren können.",
    t9_inst: "Fülle die Lücke.", t9_h1: "5G ist schnell.", t9_h2: "Es ermöglicht Echtzeitdaten.",
    t9_sent: "5G bietet hohe Geschwindigkeit und geringe ___.", t9_qa9: "Latenz", t9_qb9: "Batterie", t9_qc9: "Gewicht", t9_qd9: "Kosten",
    t9_q: "Wie hilft 5G dem IoT?", t9_qa: "Durch schnelle Verbindungen mit geringer Latenz", t9_qb: "Es verringert die Akkulaufzeit", t9_qc: "Es macht Geräte schwerer", t9_qd: "Es ersetzt das Internet",

    // t10
    t10_title: "Smarte Landwirtschaft", t10_text: "IoT in der Landwirtschaft nutzt Bodensensoren und Drohnen, um Ernten zu überwachen, Bewässerung zu optimieren und die Produktion zu steigern.",
    t10_inst: "Baue den Satz.", t10_h1: "Landwirtschaft nutzt IoT.", t10_h2: "Sensoren helfen Pflanzen.",
    t10_f1: "Bodensensoren", t10_f2: "helfen,", t10_f3: "die Bewässerung", t10_f4: "zu optimieren.",
    t10_q: "Was machen Bodensensoren in der smarten Landwirtschaft?", t10_qa: "Feuchtigkeit überwachen, um Bewässerung zu optimieren", t10_qb: "Vögel verscheuchen", t10_qc: "Ernte automatisch einholen", t10_qd: "Essen für den Versand verpacken",

    // t11
    t11_title: "Industrielles IoT", t11_text: "IIoT vernetzt Maschinen in Fabriken, um Ausfälle vorherzusagen (Predictive Maintenance) und die Sicherheit und Effizienz zu erhöhen.",
    t11_inst: "Sortiere die Konzepte.", t11_h1: "IIoT ist für Fabriken.", t11_h2: "Consumer IoT für zu Hause.",
    t11_bl1: "IIoT (Industrie)", t11_bl2: "Consumer IoT", t11_i1: "Fabrikroboter", t11_i2: "Smartwatch", t11_i3: "Vorausschauende Wartung", t11_i4: "Smart TV",
    t11_q: "Worauf konzentriert sich IIoT?", t11_qa: "Fertigung und Fabrikautomatisierung", t11_qb: "Home-Entertainment", t11_qc: "Soziale Medien", t11_qd: "Persönliche Fitness",

    // t12
    t12_title: "Sprachassistenten", t12_text: "Sprachassistenten wie Alexa nutzen KI und IoT, um gesprochene Befehle zu verstehen und Smart-Home-Geräte zu steuern.",
    t12_inst: "Ordne die Paare zu.", t12_h1: "Sprache zu Aktion.", t12_h2: "KI verarbeitet Sprache.",
    t12_l1: "Mikrofon", t12_r1: "Erfasst Stimme", t12_l2: "KI", t12_r2: "Versteht Befehl", t12_l3: "Smartes Gerät", t12_r3: "Führt Aktion aus",
    t12_q: "Wie steuern Sprachassistenten Geräte?", t12_qa: "Indem sie gesprochene Befehle verstehen", t12_qb: "Indem sie Gedanken lesen", t12_qc: "Über eine Tastatur", t12_qd: "Mit einer Maus",

    // t13
    t13_title: "Aktoren", t13_text: "Während Sensoren Daten sammeln, handeln Aktoren. Sie wandeln digitale Befehle in physische Bewegung um, wie das Öffnen eines Ventils.",
    t13_inst: "Fülle die Lücke aus.", t13_h1: "Sensoren lesen, Aktoren tun etwas.", t13_h2: "Sie erzeugen Bewegung.",
    t13_sent: "Ein Aktor wandelt Befehle in physische ___ um.", t13_qa13: "Bewegung", t13_qb13: "Daten", t13_qc13: "Wärme", t13_qd13: "Speicherung",
    t13_q: "Welche Rolle spielt ein Aktor?", t13_qa: "Eine physische Aktion auszuführen", t13_qb: "Temperatur zu messen", t13_qc: "Passwörter zu speichern", t13_qd: "Sich mit WLAN zu verbinden",

    // t14
    t14_title: "Vernetzte Autos", t14_text: "Vernetzte Fahrzeuge tauschen Daten mit anderen Autos und der Infrastruktur aus, um Navigation und Sicherheit zu verbessern.",
    t14_inst: "Ordne die Wörter.", t14_h1: "Autos sprechen miteinander.", t14_h2: "Daten verbessern Sicherheit.",
    t14_w1: "Vernetzte", t14_w2: "Autos", t14_w3: "verbessern", t14_w4: "die", t14_w5: "Sicherheit.",
    t14_q: "Was können vernetzte Autos tun?", t14_qa: "Daten teilen, um die Navigation zu verbessern", t14_qb: "Über den Verkehr fliegen", t14_qc: "Ohne Treibstoff fahren", t14_qd: "Papierkarten drucken",

    // t15
    t15_title: "Smarte Gesundheit", t15_text: "IoT im Gesundheitswesen ermöglicht die Fernüberwachung von Patienten über vernetzte Geräte für rechtzeitige medizinische Hilfe.",
    t15_inst: "Markiere die Vorteile.", t15_h1: "IoT hilft Ärzten.", t15_h2: "Fernüberwachung ist wichtig.",
    t15_tk1: "Fernüberwachung", t15_tk2: "Mehr Papierkram", t15_tk3: "Schnelle Hilfe", t15_tk4: "Längere Wartezeiten", t15_tk5: "Vernetzte Geräte",
    t15_q: "Wie profitiert das Gesundheitswesen vom IoT?", t15_qa: "Durch Fernüberwachung von Patienten", t15_qb: "Indem Ärzte komplett ersetzt werden", t15_qc: "Durch längere Wartezeiten im Krankenhaus", t15_qd: "Indem Medikamente süßer gemacht werden"
  },
  en: {
    explorer_title: "IoT & Smart Devices",
    // t1
    t1_title: "Internet of Things (IoT)", t1_text: "IoT refers to the network of everyday devices connected to the internet that exchange data, e.g. smartwatches or smart light bulbs.",
    t1_inst: "Match the IoT terms.", t1_h1: "IoT = networked everyday devices", t1_h2: "Every IoT device has its own IP address",
    t1_l1: "IoT device", t1_r1: "everyday item connected to the internet", t1_l2: "Sensor", t1_r2: "measures physical quantities (temp., light, etc.)", t1_l3: "Data exchange", t1_r3: "devices send and receive information",
    t1_q: "What does IoT describe?", t1_qa: "Networked everyday devices that exchange data", t1_qb: "A new programming language", t1_qc: "An operating system for smartphones", t1_qd: "A database format",

    // t2
    t2_title: "Sensor", t2_text: "Sensors capture physical quantities like temperature, brightness or motion and convert them to digital data.",
    t2_inst: "Fill in the blank.", t2_h1: "Sensors convert physical signals into data", t2_h2: "Thermometer, light barrier, motion detector are sensors",
    t2_sent: "A ___ measures physical quantities and passes them on as digital data.", t2_qa2: "sensor", t2_qb2: "router", t2_qc2: "processor", t2_qd2: "monitor",
    t2_q: "What does a sensor do in an IoT system?", t2_qa: "It measures physical quantities and passes them on as data", t2_qb: "It stores data in the cloud", t2_qc: "It encrypts network data", t2_qd: "It displays web pages",

    // t3
    t3_title: "Smart home", t3_text: "A smart home is a dwelling where devices like heating, lighting and security systems can be remotely controlled via the internet.",
    t3_inst: "Sort the words into the correct order.", t3_h1: "Remote control via smartphone app possible", t3_h2: "Alexa and Google Home are smart home assistants",
    t3_w1: "In a smart home", t3_w2: "devices can be", t3_w3: "via smartphone", t3_w4: "or voice command", t3_w5: "controlled.",
    t3_q: "What characterizes a smart home?", t3_qa: "Devices that are remotely controlled via the internet", t3_qb: "A house without electricity", t3_qc: "A house with particularly fast Wi-Fi", t3_qd: "A house with many computers",

    // t4
    t4_title: "RFID", t4_text: "RFID (Radio Frequency Identification) identifies objects via radio waves without contact. Applications: library cards, package tracking, access cards.",
    t4_inst: "Sort the terms into the correct category.", t4_h1: "RFID = radio, barcode = optical/visible", t4_h2: "RFID needs no line of sight",
    t4_bl1: "RFID technology", t4_bl2: "Barcode technology", t4_i1: "contactless identification via radio", t4_i2: "optical scanning with laser beam", t4_i3: "access cards, animal chips", t4_i4: "supermarket checkouts, packages",
    t4_q: "How does RFID transfer data?", t4_qa: "Via radio waves, without physical contact", t4_qb: "Via cable", t4_qc: "Via laser scan", t4_qd: "Via Bluetooth",

    // t5
    t5_title: "Edge computing", t5_text: "In edge computing, data is processed not in the cloud but directly where it is generated (at the 'edge' of the network). This reduces latency.",
    t5_inst: "Highlight the advantages of edge computing.", t5_h1: "Edge = data is processed locally", t5_h2: "Less latency, more privacy",
    t5_tk1: "lower latency", t5_tk2: "expensive storage", t5_tk3: "local data processing", t5_tk4: "slow connection required", t5_tk5: "better data privacy",
    t5_q: "What is the main advantage of edge computing?", t5_qa: "Data is processed locally, which reduces latency", t5_qb: "Data is more strongly encrypted", t5_qc: "More servers are used in the cloud", t5_qd: "Each device needs its own IP address",

    // t6
    t6_title: "Smart City", t6_text: "Smart cities use IoT to manage traffic, waste, and energy efficiently, improving the quality of urban life.",
    t6_inst: "Match the smart city solutions.", t6_h1: "IoT helps cities.", t6_h2: "Efficiency is key.",
    t6_l1: "Smart Traffic", t6_r1: "Reduces congestion", t6_l2: "Smart Bins", t6_r2: "Optimize waste collection", t6_l3: "Smart Grids", t6_r3: "Save energy",
    t6_q: "What is a main goal of a Smart City?", t6_qa: "Improving urban life with IoT", t6_qb: "Building taller skyscrapers", t6_qc: "Banning all cars", t6_qd: "Using only paper maps",

    // t7
    t7_title: "Wearables", t7_text: "Wearables are smart electronic devices worn on the body, like fitness trackers, that collect health and activity data.",
    t7_inst: "Order the words.", t7_h1: "Wearables track you.", t7_h2: "They are worn on the body.",
    t7_w1: "Wearables", t7_w2: "collect", t7_w3: "health", t7_w4: "and", t7_w5: "activity data.",
    t7_q: "Which of the following is a wearable?", t7_qa: "A smartwatch", t7_qb: "A smart fridge", t7_qc: "A desktop computer", t7_qd: "A server",

    // t8
    t8_title: "IoT Security Risks", t8_text: "Since IoT devices connect to the internet, they can be hacked. Weak passwords and lack of updates are major risks.",
    t8_inst: "Highlight the security risks.", t8_h1: "Risks make devices vulnerable.", t8_h2: "Hackers look for weaknesses.",
    t8_tk1: "Strong encryption", t8_tk2: "Weak passwords", t8_tk3: "Regular updates", t8_tk4: "Unpatched bugs", t8_tk5: "Two-factor auth",
    t8_q: "What is a common IoT security risk?", t8_qa: "Weak default passwords", t8_qb: "Too much electricity", t8_qc: "Devices being too small", t8_qd: "Strong encryption",

    // t9
    t9_title: "5G & IoT", t9_text: "The 5G network provides high speed and low latency, allowing thousands of IoT devices to communicate seamlessly in real time.",
    t9_inst: "Fill in the blank.", t9_h1: "5G is fast.", t9_h2: "It allows real-time data.",
    t9_sent: "5G provides high speed and low ___.", t9_qa9: "latency", t9_qb9: "battery", t9_qc9: "weight", t9_qd9: "cost",
    t9_q: "How does 5G help IoT?", t9_qa: "By providing fast, low-latency connections", t9_qb: "By reducing device battery life", t9_qc: "By making devices heavier", t9_qd: "By replacing the internet",

    // t10
    t10_title: "Smart Agriculture", t10_text: "IoT in farming uses soil sensors and drones to monitor crops, optimize watering, and increase food production efficiently.",
    t10_inst: "Build the sentence.", t10_h1: "Farming uses IoT.", t10_h2: "Sensors help plants.",
    t10_f1: "Soil sensors", t10_f2: "help to", t10_f3: "optimize", t10_f4: "crop watering.",
    t10_q: "What do soil sensors do in smart agriculture?", t10_qa: "Monitor moisture to optimize watering", t10_qb: "Scare away birds", t10_qc: "Harvest the crops automatically", t10_qd: "Pack the food for shipping",

    // t11
    t11_title: "Industrial IoT", t11_text: "IIoT connects machines in factories to predict failures before they happen, improving manufacturing efficiency and safety.",
    t11_inst: "Sort the concepts.", t11_h1: "IIoT is for factories.", t11_h2: "Consumer IoT is for homes.",
    t11_bl1: "IIoT (Industry)", t11_bl2: "Consumer IoT", t11_i1: "Factory robots", t11_i2: "Smartwatch", t11_i3: "Predictive maintenance", t11_i4: "Smart TV",
    t11_q: "What does IIoT focus on?", t11_qa: "Manufacturing and factory automation", t11_qb: "Home entertainment", t11_qc: "Social media", t11_qd: "Personal fitness",

    // t12
    t12_title: "Voice Assistants", t12_text: "Voice assistants like Alexa or Siri use AI and IoT to understand spoken commands and control smart home devices.",
    t12_inst: "Match the pairs.", t12_h1: "Voice to action.", t12_h2: "AI processes speech.",
    t12_l1: "Microphone", t12_r1: "Captures voice", t12_l2: "AI", t12_r2: "Understands command", t12_l3: "Smart Device", t12_r3: "Executes action",
    t12_q: "How do voice assistants control devices?", t12_qa: "By understanding spoken commands", t12_qb: "By reading your mind", t12_qc: "Through a keyboard", t12_qd: "By using a mouse",

    // t13
    t13_title: "Actuators", t13_text: "While sensors collect data, actuators take action. They convert digital commands into physical movement, like opening a smart valve.",
    t13_inst: "Fill the gap.", t13_h1: "Sensors read, actuators do.", t13_h2: "They create movement.",
    t13_sent: "An actuator converts commands into physical ___.", t13_qa13: "movement", t13_qb13: "data", t13_qc13: "heat", t13_qd13: "storage",
    t13_q: "What is the role of an actuator?", t13_qa: "To perform a physical action", t13_qb: "To measure temperature", t13_qc: "To store passwords", t13_qd: "To connect to Wi-Fi",

    // t14
    t14_title: "Connected Cars", t14_text: "Connected vehicles share data with each other and city infrastructure to improve navigation, safety, and enable autonomous driving.",
    t14_inst: "Order the words.", t14_h1: "Cars talk to each other.", t14_h2: "Data improves safety.",
    t14_w1: "Connected", t14_w2: "cars", t14_w3: "improve", t14_w4: "road", t14_w5: "safety.",
    t14_q: "What can connected cars do?", t14_qa: "Share data to improve navigation", t14_qb: "Fly over traffic", t14_qc: "Run without any fuel", t14_qd: "Print paper maps",

    // t15
    t15_title: "Smart Healthcare", t15_text: "IoT in healthcare allows remote patient monitoring via connected medical devices, ensuring timely medical interventions.",
    t15_inst: "Highlight the benefits.", t15_h1: "IoT helps doctors.", t15_h2: "Remote monitoring is key.",
    t15_tk1: "Remote monitoring", t15_tk2: "More paperwork", t15_tk3: "Timely interventions", t15_tk4: "Longer waiting lines", t15_tk5: "Connected devices",
    t15_q: "How does IoT benefit healthcare?", t15_qa: "By enabling remote patient monitoring", t15_qb: "By replacing doctors completely", t15_qc: "By increasing hospital wait times", t15_qd: "By making medicines sweeter"
  },
  hu: {
    explorer_title: "IoT és Okos eszközök",
    // t1
    t1_title: "Dolgok internete (IoT)", t1_text: "Az IoT a mindennapi eszközök internethez kapcsolódó hálózatát jelenti, amelyek adatot cserélnek, például okosórák vagy okos izzók.",
    t1_inst: "Párosítsd az IoT fogalmakat.", t1_h1: "IoT = hálózatba kapcsolt mindennapi eszközök", t1_h2: "minden IoT-eszköznek saját IP-címe van",
    t1_l1: "IoT-eszköz", t1_r1: "internethez kapcsolódó mindennapi tárgy", t1_l2: "Érzékelő", t1_r2: "fizikai mennyiségeket mér (hőmérséklet, fény stb.)", t1_l3: "Adatcsere", t1_r3: "az eszközök adatokat küldenek és fogadnak",
    t1_q: "Mit jelent az IoT?", t1_qa: "Adatot cserélő, hálózatba kapcsolt mindennapi eszközök", t1_qb: "Egy új programozási nyelv", t1_qc: "Okostelefonok operációs rendszere", t1_qd: "Egy adatbázis-formátum",

    // t2
    t2_title: "Érzékelő (szenzor)", t2_text: "Az érzékelők fizikai mennyiségeket rögzítenek, mint a hőmérséklet, fényerő vagy mozgás, és digitális adattá alakítják azokat.",
    t2_inst: "Töltsd ki a hiányzó részt.", t2_h1: "az érzékelők fizikai jeleket adatokká alakítanak", t2_h2: "a hőmérő, fényzár, mozgásérzékelő érzékelők",
    t2_sent: "Egy ___ fizikai mennyiségeket mér és digitális adatként továbbítja.", t2_qa2: "érzékelő", t2_qb2: "router", t2_qc2: "processzor", t2_qd2: "monitor",
    t2_q: "Mit csinál egy érzékelő az IoT-rendszerben?", t2_qa: "Fizikai mennyiségeket mér és adatként továbbítja", t2_qb: "Adatokat tárol a felhőben", t2_qc: "Hálózati adatokat titkosít", t2_qd: "Weboldalakat jelenít meg",

    // t3
    t3_title: "Okos otthon", t3_text: "Az okos otthon olyan lakás, amelyben olyan eszközök, mint a fűtés, világítás és biztonsági rendszerek interneten keresztül távolról vezérelhetők.",
    t3_inst: "Rendezd a szavakat helyes sorrendbe.", t3_h1: "Távirányítás okostelefonos applikációval lehetséges", t3_h2: "az Alexa és a Google Home okos otthon asszisztensek",
    t3_w1: "Az okos otthonban", t3_w2: "az eszközök", t3_w3: "okostelefonon", t3_w4: "vagy hangparanccsal", t3_w5: "vezérelhetők.",
    t3_q: "Mi jellemzi az okos otthont?", t3_qa: "Interneten keresztül távolról vezérelt eszközök", t3_qb: "Áramszolgáltatás nélküli ház", t3_qc: "Különösen gyors Wi-Fi-vel rendelkező ház", t3_qd: "Sok számítógéppel rendelkező ház",

    // t4
    t4_title: "RFID", t4_text: "Az RFID (Radio Frequency Identification) rádióhullámokkal azonosít tárgyakat érintkezés nélkül. Alkalmazások: könyvtári kártyák, csomagkövetés, beléptető kártyák.",
    t4_inst: "Rendezd a fogalmakat a megfelelő kategóriába.", t4_h1: "RFID = rádió, vonalkód = optikai/látható", t4_h2: "az RFID nem igényel közvetlen rálátást",
    t4_bl1: "RFID-technológia", t4_bl2: "Vonalkód-technológia", t4_i1: "érintés nélküli azonosítás rádión", t4_i2: "optikai leolvasás lézerrel", t4_i3: "beléptető kártyák, állatjelölők", t4_i4: "szupermarketi pénztárak, csomagok",
    t4_q: "Hogyan továbbít adatokat az RFID?", t4_qa: "Rádióhullámokkal, fizikai érintkezés nélkül", t4_qb: "Kábelen keresztül", t4_qc: "Lézerleolvasással", t4_qd: "Bluetooth-on keresztül",

    // t5
    t5_title: "Edge computing", t5_text: "Az edge computing esetén az adatokat nem a felhőben, hanem közvetlenül a keletkezési helyen (a hálózat 'szélén') dolgozzák fel. Ez csökkenti a késleltetést.",
    t5_inst: "Emeld ki az edge computing előnyeit.", t5_h1: "edge = az adatokat helyben dolgozzák fel", t5_h2: "kevesebb késleltetés, több adatvédelem",
    t5_tk1: "kisebb késleltetés", t5_tk2: "drága tárolás", t5_tk3: "helyi adatfeldolgozás", t5_tk4: "lassú kapcsolat szükséges", t5_tk5: "jobb adatvédelem",
    t5_q: "Mi az edge computing fő előnye?", t5_qa: "Az adatokat helyben dolgozzák fel, ami csökkenti a késleltetést", t5_qb: "Az adatokat erősebben titkosítják", t5_qc: "Több szerver kerül felhasználásra a felhőben", t5_qd: "Minden eszköznek saját IP-cím szükséges",

    // t6
    t6_title: "Okos Város", t6_text: "Az okos városok IoT-t használnak a forgalom, a hulladék és az energia hatékony kezelésére, javítva a városi életminőséget.",
    t6_inst: "Párosítsd az okos város megoldásokat.", t6_h1: "Az IoT segít a városoknak.", t6_h2: "A hatékonyság a kulcs.",
    t6_l1: "Okos forgalom", t6_r1: "Csökkenti a torlódást", t6_l2: "Okos kukák", t6_r2: "Optimalizálják a gyűjtést", t6_l3: "Okos hálózatok", t6_r3: "Energiát takarítanak meg",
    t6_q: "Mi az okos város egyik fő célja?", t6_qa: "A városi élet javítása IoT segítségével", t6_qb: "Magasabb felhőkarcolók építése", t6_qc: "Minden autó betiltása", t6_qd: "Csak papírtérképek használata",

    // t7
    t7_title: "Viselhető eszközök", t7_text: "A viselhető eszközök testen hordott okoseszközök, például fitneszkövetők, amelyek egészségügyi és aktivitási adatokat gyűjtenek.",
    t7_inst: "Rendezd sorba a szavakat.", t7_h1: "Az eszközök követnek téged.", t7_h2: "A testen hordják őket.",
    t7_w1: "A viselhető", t7_w2: "eszközök", t7_w3: "egészségügyi", t7_w4: "adatokat", t7_w5: "gyűjtenek.",
    t7_q: "Az alábbiak közül melyik viselhető eszköz?", t7_qa: "Egy okosóra", t7_qb: "Egy okos hűtőszekrény", t7_qc: "Egy asztali számítógép", t7_qd: "Egy szerver",

    // t8
    t8_title: "IoT Biztonság", t8_text: "Mivel az IoT eszközök az internethez csatlakoznak, feltörhetők. A gyenge jelszavak és a frissítések hiánya komoly kockázatot jelent.",
    t8_inst: "Jelöld meg a biztonsági kockázatokat.", t8_h1: "A kockázatok sebezhetővé teszik az eszközöket.", t8_h2: "A hackerek gyengeségeket keresnek.",
    t8_tk1: "Erős titkosítás", t8_tk2: "Gyenge jelszavak", t8_tk3: "Rendszeres frissítések", t8_tk4: "Javítatlan hibák", t8_tk5: "Kétfaktoros hitelesítés",
    t8_q: "Mi egy gyakori IoT biztonsági kockázat?", t8_qa: "Gyenge alapértelmezett jelszavak", t8_qb: "Túl sok áram", t8_qc: "Túl kicsi eszközök", t8_qd: "Erős titkosítás",

    // t9
    t9_title: "5G és IoT", t9_text: "A 5G hálózat nagy sebességet és alacsony késleltetést biztosít, így több ezer IoT-eszköz képes zökkenőmentesen, valós időben kommunikálni.",
    t9_inst: "Töltsd ki az üres részt.", t9_h1: "A 5G gyors.", t9_h2: "Valós idejű adatokat tesz lehetővé.",
    t9_sent: "A 5G nagy sebességet és alacsony ___ biztosít.", t9_qa9: "késleltetést", t9_qb9: "akkumulátort", t9_qc9: "súlyt", t9_qd9: "költséget",
    t9_q: "Hogyan segíti a 5G az IoT-t?", t9_qa: "Gyors, alacsony késleltetésű kapcsolatokkal", t9_qb: "Csökkenti az akku élettartamát", t9_qc: "Nehezebbé teszi az eszközöket", t9_qd: "Helyettesíti az internetet",

    // t10
    t10_title: "Okos Mezőgazdaság", t10_text: "Az IoT a mezőgazdaságban talajérzékelőket és drónokat használ a termés megfigyelésére, az öntözés optimalizálására és a termelés növelésére.",
    t10_inst: "Építsd fel a mondatot.", t10_h1: "A gazdálkodás IoT-t használ.", t10_h2: "A szenzorok segítik a növényeket.",
    t10_f1: "A talajszenzorok", t10_f2: "segítenek", t10_f3: "az öntözés", t10_f4: "optimalizálásában.",
    t10_q: "Mit csinálnak a talajszenzorok az okos mezőgazdaságban?", t10_qa: "Nedvességet mérnek az öntözés optimalizálásához", t10_qb: "Elriasztják a madarakat", t10_qc: "Automatikusan betakarítanak", t10_qd: "Csomagolják az ételt",

    // t11
    t11_title: "Ipari IoT", t11_text: "Az IIoT összekapcsolja a gyári gépeket a meghibásodások előrejelzésére, javítva a gyártás hatékonyságát és biztonságát.",
    t11_inst: "Válogasd szét a koncepciókat.", t11_h1: "Az IIoT gyáraknak szól.", t11_h2: "A Consumer IoT otthoni.",
    t11_bl1: "IIoT (Ipari)", t11_bl2: "Fogyasztói IoT", t11_i1: "Gyári robot", t11_i2: "Okosóra", t11_i3: "Megelőző karbantartás", t11_i4: "Okostévé",
    t11_q: "Mire fókuszál az IIoT?", t11_qa: "Gyártásra és gyári automatizálásra", t11_qb: "Otthoni szórakozásra", t11_qc: "Közösségi médiára", t11_qd: "Személyes fitneszre",

    // t12
    t12_title: "Hangasszisztensek", t12_text: "A hangasszisztensek, mint az Alexa, MI-t és IoT-t használnak a beszélt parancsok megértésére és az okos eszközök vezérlésére.",
    t12_inst: "Párosítsd össze.", t12_h1: "Hangból cselekvés.", t12_h2: "Az MI feldolgozza a beszédet.",
    t12_l1: "Mikrofon", t12_r1: "Hangot rögzít", t12_l2: "MI", t12_r2: "Megérti a parancsot", t12_l3: "Okos eszköz", t12_r3: "Végrehajtja a műveletet",
    t12_q: "Hogyan vezérelnek a hangasszisztensek eszközöket?", t12_qa: "Beszélt parancsok megértésével", t12_qb: "Gondolatolvasással", t12_qc: "Billentyűzeten keresztül", t12_qd: "Egér segítségével",

    // t13
    t13_title: "Beavatkozók (Aktorok)", t13_text: "Míg a szenzorok adatokat gyűjtenek, az aktorok cselekszenek. A digitális parancsokat fizikai mozgássá alakítják, például kinyitnak egy szelepet.",
    t13_inst: "Töltsd ki az üres részt.", t13_h1: "A szenzor olvas, az aktor cselekszik.", t13_h2: "Mozgást hoznak létre.",
    t13_sent: "Az aktor a parancsokat fizikai ___ alakítja.", t13_qa13: "mozgássá", t13_qb13: "adattá", t13_qc13: "hővé", t13_qd13: "tárolássá",
    t13_q: "Mi az aktor szerepe?", t13_qa: "Fizikai cselekvés végrehajtása", t13_qb: "Hőmérséklet mérése", t13_qc: "Jelszavak tárolása", t13_qd: "Csatlakozás a Wi-Fi-hez",

    // t14
    t14_title: "Hálózatba kapcsolt autók", t14_text: "A hálózatba kapcsolt járművek adatokat cserélnek egymással és az infrastruktúrával a navigáció és a biztonság javítása érdekében.",
    t14_inst: "Rendezd sorba a szavakat.", t14_h1: "Az autók beszélnek egymással.", t14_h2: "Az adatok javítják a biztonságot.",
    t14_w1: "Az", t14_w2: "összekapcsolt", t14_w3: "autók", t14_w4: "biztonságosabbak", t14_w5: "lesznek.",
    t14_q: "Mit tudnak tenni a hálózatba kapcsolt autók?", t14_qa: "Adatokat osztanak meg a navigáció javítására", t14_qb: "Átrepülnek a forgalom felett", t14_qc: "Üzemanyag nélkül működnek", t14_qd: "Papírtérképeket nyomtatnak",

    // t15
    t15_title: "Okos Egészségügy", t15_text: "Az IoT az egészségügyben lehetővé teszi a betegek távfelügyeletét a csatlakoztatott eszközökön keresztül a gyors orvosi beavatkozás érdekében.",
    t15_inst: "Jelöld meg az előnyöket.", t15_h1: "Az IoT segít az orvosoknak.", t15_h2: "A távfelügyelet kulcsfontosságú.",
    t15_tk1: "Távfelügyelet", t15_tk2: "Több papírmunka", t15_tk3: "Időben történő beavatkozás", t15_tk4: "Hosszabb várólisták", t15_tk5: "Okos eszközök",
    t15_q: "Hogyan hasznos az IoT az egészségügyben?", t15_qa: "Lehetővé teszi a betegek távfelügyeletét", t15_qb: "Teljesen helyettesíti az orvosokat", t15_qc: "Növeli a kórházi várakozási időt", t15_qd: "Édesebbé teszi a gyógyszereket"
  },
  ro: {
    explorer_title: "IoT & Dispozitive Inteligente",
    // t1
    t1_title: "Internetul Lucrurilor (IoT)", t1_text: "IoT se referă la rețeaua de dispozitive cotidiene conectate la internet care schimbă date, ex. ceasuri inteligente sau becuri smart.",
    t1_inst: "Potrivește termenii IoT.", t1_h1: "IoT = dispozitive cotidiene conectate în rețea", t1_h2: "Fiecare dispozitiv IoT are propria adresă IP",
    t1_l1: "Dispozitiv IoT", t1_r1: "obiect cotidian conectat la internet", t1_l2: "Senzor", t1_r2: "măsoară mărimi fizice (temp., lumină etc.)", t1_l3: "Schimb de date", t1_r3: "dispozitivele trimit și primesc informații",
    t1_q: "Ce descrie IoT?", t1_qa: "Dispozitive cotidiene conectate în rețea care schimbă date", t1_qb: "Un nou limbaj de programare", t1_qc: "Un sistem de operare pentru smartphone-uri", t1_qd: "Un format de baze de date",

    // t2
    t2_title: "Senzor", t2_text: "Senzorii captează mărimi fizice ca temperatura, luminozitatea sau mișcarea și le convertesc în date digitale.",
    t2_inst: "Completează spațiul liber.", t2_h1: "Senzorii convertesc semnalele fizice în date", t2_h2: "Termometrul, bariera de lumină, detectorul de mișcare sunt senzori",
    t2_sent: "Un ___ măsoară mărimi fizice și le transmite ca date digitale.", t2_qa2: "senzor", t2_qb2: "router", t2_qc2: "procesor", t2_qd2: "monitor",
    t2_q: "Ce face un senzor într-un sistem IoT?", t2_qa: "Măsoară mărimi fizice și le transmite ca date", t2_qb: "Stochează date în cloud", t2_qc: "Criptează datele de rețea", t2_qd: "Afișează pagini web",

    // t3
    t3_title: "Casă inteligentă", t3_text: "O casă inteligentă este o locuință unde dispozitive precum încălzirea, iluminatul și sistemele de securitate pot fi controlate de la distanță prin internet.",
    t3_inst: "Sortează cuvintele în ordinea corectă.", t3_h1: "Telecomandă prin aplicație de smartphone posibilă", t3_h2: "Alexa și Google Home sunt asistenți pentru case inteligente",
    t3_w1: "Într-o casă inteligentă", t3_w2: "dispozitivele pot fi", t3_w3: "prin smartphone", t3_w4: "sau comandă vocală", t3_w5: "controlate.",
    t3_q: "Ce caracterizează o casă inteligentă?", t3_qa: "Dispozitive controlate de la distanță prin internet", t3_qb: "O casă fără electricitate", t3_qc: "O casă cu Wi-Fi deosebit de rapid", t3_qd: "O casă cu mulți computere",

    // t4
    t4_title: "RFID", t4_text: "RFID (Radio Frequency Identification) identifică obiecte prin unde radio fără contact. Aplicații: cărți de bibliotecă, urmărire colete, carduri de acces.",
    t4_inst: "Sortează termenii în categoria corectă.", t4_h1: "RFID = radio, cod de bare = optic/vizibil", t4_h2: "RFID nu necesită contact vizual direct",
    t4_bl1: "Tehnologie RFID", t4_bl2: "Tehnologie cod de bare", t4_i1: "identificare fără contact prin radio", t4_i2: "scanare optică cu fascicul laser", t4_i3: "carduri de acces, microcipuri animale", t4_i4: "case de marcat, colete",
    t4_q: "Cum transferă RFID datele?", t4_qa: "Prin unde radio, fără contact fizic", t4_qb: "Prin cablu", t4_qc: "Prin scanare laser", t4_qd: "Prin Bluetooth",

    // t5
    t5_title: "Edge computing", t5_text: "În edge computing, datele sunt procesate nu în cloud, ci direct la locul de generare (la 'marginea' rețelei). Aceasta reduce latența.",
    t5_inst: "Evidențiază avantajele edge computing.", t5_h1: "Edge = datele sunt procesate local", t5_h2: "Latență mai mică, mai multă confidențialitate",
    t5_tk1: "latență mai mică", t5_tk2: "stocare costisitoare", t5_tk3: "procesare locală a datelor", t5_tk4: "conexiune lentă necesară", t5_tk5: "confidențialitate mai bună",
    t5_q: "Care este principalul avantaj al edge computing?", t5_qa: "Datele sunt procesate local, ceea ce reduce latența", t5_qb: "Datele sunt criptate mai puternic", t5_qc: "Se folosesc mai multe servere în cloud", t5_qd: "Fiecare dispozitiv necesită propria adresă IP",

    // t6
    t6_title: "Oraș Inteligent", t6_text: "Orașele inteligente folosesc IoT pentru a gestiona eficient traficul, deșeurile și energia, îmbunătățind calitatea vieții urbane.",
    t6_inst: "Potrivește soluțiile pentru orașe inteligente.", t6_h1: "IoT ajută orașele.", t6_h2: "Eficiența este cheia.",
    t6_l1: "Trafic Inteligent", t6_r1: "Reduce aglomerația", t6_l2: "Pubela Inteligentă", t6_r2: "Optimizează colectarea", t6_l3: "Rețele Inteligente", t6_r3: "Economisesc energie",
    t6_q: "Care este un obiectiv principal al unui Smart City?", t6_qa: "Îmbunătățirea vieții urbane cu IoT", t6_qb: "Construirea de zgârie-nori mai înalți", t6_qc: "Interzicerea tuturor mașinilor", t6_qd: "Folosirea doar a hărților de hârtie",

    // t7
    t7_title: "Dispozitive Wearable", t7_text: "Wearables sunt dispozitive electronice inteligente purtate pe corp, precum brățările de fitness, care colectează date despre sănătate și activitate.",
    t7_inst: "Ordonează cuvintele.", t7_h1: "Wearables te monitorizează.", t7_h2: "Ele sunt purtate pe corp.",
    t7_w1: "Wearables", t7_w2: "colectează", t7_w3: "date", t7_w4: "despre", t7_w5: "sănătate.",
    t7_q: "Care dintre următoarele este un wearable?", t7_qa: "Un smartwatch", t7_qb: "Un frigider inteligent", t7_qc: "Un computer desktop", t7_qd: "Un server",

    // t8
    t8_title: "Securitate IoT", t8_text: "Deoarece dispozitivele IoT se conectează la internet, ele pot fi piratate. Parolele slabe și lipsa actualizărilor sunt riscuri majore.",
    t8_inst: "Evidențiază riscurile de securitate.", t8_h1: "Riscurile fac dispozitivele vulnerabile.", t8_h2: "Hackerii caută puncte slabe.",
    t8_tk1: "Criptare puternică", t8_tk2: "Parole slabe", t8_tk3: "Actualizări regulate", t8_tk4: "Erori necorectate", t8_tk5: "Autentificare în doi pași",
    t8_q: "Care este un risc comun de securitate IoT?", t8_qa: "Parole implicite slabe", t8_qb: "Prea multă electricitate", t8_qc: "Dispozitive prea mici", t8_qd: "Criptare puternică",

    // t9
    t9_title: "5G și IoT", t9_text: "Rețeaua 5G oferă viteză mare și latență redusă, permițând miilor de dispozitive IoT să comunice fluent în timp real.",
    t9_inst: "Completează spațiul liber.", t9_h1: "5G este rapid.", t9_h2: "Permite date în timp real.",
    t9_sent: "5G oferă viteză mare și ___ redusă.", t9_qa9: "latență", t9_qb9: "baterie", t9_qc9: "greutate", t9_qd9: "cost",
    t9_q: "Cum ajută 5G internetul lucrurilor?", t9_qa: "Oferind conexiuni rapide cu latență redusă", t9_qb: "Reducând durata bateriei", t9_qc: "Făcând dispozitivele mai grele", t9_qd: "Înlocuind internetul",

    // t10
    t10_title: "Agricultură Inteligentă", t10_text: "IoT în agricultură folosește senzori de sol și drone pentru a monitoriza culturile, a optimiza udarea și a crește producția de alimente.",
    t10_inst: "Construiește fraza.", t10_h1: "Agricultura folosește IoT.", t10_h2: "Senzorii ajută plantele.",
    t10_f1: "Senzorii de sol", t10_f2: "ajută la", t10_f3: "optimizarea", t10_f4: "irigării.",
    t10_q: "Ce fac senzorii de sol în agricultura inteligentă?", t10_qa: "Monitorizează umiditatea pentru a optimiza udarea", t10_qb: "Sperie păsările", t10_qc: "Recoltează automat culturile", t10_qd: "Ambalează mâncarea",

    // t11
    t11_title: "IoT Industrial", t11_text: "IIoT conectează mașinile din fabrici pentru a prezice defecțiunile, îmbunătățind eficiența producției și siguranța.",
    t11_inst: "Sortează conceptele.", t11_h1: "IIoT este pentru fabrici.", t11_h2: "Consumer IoT este pentru acasă.",
    t11_bl1: "IIoT (Industrial)", t11_bl2: "Consumer IoT", t11_i1: "Roboți de fabrică", t11_i2: "Smartwatch", t11_i3: "Mentenanță predictivă", t11_i4: "Smart TV",
    t11_q: "Pe ce se concentrează IIoT?", t11_qa: "Producție și automatizarea fabricilor", t11_qb: "Divertisment acasă", t11_qc: "Rețele sociale", t11_qd: "Fitness personal",

    // t12
    t12_title: "Asistenți Vocali", t12_text: "Asistenții vocali, precum Alexa, folosesc IA și IoT pentru a înțelege comenzile vocale și a controla dispozitivele inteligente din casă.",
    t12_inst: "Potrivește perechile.", t12_h1: "Voce către acțiune.", t12_h2: "IA procesează vorbirea.",
    t12_l1: "Microfon", t12_r1: "Captează vocea", t12_l2: "IA", t12_r2: "Înțelege comanda", t12_l3: "Dispozitiv Inteligent", t12_r3: "Execută acțiunea",
    t12_q: "Cum controlează asistenții vocali dispozitivele?", t12_qa: "Înțelegând comenzile vocale", t12_qb: "Citindu-ți gândurile", t12_qc: "Printr-o tastatură", t12_qd: "Folosind un mouse",

    // t13
    t13_title: "Actuatori", t13_text: "În timp ce senzorii colectează date, actuatorii acționează. Ei convertesc comenzile digitale în mișcare fizică, precum deschiderea unei supape.",
    t13_inst: "Completează spațiul liber.", t13_h1: "Senzorii citesc, actuatorii acționează.", t13_h2: "Ei creează mișcare.",
    t13_sent: "Un actuator transformă comenzile în ___ fizică.", t13_qa13: "mișcare", t13_qb13: "date", t13_qc13: "căldură", t13_qd13: "stocare",
    t13_q: "Care este rolul unui actuator?", t13_qa: "Să execute o acțiune fizică", t13_qb: "Să măsoare temperatura", t13_qc: "Să stocheze parole", t13_qd: "Să se conecteze la Wi-Fi",

    // t14
    t14_title: "Mașini Conectate", t14_text: "Vehiculele conectate schimbă date între ele și cu infrastructura orașului pentru a îmbunătăți navigația și siguranța.",
    t14_inst: "Ordonează cuvintele.", t14_h1: "Mașinile vorbesc între ele.", t14_h2: "Datele îmbunătățesc siguranța.",
    t14_w1: "Mașinile", t14_w2: "conectate", t14_w3: "îmbunătățesc", t14_w4: "siguranța", t14_w5: "rutieră.",
    t14_q: "Ce pot face mașinile conectate?", t14_qa: "Să partajeze date pentru a îmbunătăți navigația", t14_qb: "Să zboare peste trafic", t14_qc: "Să funcționeze fără combustibil", t14_qd: "Să printeze hărți de hârtie",

    // t15
    t15_title: "Sănătate Inteligentă", t15_text: "IoT în sănătate permite monitorizarea de la distanță a pacienților prin dispozitive conectate, asigurând intervenții medicale la timp.",
    t15_inst: "Evidențiază beneficiile.", t15_h1: "IoT ajută medicii.", t15_h2: "Monitorizarea de la distanță e esențială.",
    t15_tk1: "Monitorizare de la distanță", t15_tk2: "Mai multă birocrație", t15_tk3: "Intervenții la timp", t15_tk4: "Cozi mai lungi", t15_tk5: "Dispozitive conectate",
    t15_q: "Cum aduce IoT beneficii în sănătate?", t15_qa: "Permițând monitorizarea pacienților de la distanță", t15_qb: "Înlocuind complet medicii", t15_qc: "Crescând timpul de așteptare la spital", t15_qd: "Făcând medicamentele mai dulci"
  }
};

export const INFO_K8_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#01579B" },
    interactive: {
      type: "match-pairs",
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" }
      ]
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📡", color: "#1B5E20" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
      sentence: "t2_sent",
      choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"],
      correctIndex: 0
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#E65100" },
    interactive: {
      type: "word-order",
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctOrder: [0, 1, 2, 3, 4]
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📶", color: "#880E4F" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
      buckets: [
        { id: "rfid", label: "t4_bl1" },
        { id: "barcode", label: "t4_bl2" }
      ],
      items: [
        { text: "t4_i1", bucketId: "rfid" },
        { text: "t4_i2", bucketId: "barcode" },
        { text: "t4_i3", bucketId: "rfid" },
        { text: "t4_i4", bucketId: "barcode" }
      ]
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#4A148C" },
    interactive: {
      type: "highlight-text",
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
      tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5"],
      correctIndices: [0, 2, 4]
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏙️", color: "#00BCD4" },
    interactive: {
      type: "match-pairs",
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" }
      ]
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "⌚", color: "#E91E63" },
    interactive: {
      type: "word-order",
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
      words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5"],
      correctOrder: [0, 1, 2, 3, 4]
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#D32F2F" },
    interactive: {
      type: "highlight-text",
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
      tokens: ["t8_tk1", "t8_tk2", "t8_tk3", "t8_tk4", "t8_tk5"],
      correctIndices: [1, 3]
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📱", color: "#3F51B5" },
    interactive: {
      type: "gap-fill",
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
      sentence: "t9_sent",
      choices: ["t9_qa9", "t9_qb9", "t9_qc9", "t9_qd9"],
      correctIndex: 0
    },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌾", color: "#8BC34A" },
    interactive: {
      type: "sentence-build",
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
      fragments: ["t10_f1", "t10_f2", "t10_f3", "t10_f4"]
    },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🏭", color: "#607D8B" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
      buckets: [
        { id: "iiot", label: "t11_bl1" },
        { id: "consumer", label: "t11_bl2" }
      ],
      items: [
        { text: "t11_i1", bucketId: "iiot" },
        { text: "t11_i2", bucketId: "consumer" },
        { text: "t11_i3", bucketId: "iiot" },
        { text: "t11_i4", bucketId: "consumer" }
      ]
    },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#9C27B0" },
    interactive: {
      type: "match-pairs",
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
      pairs: [
        { left: "t12_l1", right: "t12_r1" },
        { left: "t12_l2", right: "t12_r2" },
        { left: "t12_l3", right: "t12_r3" }
      ]
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#795548" },
    interactive: {
      type: "gap-fill",
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
      sentence: "t13_sent",
      choices: ["t13_qa13", "t13_qb13", "t13_qc13", "t13_qd13"],
      correctIndex: 0
    },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#F44336" },
    interactive: {
      type: "word-order",
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
      words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5"],
      correctOrder: [0, 1, 2, 3, 4]
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#E53935" },
    interactive: {
      type: "highlight-text",
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
      tokens: ["t15_tk1", "t15_tk2", "t15_tk3", "t15_tk4", "t15_tk5"],
      correctIndices: [0, 2, 4]
    },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
