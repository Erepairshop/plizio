export type PhysicsVisualLang = "de" | "hu" | "ro" | "en";

type Text4 = Record<PhysicsVisualLang, string>;

export function physicsVisualLang(lang?: string): PhysicsVisualLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

const FORCE_ITEMS = [
  ["apple-gravity", "↓", { de: "Ein Apfel fällt vom Baum.", hu: "Egy alma leesik a fáról.", ro: "Un măr cade din copac.", en: "An apple falls from a tree." }, { de: "Wohin zeigt die Gewichtskraft des Apfels?", hu: "Merre mutat az almára ható gravitációs erő?", ro: "În ce direcție acționează greutatea mărului?", en: "Which way does gravity act on the apple?" }],
  ["cart-push", "→", { de: "Du schiebst einen Einkaufswagen nach vorne.", hu: "Előre tolsz egy bevásárlókocsit.", ro: "Împingi un cărucior înainte.", en: "You push a shopping cart forward." }, { de: "In welche Richtung übst du die Schubkraft aus?", hu: "Milyen irányban fejted ki a tolóerőt?", ro: "În ce direcție exerciți forța de împingere?", en: "In which direction do you apply the pushing force?" }],
  ["sled-pull", "←", { de: "Du ziehst einen Schlitten zu dir.", hu: "Magad felé húzol egy szánkót.", ro: "Tragi o sanie spre tine.", en: "You pull a sled toward you." }, { de: "Wohin wirkt die Zugkraft am Schlitten?", hu: "Merre hat a szánkóra a húzóerő?", ro: "În ce direcție acționează forța de tracțiune asupra saniei?", en: "Which way does the pulling force act on the sled?" }],
  ["ball-bounce", "↑", { de: "Ein Ball prallt vom Boden ab.", hu: "Egy labda visszapattan a földről.", ro: "O minge ricoșează de pe sol.", en: "A ball bounces off the ground." }, { de: "In welche Richtung wirkt die Kraft des Bodens auf den Ball?", hu: "Merre hat a talaj ereje a labdára?", ro: "În ce direcție acționează forța solului asupra mingii?", en: "Which way does the ground's force act on the ball?" }],
  ["car-drag", "→", { de: "Ein Auto fährt nach links und wird vom Luftwiderstand gebremst.", hu: "Egy autó balra halad, és a légellenállás lassítja.", ro: "O mașină merge spre stânga și este încetinită de rezistența aerului.", en: "A car moves left and is slowed by air resistance." }, { de: "Wohin zeigt die Luftwiderstandskraft?", hu: "Merre mutat a légellenállási erő?", ro: "În ce direcție este forța de rezistență a aerului?", en: "Which way does the drag force point?" }],
  ["dumbbell-weight", "↓", { de: "Eine Hantel wird ruhig gehalten.", hu: "Egy súlyzót mozdulatlanul tartanak.", ro: "O halteră este ținută nemișcată.", en: "A dumbbell is held still." }, { de: "In welche Richtung wirkt die Gewichtskraft der Hantel?", hu: "Merre hat a súlyzó súlyereje?", ro: "În ce direcție acționează greutatea halterei?", en: "Which way does gravity act on the dumbbell?" }],
  ["rocket-thrust", "↑", { de: "Eine Rakete startet senkrecht.", hu: "Egy rakéta függőlegesen felszáll.", ro: "O rachetă decolează vertical.", en: "A rocket launches vertically." }, { de: "Wohin wirkt die resultierende Kraft beim Start?", hu: "Merre hat az eredő erő felszálláskor?", ro: "În ce direcție acționează forța rezultantă la decolare?", en: "Which way does the resultant force act at launch?" }],
  ["sail-wind", "→", { de: "Der Wind drückt ein Segelboot nach rechts.", hu: "A szél jobbra hajt egy vitorlást.", ro: "Vântul împinge o barcă cu pânze spre dreapta.", en: "The wind pushes a sailboat to the right." }, { de: "Wohin wirkt die Windkraft auf das Segel?", hu: "Merre hat a szél ereje a vitorlára?", ro: "În ce direcție acționează forța vântului asupra pânzei?", en: "Which way does the wind force act on the sail?" }],
  ["box-rope", "←", { de: "Eine Person zieht eine Kiste mit einem Seil nach links.", hu: "Valaki kötéllel balra húz egy ládát.", ro: "O persoană trage o cutie spre stânga cu o frânghie.", en: "A person pulls a box left with a rope." }, { de: "In welche Richtung wirkt die Seilkraft auf die Kiste?", hu: "Merre hat a kötél ereje a ládára?", ro: "În ce direcție acționează tensiunea frânghiei asupra cutiei?", en: "Which way does the rope's force act on the box?" }],
  ["parachute-gravity", "↓", { de: "Ein Fallschirmspringer sinkt gleichmäßig.", hu: "Egy ejtőernyős egyenletesen süllyed.", ro: "Un parașutist coboară cu viteză constantă.", en: "A parachutist descends at constant speed." }, { de: "Wohin wirkt die Gewichtskraft?", hu: "Merre hat a gravitációs erő?", ro: "În ce direcție acționează greutatea?", en: "Which way does gravity act?" }],
  ["spring-force", "→", { de: "Eine gespannte Feder schleudert einen Körper nach rechts.", hu: "Egy megfeszített rugó jobbra löki a testet.", ro: "Un arc comprimat lansează un corp spre dreapta.", en: "A compressed spring launches an object to the right." }, { de: "Wohin wirkt die Federkraft nach dem Loslassen?", hu: "Merre hat a rugóerő az elengedés után?", ro: "În ce direcție acționează forța elastică după eliberare?", en: "Which way does the spring force act after release?" }],
  ["ball-gravity", "↓", { de: "Ein Ball wird senkrecht nach oben geworfen.", hu: "Egy labdát függőlegesen felfelé dobnak.", ro: "O minge este aruncată vertical în sus.", en: "A ball is thrown vertically upward." }, { de: "Wohin zeigt die Gewichtskraft während des Steigflugs?", hu: "Merre mutat a gravitációs erő emelkedés közben?", ro: "În ce direcție este greutatea în timpul urcării?", en: "Which way does gravity point while the ball rises?" }],
  ["magnet-attraction", "→", { de: "Ein Magnet zieht eine Büroklammer von rechts an.", hu: "Egy jobb oldali mágnes vonzza a gemkapcsot.", ro: "Un magnet aflat în dreapta atrage o agrafă.", en: "A magnet on the right attracts a paper clip." }, { de: "Wohin wirkt die Magnetkraft auf die Büroklammer?", hu: "Merre hat a mágneses erő a gemkapocsra?", ro: "În ce direcție acționează forța magnetică asupra agrafei?", en: "Which way does the magnetic force act on the paper clip?" }],
  ["suitcase-lift", "↑", { de: "Eine Hand hebt einen Koffer an.", hu: "Egy kéz felemel egy bőröndöt.", ro: "O mână ridică o valiză.", en: "A hand lifts a suitcase." }, { de: "Wohin wirkt die Handkraft auf den Koffer?", hu: "Merre hat a kéz ereje a bőröndre?", ro: "În ce direcție acționează forța mâinii asupra valizei?", en: "Which way does the hand's force act on the suitcase?" }],
  ["bike-brake", "←", { de: "Ein Fahrrad fährt nach rechts und bremst.", hu: "Egy kerékpár jobbra halad és fékez.", ro: "O bicicletă merge spre dreapta și frânează.", en: "A bicycle moves right and brakes." }, { de: "Wohin wirkt die Reibungskraft beim Bremsen?", hu: "Merre hat a súrlódási erő fékezéskor?", ro: "În ce direcție acționează forța de frecare la frânare?", en: "Which way does friction act while braking?" }],
  ["door-pull", "←", { de: "Eine Tür wird am Griff nach links aufgezogen.", hu: "Egy ajtót a kilincsnél fogva balra húznak.", ro: "O ușă este trasă spre stânga de mâner.", en: "A door is pulled left by its handle." }, { de: "Wohin wirkt die Zugkraft am Türgriff?", hu: "Merre hat a húzóerő a kilincsre?", ro: "În ce direcție acționează forța de tracțiune asupra mânerului?", en: "Which way does the pulling force act at the handle?" }],
] as const;

export function getForceDirectionItems(lang?: string) {
  const l = physicsVisualLang(lang);
  return FORCE_ITEMS.map(([sceneId, answer, scenario, prompt]) => ({ sceneId, answer, scenario: scenario[l], prompt: prompt[l] }));
}

const TEMP_LABELS: Text4[] = [
  { de: "Welche Temperatur zeigt das Thermometer?", hu: "Milyen hőmérsékletet mutat a hőmérő?", ro: "Ce temperatură indică termometrul?", en: "What temperature does the thermometer show?" },
  { de: "Lies die Temperatur am Thermometer ab.", hu: "Olvasd le a hőmérsékletet a hőmérőről.", ro: "Citește temperatura de pe termometru.", en: "Read the temperature on the thermometer." },
  { de: "Wie warm ist die Flüssigkeit?", hu: "Milyen meleg a folyadék?", ro: "Ce temperatură are lichidul?", en: "How warm is the liquid?" },
  { de: "Welche Temperatur ist eingestellt?", hu: "Milyen hőmérséklet van beállítva?", ro: "Ce temperatură este setată?", en: "What temperature is set?" },
  { de: "Wie viele Grad Celsius sind zu sehen?", hu: "Hány Celsius-fok látható?", ro: "Câte grade Celsius sunt indicate?", en: "How many degrees Celsius are shown?" },
];

const TEMP_VALUES = [[20, -10, 50], [35, 0, 100], [60, 0, 100], [5, -10, 30], [80, 0, 100]] as const;
export function getTemperatureItems(lang?: string) {
  const l = physicsVisualLang(lang);
  return TEMP_VALUES.map(([value, min, max], index) => ({ label: TEMP_LABELS[index][l], value, min, max }));
}

const CIRCUIT_PROMPTS: Text4[] = [
  { de: "Welches Schema zeigt einen geschlossenen einfachen Stromkreis?", hu: "Melyik ábra mutat zárt, egyszerű áramkört?", ro: "Care schemă arată un circuit simplu închis?", en: "Which diagram shows a closed simple circuit?" },
  { de: "Welches Schema zeigt eine Reihenschaltung mit zwei Lampen?", hu: "Melyik ábra mutat két izzóból álló soros kapcsolást?", ro: "Care schemă arată două becuri legate în serie?", en: "Which diagram shows two lamps connected in series?" },
  { de: "Welches Schema zeigt eine Parallelschaltung?", hu: "Melyik ábra mutat párhuzamos kapcsolást?", ro: "Care schemă arată un circuit paralel?", en: "Which diagram shows a parallel circuit?" },
  { de: "In welchem Schema ist der Schalter offen?", hu: "Melyik ábrán van nyitva a kapcsoló?", ro: "În care schemă este întrerupătorul deschis?", en: "In which diagram is the switch open?" },
];

const CIRCUIT_OPTIONS = [
  { diagrams: ["closed", "open", "parallel", "series"], correctIndex: 0 },
  { diagrams: ["series", "parallel", "open", "closed"], correctIndex: 0 },
  { diagrams: ["parallel", "series", "open", "closed"], correctIndex: 0 },
  { diagrams: ["closed", "open", "parallel", "series"], correctIndex: 1 },
] as const;
export function getCircuitItems(lang?: string) {
  const l = physicsVisualLang(lang);
  return CIRCUIT_OPTIONS.map((item, index) => ({ ...item, diagrams: [...item.diagrams], prompt: CIRCUIT_PROMPTS[index][l] }));
}

const ENERGY_ITEMS = [
  [{ de: "Ordne die Energiekette einer Taschenlampe.", hu: "Rendezd sorba egy zseblámpa energiaátalakulását.", ro: "Ordonează lanțul energetic al unei lanterne.", en: "Put a flashlight's energy chain in order." }, ["battery", "electric", "light"]],
  [{ de: "Ordne die Energiekette eines Windrads.", hu: "Rendezd sorba egy szélturbina energiaátalakulását.", ro: "Ordonează lanțul energetic al unei turbine eoliene.", en: "Put a wind turbine's energy chain in order." }, ["wind", "motion", "electric"]],
  [{ de: "Ordne die Energiekette eines Wasserkochers.", hu: "Rendezd sorba egy vízforraló energiaátalakulását.", ro: "Ordonează lanțul energetic al unui fierbător.", en: "Put an electric kettle's energy chain in order." }, ["outlet", "electric", "heat"]],
  [{ de: "Ordne die Energiekette eines Solarmoduls.", hu: "Rendezd sorba egy napelem energiaátalakulását.", ro: "Ordonează lanțul energetic al unui panou solar.", en: "Put a solar panel's energy chain in order." }, ["sun", "light", "electric"]],
  [{ de: "Ordne die Energiekette beim Fahrradfahren.", hu: "Rendezd sorba a kerékpározás energiaátalakulását.", ro: "Ordonează lanțul energetic al mersului pe bicicletă.", en: "Put the energy chain of cycling in order." }, ["food", "motion", "heat"]],
] as const;

const ENERGY_STAGE: Record<string, Text4> = {
  battery: { de: "Batterie", hu: "elem", ro: "baterie", en: "battery" },
  electric: { de: "elektrische Energie", hu: "elektromos energia", ro: "energie electrică", en: "electrical energy" },
  light: { de: "Licht", hu: "fény", ro: "lumină", en: "light" },
  wind: { de: "Wind", hu: "szél", ro: "vânt", en: "wind" },
  motion: { de: "Bewegung", hu: "mozgás", ro: "mișcare", en: "motion" },
  outlet: { de: "Steckdose", hu: "konnektor", ro: "priză", en: "power outlet" },
  heat: { de: "Wärme", hu: "hő", ro: "căldură", en: "heat" },
  sun: { de: "Sonne", hu: "Nap", ro: "Soare", en: "Sun" },
  food: { de: "Nahrung", hu: "táplálék", ro: "hrană", en: "food" },
};

export function getEnergyChainItems(lang?: string) {
  const l = physicsVisualLang(lang);
  return ENERGY_ITEMS.map(([title, stages]) => ({ title: title[l], correctOrder: stages.map((stage) => ENERGY_STAGE[stage][l]) }));
}

export const PHYSICS_VISUAL_UI: Record<PhysicsVisualLang, { situation: string; diagram: string; correct: string; correctPrefix: string; energyHint: string }> = {
  de: { situation: "Situation", diagram: "Schema", correct: "Richtig!", correctPrefix: "Richtig:", energyHint: "Tippe die Energie-Schritte in richtiger Reihenfolge an..." },
  hu: { situation: "Helyzet", diagram: "Ábra", correct: "Helyes!", correctPrefix: "Helyes megoldás:", energyHint: "Koppints az energia lépéseire a megfelelő sorrendben..." },
  ro: { situation: "Situație", diagram: "Schema", correct: "Corect!", correctPrefix: "Răspuns corect:", energyHint: "Atinge etapele energiei în ordinea corectă..." },
  en: { situation: "Situation", diagram: "Diagram", correct: "Correct!", correctPrefix: "Correct answer:", energyHint: "Tap the energy stages in the correct order..." },
};
