// @ts-nocheck
// lib/explorerPools/aiK6_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ethik & Zukunft der KI",
    t1_title: "KI-Ethik", t1_text: "KI-Ethik befasst sich mit der Frage, was eine KI darf und wie sie gerecht entscheiden kann.", t1_inst: "Verbinde die Werte:", t1_h1: "Richtig oder Falsch.", t1_h2: "Verantwortung.", t1_q: "Womit beschäftigt sich die KI-Ethik?", t1_qa: "Moralische Regeln für KI", t1_qb: "Die Schnelligkeit der KI", t1_qc: "Die Farbe der KI", t1_qd: "Die Kosten der KI",
    t1_l1: "Fairness", t1_r1: "Gerechte Behandlung", t1_l2: "Transparenz", t1_r2: "Wissen, wie sie entscheidet", t1_l3: "Sicherheit", t1_r3: "Niemandem schaden",
    t2_title: "Voreingenommenheit (Bias)", t2_text: "Wenn eine KI mit einseitigen Daten lernt, kann sie Vorurteile entwickeln.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Einseitige Informationen.", t2_h2: "Fehler in den Daten.", t2_q: "Was ist ein Bias in der KI?", t2_qa: "Ein Vorurteil/Fehler", t2_qb: "Ein neuer Akku", t2_qc: "Ein lauter Lüfter", t2_qd: "Ein scharfes Bild",
    t2_sent: "Die KI ist nur so gut wie die ___, mit denen sie lernt.", t2_qa2: "Daten", t2_qb2: "Kabel", t2_qc2: "Stecker", t2_qd2: "Mäuse",
    t3_title: "Privatsphäre & Daten", t3_text: "KI braucht Daten, aber wir müssen unsere persönlichen Informationen schützen.", t3_inst: "Sortiere die Informationen:", t3_h1: "Was ist privat?", t3_h2: "Schutz der Daten.", t3_q: "Was sollte man einer KI nicht verraten?", t3_qa: "Passwörter", t3_qb: "Das Wetter", t3_qc: "Lieblingsfarbe", t3_qd: "Hauptstadt von Peru",
    t3_bl1: "Private Daten", t3_bl2: "Öffentliche Daten", t3_i1: "Adresse", t3_i2: "Wetter", t3_i3: "Telefonnummer", t3_i4: "Hauptstädte",
    t4_title: "KI und Berufe", t4_text: "KI wird viele Jobs verändern, aber auch neue Berufe erschaffen.", t4_inst: "Bringe den Satz in Ordnung:", t4_h1: "Arbeitswelt von morgen.", t4_h2: "Zusammenarbeit.", t4_q: "Was passiert mit Berufen durch KI?", t4_qa: "Sie verändern sich", t4_qb: "Alle verschwinden", t4_qc: "Nichts passiert", t4_qd: "Sie werden verboten",
    t4_w1: "Mensch", t4_w2: "und", t4_w3: "KI", t4_w4: "arbeiten", t4_w5: "in", t4_w6: "Zukunft", t4_w7: "zusammen.",
    t5_title: "Sicherheit in der KI", t5_text: "Wissenschaftler arbeiten daran, dass KI-Systeme immer kontrollierbar bleiben.", t5_inst: "Markiere das Wort für Schutz:", t5_h1: "Gefahren abwenden.", t5_h2: "Kontrolle behalten.", t5_q: "Warum ist KI-Sicherheit wichtig?", t5_qa: "Um Fehler zu vermeiden", t5_qb: "Um schneller zu spielen", t5_qc: "Um bunter zu malen", t5_qd: "Um lauter zu sein",
    t5_tk1: "Sicherheit", t5_tk2: "bedeutet,", t5_tk3: "dass", t5_tk4: "die", t5_tk5: "KI", t5_tk6: "immer", t5_tk7: "tut,", t5_tk8: "was", t5_tk9: "wir", t5_tk10: "wollen.",
    t6_title: "Turing-Test", t6_text: "Ein Test, um festzustellen, ob eine KI so intelligent wie ein Mensch wirkt.", t6_inst: "Zähle die Testpersonen:", t6_h1: "Mensch oder Maschine?", t6_h2: "Wer antwortet?", t6_q: "Wer erfand den Turing-Test?", t6_qa: "Alan Turing", t6_qb: "Albert Einstein", t6_qc: "Steve Jobs", t6_qd: "Bill Gates",
    t6_c: "3",
    t7_title: "Starke KI (AGI)", t7_text: "AGI ist eine KI, die alles so gut wie ein Mensch lernen könnte (noch gibt es sie nicht).", t7_inst: "Verbinde die Typen:", t7_h1: "Heute vs. Morgen.", t7_h2: "Fähigkeiten.", t7_q: "Gibt es heute schon eine AGI?", t7_qa: "Nein, nur schwache KI", t7_qb: "Ja, überall", t7_qc: "Nur in Filmen", t7_qd: "Nur auf dem Mars",
    t7_l1: "Schwache KI", t7_r1: "Spezialisiert (z.B. Schach)", t7_l2: "Starke KI", t7_r2: "Allrounder (wie Menschen)", t7_l3: "Heute", t7_r3: "Schwache KI",
    t8_title: "Umwelt & KI", t8_text: "Das Training von KI verbraucht sehr viel Energie und braucht starke Kühlung.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Stromverbrauch.", t8_h2: "Nachhaltigkeit.", t8_q: "Was ist ein Nachteil von großen KIs?", t8_qa: "Hoher Energieverbrauch", t8_qb: "Sie brauchen Wasser", t8_qc: "Sie sind zu klein", t8_qd: "Sie machen keinen Lärm",
    t8_sent: "KI-Rechenzentren brauchen viel ___.", t8_qa2: "Elektrizität", t8_qb2: "Sauerstoff", t8_qc2: "Holz", t8_qd2: "Papier",
    t9_title: "Verantwortung", t9_text: "Wenn eine KI einen Fehler macht, müssen Menschen entscheiden, wer verantwortlich ist.", t9_inst: "Sortiere die Rollen:", t9_h1: "Wer macht was?", t9_h2: "Entscheider.", t9_q: "Wer ist verantwortlich für eine KI?", t9_qa: "Die Entwickler/Nutzer", t9_qb: "Der Computer selbst", t9_qc: "Das Stromkabel", t9_qd: "Niemand",
    t9_bl1: "Ersteller", t9_bl2: "Nutzer", t9_i1: "Programmierer", t9_i2: "Anwender", t9_i3: "KI-Trainer", t9_i4: "Kunde",
    t10_title: "Fake News & KI", t10_text: "KI kann helfen, Lügen im Internet zu finden, aber sie kann sie leider auch erzeugen.", t10_inst: "Bringe den Ablauf in Ordnung:", t10_h1: "Wahrheit finden.", t10_h2: "Informationen prüfen.", t10_q: "Was sind Fake News?", t10_qa: "Falsche Nachrichten", t10_qb: "Neue Nachrichten", t10_qc: "Lustige Nachrichten", t10_qd: "Kurze Nachrichten",
    t10_w1: "Prüfe", t10_w2: "Quellen,", t10_w3: "bevor", t10_w4: "du", t10_w5: "KI-Informationen", t10_w6: "einfach", t10_w7: "glaubst.",
    t11_title: "Urheberrecht", t11_text: "Wem gehört ein Bild, das eine KI gemalt hat? Das ist eine schwierige rechtliche Frage.", t11_inst: "Markiere die zwei Wörter für Recht und Besitz:", t11_h1: "Wem gehört es?", t11_h2: "Rechte.", t11_q: "Was schützt das Urheberrecht?", t11_qa: "Eigene Werke", t11_qb: "Alte Computer", t11_qc: "Das Internet", t11_qd: "Leere Blätter",
    t11_tk1: "Das", t11_tk2: "Urheberrecht", t11_tk3: "regelt", t11_tk4: "den", t11_tk5: "Besitz", t11_tk6: "an", t11_tk7: "Werken.",
    t12_title: "Zukunftsvisionen", t12_text: "Wissenschaftler hoffen, dass KI hilft, Krankheiten zu heilen und das Klima zu retten.", t12_inst: "Zähle die Forschungsstationen:", t12_h1: "Blick in die Zukunft.", t12_h2: "Hoffnung.", t12_q: "Was ist ein Ziel der KI-Forschung?", t12_qa: "Probleme lösen", t12_qb: "Menschen ersetzen", t12_qc: "Das Internet löschen", t12_qd: "Alles teurer machen",
    t12_c: "4",
    t13_title: "Mensch-KI-Kooperation", t13_text: "In Zukunft werden wir KI als Werkzeug nutzen, um unsere eigenen Fähigkeiten zu erweitern.", t13_inst: "Verbinde die Tandems:", t13_h1: "Teamwork.", t13_h2: "Ergänzung.", t13_q: "Wie sollten wir KI nutzen?", t13_qa: "Als schlaues Werkzeug", t13_qb: "Gar nicht", t13_qc: "Nur zum Spielen", t13_qd: "Als Ersatz für uns",
    t13_l1: "Kreativität", t13_r1: "Mensch", t13_l2: "Rechenkraft", t13_r2: "KI", t13_l3: "Team", t13_r3: "Beide",
    t14_title: "Digital Citizenship", t14_text: "Ein guter digitaler Bürger nutzt KI respektvoll und verbreitet keine Lügen.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Gutes Benehmen online.", t14_h2: "Digitaler Alltag.", t14_q: "Was macht einen guten digitalen Bürger aus?", t14_qa: "Ehrlichkeit und Respekt", t14_qb: "Viele Follower", t14_qc: "Ein teurer PC", t14_qd: "Schnelles Tippen",
    t14_sent: "Wir müssen KI ___ nutzen.", t14_qa2: "verantwortungsbewusst", t14_qb2: "nie", t14_qc2: "heimlich", t14_qd2: "laut",
    t15_title: "KI-Zusammenfassung", t15_text: "KI ist eine mächtige Technik, die uns hilft, wenn wir sie klug und vorsichtig einsetzen.", t15_inst: "Sortiere die KI-Eigenschaften:", t15_h1: "Was haben wir gelernt?", t15_h2: "Chancen und Risiken.", t15_q: "Was ist das Wichtigste bei KI?", t15_qa: "Der Mensch behält die Kontrolle", t15_qb: "Die KI muss immer Recht haben", t15_qc: "Dass sie bunt ist", t15_qd: "Dass sie viel Strom braucht",
    t15_bl1: "Vorteile", t15_bl2: "Herausforderungen", t15_i1: "Schnelligkeit", t15_i2: "Energieverbrauch", t15_i3: "Wissen", t15_i4: "Voreingenommenheit"
  },
  en: {
    explorer_title: "AI Ethics & Future",
    t1_title: "AI Ethics", t1_text: "AI ethics deals with the question of what an AI is allowed to do and how it can make fair decisions.", t1_inst: "Connect the values:", t1_h1: "Right or wrong.", t1_h2: "Responsibility.", t1_q: "What does AI ethics deal with?", t1_qa: "Moral rules for AI", t1_qb: "AI speed", t1_qc: "AI color", t1_qd: "AI costs",
    t1_l1: "Fairness", t1_r1: "Just treatment", t1_l2: "Transparency", t1_r2: "Knowing how it decides", t1_l3: "Safety", t1_r3: "Not harming anyone",
    t2_title: "Bias", t2_text: "If an AI learns with one-sided data, it can develop prejudices.", t2_inst: "Fill in the blank:", t2_h1: "One-sided information.", t2_h2: "Errors in data.", t2_q: "What is bias in AI?", t2_qa: "A prejudice/error", t2_qb: "A new battery", t2_qc: "A loud fan", t2_qd: "A sharp image",
    t2_sent: "The AI is only as good as the ___ it learns from.", t2_qa2: "data", t2_qb2: "cables", t2_qc2: "plugs", t2_qd2: "mice",
    t3_title: "Privacy & Data", t3_text: "AI needs data, but we must protect our personal information.", t3_inst: "Sort the information:", t3_h1: "What is private?", t3_h2: "Protecting data.", t3_q: "What should you not tell an AI?", t3_qa: "Passwords", t3_qb: "The weather", t3_qc: "Favorite color", t3_qd: "Capital of Peru",
    t3_bl1: "Private Data", t3_bl2: "Public Data", t3_i1: "Address", t3_i2: "Weather", t3_i3: "Phone number", t3_i4: "Capitals",
    t4_title: "AI and Jobs", t4_text: "AI will change many jobs but also create new professions.", t4_inst: "Put the sentence in order:", t4_h1: "Future world of work.", t4_h2: "Collaboration.", t4_q: "What happens to jobs because of AI?", t4_qa: "They change", t4_qb: "They all disappear", t4_qc: "Nothing happens", t4_qd: "They are banned",
    t4_w1: "Humans", t4_w2: "and", t4_w3: "AI", t4_w4: "will", t4_w5: "work", t4_w6: "together", t4_w7: "soon.",
    t5_title: "Safety in AI", t5_text: "Scientists are working to ensure that AI systems always remain controllable.", t5_inst: "Highlight the word for protection:", t5_h1: "Avoid dangers.", t5_h2: "Maintain control.", t5_q: "Why is AI safety important?", t5_qa: "To avoid errors", t5_qb: "To play faster", t5_qc: "To paint more colorful", t5_qd: "To be louder",
    t5_tk1: "Safety", t5_tk2: "means", t5_tk3: "that", t5_tk4: "the", t5_tk5: "AI", t5_tk6: "always", t5_tk7: "does", t5_tk8: "what", t5_tk9: "we", t5_tk10: "want.",
    t6_title: "Turing Test", t6_text: "A test to determine if an AI seems as intelligent as a human.", t6_inst: "Count the test subjects:", t6_h1: "Human or machine?", t6_h2: "Who answers?", t6_q: "Who invented the Turing test?", t6_qa: "Alan Turing", t6_qb: "Albert Einstein", t6_qc: "Steve Jobs", t6_qd: "Bill Gates",
    t6_c: "3",
    t7_title: "Strong AI (AGI)", t7_text: "AGI is an AI that could learn everything as well as a human (it doesn't exist yet).", t7_inst: "Connect the types:", t7_h1: "Today vs. Tomorrow.", t7_h2: "Capabilities.", t7_q: "Does AGI exist today?", t7_qa: "No, only narrow AI", t7_qb: "Yes, everywhere", t7_qc: "Only in movies", t7_qd: "Only on Mars",
    t7_l1: "Narrow AI", t7_r1: "Specialized (e.g. Chess)", t7_l2: "Strong AI", t7_r2: "All-rounder (like human)", t7_l3: "Today", t7_r3: "Narrow AI",
    t8_title: "Environment & AI", t8_text: "Training AI consumes a lot of energy and requires powerful cooling.", t8_inst: "Fill in the blank:", t8_h1: "Power consumption.", t8_h2: "Sustainability.", t8_q: "What is a disadvantage of large AIs?", t8_qa: "High energy consumption", t8_qb: "They need water", t8_qc: "They are too small", t8_qd: "They make no noise",
    t8_sent: "AI data centers need a lot of ___.", t8_qa2: "electricity", t8_qb2: "oxygen", t8_qc2: "wood", t8_qd2: "paper",
    t9_title: "Responsibility", t9_text: "If an AI makes a mistake, humans must decide who is responsible.", t9_inst: "Sort the roles:", t9_h1: "Who does what?", t9_h2: "Deciders.", t9_q: "Who is responsible for an AI?", t9_qa: "The developers/users", t9_qb: "The computer itself", t9_qc: "The power cable", t9_qd: "No one",
    t9_bl1: "Creators", t9_bl2: "Users", t9_i1: "Programmer", t9_i2: "Operator", t9_i3: "AI Trainer", t9_i4: "Customer",
    t10_title: "Fake News & AI", t10_text: "AI can help find lies on the internet, but unfortunately, it can also create them.", t10_inst: "Put the process in order:", t10_h1: "Find truth.", t10_h2: "Check information.", t10_q: "What is fake news?", t10_qa: "False news", t10_qb: "New news", t10_qc: "Funny news", t10_qd: "Short news",
    t10_w1: "Check", t10_w2: "sources", t10_w3: "before", t10_w4: "you", t10_w5: "simply", t10_w6: "believe", t10_w7: "AI.",
    t11_title: "Intellectual Property", t11_text: "Who owns an image painted by an AI? This is a difficult legal question.", t11_inst: "Highlight the two words for the right and ownership:", t11_h1: "Who owns it?", t11_h2: "Rights.", t11_q: "What does copyright protect?", t11_qa: "Original works", t11_qb: "Old computers", t11_qc: "The internet", t11_qd: "Empty pages",
    t11_tk1: "The", t11_tk2: "copyright", t11_tk3: "protects", t11_tk4: "the", t11_tk5: "ownership", t11_tk6: "of", t11_tk7: "works.",
    t12_title: "Future Visions", t12_text: "Scientists hope AI will help cure diseases and save the climate.", t12_inst: "Count the research stations:", t12_h1: "Look into the future.", t12_h2: "Hope.", t12_q: "What is a goal of AI research?", t12_qa: "Solve problems", t12_qb: "Replace humans", t12_qc: "Delete the internet", t12_qd: "Make everything expensive",
    t12_c: "4",
    t13_title: "Human-AI Cooperation", t13_text: "In the future, we will use AI as a tool to expand our own capabilities.", t13_inst: "Connect the tandems:", t13_h1: "Teamwork.", t13_h2: "Complement.", t13_q: "How should we use AI?", t13_qa: "As a smart tool", t13_qb: "Not at all", t13_qc: "Only for playing", t13_qd: "As a replacement",
    t13_l1: "Creativity", t13_r1: "Human", t13_l2: "Computing power", t13_r2: "AI", t13_l3: "Team", t13_r3: "Both",
    t14_title: "Digital Citizenship", t14_text: "A good digital citizen uses AI respectfully and does not spread lies.", t14_inst: "Fill in the blank:", t14_h1: "Good behavior online.", t14_h2: "Digital everyday life.", t14_q: "What makes a good digital citizen?", t14_qa: "Honesty and respect", t14_qb: "Many followers", t14_qc: "An expensive PC", t14_qd: "Fast typing",
    t14_sent: "We must use AI ___.", t14_qa2: "responsibly", t14_qb2: "never", t14_qc2: "secretly", t14_qd2: "loudly",
    t15_title: "AI Summary", t15_text: "AI is a powerful technique that helps us if we use it wisely and carefully.", t15_inst: "Sort the AI traits:", t15_h1: "What have we learned?", t15_h2: "Opportunities and risks.", t15_q: "What is the most important thing about AI?", t15_qa: "Humans keep control", t15_qb: "AI must always be right", t15_qc: "That it's colorful", t15_qd: "That it uses lots of power",
    t15_bl1: "Benefits", t15_bl2: "Challenges", t15_i1: "Speed", t15_i2: "Power use", t15_i3: "Knowledge", t15_i4: "Bias"
  },
  hu: {
    explorer_title: "MI etika és jövő",
    t1_title: "MI-etika", t1_text: "A MI-etika azzal foglalkozik, hogy mit szabad egy MI-nek, és hogyan tud igazságos döntéseket hozni.", t1_inst: "Kösd össze az értékeket:", t1_h1: "Jó vagy Rossz.", t1_h2: "Felelősség.", t1_q: "Mivel foglalkozik a MI-etika?", t1_qa: "Erkölcsi szabályok a MI-nek", t1_qb: "A MI sebessége", t1_qc: "A MI színe", t1_qd: "A MI ára",
    t1_l1: "Méltányosság", t1_r1: "Igazságos kezelés", t1_l2: "Átláthatóság", t1_r2: "Tudjuk, hogyan dönt", t1_l3: "Biztonság", t1_r3: "Ne ártson senkinek",
    t2_title: "Elfogultság (Bias)", t2_text: "Ha egy MI egyoldalú adatokból tanul, előítéletei lehetnek.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Egyoldalú információk.", t2_h2: "Hibás adatok.", t2_q: "Mi az a bias a MI-ben?", t2_qa: "Egy előítélet/hiba", t2_qb: "Egy új akksi", t2_qc: "Egy hangos ventilátor", t2_qd: "Egy éles kép",
    t2_sent: "A MI csak annyira jó, amennyire az ___ jók, amiből tanul.", t2_qa2: "adatok", t2_qb2: "kábelek", t2_qc2: "dugók", t2_qd2: "egerek",
    t3_title: "Adatvédelem", t3_text: "A MI-nek adatokra van szüksége, de védenünk kell a személyes információinkat.", t3_inst: "Válogasd szét az információkat:", t3_h1: "Mi magánügy?", t3_h2: "Adatvédelem.", t3_q: "Mit ne áruljunk el egy MI-nek?", t3_qa: "Jelszavakat", t3_qb: "Az időjárást", t3_qc: "Kedvenc színt", t3_qd: "Peru fővárosát",
    t3_bl1: "Magánadatok", t3_bl2: "Nyilvános adatok", t3_i1: "Lakcím", t3_i2: "Időjárás", t3_i3: "Telefonszám", t3_i4: "Fővárosok",
    t4_title: "MI és a szakmák", t4_text: "A MI sok munkát megváltoztat, de új szakmákat is létrehoz.", t4_inst: "Tedd sorrendbe a mondatot:", t4_h1: "A jövő munkahelye.", t4_h2: "Együttműködés.", t4_q: "Mi történik a munkákkal a MI miatt?", t4_qa: "Átalakulnak", t4_qb: "Mind eltűnik", t4_qc: "Semmi sem változik", t4_qd: "Betiltják őket",
    t4_w1: "Ember", t4_w2: "és", t4_w3: "gép", t4_w4: "együtt", t4_w5: "fog", t4_w6: "dolgozni", t4_w7: "a jövőben.",
    t5_title: "Biztonság a MI-ben", t5_text: "A tudósok azon dolgoznak, hogy a MI rendszerek mindig irányíthatóak maradjanak.", t5_inst: "Jelöld meg a védelemre utaló szót:", t5_h1: "Veszélyek elkerülése.", t5_h2: "Irányítás megtartása.", t5_q: "Miért fontos a MI biztonsága?", t5_qa: "A hibák elkerülése miatt", t5_qb: "Hogy gyorsabban játsszunk", t5_qc: "Hogy színesebben fessünk", t5_qd: "Hogy hangosabb legyen",
    t5_tk1: "Biztonság", t5_tk2: "azt", t5_tk3: "jelenti,", t5_tk4: "hogy", t5_tk5: "a MI", t5_tk6: "mindig", t5_tk7: "azt", t5_tk8: "teszi,", t5_tk9: "amit", t5_tk10: "szeretnénk.",
    t6_title: "Turing-teszt", t6_text: "Egy teszt annak megállapítására, hogy egy MI tűnik-e olyan okosnak, mint egy ember.", t6_inst: "Számold meg a tesztelőket:", t6_h1: "Ember vagy gép?", t6_h2: "Ki válaszol?", t6_q: "Ki találta ki a Turing-tesztet?", t6_qa: "Alan Turing", t6_qb: "Albert Einstein", t6_qc: "Steve Jobs", t6_qd: "Bill Gates",
    t6_c: "3",
    t7_title: "Erős MI (AGI)", t7_text: "Az AGI egy olyan MI, ami bármit meg tudna tanulni, amit egy ember (még nincs ilyen).", t7_inst: "Kösd össze a típusokat:", t7_h1: "Ma vs. Holnap.", t7_h2: "Képességek.", t7_q: "Létezik ma már AGI?", t7_qa: "Nem, csak gyenge MI", t7_qb: "Igen, mindenhol", t7_qc: "Csak filmekben", t7_qd: "Csak a Marson",
    t7_l1: "Gyenge MI", t7_r1: "Speciális (pl. sakk)", t7_l2: "Erős MI", t7_r2: "Mindentudó (mint az ember)", t7_l3: "Ma", t7_r3: "Gyenge MI",
    t8_title: "Környezet és MI", t8_text: "A MI tanítása rengeteg energiát fogyaszt és hűtést igényel.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Áramfogyasztás.", t8_h2: "Fenntarthatóság.", t8_q: "Mi a hátránya a nagy MI-knek?", t8_qa: "Magas energiafogyasztás", t8_qb: "Vizet isznak", t8_qc: "Túl kicsik", t8_qd: "Nem zajosak",
    t8_sent: "A MI központoknak sok ___ van szükségük.", t8_qa2: "energiára", t8_qb2: "oxigénre", t8_qc2: "fára", t8_qd2: "papírra",
    t9_title: "Felelősség", t9_text: "Ha egy MI hibázik, az embereknek kell eldönteniük, ki a felelős.", t9_inst: "Válogasd szét a szerepeket:", t9_h1: "Ki mit csinál?", t9_h2: "Döntéshozók.", t9_q: "Ki felelős a MI-ért?", t9_qa: "A fejlesztők és felhasználók", t9_qb: "Maga a számítógép", t9_qc: "A tápkábel", t9_qd: "Senki",
    t9_bl1: "Készítő", t9_bl2: "Használó", t9_i1: "Programozó", t9_i2: "Vevő", t9_i3: "MI tréner", t9_i4: "Felhasználó",
    t10_title: "Álhírek és MI", t10_text: "A MI segíthet megtalálni a hazugságokat a neten, de sajnos létre is hozhatja őket.", t10_inst: "Tedd sorrendbe a folyamatot:", t10_h1: "Igazságkeresés.", t10_h2: "Infók ellenőrzése.", t10_q: "Mik azok a Fake News-ok?", t10_qa: "Álhírek", t10_qb: "Friss hírek", t10_qc: "Vicces hírek", t10_qd: "Rövid hírek",
    t10_w1: "Ellenőrizd", t10_w2: "a", t10_w3: "forrást,", t10_w4: "mielőtt", t10_w5: "elhiszel", t10_w6: "egy", t10_w7: "MI-hírt.",
    t11_title: "Szerzői jog", t11_text: "Kié egy kép, amit a MI festett? Ez egy nehéz jogi kérdés.", t11_inst: "Jelöld meg a két szót: a jogot és a birtoklást:", t11_h1: "Kié?", t11_h2: "Jogok.", t11_q: "Mit véd a szerzői jog?", t11_qa: "Saját alkotásokat", t11_qb: "Régi gépeket", t11_qc: "Az internetet", t11_qd: "Üres lapokat",
    t11_tk1: "A", t11_tk2: "szerzői jog", t11_tk3: "védi", t11_tk4: "a", t11_tk5: "tulajdont", t11_tk6: "az", t11_tk7: "alkotásokon.",
    t12_title: "Jövőkép", t12_text: "A tudósok remélik, hogy a MI segít betegségeket gyógyítani és menteni a klímát.", t12_inst: "Számold meg a kutatóállomásokat:", t12_h1: "Nézzünk a jövőbe.", t12_h2: "Remény.", t12_q: "Mi a MI kutatás egyik célja?", t12_qa: "Problémák megoldása", t12_qb: "Emberek lecserélése", t12_qc: "Internet törlése", t12_qd: "Minden megdrágítása",
    t12_c: "4",
    t13_title: "Ember-MI együttműködés", t13_text: "A jövőben a MI-t eszközként fogjuk használni a saját képességeink bővítésére.", t13_inst: "Kösd össze a párosokat:", t13_h1: "Csapatmunka.", t13_h2: "Kiegészítés.", t13_q: "Hogyan használjuk a MI-t?", t13_qa: "Okos eszközként", t13_qb: "Sehogy", t13_qc: "Csak játékra", t13_qd: "Helyettesítőként",
    t13_l1: "Kreativitás", t13_r1: "Ember", t13_l2: "Számítási erő", t13_r2: "MI", t13_l3: "Csapat", t13_r3: "Mindkettő",
    t14_title: "Digitális állampolgárság", t14_text: "A jó digitális állampolgár tisztelettel használja a MI-t és nem hazudik vele.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Jó viselkedés online.", t14_h2: "Digitális hétköznapok.", t14_q: "Mi jellemzi a jó digitális állampolgárt?", t14_qa: "Őszinteség és tisztelet", t14_qb: "Sok követő", t14_qc: "Drága gép", t14_qd: "Gyors gépelés",
    t14_sent: "A MI-t ___ kell használnunk.", t14_qa2: "felelősséggel", t14_qb2: "soha", t14_qc2: "titokban", t14_qd2: "hangosan",
    t15_title: "MI összefoglalás", t15_text: "A MI egy erős technológia, ami segít nekünk, ha okosan és óvatosan használjuk.", t15_inst: "Válogasd szét a MI jellemzőit:", t15_h1: "Mit tanultunk?", t15_h2: "Esélyek és veszélyek.", t15_q: "Mi a legfontosabb a MI-nél?", t15_qa: "Az ember irányít", t15_qb: "A MI-nek mindig igaza van", t15_qc: "Hogy színes legyen", t15_qd: "Hogy sok áramot fogyaszt",
    t15_bl1: "Előnyök", t15_bl2: "Kihívások", t15_i1: "Gyorsaság", t15_i2: "Energiaigény", t15_i3: "Tudás", t15_i4: "Elfogultság"
  },
  ro: {
    explorer_title: "Etica și Viitorul IA",
    t1_title: "Etica IA", t1_text: "Etica IA se ocupă de întrebarea ce are voie să facă o IA și cum poate lua decizii corecte.", t1_inst: "Conectează valorile:", t1_h1: "Corect sau Greșit.", t1_h2: "Responsabilitate.", t1_q: "Cu ce se ocupă etica IA?", t1_qa: "Reguli morale pentru IA", t1_qb: "Viteza IA", t1_qc: "Culoarea IA", t1_qd: "Costurile IA",
    t1_l1: "Echitate", t1_r1: "Tratament corect", t1_l2: "Transparență", t1_r2: "Să știm cum decide", t1_l3: "Siguranță", t1_r3: "Să nu rănească pe nimeni",
    t2_title: "Prejudecăți (Bias)", t2_text: "Dacă o IA învață cu date părtinitoare, poate dezvolta prejudecăți.", t2_inst: "Completează spațiul liber:", t2_h1: "Informații unilaterale.", t2_h2: "Erori în date.", t2_q: "Ce este un bias în IA?", t2_qa: "O prejudecată/eroare", t2_qb: "O baterie nouă", t2_qc: "Un ventilator zgomotos", t2_qd: "O imagine clară",
    t2_sent: "IA este la fel de bună ca ___ din care învață.", t2_qa2: "datele", t2_qb2: "cablurile", t2_qc2: "mufele", t2_qd2: "șoarecii",
    t3_title: "Confidențialitate", t3_text: "IA are nevoie de date, dar trebuie să ne protejăm informațiile personale.", t3_inst: "Sortează informațiile:", t3_h1: "Ce e privat?", t3_h2: "Protecția datelor.", t3_q: "Ce nu ar trebui să-i spunem unei IA?", t3_qa: "Parolele", t3_qb: "Vremea", t3_qc: "Culoarea preferată", t3_qd: "Capitala Perului",
    t3_bl1: "Date Private", t3_bl2: "Date Publice", t3_i1: "Adresa", t3_i2: "Vremea", t3_i3: "Număr telefon", t3_i4: "Capitale",
    t4_title: "IA și Meseriile", t4_text: "IA va schimba multe locuri de muncă, dar va crea și profesii noi.", t4_inst: "Pune propoziția în ordine:", t4_h1: "Piața muncii de mâine.", t4_h2: "Colaborare.", t4_q: "Ce se întâmplă cu meseriile din cauza IA?", t4_qa: "Se transformă", t4_qb: "Toate dispar", t4_qc: "Nu se întâmplă nimic", t4_qd: "Sunt interzise",
    t4_w1: "Oamenii", t4_w2: "și", t4_w3: "IA", t4_w4: "vor", t4_w5: "lucra", t4_w6: "împreună", t4_w7: "viitor.",
    t5_title: "Siguranța în IA", t5_text: "Oamenii de știință lucrează pentru ca sistemele IA să rămână mereu sub control.", t5_inst: "Evidențiază cuvântul pentru protecție:", t5_h1: "Evitarea pericolelor.", t5_h2: "Păstrarea controlului.", t5_q: "De ce este importantă siguranța IA?", t5_qa: "Pentru a evita erorile", t5_qb: "Pentru a juca mai rapid", t5_qc: "Pentru a picta mai colorat", t5_qd: "Pentru a fi mai zgomotoasă",
    t5_tk1: "Siguranța", t5_tk2: "înseamnă", t5_tk3: "că", t5_tk4: "IA", t5_tk5: "face", t5_tk6: "mereu", t5_tk7: "ceea", t5_tk8: "ce", t5_tk9: "vrem.",
    t6_title: "Testul Turing", t6_text: "Un test pentru a determina dacă o IA pare la fel de inteligentă ca un om.", t6_inst: "Numără subiecții testului:", t6_h1: "Om sau mașină?", t6_h2: "Cine răspunde?", t6_q: "Cine a inventat testul Turing?", t6_qa: "Alan Turing", t6_qb: "Albert Einstein", t6_qc: "Steve Jobs", t6_qd: "Bill Gates",
    t6_c: "3",
    t7_title: "IA Puternică (AGI)", t7_text: "AGI este o IA care ar putea învăța orice la fel de bine ca un om (încă nu există).", t7_inst: "Conectează tipurile:", t7_h1: "Azi vs. Mâine.", t7_h2: "Abilități.", t7_q: "Există AGI astăzi?", t7_qa: "Nu, doar IA slabă", t7_qb: "Da, peste tot", t7_qc: "Doar în filme", t7_qd: "Doar pe Marte",
    t7_l1: "IA Slabă", t7_r1: "Specializată (ex. Șah)", t7_l2: "IA Puternică", t7_r2: "Universală (ca omul)", t7_l3: "Azi", t7_r3: "IA Slabă",
    t8_title: "Mediul și IA", t8_text: "Antrenarea IA consumă multă energie și necesită răcire puternică.", t8_inst: "Completează spațiul liber:", t8_h1: "Consum de curent.", t8_h2: "Sustenabilitate.", t8_q: "Care este un dezavantaj al IA-urilor mari?", t8_qa: "Consum ridicat de energie", t8_qb: "Au nevoie de apă", t8_qc: "Sunt prea mici", t8_qd: "Nu fac zgomot",
    t8_sent: "Centrele de date IA au nevoie de multă ___.", t8_qa2: "energie", t8_qb2: "oxigen", t8_qc2: "lemn", t8_qd2: "hârtie",
    t9_title: "Responsabilitate", t9_text: "Dacă o IA face o greșeală, oamenii trebuie să decidă cine este responsabil.", t9_inst: "Sortează rolurile:", t9_h1: "Cine ce face?", t9_h2: "Decidenți.", t9_q: "Cine este responsabil pentru o IA?", t9_qa: "Dezvoltatorii și utilizatorii", t9_qb: "Calculatorul însuși", t9_qc: "Cablul de alimentare", t9_qd: "Nimeni",
    t9_bl1: "Creator", t9_bl2: "Utilizator", t9_i1: "Programator", t9_i2: "Client", t9_i3: "Antrenor IA", t9_i4: "Utilizator final",
    t10_title: "Fake News & IA", t10_text: "IA poate ajuta la găsirea minciunilor pe net, dar din păcate le poate și crea.", t10_inst: "Pune procesul în ordine:", t10_h1: "Găsește adevărul.", t10_h2: "Verifică info.", t10_q: "Ce sunt Fake News-urile?", t10_qa: "Știri false", t10_qb: "Știri noi", t10_qc: "Știri amuzante", t10_qd: "Știri scurte",
    t10_w1: "Verifică", t10_w2: "sursa", t10_w3: "înainte", t10_w4: "să", t10_w5: "crezi", t10_w6: "o", t10_w7: "știre.",
    t11_title: "Drepturi de autor", t11_text: "Cui îi aparține o imagine pictată de o IA? Aceasta este o întrebare juridică dificilă.", t11_inst: "Evidențiază cele două cuvinte: dreptul și posesia:", t11_h1: "Cui îi aparține?", t11_h2: "Drepturi.", t11_q: "Ce protejează drepturile de autor?", t11_qa: "Creațiile proprii", t11_qb: "Calculatoarele vechi", t11_qc: "Internetul", t11_qd: "Paginile goale",
    t11_tk1: "Acest", t11_tk2: "drept de autor", t11_tk3: "protejează", t11_tk4: "mereu", t11_tk5: "proprietatea", t11_tk6: "asupra", t11_tk7: "creațiilor.",
    t12_title: "Viziuni de viitor", t12_text: "Oamenii de știință speră ca IA să ajute la vindecarea bolilor și la salvarea climei.", t12_inst: "Numără stațiile de cercetare:", t12_h1: "Privire în viitor.", t12_h2: "Speranță.", t12_q: "Care este un scop al cercetării IA?", t12_qa: "Rezolvarea problemelor", t12_qb: "Înlocuirea oamenilor", t12_qc: "Ștergerea internetului", t12_qd: "Scumpirea tuturor lucrurilor",
    t12_c: "4",
    t13_title: "Cooperare Om-IA", t13_text: "În viitor, vom folosi IA ca pe un instrument pentru a ne extinde propriile abilități.", t13_inst: "Conectează echipele:", t13_h1: "Muncă în echipă.", t13_h2: "Completare.", t13_q: "Cum ar trebui să folosim IA?", t13_qa: "Ca un instrument inteligent", t13_qb: "Deloc", t13_qc: "Doar pentru joacă", t13_qd: "Ca înlocuitor",
    t13_l1: "Creativitate", t13_r1: "Om", t13_l2: "Putere de calcul", t13_r2: "IA", t13_l3: "Echipă", t13_r3: "Amândoi",
    t14_title: "Cetățenie digitală", t14_text: "Un bun cetățean digital folosește IA cu respect și nu răspândește minciuni.", t14_inst: "Completează spațiul liber:", t14_h1: "Comportament bun online.", t14_h2: "Viața digitală.", t14_q: "Ce caracterizează un bun cetățean digital?", t14_qa: "Onestitatea și respectul", t14_qb: "Mulți urmăritori", t14_qc: "Un PC scump", t14_qd: "Tastarea rapidă",
    t14_sent: "Trebuie să folosim IA cu ___.", t14_qa2: "responsabilitate", t14_qb2: "niciodată", t14_qc2: "secret", t14_qd2: "zgomot",
    t15_title: "Rezumat IA", t15_text: "IA este o tehnologie puternică care ne ajută dacă o folosim cu înțelepciune și prudență.", t15_inst: "Sortează trăsăturile IA:", t15_h1: "Ce am învățat?", t15_h2: "Șanse și riscuri.", t15_q: "Ce este cel mai important la IA?", t15_qa: "Omul păstrează controlul", t15_qb: "IA trebuie să aibă mereu dreptate", t15_qc: "Să fie colorată", t15_qd: "Să consume mult curent",
    t15_bl1: "Avantaje", t15_bl2: "Provocări", t15_i1: "Viteză", t15_i2: "Consum energie", t15_i3: "Cunoștințe", t15_i4: "Prejudecăți"
  }
};

export const INFO_K6_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🔒",label:"Private"},{emoji:"🌍",label:"Public"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👤", color: "#9E9E9E" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "👤", count: 3 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"🛠️",label:"Creators"},{emoji:"👤",label:"Users"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📰", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#673AB7" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6","t11_tk7"].filter(x=>x!==undefined), correctIndices: [1,4] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🔬", color: "#00BCD4" },
    interactive: { type: "tap-count", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", tapCount: { emoji: "🔬", count: 4 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"✅",label:"Benefits"},{emoji:"⚠️",label:"Challenges"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

