// @ts-nocheck
// lib/explorerPools/aiK5_i8.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker 8",
    t1_title: "Empfehlungen", t1_text: "Streaming-Dienste nutzen KI, um dir Filme oder Musik vorzuschlagen, die dir gefallen könnten.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was passt zusammen?", t1_h2: "Vorschläge.", t1_q: "Warum schlägt Netflix Filme vor?", t1_qa: "Weil KI dein Profil kennt", t1_qb: "Durch Zufall", t1_qc: "Wegen der Farbe", t1_qd: "Gar nicht",
    t1_l1: "Musik", t1_r1: "Spotify", t1_l2: "Videos", t1_r2: "YouTube", t1_l3: "Shopping", t1_r3: "Amazon",
    t2_title: "Übersetzung", t2_text: "KI-Übersetzer verstehen nicht nur Wörter, sondern auch den Sinn ganzer Sätze.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Andere Sprachen.", t2_h2: "Sinn verstehen.", t2_q: "Welches Tool nutzt KI?", t2_qa: "Google Übersetzer", t2_qb: "Notizblock", t2_qc: "Taschenrechner", t2_qd: "Mülleimer",
    t2_sent: "KI hilft uns, Texte in andere ___ zu übertragen.", t2_qa2: "Sprachen", t2_qb2: "Farben", t2_qc2: "Zahlen", t2_qd2: "Kisten",
    t3_title: "Spam-Filter", t3_text: "KI erkennt unerwünschte Werbung in E-Mails und sortiert sie automatisch aus.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Wichtig vs. Müll.", t3_h2: "Was ist Spam?", t3_q: "Was macht ein Spam-Filter?", t3_qa: "Mails sortieren", t3_qb: "Mails löschen", t3_qc: "Mails vorlesen", t3_qd: "Mails schreiben",
    t3_bl1: "Posteingang", t3_bl2: "Spam", t3_i1: "Brief von Oma", t3_i2: "Gewinnspiel-Werbung", t3_i3: "Schulaufgabe", t3_i4: "Gratis-Angebot",
    t4_title: "Navigation", t4_text: "GPS-Apps nutzen KI, um Staus vorherzusehen und die schnellste Route zu finden.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Den Weg finden.", t4_h2: "Schneller ankommen.", t4_q: "Was berechnet die KI beim Fahren?", t4_qa: "Die beste Route", t4_qb: "Die Wagenfarbe", t4_qc: "Den Benzinpreis", t4_qd: "Die Musikliste",
    t4_w1: "KI", t4_w2: "hilft", t4_w3: "uns,", t4_w4: "Staus", t4_w5: "auf der", t4_w6: "Straße", t4_w7: "zu umfahren.",
    t5_title: "KI in der Medizin", t5_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu erkennen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Gesundheit.", t5_h2: "Diagnose.", t5_q: "Was kann die KI im Krankenhaus?", t5_qa: "Bilder analysieren", t5_qb: "Betten machen", t5_qc: "Essen kochen", t5_qd: "Fenster putzen",
    t5_tk1: "KI", t5_tk2: "kann", t5_tk3: "Anomalien", t5_tk4: "auf", t5_tk5: "Röntgenbildern", t5_tk6: "finden.",
    t6_title: "Autonome Autos", t6_text: "Selbstfahrende Autos nutzen KI, um Hindernisse zu erkennen und sicher zu lenken.", t6_inst: "Ordne die Paare zu:", t6_h1: "Fahren ohne Hände.", t6_h2: "Sicherheit.", t6_q: "Was braucht ein autonomes Auto?", t6_qa: "Viele Kameras", t6_qb: "Einen Segelmast", t6_qc: "Ein Radio", t6_qd: "Einen Anhänger",
    t6_l1: "Kamera", t6_r1: "Auge", t6_l2: "KI", t6_r2: "Gehirn", t6_l3: "Motor", t6_r3: "Muskel",
    t7_title: "Wettervorhersage", t7_text: "KI analysiert Millionen Datenpunkte, um das Wetter genauer vorherzusagen.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Regen oder Sonne?", t7_h2: "Zukunft wissen.", t7_q: "Wofür ist Wetter-KI gut?", t7_qa: "Frühwarnung", t7_qb: "Wetter machen", t7_qc: "Wolken malen", t7_qd: "Wind stoppen",
    t7_sent: "KI berechnet, ob es morgen ___ wird.", t7_qa2: "regnen", t7_qb2: "lachen", t7_qc2: "singen", t7_qd2: "tanzen",
    t8_title: "Deepfakes", t8_text: "Deepfakes sind gefälschte Videos, die mit KI erstellt wurden. Man muss vorsichtig sein!", t8_inst: "Sortiere in die Eimer:", t8_h1: "Echt oder Fake?", t8_h2: "Nicht alles glauben.", t8_q: "Was ist ein Deepfake?", t8_qa: "KI-Fälschung", t8_qb: "Ein Kuchen", t8_qc: "Ein echtes Foto", t8_qd: "Ein Buch",
    t8_bl1: "Echt", t8_bl2: "Fake", t8_i1: "Urlaubsvideo", t8_i2: "KI-Gesicht", t8_i3: "Nachrichten", t8_i4: "Deepfake-Video",
    t9_title: "KI-Sicherheit", t9_text: "Es ist wichtig, KI sicher und verantwortungsvoll zu entwickeln.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Regeln für KI.", t9_h2: "Sicherheit geht vor.", t9_q: "Was ist bei KI wichtig?", t9_qa: "Ethische Regeln", t9_qb: "Viel Glitzer", t9_qc: "Hohe Geschwindigkeit", t9_qd: "Günstiger Preis",
    t9_w1: "Wir", t9_w2: "müssen", t9_w3: "KI", t9_w4: "immer", t9_w5: "fair", t9_w6: "und", t9_w7: "sicher nutzen.",
    t10_title: "Datenschutz", t10_text: "KI braucht Daten, aber wir müssen unsere Privatsphäre schützen.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Meine Geheimnisse.", t10_h2: "Pass auf!", t10_q: "Was sollte man KI nicht geben?", t10_qa: "Passwörter", t10_qb: "Den Vornamen", t10_qc: "Die Lieblingsfarbe", t10_qd: "Das Alter",
    t10_tk1: "Schütze", t10_tk2: "deine", t10_tk3: "persönlichen", t10_tk4: "Daten", t10_tk5: "vor", t10_tk6: "Missbrauch.",
    t11_title: "KI-Vorurteile", t11_text: "Wenn KI mit schlechten Daten lernt, kann sie ungerecht (voreingenommen) werden.", t11_inst: "Ordne die Paare zu:", t11_h1: "Fairness.", t11_h2: "Gleiche Chancen.", t11_q: "Was ist 'Bias'?", t11_qa: "Voreingenommenheit", t11_qb: "Ein Computerteil", t11_qc: "Ein schnelles Auto", t11_qd: "Eine neue Farbe",
    t11_l1: "Gute Daten", t11_r1: "Fairness", t11_l2: "Bias", t11_r2: "Fehler", t11_l3: "Entwickler", t11_r3: "Verantwortung",
    t12_title: "KI-Musik", t12_text: "KI kann neue Lieder komponieren oder Instrumente imitieren.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Töne machen.", t12_h2: "Komponieren.", t12_q: "Was macht Musik-KI?", t12_qa: "Melodien erfinden", t12_qb: "Gitarre putzen", t12_qc: "Lautsprecher essen", t12_qd: "Lieder löschen",
    t12_sent: "Die KI kann ein ganzes ___ schreiben.", t12_qa2: "Lied", t12_qb2: "Haus", t12_qc2: "Auto", t12_qd2: "Brot",
    t13_title: "Smart Farming", t13_text: "KI hilft Bauern, Wasser zu sparen und Pflanzen gesund zu halten.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Landwirtschaft.", t13_h2: "Natur und Technik.", t13_q: "Was macht KI auf dem Feld?", t13_qa: "Unkraut erkennen", t13_qb: "Traktoren waschen", t13_qc: "Mais kochen", t13_qd: "Kühe füttern",
    t13_bl1: "Früher", t13_bl2: "Smart Farming", t13_i1: "Handarbeit", t13_i2: "Drohnen-Check", t13_i3: "Gießkanne", t13_i4: "KI-Bewässerung",
    t14_title: "Stimmklonung", t14_text: "KI kann Stimmen fast perfekt nachahmen. Das ist toll, aber auch riskant.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Sprechen wie jemand.", t14_h2: "Stimmen imitieren.", t14_q: "Wie nennt man Stimmen-Kopien?", t14_qa: "Voice Cloning", t14_qb: "Echo", t14_qc: "Radio", t14_qd: "MP3",
    t14_w1: "KI", t14_w2: "kann", t14_w3: "die", t14_w4: "Stimme", t14_w5: "einer", t14_w6: "Person", t14_w7: "kopieren.",
    t15_title: "Virtual Reality", t15_text: "In VR-Welten sorgt KI dafür, dass sich alles echt anfühlt.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Brille auf.", t15_h2: "Virtuelle Welt.", t15_q: "Was bedeutet VR?", t15_qa: "Virtuelle Realität", t15_qb: "Viel Radio", t15_qc: "Volle Rechnung", t15_qd: "Video-Rad",
    t15_tk1: "In der", t15_tk2: "VR", t15_tk3: "reagiert", t15_tk4: "die Welt", t15_tk5: "dank", t15_tk6: "KI", t15_tk7: "auf uns."
  },
  en: {
    explorer_title: "AI Explorer 8",
    t1_title: "Recommendations", t1_text: "Streaming services use AI to suggest movies or music you might like.", t1_inst: "Match the pairs:", t1_h1: "What fits?", t1_h2: "Suggestions.", t1_q: "Why does Netflix suggest movies?", t1_qa: "Because AI knows your profile", t1_qb: "By chance", t1_qc: "Because of the color", t1_qd: "It doesn't",
    t1_l1: "Music", t1_r1: "Spotify", t1_l2: "Videos", t1_r2: "YouTube", t1_l3: "Shopping", t1_r3: "Amazon",
    t2_title: "Translation", t2_text: "AI translators understand not just words, but the meaning of entire sentences.", t2_inst: "Fill in the blank:", t2_h1: "Other languages.", t2_h2: "Understanding meaning.", t2_q: "Which tool uses AI?", t2_qa: "Google Translate", t2_qb: "Notepad", t2_qc: "Calculator", t2_qd: "Trash can",
    t2_sent: "AI helps us transfer text into other ___.", t2_qa2: "languages", t2_qb2: "colors", t2_qc2: "numbers", t2_qd2: "boxes",
    t3_title: "Spam Filters", t3_text: "AI recognizes unwanted ads in emails and sorts them out automatically.", t3_inst: "Sort into buckets:", t3_h1: "Important vs. junk.", t3_h2: "What is spam?", t3_q: "What does a spam filter do?", t3_qa: "Sort emails", t3_qb: "Delete emails", t3_qc: "Read emails aloud", t3_qd: "Write emails",
    t3_bl1: "Inbox", t3_bl2: "Spam", t3_i1: "Letter from Grandma", t3_i2: "Prize draw ad", t3_i3: "School assignment", t3_i4: "Free offer",
    t4_title: "Navigation", t4_text: "GPS apps use AI to predict traffic jams and find the fastest route.", t4_inst: "Put the words in order:", t4_h1: "Finding the way.", t4_h2: "Arriving faster.", t4_q: "What does AI calculate while driving?", t4_qa: "The best route", t4_qb: "The car color", t4_qc: "Fuel price", t4_qd: "Music list",
    t4_w1: "AI", t4_w2: "helps", t4_w3: "us", t4_w4: "to", t4_w5: "avoid", t4_w6: "traffic", t4_w7: "jams.",
    t5_title: "AI in Medicine", t5_text: "AI helps doctors identify diseases on X-rays faster.", t5_inst: "Highlight the correct word:", t5_h1: "Health.", t5_h2: "Diagnosis.", t5_q: "What can AI do in a hospital?", t5_qa: "Analyze images", t5_qb: "Make beds", t5_qc: "Cook food", t5_qd: "Clean windows",
    t5_tk1: "AI", t5_tk2: "can", t5_tk3: "find", t5_tk4: "anomalies", t5_tk5: "on", t5_tk6: "X-rays.",
    t6_title: "Autonomous Cars", t6_text: "Self-driving cars use AI to detect obstacles and steer safely.", t6_inst: "Match the pairs:", t6_h1: "Driving without hands.", t6_h2: "Security.", t6_q: "What does an autonomous car need?", t6_qa: "Many cameras", t6_qb: "A sail mast", t6_qc: "A radio", t6_qd: "A trailer",
    t6_l1: "Camera", t6_r1: "Eye", t6_l2: "AI", t6_r2: "Brain", t6_l3: "Motor", t6_r3: "Muscle",
    t7_title: "Weather Forecast", t7_text: "AI analyzes millions of data points to predict weather more accurately.", t7_inst: "Fill in the blank:", t7_h1: "Rain or sun?", t7_h2: "Knowing the future.", t7_q: "What is weather AI good for?", t7_qa: "Early warning", t7_qb: "Making weather", t7_qc: "Painting clouds", t7_qd: "Stopping wind",
    t7_sent: "AI calculates if it will ___ tomorrow.", t7_qa2: "rain", t7_qb2: "laugh", t7_qc2: "sing", t7_qd2: "dance",
    t8_title: "Deepfakes", t8_text: "Deepfakes are fake videos created with AI. You have to be careful!", t8_inst: "Sort into buckets:", t8_h1: "Real or Fake?", t8_h2: "Don't believe everything.", t8_q: "What is a deepfake?", t8_qa: "AI forgery", t8_qb: "A cake", t8_qc: "A real photo", t8_qd: "A book",
    t8_bl1: "Real", t8_bl2: "Fake", t8_i1: "Holiday video", t8_i2: "AI face", t8_i3: "News", t8_i4: "Deepfake video",
    t9_title: "AI Safety", t9_text: "It's important to develop AI safely and responsibly.", t9_inst: "Put the words in order:", t9_h1: "Rules for AI.", t9_h2: "Safety first.", t9_q: "What is important for AI?", t9_qa: "Ethical rules", t9_qb: "Lots of glitter", t9_qc: "High speed", t9_qd: "Low price",
    t9_w1: "We", t9_w2: "must", t9_w3: "always", t9_w4: "use", t9_w5: "AI", t9_w6: "fairly", t9_w7: "and safely.",
    t10_title: "Data Privacy", t10_text: "AI needs data, but we must protect our privacy.", t10_inst: "Highlight the correct word:", t10_h1: "My secrets.", t10_h2: "Watch out!", t10_q: "What should you not give to AI?", t10_qa: "Passwords", t10_qb: "First name", t10_qc: "Favorite color", t10_qd: "Age",
    t10_tk1: "Protect", t10_tk2: "your", t10_tk3: "personal", t10_tk4: "data", t10_tk5: "from", t10_tk6: "abuse.",
    t11_title: "AI Biases", t11_text: "If AI learns from bad data, it can become unfair (biased).", t11_inst: "Match the pairs:", t11_h1: "Fairness.", t11_h2: "Equal opportunities.", t11_q: "What is 'bias'?", t11_qa: "Prejudice", t11_qb: "A computer part", t11_qc: "A fast car", t11_qd: "A new color",
    t11_l1: "Good data", t11_r1: "Fairness", t11_l2: "Bias", t11_r2: "Error", t11_l3: "Developer", t11_r3: "Responsibility",
    t12_title: "AI Music", t12_text: "AI can compose new songs or imitate instruments.", t12_inst: "Fill in the blank:", t12_h1: "Making sounds.", t12_h2: "Composing.", t12_q: "What does music AI do?", t12_qa: "Invent melodies", t12_qb: "Clean guitar", t12_qc: "Eat speakers", t12_qd: "Delete songs",
    t12_sent: "AI can write an entire ___.", t12_qa2: "song", t12_qb2: "house", t12_qc2: "car", t12_qd2: "bread",
    t13_title: "Smart Farming", t13_text: "AI helps farmers save water and keep plants healthy.", t13_inst: "Sort into buckets:", t13_h1: "Agriculture.", t13_h2: "Nature and tech.", t13_q: "What does AI do in the field?", t13_qa: "Detect weeds", t13_qb: "Wash tractors", t13_qc: "Cook corn", t13_qd: "Feed cows",
    t13_bl1: "Past", t13_bl2: "Smart Farming", t13_i1: "Manual work", t13_i2: "Drone check", t13_i3: "Watering can", t13_i4: "AI irrigation",
    t14_title: "Voice Cloning", t14_text: "AI can mimic voices almost perfectly. It's cool but risky.", t14_inst: "Put the words in order:", t14_h1: "Speaking like someone.", t14_h2: "Mimicking voices.", t14_q: "What are voice copies called?", t14_qa: "Voice cloning", t14_qb: "Echo", t14_qc: "Radio", t14_qd: "MP3",
    t14_w1: "AI", t14_w2: "can", t14_w3: "copy", t14_w4: "the", t14_w5: "voice", t14_w6: "of a", t14_w7: "person.",
    t15_title: "Virtual Reality", t15_text: "In VR worlds, AI ensures everything feels real.", t15_inst: "Highlight the correct word:", t15_h1: "Glasses on.", t15_h2: "Virtual world.", t15_q: "What does VR stand for?", t15_qa: "Virtual Reality", t15_qb: "Very Real", t15_qc: "Video Radio", t15_qd: "Visual Run",
    t15_tk1: "In", t15_tk2: "VR", t15_tk3: "the world", t15_tk4: "reacts", t15_tk5: "to us", t15_tk6: "thanks", t15_tk7: "to AI."
  },
  hu: {
    explorer_title: "AI Felfedező 8",
    t1_title: "Ajánlók", t1_text: "A streaming szolgáltatók MI-t használnak, hogy olyan filmeket vagy zenéket ajánljanak, amik tetszhetnek neked.", t1_inst: "Párosítsd össze:", t1_h1: "Mi illik össze?", t1_h2: "Ajánlások.", t1_q: "Miért ajánl a Netflix filmeket?", t1_qa: "Mert az MI ismeri a profilodat", t1_qb: "Véletlenül", t1_qc: "A színe miatt", t1_qd: "Sehogy",
    t1_l1: "Zene", t1_r1: "Spotify", t1_l2: "Videók", t1_r2: "YouTube", t1_l3: "Vásárlás", t1_r3: "Amazon",
    t2_title: "Fordítás", t2_text: "Az MI-fordítók nemcsak szavakat, hanem egész mondatok értelmét is értik.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Más nyelvek.", t2_h2: "Értelem megértése.", t2_q: "Melyik eszköz használ MI-t?", t2_qa: "Google Fordító", t2_qb: "Jegyzettömb", t2_qc: "Számológép", t2_qd: "Kuka",
    t2_sent: "Az MI segít nekünk szövegeket más ___ fordítani.", t2_qa2: "nyelvekre", t2_qb2: "színekre", t2_qc2: "számokra", t2_qd2: "dobozokba",
    t3_title: "Spam szűrő", t3_text: "Az MI felismeri a kéretlen reklámokat az e-mailekben, és automatikusan kiszűri őket.", t3_inst: "Válogasd szét:", t3_h1: "Fontos vs. Szemét.", t3_h2: "Mi az a spam?", t3_q: "Mit csinál a spam szűrő?", t3_qa: "Szétválogatja a leveleket", t3_qb: "Törli a leveleket", t3_qc: "Felolvassa a leveleket", t3_qd: "Levelet ír",
    t3_bl1: "Beérkező", t3_bl2: "Spam", t3_i1: "Levél a mamától", t3_i2: "Nyereményjáték reklám", t3_i3: "Iskolai feladat", t3_i4: "Ingyen ajánlat",
    t4_title: "Navigáció", t4_text: "A GPS alkalmazások MI-t használnak a dugók megjóslására és a leggyorsabb út megkeresésére.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Útkeresés.", t4_h2: "Gyorsabb érkezés.", t4_q: "Mit számol ki az MI vezetés közben?", t4_qa: "A legjobb útvonalat", t4_qb: "Az autó színét", t4_qc: "A benzin árát", t4_qd: "A zenelistát",
    t4_w1: "Az MI", t4_w2: "segít", t4_w3: "nekünk", t4_w4: "elkerülni", t4_w5: "a", t4_w6: "közlekedési", t4_w7: "dugókat.",
    t5_title: "MI az orvoslásban", t5_text: "Az MI segít az orvosoknak gyorsabban felismerni a betegségeket a röntgenképeken.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Egészség.", t5_h2: "Diagnózis.", t5_q: "Mire jó az MI a kórházban?", t5_qa: "Képeket elemez", t5_qb: "Ágyat vet", t5_qc: "Ételt főz", t5_qd: "Ablakot pucol",
    t5_tk1: "Az MI", t5_tk2: "képes", t5_tk3: "rendellenességeket", t5_tk4: "találni", t5_tk5: "a röntgen", t5_tk6: "felvételeken.",
    t6_title: "Önvezető autók", t6_text: "Az önvezető autók MI-t használnak az akadályok felismerésére és a biztonságos kormányzásra.", t6_inst: "Párosítsd össze:", t6_h1: "Vezetés kéz nélkül.", t6_h2: "Biztonság.", t6_q: "Mire van szüksége az önvezető autónak?", t6_qa: "Sok kamerára", t6_qb: "Vitorlára", t6_qc: "Rádióra", t6_qd: "Utánfutóra",
    t6_l1: "Kamera", t6_r1: "Szem", t6_l2: "MI", t6_r2: "Agy", t6_l3: "Motor", t6_r3: "Izom",
    t7_title: "Időjárás-jelentés", t7_text: "Az MI több millió adatot elemez, hogy pontosabban megjósolja az időjárást.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Eső vagy napsütés?", t7_h2: "A jövő ismerete.", t7_q: "Mire jó az időjárás MI?", t7_qa: "Korai figyelmeztetés", t7_qb: "Időjárást csinál", t7_qc: "Felhőket fest", t7_qd: "Megállítja a szelet",
    t7_sent: "Az MI kiszámolja, hogy holnap ___ fog-e.", t7_qa2: "esni", t7_qb2: "nevetni", t7_qc2: "énekelni", t7_qd2: "táncolni",
    t8_title: "Deepfake", t8_text: "A deepfake-ek olyan hamis videók, amiket MI-vel készítettek. Óvatosnak kell lenni!", t8_inst: "Válogasd szét:", t8_h1: "Igazi vagy Hamis?", t8_h2: "Ne higgy el mindent.", t8_q: "Mi az a deepfake?", t8_qa: "MI-vel készült hamisítvány", t8_qb: "Egy süti", t8_qc: "Egy igazi fotó", t8_qd: "Egy könyv",
    t8_bl1: "Igazi", t8_bl2: "Hamis", t8_i1: "Nyaralási videó", t8_i2: "MI-arc", t8_i3: "Hírek", t8_i4: "Deepfake videó",
    t9_title: "MI biztonság", t9_text: "Fontos, hogy az MI-t biztonságosan és felelősségteljesen fejlesszük.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "MI szabályok.", t9_h2: "Első a biztonság.", t9_q: "Mi fontos az MI-nél?", t9_qa: "Etikai szabályok", t9_qb: "Sok csillámpor", t9_qc: "Nagy sebesség", t9_qd: "Olcsó ár",
    t9_w1: "Az MI-t", t9_w2: "mindig", t9_w3: "tisztességesen", t9_w4: "és", t9_w5: "biztonságosan", t9_w6: "kell", t9_w7: "használnunk.",
    t10_title: "Adatvédelem", t10_text: "Az MI-nek adatokra van szüksége, de védenünk kell a magánéletünket.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "A titkaim.", t10_h2: "Vigyázz!", t10_q: "Mit ne adjunk meg az MI-nek?", t10_qa: "Jelszavakat", t10_qb: "Keresztnevet", t10_qc: "Kedvenc színt", t10_qd: "Életkort",
    t10_tk1: "Védd", t10_tk2: "a személyes", t10_tk3: "adataidat", t10_tk4: "a", t10_tk5: "visszaélésekkel", t10_tk6: "szemben.",
    t11_title: "MI előítélet", t11_text: "Ha az MI rossz adatokból tanul, igazságtalan (elfogult) lehet.", t11_inst: "Párosítsd össze:", t11_h1: "Tisztesség.", t11_h2: "Egyenlő esélyek.", t11_q: "Mi az a 'bias'?", t11_qa: "Elfogultság", t11_qb: "Számítógép alkatrész", t11_qc: "Gyors autó", t11_qd: "Új szín",
    t11_l1: "Jó adatok", t11_r1: "Tisztesség", t11_l2: "Bias", t11_r2: "Hiba", t11_l3: "Fejlesztő", t11_r3: "Felelősség",
    t12_title: "MI zene", t12_text: "Az MI képes új dalokat szerezni vagy hangszereket utánozni.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Hangok keltése.", t12_h2: "Zeneszerzés.", t12_q: "Mit csinál a zenei MI?", t12_qa: "Dallamokat talál ki", t12_qb: "Gitárt pucol", t12_qc: "Hangszórót eszik", t12_qd: "Dalokat töröl",
    t12_sent: "Az MI képes egy egész ___ megírni.", t12_qa2: "dalt", t12_qb2: "házat", t12_qc2: "autót", t12_qd2: "kenyeret",
    t13_title: "Okos mezőgazdaság", t13_text: "Az MI segít a gazdáknak vizet spórolni és egészségesen tartani a növényeket.", t13_inst: "Válogasd szét:", t13_h1: "Mezőgazdaság.", t13_h2: "Természet és tech.", t13_q: "Mit csinál az MI a földön?", t13_qa: "Felismeri a gyomot", t13_qb: "Traktort mos", t13_qc: "Kukoricát főz", t13_qd: "Tehenet etet",
    t13_bl1: "Régen", t13_bl2: "Okos gazdaság", t13_i1: "Kézi munka", t13_i2: "Drónos ellenőrzés", t13_i3: "Locsolókanna", t13_i4: "MI-öntözés",
    t14_title: "Hangklónozás", t14_text: "Az MI szinte tökéletesen tud hangokat utánozni. Menő, de veszélyes is.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Úgy beszélni, mint más.", t14_h2: "Hangutánzás.", t14_q: "Hogy hívják a hangmásolást?", t14_qa: "Voice cloning", t14_qb: "Visszhang", t14_qc: "Rádió", t14_qd: "MP3",
    t14_w1: "Az MI", t14_w2: "képes", t14_w3: "lemásolni", t14_w4: "egy", t14_w5: "ember", t14_w6: "hangját.", t14_w7: "",
    t15_title: "Virtuális valóság", t15_text: "A VR világokban az MI gondoskodik róla, hogy minden igazinak tűnjön.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Szemüveget fel.", t15_h2: "Virtuális világ.", t15_q: "Mit jelent a VR?", t15_qa: "Virtuális Valóság", t15_qb: "Valódi Rádió", t15_qc: "Vastag Ruha", t15_qd: "Vizi Robogó",
    t15_tk1: "A VR-ban", t15_tk2: "a világ", t15_tk3: "az MI-nek", t15_tk4: "hála", t15_tk5: "reagál", t15_tk6: "ránk."
  },
  ro: {
    explorer_title: "Explorator IA 8",
    t1_title: "Recomandări", t1_text: "Serviciile de streaming folosesc IA pentru a-ți sugera filme sau muzică care ți-ar putea plăcea.", t1_inst: "Potrivește perechile:", t1_h1: "Ce se potrivește?", t1_h2: "Sugestii.", t1_q: "De ce Netflix sugerează filme?", t1_qa: "Pentru că IA îți cunoaște profilul", t1_qb: "Din întâmplare", t1_qc: "Datorită culorii", t1_qd: "Deloc",
    t1_l1: "Muzică", t1_r1: "Spotify", t1_l2: "Video", t1_r2: "YouTube", t1_l3: "Shopping", t1_r3: "Amazon",
    t2_title: "Traducere", t2_text: "Traducătorii IA înțeleg nu doar cuvintele, ci și sensul întregilor propoziții.", t2_inst: "Completează spațiul liber:", t2_h1: "Alte limbi.", t2_h2: "Înțelegerea sensului.", t2_q: "Ce instrument folosește IA?", t2_qa: "Google Translate", t2_qb: "Blocnotes", t2_qc: "Calculator", t2_qd: "Coș de gunoi",
    t2_sent: "IA ne ajută să transferăm texte în alte ___.", t2_qa2: "limbi", t2_qb2: "culori", t2_qc2: "numere", t2_qd2: "cutii",
    t3_title: "Filtru Spam", t3_text: "IA recunoaște reclamele nedorite din e-mailuri și le elimină automat.", t3_inst: "Sortează în găleți:", t3_h1: "Important vs. Gunoi.", t3_h2: "Ce este spam-ul?", t3_q: "Ce face un filtru de spam?", t3_qa: "Sortează e-mailurile", t3_qb: "Șterge e-mailurile", t3_qc: "Citește e-mailurile", t3_qd: "Scrie e-mailuri",
    t3_bl1: "Inbox", t3_bl2: "Spam", t3_i1: "Scrisoare de la bunica", t3_i2: "Reclamă la concurs", t3_i3: "Temă școlară", t3_i4: "Ofertă gratuită",
    t4_title: "Navigație", t4_text: "Aplicațiile GPS folosesc IA pentru a prezice ambuteiajele și a găsi cea mai rapidă rută.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Găsirea drumului.", t4_h2: "Sosirea mai rapidă.", t4_q: "Ce calculează IA în timp ce conduci?", t4_qa: "Cea mai bună rută", t4_qb: "Culoarea mașinii", t4_qc: "Prețul benzinei", t4_qd: "Lista de muzică",
    t4_w1: "IA", t4_w2: "ne", t4_w3: "ajută", t4_w4: "să", t4_w5: "evităm", t4_w6: "ambuteiajele", t4_w7: "rutiere.",
    t5_title: "IA în medicină", t5_text: "IA îi ajută pe medici să identifice bolile pe radiografii mai rapid.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Sănătate.", t5_h2: "Diagnostic.", t5_q: "Ce poate face IA în spital?", t5_qa: "Analizează imagini", t5_qb: "Face paturile", t5_qc: "Gătește mâncare", t5_qd: "Spală geamuri",
    t5_tk1: "IA", t5_tk2: "poate", t5_tk3: "găsi", t5_tk4: "anomalii", t5_tk5: "pe", t5_tk6: "radiografii.",
    t6_title: "Mașini autonome", t6_text: "Mașinile care se conduc singure folosesc IA pentru a detecta obstacolele.", t6_inst: "Potrivește perechile:", t6_h1: "Conducere fără mâini.", t6_h2: "Siguranță.", t6_q: "De ce are nevoie o mașină autonomă?", t6_qa: "Multe camere", t6_qb: "Un catarg", t6_qc: "Un radio", t6_qd: "O remorcă",
    t6_l1: "Cameră", t6_r1: "Ochi", t6_l2: "IA", t6_r2: "Creier", t6_l3: "Motor", t6_r3: "Mușchi",
    t7_title: "Prognoza meteo", t7_text: "IA analizează milioane de date pentru a prezice vremea mai exact.", t7_inst: "Completează spațiul liber:", t7_h1: "Ploaie sau soare?", t7_h2: "Cunoașterea viitorului.", t7_q: "La ce e bună IA meteo?", t7_qa: "Avertizare timpurie", t7_qb: "Face vremea", t7_qc: "Pictează nori", t7_qd: "Oprește vântul",
    t7_sent: "IA calculează dacă mâine va ___.", t7_qa2: "ploua", t7_qb2: "râde", t7_qc2: "cânta", t7_qd2: "juca",
    t8_title: "Deepfake", t8_text: "Deepfake-urile sunt videoclipuri false create cu IA. Trebuie să fim atenți!", t8_inst: "Sortează în găleți:", t8_h1: "Real sau Fals?", t8_h2: "Nu crede totul.", t8_q: "Ce este un deepfake?", t8_qa: "Falsificat prin IA", t8_qb: "O prăjitură", t8_qc: "O poză reală", t8_qd: "O carte",
    t8_bl1: "Real", t8_bl2: "Fals", t8_i1: "Video din vacanță", t8_i2: "Față IA", t8_i3: "Știri", t8_i4: "Video deepfake",
    t9_title: "Siguranța IA", t9_text: "Este important să dezvoltăm IA în mod sigur și responsabil.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Reguli IA.", t9_h2: "Siguranța pe primul loc.", t9_q: "Ce este important pentru IA?", t9_qa: "Reguli etice", t9_qb: "Mult sclipici", t9_qc: "Viteză mare", t9_qd: "Preț mic",
    t9_w1: "Trebuie", t9_w2: "să", t9_w3: "folosim", t9_w4: "IA", t9_w5: "întotdeauna", t9_w6: "corect", t9_w7: "și sigur.",
    t10_title: "Protecția datelor", t10_text: "IA are nevoie de date, dar trebuie să ne protejăm intimitatea.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Secretele mele.", t10_h2: "Atenție!", t10_q: "Ce să nu dăm IA?", t10_qa: "Parole", t10_qb: "Prenumele", t10_qc: "Culoarea preferată", t10_qd: "Vârsta",
    t10_tk1: "Protejează-ți", t10_tk2: "datele", t10_tk3: "personale", t10_tk4: "împotriva", t10_tk5: "utilizării", t10_tk6: "abuzive.",
    t11_title: "Prejudecăți IA", t11_text: "Dacă IA învață din date proaste, poate deveni nedreaptă (părtinitoare).", t11_inst: "Potrivește perechile:", t11_h1: "Corectitudine.", t11_h2: "Șanse egale.", t11_q: "Ce este 'bias'?", t11_qa: "Prejudecată", t11_qb: "O piesă de PC", t11_qc: "O mașină rapidă", t11_qd: "O culoare nouă",
    t11_l1: "Date bune", t11_r1: "Echitate", t11_l2: "Bias", t11_r2: "Eroare", t11_l3: "Dezvoltator", t11_r3: "Responsabilitate",
    t12_title: "Muzică IA", t12_text: "IA poate compune cântece noi sau imita instrumente.", t12_inst: "Completează spațiul liber:", t12_h1: "Crearea de sunete.", t12_h2: "Compoziție.", t12_q: "Ce face IA muzicală?", t12_qa: "Inventează melodii", t12_qb: "Curăță chitara", t12_qc: "Mănâncă boxe", t12_qd: "Șterge piese",
    t12_sent: "IA poate scrie un ___ întreg.", t12_qa2: "cântec", t12_qb2: "casă", t12_qc2: "mașină", t12_qd2: "pâine",
    t13_title: "Smart Farming", t13_text: "IA îi ajută pe fermieri să economisească apă și să păstreze plantele sănătoase.", t13_inst: "Sortează în găleți:", t13_h1: "Agricultură.", t13_h2: "Natură și tech.", t13_q: "Ce face IA pe câmp?", t13_qa: "Detectează buruieni", t13_qb: "Spală tractoare", t13_qc: "Gătește porumb", t13_qd: "Hrănește vaci",
    t13_bl1: "Trecut", t13_bl2: "Smart Farming", t13_i1: "Muncă manuală", t13_i2: "Verificare dronă", t13_i3: "Stropitoare", t13_i4: "Irigare IA",
    t14_title: "Clonare vocală", t14_text: "IA poate imita voci aproape perfect. Este interesant, dar riscant.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Vorbire ca altcineva.", t14_h2: "Imitare voci.", t14_q: "Cum se numesc copiile vocale?", t14_qa: "Voice cloning", t14_qb: "Ecou", t14_qc: "Radio", t14_qd: "MP3",
    t14_w1: "IA", t14_w2: "poate", t14_w3: "copia", t14_w4: "vocea", t14_w5: "unei", t14_w6: "persoane", t14_w7: "reale.",
    t15_title: "Realitate Virtuală", t15_text: "În lumile VR, IA se asigură că totul pare real.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Ochelarii pe ochi.", t15_h2: "Lume virtuală.", t15_q: "Ce înseamnă VR?", t15_qa: "Realitate Virtuală", t15_qb: "Voce Reală", t15_qc: "Viteză Radio", t15_qd: "Vedere Rotundă",
    t15_tk1: "În", t15_tk2: "VR", t15_tk3: "lumea", t15_tk4: "reacționează", t15_tk5: "la noi", t15_tk6: "prin", t15_tk7: "IA."
  }
};

export const INFO_K5_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎬", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📧",label:"Wichtig"},{emoji:"🚫",label:"Spam"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🗺️", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌦️", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"📸",label:"Echt"},{emoji:"🎭",label:"Fake"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#673AB7" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎵", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🚜",label:"Früher"},{emoji:"🛰️",label:"Smart"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#009688" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "👓", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [1,6] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

