import type { AiTestDiagramFamily, AiTestDiagramId } from "@/components/ai-test-visual/AiTestDiagrams";

export type AiVisualLang = "de" | "hu" | "ro" | "en";
type Text = Record<AiVisualLang, string>;
const t = (de: string, hu: string, ro: string, en: string): Text => ({ de, hu, ro, en });
export function aiVisualLang(lang?: string): AiVisualLang { return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de"; }

type Base = { id: AiTestDiagramId; family: AiTestDiagramFamily; grade: 5 | 6 | 7 | 8; title: Text; clue: Text };
export type AiMission = Base & (
  | { mode: "choice"; answers: [Text, Text, Text, Text] }
  | { mode: "order"; stages: [Text, Text, Text, Text] }
);
const c = (id: AiTestDiagramId, family: AiTestDiagramFamily, grade: 5 | 6 | 7 | 8, title: Text, clue: Text, answers: [Text, Text, Text, Text]): AiMission => ({ id, family, grade, title, clue, mode: "choice", answers });
const o = (id: AiTestDiagramId, family: AiTestDiagramFamily, grade: 5 | 6 | 7 | 8, title: Text, clue: Text, stages: [Text, Text, Text, Text]): AiMission => ({ id, family, grade, title, clue, mode: "order", stages });

export const AI_MISSIONS: AiMission[] = [
  c("labelled-examples", "data", 5,
    t("Lernen mit Beispielen", "Tanulás példákból", "Învățarea din exemple", "Learning from examples"),
    t("Bilder erhalten Namen, bevor das Modell Muster findet.", "A képek címkéket kapnak, mielőtt a modell mintákat keres.", "Imaginile primesc etichete înainte ca modelul să caute tipare.", "Images receive labels before the model finds patterns."),
    [t("beschriftete Trainingsdaten", "címkézett tanítóadatok", "date de antrenare etichetate", "labelled training data"), t("zufällige Passwörter", "véletlen jelszavak", "parole aleatorii", "random passwords"), t("nur ein Beispiel", "csak egy példa", "un singur exemplu", "one example only"), t("keine Daten", "semmilyen adat", "fără date", "no data")]),
  o("robot-sensors", "model", 5,
    t("Ein Roboter reagiert", "A robot reagál", "Un robot reacționează", "A robot reacts"),
    t("Ordne den Weg von der Umgebung bis zur Bewegung.", "Rendezd a folyamatot a környezettől a mozgásig.", "Ordonează traseul de la mediu la mișcare.", "Order the path from the environment to movement."),
    [t("Sensor misst", "az érzékelő mér", "senzorul măsoară", "sensor measures"), t("Programm wertet aus", "a program kiértékel", "programul analizează", "program analyses"), t("Entscheidung entsteht", "döntés születik", "se ia o decizie", "decision is made"), t("Motor bewegt sich", "a motor elmozdul", "motorul se mișcă", "motor moves")]),
  o("chatbot-flow", "model", 5,
    t("Gespräch mit einem Chatbot", "Beszélgetés egy chatbottal", "Conversație cu un chatbot", "Talking to a chatbot"),
    t("Ordne eine verantwortungsvolle Anfrage.", "Rendezd egy felelős kérés lépéseit.", "Ordonează pașii unei solicitări responsabile.", "Order a responsible request."),
    [t("klare Frage schreiben", "világos kérdés írása", "scrie o întrebare clară", "write a clear question"), t("Antwort lesen", "válasz elolvasása", "citește răspunsul", "read the answer"), t("wichtige Aussage prüfen", "fontos állítás ellenőrzése", "verifică afirmația importantă", "check important claim"), t("erst dann verwenden", "csak ezután használd", "abia apoi folosește", "use only afterwards")]),
  c("image-prompt", "model", 5,
    t("Ein gutes Bild-Prompt", "Jó képgeneráló prompt", "Un prompt bun pentru imagine", "A good image prompt"),
    t("Welche Angabe hilft der Bild-KI am meisten?", "Melyik leírás segíti legjobban a képalkotó MI-t?", "Care descriere ajută cel mai mult IA pentru imagini?", "Which description helps image AI most?"),
    [t("Motiv, Stil, Licht und Perspektive", "téma, stílus, fény és nézőpont", "subiect, stil, lumină și perspectivă", "subject, style, light and viewpoint"), t("mach etwas", "csinálj valamit", "fă ceva", "make something"), t("nur eine Farbe", "csak egy szín", "doar o culoare", "one colour only"), t("kein Hinweis", "semmilyen útmutatás", "nicio indicație", "no guidance")]),
  o("recommendation-loop", "data", 5,
    t("Wie Empfehlungen entstehen", "Hogyan születik az ajánlás", "Cum apar recomandările", "How recommendations appear"),
    t("Ordne den vereinfachten Kreislauf.", "Rendezd az egyszerűsített kört.", "Ordonează ciclul simplificat.", "Order the simplified loop."),
    [t("Nutzung beobachten", "használat megfigyelése", "observă utilizarea", "observe usage"), t("Vorlieben schätzen", "érdeklődés becslése", "estimează preferințele", "estimate preferences"), t("Inhalte vorschlagen", "tartalom ajánlása", "recomandă conținut", "recommend content"), t("Reaktion lernen", "reakcióból tanulás", "învață din reacție", "learn from reaction")]),
  c("privacy-shield", "safety", 5,
    t("Private Daten schützen", "Személyes adatok védelme", "Protejarea datelor personale", "Protecting personal data"),
    t("Ein unbekannter Chatbot fragt nach deiner Adresse.", "Egy ismeretlen chatbot elkéri a címedet.", "Un chatbot necunoscut îți cere adresa.", "An unknown chatbot asks for your address."),
    [t("nicht senden und Erwachsene fragen", "ne küldd el, kérdezz meg egy felnőttet", "nu o trimite și întreabă un adult", "do not send it and ask an adult"), t("sofort senden", "azonnal elküldeni", "trimite imediat", "send immediately"), t("öffentlich posten", "nyilvánosan közzétenni", "publică în mod public", "post publicly"), t("mit Passwort ergänzen", "jelszóval kiegészíteni", "adaugă și parola", "add your password")]),

  o("train-test-split", "data", 6,
    t("Training und Test", "Tanító- és tesztadat", "Date de antrenare și testare", "Training and test data"),
    t("Ordne die saubere Modellprüfung.", "Rendezd a helyes modellvizsgálatot.", "Ordonează evaluarea corectă a modelului.", "Order a sound model evaluation."),
    [t("Daten aufteilen", "adatok felosztása", "împarte datele", "split data"), t("mit Trainingsdaten lernen", "tanítás a tanítóadatokon", "antrenează pe datele de antrenare", "train on training data"), t("mit Testdaten prüfen", "ellenőrzés tesztadaton", "testează pe datele de testare", "evaluate on test data"), t("Ergebnis bewerten", "eredmény értékelése", "evaluează rezultatul", "assess result")]),
  c("neural-network", "model", 6,
    t("Schichten eines neuronalen Netzes", "Neurális háló rétegei", "Straturile unei rețele neuronale", "Neural-network layers"),
    t("Welche Reihenfolge ist richtig?", "Melyik a helyes sorrend?", "Care ordine este corectă?", "Which order is correct?"),
    [t("Eingabe, verborgene Schicht, Ausgabe", "bemenet, rejtett réteg, kimenet", "intrare, strat ascuns, ieșire", "input, hidden layer, output"), t("Ausgabe, Passwort, Eingabe", "kimenet, jelszó, bemenet", "ieșire, parolă, intrare", "output, password, input"), t("Datei, Ordner, Drucker", "fájl, mappa, nyomtató", "fișier, dosar, imprimantă", "file, folder, printer"), t("Sensor, Batterie, Bildschirm", "érzékelő, akkumulátor, képernyő", "senzor, baterie, ecran", "sensor, battery, screen")]),
  o("confusion-matrix", "data", 6,
    t("Vorhersagen vergleichen", "Előrejelzések összevetése", "Compararea predicțiilor", "Comparing predictions"),
    t("Ordne die Schritte zur Fehlermatrix.", "Rendezd a hibamátrix készítését.", "Ordonează pașii pentru matricea de confuzie.", "Order the steps for a confusion matrix."),
    [t("wahre Klasse notieren", "valódi osztály feljegyzése", "notează clasa reală", "record true class"), t("Vorhersage erzeugen", "előrejelzés készítése", "generează predicția", "make prediction"), t("beide vergleichen", "a kettő összevetése", "compară-le", "compare the two"), t("Treffer und Fehler zählen", "találatok és hibák számlálása", "numără reușitele și erorile", "count hits and errors")]),
  o("reinforcement-loop", "model", 6,
    t("Lernen durch Rückmeldung", "Tanulás visszajelzésből", "Învățare din feedback", "Learning from feedback"),
    t("Ordne einen Lernschritt des Agenten.", "Rendezd az ügynök egy tanulási lépését.", "Ordonează un pas de învățare al agentului.", "Order one learning step of the agent."),
    [t("Zustand beobachten", "állapot megfigyelése", "observă starea", "observe state"), t("Aktion wählen", "művelet választása", "alege acțiunea", "choose action"), t("Belohnung erhalten", "jutalom fogadása", "primește recompensa", "receive reward"), t("Strategie anpassen", "stratégia módosítása", "ajustează strategia", "adjust strategy")]),
  c("bias-balance", "safety", 6,
    t("Verzerrte Trainingsdaten", "Torzított tanítóadat", "Date de antrenare părtinitoare", "Biased training data"),
    t("Eine Gruppe fehlt fast vollständig im Datensatz.", "Egy csoport szinte teljesen hiányzik az adathalmazból.", "Un grup lipsește aproape complet din setul de date.", "One group is almost absent from the dataset."),
    [t("Ergebnisse können unfair werden", "az eredmény igazságtalan lehet", "rezultatele pot deveni nedrepte", "results may become unfair"), t("das Modell wird immer genauer", "a modell mindig pontosabb lesz", "modelul devine mereu mai precis", "the model always becomes more accurate"), t("der Speicher wird größer", "nagyobb lesz a tárhely", "memoria devine mai mare", "storage becomes larger"), t("die Daten schützen sich selbst", "az adatok megvédik magukat", "datele se protejează singure", "data protects itself")]),
  c("computer-vision", "model", 6,
    t("Objekte im Bild erkennen", "Tárgyfelismerés képen", "Recunoașterea obiectelor în imagine", "Recognising objects in an image"),
    t("Was markiert ein Begrenzungsrahmen?", "Mit jelöl a határoló téglalap?", "Ce marchează o casetă de delimitare?", "What does a bounding box mark?"),
    [t("Position und Größe eines Objekts", "egy tárgy helyét és méretét", "poziția și dimensiunea unui obiect", "an object's position and size"), t("Lautstärke des Videos", "a videó hangerejét", "volumul videoclipului", "video volume"), t("Passwort des Bildes", "a kép jelszavát", "parola imaginii", "image password"), t("Internetgeschwindigkeit", "internet-sebességet", "viteza internetului", "internet speed")]),

  c("transformer-attention", "model", 7,
    t("Attention im Transformer", "Attention a Transformerben", "Attention în Transformer", "Attention in a Transformer"),
    t("Wozu dienen stärkere Verbindungen?", "Mit jeleznek az erősebb kapcsolatok?", "Ce indică legăturile mai puternice?", "What do stronger links indicate?"),
    [t("welche Tokens füreinander wichtig sind", "mely tokenek fontosak egymásnak", "care tokenuri sunt importante unul pentru altul", "which tokens matter to one another"), t("wie laut ein Wort klingt", "milyen hangos egy szó", "cât de tare sună un cuvânt", "how loud a word sounds"), t("welche Farbe der Bildschirm hat", "milyen színű a képernyő", "ce culoare are ecranul", "the screen colour"), t("wie viel Akku übrig ist", "mennyi az akkumulátor töltése", "câtă baterie a rămas", "remaining battery")]),
  c("token-window", "model", 7,
    t("Begrenztes Kontextfenster", "Korlátozott kontextusablak", "Fereastră de context limitată", "Limited context window"),
    t("Was passiert mit sehr langem Text außerhalb des Fensters?", "Mi történik az ablakon kívül eső nagyon hosszú szöveggel?", "Ce se întâmplă cu textul foarte lung din afara ferestrei?", "What happens to very long text outside the window?"),
    [t("Das Modell kann ihn nicht gleichzeitig berücksichtigen", "a modell nem tudja egyszerre figyelembe venni", "modelul nu îl poate lua în calcul simultan", "the model cannot consider it at the same time"), t("Er wird automatisch wahr", "automatikusan igazzá válik", "devine automat adevărat", "it automatically becomes true"), t("Er lädt den Akku", "feltölti az akkumulátort", "încarcă bateria", "it charges the battery"), t("Er wird zu einem Bild", "képpé alakul", "devine imagine", "it becomes an image")]),
  o("rlhf-cycle", "model", 7,
    t("RLHF vereinfacht", "Az RLHF egyszerűsítve", "RLHF simplificat", "RLHF simplified"),
    t("Ordne den Rückmeldungszyklus.", "Rendezd a visszajelzési ciklust.", "Ordonează ciclul de feedback.", "Order the feedback cycle."),
    [t("Modell erzeugt Antworten", "a modell válaszokat készít", "modelul produce răspunsuri", "model produces answers"), t("Menschen vergleichen sie", "emberek összehasonlítják", "oamenii le compară", "people compare them"), t("Belohnungsmodell lernt", "a jutalmazó modell tanul", "modelul de recompensă învață", "reward model learns"), t("Sprachmodell wird angepasst", "a nyelvi modellt finomhangolják", "modelul lingvistic este ajustat", "language model is adjusted")]),
  o("deepfake-check", "safety", 7,
    t("Ein verdächtiges Video prüfen", "Gyanús videó ellenőrzése", "Verificarea unui videoclip suspect", "Checking a suspicious video"),
    t("Ordne eine sinnvolle Prüfung.", "Rendezd az ésszerű ellenőrzést.", "Ordonează o verificare rezonabilă.", "Order a sensible check."),
    [t("Originalquelle suchen", "eredeti forrás keresése", "caută sursa originală", "find original source"), t("Bild und Ton auf Brüche prüfen", "kép- és hanghibák vizsgálata", "verifică rupturile de imagine și sunet", "check image and audio inconsistencies"), t("zweite seriöse Quelle vergleichen", "másik hiteles forrás összevetése", "compară cu o a doua sursă sigură", "compare a second reliable source"), t("erst dann teilen", "csak ezután oszd meg", "abia apoi distribuie", "share only afterwards")]),
  c("ai-act-risk", "society", 7,
    t("Risikostufen im EU AI Act", "Kockázati szintek az EU MI-rendeletben", "Niveluri de risc în Actul UE privind IA", "Risk levels in the EU AI Act"),
    t("Welche Anwendung gilt typischerweise als hochriskant?", "Melyik alkalmazás számít jellemzően magas kockázatúnak?", "Care aplicație este considerată de obicei cu risc ridicat?", "Which application is typically high-risk?"),
    [t("KI zur Bewerberauswahl", "MI az állásjelöltek kiválasztására", "IA pentru selectarea candidaților", "AI for selecting job applicants"), t("Filter für Katzenohren", "macskafüles képszűrő", "filtru cu urechi de pisică", "cat-ear photo filter"), t("Schachgegner im Spiel", "sakkellenfél egy játékban", "adversar de șah într-un joc", "chess opponent in a game"), t("automatische Bildschirmfarbe", "automatikus képernyőszín", "culoare automată a ecranului", "automatic screen colour")]),
  o("data-center-energy", "society", 7,
    t("Energiebedarf senken", "Energiaigény csökkentése", "Reducerea consumului de energie", "Reducing energy use"),
    t("Ordne einen Verbesserungszyklus im Rechenzentrum.", "Rendezd egy adatközpont fejlesztési körét.", "Ordonează un ciclu de îmbunătățire în centrul de date.", "Order a data-centre improvement cycle."),
    [t("Verbrauch messen", "fogyasztás mérése", "măsoară consumul", "measure consumption"), t("heiße Stellen erkennen", "forró pontok felismerése", "identifică zonele fierbinți", "detect hot spots"), t("Kühlung optimieren", "hűtés optimalizálása", "optimizează răcirea", "optimise cooling"), t("Ergebnis erneut messen", "eredmény újramérése", "măsoară din nou rezultatul", "measure result again")]),

  c("agi-spectrum", "society", 8,
    t("Spezialisierte KI, AGI und ASI", "Szűk MI, AGI és ASI", "IA specializată, AGI și ASI", "Narrow AI, AGI and ASI"),
    t("Welche Aussage beschreibt AGI?", "Melyik állítás írja le az AGI-t?", "Care afirmație descrie AGI?", "Which statement describes AGI?"),
    [t("allgemeine Fähigkeiten auf menschlichem Niveau", "általános képességek emberi szinten", "abilități generale la nivel uman", "general abilities at human level"), t("nur eine eng begrenzte Aufgabe", "csak egy szűk feladat", "o singură sarcină îngustă", "one narrow task only"), t("übermenschlich in jedem Bereich", "minden területen emberfeletti", "supraumană în orice domeniu", "superhuman in every field"), t("ein schneller Taschenrechner", "egy gyors számológép", "un calculator rapid", "a fast calculator")]),
  o("alignment-target", "safety", 8,
    t("Ein Ziel sicher formulieren", "Biztonságos cél megfogalmazása", "Formularea sigură a unui obiectiv", "Formulating a safe objective"),
    t("Ordne die Schritte einer Alignment-Prüfung.", "Rendezd az illesztés vizsgálatának lépéseit.", "Ordonează pașii unei verificări de aliniere.", "Order the steps of an alignment check."),
    [t("menschlichen Zweck klären", "emberi cél tisztázása", "clarifică scopul uman", "clarify human purpose"), t("messbares Ziel entwerfen", "mérhető cél tervezése", "proiectează un obiectiv măsurabil", "design measurable objective"), t("Nebenwirkungen testen", "mellékhatások tesztelése", "testează efectele secundare", "test side effects"), t("Ziel und Schutzregeln verbessern", "cél és védőkorlátok javítása", "îmbunătățește obiectivul și limitele", "improve objective and safeguards")]),
  c("human-oversight", "safety", 8,
    t("Menschliche Aufsicht", "Emberi felügyelet", "Supraveghere umană", "Human oversight"),
    t("Was bedeutet Human-in-the-Loop bei einer wichtigen Entscheidung?", "Mit jelent a Human-in-the-Loop egy fontos döntésnél?", "Ce înseamnă Human-in-the-Loop într-o decizie importantă?", "What does Human-in-the-Loop mean in an important decision?"),
    [t("Ein Mensch kann prüfen und eingreifen", "egy ember ellenőrizhet és beavatkozhat", "un om poate verifica și interveni", "a human can review and intervene"), t("Die KI entscheidet immer allein", "az MI mindig egyedül dönt", "IA decide întotdeauna singură", "AI always decides alone"), t("Der Bildschirm bleibt eingeschaltet", "a képernyő bekapcsolva marad", "ecranul rămâne pornit", "the screen stays on"), t("Nur Menschen liefern Trainingsdaten", "csak emberek adnak tanítóadatot", "doar oamenii furnizează date", "only humans provide training data")]),
  c("trolley-choice", "society", 8,
    t("Moralisches Dilemma", "Erkölcsi dilemma", "Dilemă morală", "Moral dilemma"),
    t("Warum gibt es keine rein technische Lösung?", "Miért nincs pusztán műszaki megoldás?", "De ce nu există o soluție pur tehnică?", "Why is there no purely technical solution?"),
    [t("Werte geraten miteinander in Konflikt", "értékek kerülnek egymással konfliktusba", "valorile intră în conflict", "values conflict with one another"), t("der Computer rechnet zu langsam", "a számítógép túl lassan számol", "calculatorul calculează prea lent", "the computer calculates too slowly"), t("es fehlen Bildschirmfarben", "hiányoznak a képernyőszínek", "lipsesc culorile ecranului", "screen colours are missing"), t("die Strecke ist immer gleich", "az útvonal mindig azonos", "traseul este mereu identic", "the route is always the same")]),
  o("explainability-path", "safety", 8,
    t("Eine Entscheidung erklären", "Egy döntés magyarázata", "Explicarea unei decizii", "Explaining a decision"),
    t("Ordne den Weg einer nachvollziehbaren Kreditentscheidung.", "Rendezd egy követhető hiteldöntés útját.", "Ordonează traseul unei decizii de credit explicabile.", "Order the path of an explainable credit decision."),
    [t("relevante Eingaben erfassen", "fontos bemenetek rögzítése", "înregistrează intrările relevante", "record relevant inputs"), t("Modellentscheidung berechnen", "modelldöntés kiszámítása", "calculează decizia modelului", "compute model decision"), t("Einflussfaktoren anzeigen", "befolyásoló tényezők megjelenítése", "afișează factorii de influență", "show influencing factors"), t("menschliche Prüfung ermöglichen", "emberi felülvizsgálat biztosítása", "permite revizuirea umană", "enable human review")]),
  c("air-gap-box", "safety", 8,
    t("Physisch isoliertes System", "Fizikailag elszigetelt rendszer", "Sistem izolat fizic", "Physically isolated system"),
    t("Was ist der Zweck eines Air Gaps?", "Mi az air gap célja?", "Care este scopul unui air gap?", "What is the purpose of an air gap?"),
    [t("direkte Netzwerkwege trennen", "a közvetlen hálózati utak megszakítása", "separarea căilor directe de rețea", "separate direct network paths"), t("das Modell schneller machen", "a modell gyorsítása", "accelerarea modelului", "make the model faster"), t("mehr Trainingsdaten erzeugen", "több tanítóadat készítése", "generarea mai multor date", "create more training data"), t("alle Risiken vollständig beseitigen", "minden kockázat teljes megszüntetése", "eliminarea completă a tuturor riscurilor", "remove every risk completely")]),
];

export const AI_VISUAL_UI: Record<AiVisualLang, { label: string; order: string; tap: string; reset: string; correct: string; solution: string }> = {
  de: { label: "KI-Denkaufgabe", order: "Deine Reihenfolge", tap: "Tippe die Schritte in der richtigen Reihenfolge an.", reset: "Zurücksetzen", correct: "Richtig", solution: "Lösung" },
  hu: { label: "MI-gondolkodtató feladat", order: "A sorrended", tap: "Koppints a lépésekre a helyes sorrendben.", reset: "Visszaállítás", correct: "Helyes", solution: "Megoldás" },
  ro: { label: "Sarcină de gândire IA", order: "Ordinea ta", tap: "Atinge pașii în ordinea corectă.", reset: "Resetează", correct: "Corect", solution: "Soluție" },
  en: { label: "AI thinking task", order: "Your order", tap: "Tap the steps in the correct order.", reset: "Reset", correct: "Correct", solution: "Solution" },
};

export type LocalizedAiMission = {
  id: AiTestDiagramId; family: AiTestDiagramFamily; grade: 5 | 6 | 7 | 8; mode: "choice" | "order";
  title: string; clue: string; options?: string[]; answer?: string; stages?: string[];
};

export function localizedAiMissions(grade: 5 | 6 | 7 | 8, lang?: string): LocalizedAiMission[] {
  const active = aiVisualLang(lang);
  return AI_MISSIONS.filter(mission => mission.grade === grade).map(mission => mission.mode === "choice"
    ? { id: mission.id, family: mission.family, grade, mode: "choice", title: mission.title[active], clue: mission.clue[active], options: mission.answers.map(answer => answer[active]), answer: mission.answers[0][active] }
    : { id: mission.id, family: mission.family, grade, mode: "order", title: mission.title[active], clue: mission.clue[active], stages: mission.stages.map(stage => stage[active]) });
}
