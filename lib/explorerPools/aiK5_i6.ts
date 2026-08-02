// @ts-nocheck
// lib/explorerPools/aiK5_i6.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Zukunft & Roboter",
    t1_title: "Arten von Robotern", t1_text: "Es gibt viele Roboter: von kleinen Saugern bis zu riesigen Roboterarmen in Fabriken.", t1_inst: "Ordne die Paare zu:", t1_h1: "Wo arbeiten sie?", t1_h2: "Aufgaben.", t1_q: "Welcher Roboter hilft im Haushalt?", t1_qa: "Saugroboter", t1_qb: "Mars-Rover", t1_qc: "Industrieroboter", t1_qd: "Spielzeugauto",
    t1_l1: "Haus", t1_r1: "Staubsaugen", t1_l2: "Fabrik", t1_r2: "Bauen", t1_l3: "Weltraum", t1_r3: "Erkunden",
    t2_title: "Industrieroboter", t2_text: "Diese Roboter sind sehr stark und bauen Autos oder verpacken Pakete unglaublich schnell.", t2_inst: "Sortiere in die Eimer:", t2_h1: "Stark und präzise.", t2_h2: "Fabrikarbeit.", t2_q: "Was ist ein Vorteil von Industrierobotern?", t2_qa: "Sie werden nie müde", t2_qb: "Sie essen gerne Pizza", t2_qc: "Sie machen gerne Witze", t2_qd: "Sie brauchen viel Schlaf",
    t2_bl1: "Roboter", t2_bl2: "Mensch", t2_i1: "24/7 arbeiten", t2_i2: "Braucht Pausen", t2_i3: "Extreme Präzision", t2_i4: "Hat Gefühle",
    t3_title: "Soziale Roboter", t3_text: "Soziale Roboter sind dafür da, mit Menschen zu sprechen und ihnen Gesellschaft zu leisten.", t3_inst: "Bringe die Wörter in Ordnung:", t3_h1: "Freundliche Helfer.", t3_h2: "Interaktion.", t3_q: "Wo findet man soziale Roboter?", t3_qa: "In Krankenhäusern oder Schulen", t3_qb: "Tief im Ozean", t3_qc: "In der Wüste", t3_qd: "In der Autowerkstatt",
    t3_w1: "Soziale", t3_w2: "Roboter", t3_w3: "können", t3_w4: "mit", t3_w5: "Menschen", t3_w6: "kommunizieren.", t3_w7: "",
    t4_title: "KI im Weltraum", t4_text: "Sonden und Rover nutzen KI, um fernen Planeten wie den Mars selbstständig zu erkunden.", t4_inst: "Fülle die Lücke aus:", t4_h1: "Weit weg von der Erde.", t4_h2: "Selbstständig lenken.", t4_q: "Warum brauchen Mars-Rover KI?", t4_qa: "Weil Signale zur Erde lange dauern", t4_qb: "Um Musik zu hören", t4_qc: "Weil sie einsam sind", t4_qd: "Um dort zu kochen",
    t4_sent: "Der Mars-Rover nutzt ___ zum Ausweichen.", t4_qa2: "KI", t4_qb2: "Luft", t4_qc2: "Wasser", t4_qd2: "Sprit",
    t5_title: "KI & Umwelt", t5_text: "KI hilft beim Umweltschutz, indem sie Energie spart oder Plastik im Meer erkennt.", t5_inst: "Markiere, was die Umwelt schützt:", t5_h1: "Grüne Technik.", t5_h2: "Schutz der Erde.", t5_q: "Wie hilft KI der Umwelt?", t5_qa: "Durch kluge Müllsortierung", t5_qb: "Durch mehr Stromverbrauch", t5_qc: "Durch laute Geräusche", t5_qd: "Gar nicht",
    t5_tk1: "KI", t5_tk2: "schützt", t5_tk3: "unsere", t5_tk4: "Umwelt", t5_tk5: "durch", t5_tk6: "effektive", t5_tk7: "Analysen.",
    t6_title: "Zukunfts-Jobs", t6_text: "In Zukunft wird es viele neue Jobs geben, bei denen man mit KI zusammenarbeitet.", t6_inst: "Ordne die Paare zu:", t6_h1: "Neue Arbeit.", t6_h2: "Mensch + KI.", t6_q: "Wer arbeitet mit KI?", t6_qa: "KI-Trainer", t6_qb: "Dinosaurier-Forscher", t6_qc: "Ritter", t6_qd: "Höhlenmensch",
    t6_l1: "Programm", t6_r1: "Entwickler", t6_l2: "Daten", t6_r2: "Analyst", t6_l3: "KI-Modell", t6_r3: "Trainer",
    t7_title: "Zusammenarbeit", t7_text: "Mensch und KI sind ein starkes Team: Der Mensch hat Ideen, die KI hilft bei der Umsetzung.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Teamwork.", t7_h2: "Gemeinsam stärker.", t7_q: "Was ist das beste Team?", t7_qa: "Mensch und KI zusammen", t7_qb: "Zwei Taschenrechner", t7_qc: "KI gegen Mensch", t7_qd: "Nur ein Computer",
    t7_sent: "Der Mensch gibt der KI ___.", t7_qa2: "Aufgaben", t7_qb2: "Schokolade", t7_qc2: "Schlaf", t7_qd2: "Träume",
    t8_title: "KI-Sicherheit", t8_text: "Es ist wichtig, dass wir KI-Systeme so bauen, dass sie immer sicher für uns sind.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Sicherheit zuerst.", t8_h2: "Was ist sicher?", t8_q: "Wie macht man KI sicher?", t8_qa: "Durch klare Regeln (Gesetze)", t8_qb: "Durch schnelles Rennen", t8_qc: "Gar nicht", t8_qd: "Indem man sie versteckt",
    t8_bl1: "Sicher", t8_bl2: "Unsicher", t8_i1: "Regelmäßige Prüfung", t8_i2: "Geheime Befehle", t8_i3: "Transparenz", t8_i4: "Unbekannte Herkunft",
    t9_title: "Privatsphäre", t9_text: "Wir müssen aufpassen, welche persönlichen Daten wir einer KI verraten.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Meine Daten.", t9_h2: "Vorsicht!", t9_q: "Was sollte man einer KI NICHT sagen?", t9_qa: "Passwörter und Adressen", t9_qb: "Die Lieblingsfarbe", t9_qc: "Das Lieblingsessen", t9_qd: "Den Namen des Haustiers",
    t9_w1: "Schütze", t9_w2: "deine", t9_w3: "privaten", t9_w4: "Daten", t9_w5: "vor", t9_w6: "fremden", t9_w7: "KIs.",
    t10_title: "Deepfakes", t10_text: "KI kann Videos und Stimmen so fälschen, dass sie täuschend echt aussehen.", t10_inst: "Markiere, was du bei einem Video tun sollst:", t10_h1: "Gefälscht!", t10_h2: "Nicht alles glauben.", t10_q: "Was ist ein Deepfake?", t10_qa: "Ein gefälschtes KI-Video", t10_qb: "Ein tiefes Loch", t10_qc: "Ein leckerer Kuchen", t10_qd: "Ein neues Handy",
    t10_tk1: "Hinterfrage", t10_tk2: "immer,", t10_tk3: "ob", t10_tk4: "ein", t10_tk5: "Video", t10_tk6: "echt", t10_tk7: "ist.",
    t11_title: "Kreative KI", t11_text: "KI kann Musik komponieren oder Bilder malen, aber die Inspiration kommt oft vom Menschen.", t11_inst: "Ordne die Paare zu:", t11_h1: "KI-Kunst.", t11_h2: "Formen der Kunst.", t11_q: "Was kann eine kreative KI?", t11_qa: "Neue Lieder schreiben", t11_qb: "Eis essen", t11_qc: "Fahrrad fahren", t11_qd: "Wütend werden",
    t11_l1: "Bild", t11_r1: "Malen", t11_l2: "Musik", t11_r2: "Komponieren", t11_l3: "Text", t11_r3: "Dichten",
    t12_title: "Barrierefreiheit", t12_text: "KI hilft Menschen mit Behinderungen, zum Beispiel durch Vorlesen oder Gebärdensprache-Übersetzung.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Hilfe für alle.", t12_h2: "Unterstützung.", t12_q: "Wem hilft KI?", t12_qa: "Menschen mit Sehschwäche", t12_qb: "Gummibärchen", t12_qc: "Steinen", t12_qd: "Büroklammern",
    t12_sent: "KI kann Texte für Blinde ___.", t12_qa2: "vorlesen", t12_qb2: "essen", t12_qc2: "verstecken", t12_qd2: "bemalen",
    t13_title: "KI & Schule", t13_text: "KI kann dir helfen, Sprachen zu lernen oder komplizierte Matheaufgaben zu verstehen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Lernen mit Technik.", t13_h2: "Schulhelfer.", t13_q: "Wie nutzt man KI in der Schule schlau?", t13_qa: "Als persönlichen Tutor", t13_qb: "Zum Abschreiben ohne Denken", t13_qc: "Um gar nichts zu machen", t13_qd: "Um die Lehrer zu ärgern",
    t13_bl1: "Sinnvoll", t13_bl2: "Nicht sinnvoll", t13_i1: "Fragen erklären lassen", t13_i2: "Hausaufgaben kopieren", t13_i3: "Vokabeln üben", t13_i4: "Tests fälschen",
    t14_title: "Globaler Einfluss", t14_text: "KI verändert die ganze Welt, von der Landwirtschaft bis zur Medizin.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Überall auf der Welt.", t14_h2: "Großer Wandel.", t14_q: "Was verändert KI?", t14_qa: "Wie wir leben und arbeiten", t14_qb: "Die Farbe des Himmels", t14_qc: "Die Form der Erde", t14_qd: "Gar nichts",
    t14_w1: "KI", t14_w2: "hat", t14_w3: "einen", t14_w4: "großen", t14_w5: "Einfluss", t14_w6: "auf", t14_w7: "unser Leben.",
    t15_title: "Deine Zukunft", t15_text: "Du bist die Zukunft! Lerne, wie man KI schlau und verantwortungsvoll nutzt.", t15_inst: "Markiere, was du mit KI tun sollst:", t15_h1: "Du bist dran.", t15_h2: "Sei bereit.", t15_q: "Was solltest du über KI lernen?", t15_qa: "Wie man sie sicher nutzt", t15_qb: "Wie man sie kaputt macht", t15_qc: "Dass man sie ignoriert", t15_qd: "Nichts, sie ist langweilig",
    t15_tk1: "Lerne", t15_tk2: "die", t15_tk3: "KI", t15_tk4: "zu", t15_tk5: "verstehen", t15_tk6: "und", t15_tk7: "mitzugestalten."
  },
  en: {
    explorer_title: "AI Explorer: Future & Robots",
    t1_title: "Types of Robots", t1_text: "There are many robots: from small vacuums to giant robot arms in factories.", t1_inst: "Match the pairs:", t1_h1: "Where do they work?", t1_h2: "Tasks.", t1_q: "Which robot helps in the household?", t1_qa: "Vacuum robot", t1_qb: "Mars rover", t1_qc: "Industrial robot", t1_qd: "Toy car",
    t1_l1: "Home", t1_r1: "Vacuuming", t1_l2: "Factory", t1_r2: "Building", t1_l3: "Space", t1_r3: "Exploring",
    t2_title: "Industrial Robots", t2_text: "These robots are very strong and build cars or pack boxes incredibly fast.", t2_inst: "Sort into buckets:", t2_h1: "Strong and precise.", t2_h2: "Factory work.", t2_q: "What is an advantage of industrial robots?", t2_qa: "They never get tired", t2_qb: "They like to eat pizza", t2_qc: "They like to tell jokes", t2_qd: "They need lots of sleep",
    t2_bl1: "Robot", t2_bl2: "Human", t2_i1: "Work 24/7", t2_i2: "Needs breaks", t2_i3: "Extreme precision", t2_i4: "Has feelings",
    t3_title: "Social Robots", t3_text: "Social robots are designed to talk to people and keep them company.", t3_inst: "Put the words in order:", t3_h1: "Friendly helpers.", t3_h2: "Interaction.", t3_q: "Where can you find social robots?", t3_qa: "In hospitals or schools", t3_qb: "Deep in the ocean", t3_qc: "In the desert", t3_qd: "In a car garage",
    t3_w1: "Social", t3_w2: "robots", t3_w3: "can", t3_w4: "communicate", t3_w5: "with", t3_w6: "humans.", t3_w7: "",
    t4_title: "AI in Space", t4_text: "Probes and rovers use AI to explore distant planets like Mars independently.", t4_inst: "Fill in the blank:", t4_h1: "Far away from Earth.", t4_h2: "Steer independently.", t4_q: "Why do Mars rovers need AI?", t4_qa: "Because signals to Earth take long", t4_qb: "To listen to music", t4_qc: "Because they are lonely", t4_qd: "To cook there",
    t4_sent: "The Mars rover uses ___ to avoid obstacles.", t4_qa2: "AI", t4_qb2: "air", t4_qc2: "water", t4_qd2: "fuel",
    t5_title: "AI & Environment", t5_text: "AI helps with environmental protection by saving energy or detecting plastic in the sea.", t5_inst: "Highlight what protects the environment:", t5_h1: "Green tech.", t5_h2: "Protecting Earth.", t5_q: "How does AI help the environment?", t5_qa: "Through smart waste sorting", t5_qb: "Through more power consumption", t5_qc: "Through loud noises", t5_qd: "It doesn't",
    t5_tk1: "AI", t5_tk2: "protects", t5_tk3: "our", t5_tk4: "environment", t5_tk5: "through", t5_tk6: "effective", t5_tk7: "analyses.",
    t6_title: "Future Jobs", t6_text: "In the future, there will be many new jobs where you work together with AI.", t6_inst: "Match the pairs:", t6_h1: "New work.", t6_h2: "Human + AI.", t6_q: "Who works with AI?", t6_qa: "AI trainer", t6_qb: "Dinosaur researcher", t6_qc: "Knight", t6_qd: "Caveman",
    t6_l1: "Program", t6_r1: "Developer", t6_l2: "Data", t6_r2: "Analyst", t6_l3: "AI model", t6_r3: "Trainer",
    t7_title: "Collaboration", t7_text: "Human and AI are a strong team: humans have ideas, AI helps with implementation.", t7_inst: "Fill in the blank:", t7_h1: "Teamwork.", t7_h2: "Stronger together.", t7_q: "What is the best team?", t7_qa: "Human and AI together", t7_qb: "Two calculators", t7_qc: "AI against human", t7_qd: "Just a computer",
    t7_sent: "The human gives the AI ___.", t7_qa2: "tasks", t7_qb2: "chocolate", t7_qc2: "sleep", t7_qd2: "dreams",
    t8_title: "AI Safety", t8_text: "It is important that we build AI systems so they are always safe for us.", t8_inst: "Sort into buckets:", t8_h1: "Safety first.", t8_h2: "What is safe?", t8_q: "How to make AI safe?", t8_qa: "Through clear rules (laws)", t8_qb: "Through fast running", t8_qc: "Not at all", t8_qd: "By hiding it",
    t8_bl1: "Safe", t8_bl2: "Unsafe", t8_i1: "Regular checkup", t8_i2: "Secret commands", t8_i3: "Transparency", t8_i4: "Unknown origin",
    t9_title: "Privacy", t9_text: "We must be careful about which personal data we reveal to an AI.", t9_inst: "Put the words in order:", t9_h1: "My data.", t9_h2: "Be careful!", t9_q: "What should you NOT tell an AI?", t9_qa: "Passwords and addresses", t9_qb: "Favorite color", t9_qc: "Favorite food", t9_qd: "Pet's name",
    t9_w1: "Protect", t9_w2: "your", t9_w3: "private", t9_w4: "data", t9_w5: "from", t9_w6: "unknown", t9_w7: "AIs.",
    t10_title: "Deepfakes", t10_text: "AI can fake videos and voices so they look deceptively real.", t10_inst: "Highlight what you should do with a video:", t10_h1: "Faked!", t10_h2: "Don't believe everything.", t10_q: "What is a deepfake?", t10_qa: "A fake AI video", t10_qb: "A deep hole", t10_qc: "A tasty cake", t10_qd: "A new phone",
    t10_tk1: "Question", t10_tk2: "whether", t10_tk3: "a", t10_tk4: "video", t10_tk5: "is", t10_tk6: "real.", t10_tk7: "",
    t11_title: "Creative AI", t11_text: "AI can compose music or paint pictures, but the inspiration often comes from humans.", t11_inst: "Match the pairs:", t11_h1: "AI art.", t11_h2: "Forms of art.", t11_q: "What can a creative AI do?", t11_qa: "Write new songs", t11_qb: "Eat ice cream", t11_qc: "Ride a bike", t11_qd: "Get angry",
    t11_l1: "Image", t11_r1: "Painting", t11_l2: "Music", t11_r2: "Composing", t11_l3: "Text", t11_r3: "Writing",
    t12_title: "Accessibility", t12_text: "AI helps people with disabilities, for example by reading aloud or sign language translation.", t12_inst: "Fill in the blank:", t12_h1: "Help for all.", t12_h2: "Support.", t12_q: "Who does AI help?", t12_qa: "People with visual impairment", t12_qb: "Gummy bears", t12_qc: "Stones", t12_qd: "Paper clips",
    t12_sent: "AI can ___ texts for the blind.", t12_qa2: "read aloud", t12_qb2: "eat", t12_qc2: "hide", t12_qd2: "paint",
    t13_title: "AI & School", t13_text: "AI can help you learn languages or understand complicated math problems.", t13_inst: "Sort into buckets:", t13_h1: "Learning with tech.", t13_h2: "School helper.", t13_q: "How to use AI smartly in school?", t13_qa: "As a personal tutor", t13_qb: "To copy without thinking", t13_qc: "To do nothing at all", t13_qd: "To annoy teachers",
    t13_bl1: "Useful", t13_bl2: "Not useful", t13_i1: "Getting questions explained", t13_i2: "Copying homework", t13_i3: "Practicing vocabulary", t13_i4: "Faking tests",
    t14_title: "Global Impact", t14_text: "AI is changing the whole world, from agriculture to medicine.", t14_inst: "Put the words in order:", t14_h1: "All over the world.", t14_h2: "Big change.", t14_q: "What does AI change?", t14_qa: "How we live and work", t14_qb: "The color of the sky", t14_qc: "The shape of the Earth", t14_qd: "Nothing at all",
    t14_w1: "AI", t14_w2: "has", t14_w3: "a", t14_w4: "big", t14_w5: "impact", t14_w6: "on", t14_w7: "our life.",
    t15_title: "Your Future", t15_text: "You are the future! Learn how to use AI smartly and responsibly.", t15_inst: "Highlight what you should do about AI:", t15_h1: "Your turn.", t15_h2: "Be ready.", t15_q: "What should you learn about AI?", t15_qa: "How to use it safely", t15_qb: "How to break it", t15_qc: "That you ignore it", t15_qd: "Nothing, it's boring",
    t15_tk1: "Learn", t15_tk2: "to", t15_tk3: "understand", t15_tk4: "and", t15_tk5: "help", t15_tk6: "shape", t15_tk7: "AI."
  },
  hu: {
    explorer_title: "MI Felfedező: Jövő & Robotok",
    t1_title: "Robottípusok", t1_text: "Sokféle robot létezik: a kis porszívóktól a hatalmas gyári robotkarokig.", t1_inst: "Párosítsd össze:", t1_h1: "Hol dolgoznak?", t1_h2: "Feladatok.", t1_q: "Melyik robot segít a háztartásban?", t1_qa: "Porszívó robot", t1_qb: "Mars-járó", t1_qc: "Ipari robot", t1_qd: "Játékautó",
    t1_l1: "Otthon", t1_r1: "Porszívózás", t1_l2: "Gyár", t1_r2: "Építés", t1_l3: "Világűr", t1_r3: "Felfedezés",
    t2_title: "Ipari robotok", t2_text: "Ezek a robotok nagyon erősek, autókat építenek vagy csomagokat pakolnak hihetetlen gyorsan.", t2_inst: "Válogasd szét:", t2_h1: "Erős és pontos.", t2_h2: "Gyári munka.", t2_q: "Mi az ipari robotok előnye?", t2_qa: "Soha nem fáradnak el", t2_qb: "Szeretnek pizzázni", t2_qc: "Szeretnek viccelődni", t2_qd: "Sok alvásra van szükségük",
    t2_bl1: "Robot", t2_bl2: "Ember", t2_i1: "24/7 munka", t2_i2: "Szünetre van szüksége", t2_i3: "Extra precizitás", t2_i4: "Vannak érzései",
    t3_title: "Szociális robotok", t3_text: "A szociális robotokat arra tervezték, hogy beszélgessenek az emberekkel és társaságot nyújtsanak.", t3_inst: "Tedd sorrendbe a szavakat:", t3_h1: "Barátságos segítők.", t3_h2: "Interakció.", t3_q: "Hol találkozhatsz szociális robotokkal?", t3_qa: "Kórházakban vagy iskolákban", t3_qb: "Mélyen az óceánban", t3_qc: "A sivatagban", t3_qd: "Autószervizben",
    t3_w1: "A szociális", t3_w2: "robotok", t3_w3: "tudnak", t3_w4: "kommunikálni", t3_w5: "az", t3_w6: "emberekkel.", t3_w7: "",
    t4_title: "MI az űrben", t4_text: "A szondák és roverek MI-t használnak, hogy önállóan fedezzenek fel távoli bolygókat.", t4_inst: "Töltsd ki a hiányt:", t4_h1: "Messze a Földtől.", t4_h2: "Önálló irányítás.", t4_q: "Miért kell a Mars-járónak MI?", t4_qa: "Mert a jelek lassan érnek a Földre", t4_qb: "Hogy zenét hallgasson", t4_qc: "Mert magányos", t4_qd: "Hogy ott főzzön",
    t4_sent: "A Mars-járó ___ használ az akadályok elkerülésére.", t4_qa2: "MI-t", t4_qb2: "levegőt", t4_qc2: "vizet", t4_qd2: "üzemanyagot",
    t5_title: "MI & Környezet", t5_text: "A MI segíti a környezetvédelmet az energia megtakarításával vagy a tengeri műanyag észlelésével.", t5_inst: "Jelöld meg, mi védi a környezetet:", t5_h1: "Zöld technika.", t5_h2: "A Föld védelme.", t5_q: "Hogyan segíti a MI a környezetet?", t5_qa: "Okos hulladékválogatással", t5_qb: "Több áramfogyasztással", t5_qc: "Hangos zajokkal", t5_qd: "Sehogy",
    t5_tk1: "A MI", t5_tk2: "védi", t5_tk3: "a", t5_tk4: "környezetünket", t5_tk5: "okos", t5_tk6: "elemzésekkel.", t5_tk7: "",
    t6_title: "Jövőbeli munkák", t6_text: "A jövőben sok olyan új munka lesz, ahol MI-vel dolgozunk majd együtt.", t6_inst: "Párosítsd össze:", t6_h1: "Új munka.", t6_h2: "Ember + MI.", t6_q: "Ki dolgozik MI-vel?", t6_qa: "MI-tréner", t6_qb: "Dinoszaurusz-kutató", t6_qc: "Lovag", t6_qd: "Ősember",
    t6_l1: "Program", t6_r1: "Fejlesztő", t6_l2: "Adat", t6_r2: "Elemző", t6_l3: "MI-modell", t6_r3: "Tréner",
    t7_title: "Együttműködés", t7_text: "Az ember és a MI erős csapat: az embernek ötletei vannak, a MI segít a megvalósításban.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Csapatmunka.", t7_h2: "Együtt erősebbek.", t7_q: "Mi a legjobb csapat?", t7_qa: "Ember és MI együtt", t7_qb: "Két számológép", t7_qc: "MI az ember ellen", t7_qd: "Csak egy gép",
    t7_sent: "Az ember ___ ad a MI-nek.", t7_qa2: "feladatokat", t7_qb2: "csokit", t7_qc2: "alvást", t7_qd2: "álmokat",
    t8_title: "MI biztonság", t8_text: "Fontos, hogy a MI rendszereket úgy építsük meg, hogy mindig biztonságosak legyenek számunkra.", t8_inst: "Válogasd szét:", t8_h1: "Biztonság az első.", t8_h2: "Mi biztonságos?", t8_q: "Hogyan lesz a MI biztonságos?", t8_qa: "Világos szabályokkal (törvényekkel)", t8_qb: "Gyors futással", t8_qc: "Sehogy", t8_qd: "Elrejtéssel",
    t8_bl1: "Biztonságos", t8_bl2: "Veszélyes", t8_i1: "Rendszeres ellenőrzés", t8_i2: "Titkos parancsok", t8_i3: "Átláthatóság", t8_i4: "Ismeretlen eredet",
    t9_title: "Adatvédelem", t9_text: "Vigyáznunk kell, milyen személyes adatokat árulunk el egy MI-nek.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Az adataim.", t9_h2: "Vigyázat!", t9_q: "Mit NE mondj el egy MI-nek?", t9_qa: "Jelszavakat és címeket", t9_qb: "Kedvenc színed", t9_qc: "Kedvenc ételed", t9_qd: "A kisállatod nevét",
    t9_w1: "Védd", t9_w2: "meg", t9_w3: "a", t9_w4: "magánadataidat", t9_w5: "az", t9_w6: "ismeretlen", t9_w7: "MI-ktől.",
    t10_title: "Deepfakes", t10_text: "A MI képes olyan videókat és hangokat hamisítani, amik megtévesztően valódinak tűnnek.", t10_inst: "Jelöld meg, mit kell tenned egy videóval:", t10_h1: "Hamisítvány!", t10_h2: "Ne higgy el mindent.", t10_q: "Mi az a deepfake?", t10_qa: "Hamisított MI-videó", t10_qb: "Egy mély lyuk", t10_qc: "Egy finom süti", t10_qd: "Egy új telefon",
    t10_tk1: "Kérdőjelezd", t10_tk2: "meg,", t10_tk3: "valódi-e", t10_tk4: "a", t10_tk5: "videó.", t10_tk6: "", t10_tk7: "",
    t11_title: "Kreatív MI", t11_text: "A MI tud zenét szerezni vagy képeket festeni, de az ihlet gyakran az embertől jön.", t11_inst: "Párosítsd össze:", t11_h1: "MI-művészet.", t11_h2: "A művészet formái.", t11_q: "Mit tud egy kreatív MI?", t11_qa: "Új dalokat írni", t11_qb: "Fagyit enni", t11_qc: "Biciklizni", t11_qd: "Mérges lenni",
    t11_l1: "Kép", t11_r1: "Festés", t11_l2: "Zene", t11_r2: "Szerzés", t11_l3: "Szöveg", t11_r3: "Költés",
    t12_title: "Akadálymentesség", t12_text: "A MI segít a fogyatékkal élőknek, például felolvasással vagy jelnyelvi fordítással.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Segítség mindenkinek.", t12_h2: "Támogatás.", t12_q: "Kinek segít a MI?", t12_qa: "Gyengénlátóknak", t12_qb: "Gumimacik", t12_qc: "Kövek", t12_qd: "Gemkapcsok",
    t12_sent: "A MI fel tudja ___ a szövegeket a vakoknak.", t12_qa2: "olvasni", t12_qb2: "enni", t12_qc2: "rejteni", t12_qd2: "festeni",
    t13_title: "MI & Iskola", t13_text: "A MI segíthet nyelveket tanulni vagy bonyolult matekfeladatokat megérteni.", t13_inst: "Válogasd szét:", t13_h1: "Tanulás technikával.", t13_h2: "Iskolai segítő.", t13_q: "Hogyan használd okosan a MI-t az iskolában?", t13_qa: "Személyes tanárként", t13_qb: "Gondolkodás nélküli másoláshoz", t13_qc: "Hogy semmit ne csinálj", t13_qd: "Hogy bosszantsd a tanárokat",
    t13_bl1: "Hasznos", t13_bl2: "Nem hasznos", t13_i1: "Kérdéseket elmagyaráztatni", t13_i2: "Házit lemásolni", t13_i3: "Szavakat gyakorolni", t13_i4: "Dolgozatot hamisítani",
    t14_title: "Globális hatás", t14_text: "A MI az egész világot megváltoztatja, a mezőgazdaságtól az orvoslásig.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mindenhol a világon.", t14_h2: "Nagy változás.", t14_q: "Mit változtat meg a MI?", t14_qa: "Ahogyan élünk és dolgozunk", t14_qb: "Az ég színét", t14_qc: "A Föld alakját", t14_qd: "Semmit",
    t14_w1: "A MI", t14_w2: "nagy", t14_w3: "hatással", t14_w4: "van", t14_w5: "az", t14_w6: "egész", t14_w7: "életünkre.",
    t15_title: "A te jövőd", t15_text: "Te vagy a jövő! Tanuld meg, hogyan használd a MI-t okosan és felelősségteljesen.", t15_inst: "Jelöld meg, mit kell tenned a MI-vel:", t15_h1: "Te jössz.", t15_h2: "Légy kész.", t15_q: "Mit kellene megtanulnod a MI-ről?", t15_qa: "Hogyan használd biztonságosan", t15_qb: "Hogyan tedd tönkre", t15_qc: "Hogy figyelmen kívül hagyd", t15_qd: "Semmit, unalmas",
    t15_tk1: "Tanuld", t15_tk2: "megérteni", t15_tk3: "és", t15_tk4: "alakítani", t15_tk5: "a", t15_tk6: "MI-t.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Explorator IA: Viitor & Roboți",
    t1_title: "Tipuri de roboți", t1_text: "Există mulți roboți: de la aspiratoare mici până la brațe robotice uriașe în fabrici.", t1_inst: "Potrivește perechile:", t1_h1: "Unde lucrează?", t1_h2: "Sarcini.", t1_q: "Care robot ajută în gospodărie?", t1_qa: "Robot aspirator", t1_qb: "Mars rover", t1_qc: "Robot industrial", t1_qd: "Mașinuță de jucărie",
    t1_l1: "Acasă", t1_r1: "Aspirare", t1_l2: "Fabrică", t1_r2: "Construcție", t1_l3: "Spațiu", t1_r3: "Explorare",
    t2_title: "Roboți industriali", t2_text: "Acești roboți sunt foarte puternici și construiesc mașini sau împachetează cutii incredibil de rapid.", t2_inst: "Sortează în găleți:", t2_h1: "Puternic și precis.", t2_h2: "Muncă în fabrică.", t2_q: "Care este un avantaj al roboților industriali?", t2_qa: "Nu obosesc niciodată", t2_qb: "Le place să mănânce pizza", t2_qc: "Le place să spună glume", t2_qd: "Au nevoie de mult somn",
    t2_bl1: "Robot", t2_bl2: "Om", t2_i1: "Muncă 24/7", t2_i2: "Are nevoie de pauze", t2_i3: "Precizie extremă", t2_i4: "Are sentimente",
    t3_title: "Roboți sociali", t3_text: "Roboții sociali sunt proiectați să vorbească cu oamenii și să le țină companie.", t3_inst: "Pune cuvintele în ordine:", t3_h1: "Ajutoare prietenoase.", t3_h2: "Interacțiune.", t3_q: "Unde poți găsi roboți sociali?", t3_qa: "În spitale sau școli", t3_qb: "Adânc în ocean", t3_qc: "În deșert", t3_qd: "Într-un service auto",
    t3_w1: "Roboții", t3_w2: "sociali", t3_w3: "pot", t3_w4: "comunica", t3_w5: "cu", t3_w6: "oamenii.", t3_w7: "",
    t4_title: "IA în spațiu", t4_text: "Sondele și roverele folosesc IA pentru a explora planete îndepărtate ca Marte independent.", t4_inst: "Completează spațiul liber:", t4_h1: "Departe de Pământ.", t4_h2: "Conducere independentă.", t4_q: "De ce au roverele de pe Marte nevoie de IA?", t4_qa: "Pentru că semnalele către Pământ durează mult", t4_qb: "Să asculte muzică", t4_qc: "Pentru că sunt singuri", t4_qd: "Să gătească acolo",
    t4_sent: "Roverul de pe Marte folosește ___ pentru a evita obstacolele.", t4_qa2: "IA", t4_qb2: "aer", t4_qc2: "apă", t4_qd2: "combustibil",
    t5_title: "IA și mediul", t5_text: "IA ajută la protecția mediului prin economisirea energiei sau detectarea plasticului în mare.", t5_inst: "Evidențiază ce protejează mediul:", t5_h1: "Tehnologie verde.", t5_h2: "Protejarea Pământului.", t5_q: "Cum ajută IA mediul?", t5_qa: "Prin sortarea inteligentă a deșeurilor", t5_qb: "Prin consum mai mare de curent", t5_qc: "Prin zgomote puternice", t5_qd: "Deloc",
    t5_tk1: "IA", t5_tk2: "protejează", t5_tk3: "mediul", t5_tk4: "nostru", t5_tk5: "prin", t5_tk6: "analize", t5_tk7: "eficiente.",
    t6_title: "Joburi de viitor", t6_text: "În viitor, vor exista multe joburi noi unde vei lucra împreună cu IA.", t6_inst: "Potrivește perechile:", t6_h1: "Muncă nouă.", t6_h2: "Om + IA.", t6_q: "Cine lucrează cu IA?", t6_qa: "Antrenor IA", t6_qb: "Cercetător dinozauri", t6_qc: "Cavaler", t6_qd: "Om al peșterii",
    t6_l1: "Program", t6_r1: "Dezvoltator", t6_l2: "Date", t6_r2: "Analist", t6_l3: "Model IA", t6_r3: "Antrenor",
    t7_title: "Colaborare", t7_text: "Omul și IA sunt o echipă puternică: omul are ideile, IA ajută la implementare.", t7_inst: "Completează spațiul liber:", t7_h1: "Muncă în echipă.", t7_h2: "Mai puternici împreună.", t7_q: "Care este cea mai bună echipă?", t7_qa: "Omul și IA împreună", t7_qb: "Două calculatoare", t7_qc: "IA împotriva omului", t7_qd: "Doar un computer",
    t7_sent: "Omul îi dă IA ___.", t7_qa2: "sarcini", t7_qb2: "ciocolată", t7_qc2: "somn", t7_qd2: "visuri",
    t8_title: "Siguranța IA", t8_text: "Este important să construim sisteme IA astfel încât să fie mereu sigure pentru noi.", t8_inst: "Sortează în găleți:", t8_h1: "Siguranța pe primul loc.", t8_h2: "Ce este sigur?", t8_q: "Cum facem IA sigură?", t8_qa: "Prin reguli clare (legi)", t8_qb: "Prin fugă rapidă", t8_qc: "Deloc", t8_qd: "Ascunzând-o",
    t8_bl1: "Sigur", t8_bl2: "Nesigur", t8_i1: "Verificare regulată", t8_i2: "Comenzi secrete", t8_i3: "Transparență", t8_i4: "Origine necunoscută",
    t9_title: "Confidențialitate", t9_text: "Trebuie să avem grijă ce date personale dezvăluim unei IA.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Datele mele.", t9_h2: "Atenție!", t9_q: "Ce NU ar trebui să îi spui unei IA?", t9_qa: "Parole și adrese", t9_qb: "Culoarea preferată", t9_qc: "Mâncarea preferată", t9_qd: "Numele animalului",
    t9_w1: "Protejează-ți", t9_w2: "datele", t9_w3: "private", t9_w4: "de", t9_w5: "IA-urile", t9_w6: "necunoscute.", t9_w7: "",
    t10_title: "Deepfakes", t10_text: "IA poate falsifica videoclipuri și voci astfel încât să pară incredibil de reale.", t10_inst: "Evidențiază ce trebuie să faci cu un video:", t10_h1: "Falsificat!", t10_h2: "Nu crede totul.", t10_q: "Ce este un deepfake?", t10_qa: "Un video IA falsificat", t10_qb: "O groapă adâncă", t10_qc: "O prăjitură gustoasă", t10_qd: "Un telefon nou",
    t10_tk1: "Întreabă-te", t10_tk2: "mereu", t10_tk3: "dacă", t10_tk4: "un", t10_tk5: "video", t10_tk6: "este", t10_tk7: "real.",
    t11_title: "IA creativă", t11_text: "IA poate compune muzică sau picta tablouri, dar inspirația vine adesea de la om.", t11_inst: "Potrivește perechile:", t11_h1: "Artă IA.", t11_h2: "Forme de artă.", t11_q: "Ce poate face o IA creativă?", t11_qa: "Să scrie cântece noi", t11_qb: "Să mănânce înghețată", t11_qc: "Să meargă cu bicicleta", t11_qd: "Să se enerveze",
    t11_l1: "Imagine", t11_r1: "Pictură", t11_l2: "Muzică", t11_r2: "Compunere", t11_l3: "Text", t11_r3: "Poezie",
    t12_title: "Accesibilitate", t12_text: "IA ajută persoanele cu dizabilități, de exemplu prin citire cu voce tare sau traducerea limbajului semnelor.", t12_inst: "Completează spațiul liber:", t12_h1: "Ajutor pentru toți.", t12_h2: "Sprijin.", t12_q: "Pe cine ajută IA?", t12_qa: "Persoanele cu deficiențe de vedere", t12_qb: "Ursuleți gumați", t12_qc: "Pietre", t12_qd: "Agrafe de birou",
    t12_sent: "IA poate ___ texte pentru nevăzători.", t12_qa2: "citi", t12_qb2: "mânca", t12_qc2: "ascunde", t12_qd2: "picta",
    t13_title: "IA & Școala", t13_text: "IA te poate ajuta să înveți limbi străine sau să înțelegi probleme grele de matematică.", t13_inst: "Sortează în găleți:", t13_h1: "Învățare cu tehnologie.", t13_h2: "Ajutor școlar.", t13_q: "Cum folosești IA inteligent la școală?", t13_qa: "Ca tutore personal", t13_qb: "Pentru a copia fără să gândești", t13_qc: "Pentru a nu face nimic", t13_qd: "Pentru a enerva profesorii",
    t13_bl1: "Util", t13_bl2: "Nu este util", t13_i1: "Să-ți explice întrebări", t13_i2: "Să copiezi temele", t13_i3: "Să exersezi cuvinte", t13_i4: "Să falsifici teste",
    t14_title: "Impact global", t14_text: "IA schimbă întreaga lume, de la agricultură până la medicină.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Peste tot în lume.", t14_h2: "Schimbare mare.", t14_q: "Ce schimbă IA?", t14_qa: "Cum trăim și muncim", t14_qb: "Culoarea cerului", t14_qc: "Forma Pământului", t14_qd: "Nimic",
    t14_w1: "IA", t14_w2: "are", t14_w3: "un", t14_w4: "impact", t14_w5: "mare", t14_w6: "asupra", t14_w7: "vieții noastre.",
    t15_title: "Viitorul tău", t15_text: "Tu ești viitorul! Învață cum să folosești IA inteligent și responsabil.", t15_inst: "Evidențiază ce trebuie să faci cu IA:", t15_h1: "E rândul tău.", t15_h2: "Fii pregătit.", t15_q: "Ce ar trebui să înveți despre IA?", t15_qa: "Cum să o folosești în siguranță", t15_qb: "Cum să o strici", t15_qc: "Să o ignori", t15_qd: "Nimic, e plictisitoare",
    t15_tk1: "Învață", t15_tk2: "să", t15_tk3: "înțelegi", t15_tk4: "și", t15_tk5: "să", t15_tk6: "modelezi", t15_tk7: "IA."
  }
};

export const INFO_K5_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "icon-grid", items: [{emoji:"🏗️",label:"Robot"},{emoji:"🧘",label:"Human"}] },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id:"b1",label:"t2_bl1"},{id:"b2",label:"t2_bl2"}], items: [{text:"t2_i1",bucketId:"b1"},{text:"t2_i2",bucketId:"b2"},{text:"t2_i3",bucketId:"b1"},{text:"t2_i4",bucketId:"b2"}] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#8BC34A" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🤜🤛", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🛡️",label:"Safe"},{emoji:"⚠️",label:"Danger"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🕵️", color: "#212121" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "♿", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"✅",label:"Useful"},{emoji:"❌",label:"Other"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#009688" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "✨", color: "#FFEB3B" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

