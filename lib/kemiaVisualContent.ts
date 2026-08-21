import type { ChangeDiagramId, HazardDiagramId, ParticleDiagramId, SeparationDiagramId } from "@/components/chemie-visual/ChemistryTestDiagrams";

export type KemiaVisualLang = "de" | "hu" | "ro" | "en";
type Text4 = Record<KemiaVisualLang, string>;

export function kemiaVisualLang(lang?: string): KemiaVisualLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

const t = (de: string, hu: string, ro: string, en: string): Text4 => ({ de, hu, ro, en });

const PARTICLE_LABELS = {
  solid: t("fest", "szilárd", "solid", "solid"),
  liquid: t("flüssig", "folyékony", "lichid", "liquid"),
  gas: t("gasförmig", "gáz", "gaz", "gas"),
  dissolving: t("Lösen", "oldódás", "dizolvare", "dissolving"),
  diffusion: t("Diffusion", "diffúzió", "difuzie", "diffusion"),
  heating: t("schnellere Bewegung", "gyorsabb mozgás", "mișcare mai rapidă", "faster motion"),
} satisfies Record<ParticleDiagramId, Text4>;

const PARTICLE_ITEMS: { id: ParticleDiagramId; prompt: Text4; choices: ParticleDiagramId[] }[] = [
  { id: "solid", prompt: t("Welchen Zustand zeigt das Teilchenmodell?", "Melyik halmazállapotot mutatja a részecskemodell?", "Ce stare de agregare arată modelul particulelor?", "Which state of matter does the particle model show?"), choices: ["solid","liquid","gas"] },
  { id: "liquid", prompt: t("Wie ist der dargestellte Stoff einzuordnen?", "Milyen állapotú az ábrázolt anyag?", "În ce stare se află substanța reprezentată?", "What state is the illustrated substance in?"), choices: ["liquid","solid","gas"] },
  { id: "gas", prompt: t("Was zeigen die weit voneinander entfernten Teilchen?", "Mit jeleznek az egymástól távoli részecskék?", "Ce indică particulele aflate la distanță mare?", "What do the widely spaced particles represent?"), choices: ["gas","liquid","solid"] },
  { id: "dissolving", prompt: t("Welcher Vorgang ist im Teilchenbild zu sehen?", "Melyik folyamat látható a részecskeábrán?", "Ce proces este prezentat în modelul particulelor?", "Which process is shown in the particle diagram?"), choices: ["dissolving","diffusion","heating","solid"] },
  { id: "diffusion", prompt: t("Wie heißt die selbstständige Durchmischung der Teilchen?", "Hogy nevezzük a részecskék önkéntes elkeveredését?", "Cum se numește amestecarea spontană a particulelor?", "What is the spontaneous mixing of particles called?"), choices: ["diffusion","dissolving","heating","gas"] },
  { id: "heating", prompt: t("Was bewirkt das Erwärmen bei den Teilchen?", "Mit okoz a melegítés a részecskéknél?", "Ce efect are încălzirea asupra particulelor?", "What does heating do to the particles?"), choices: ["heating","solid","dissolving","diffusion"] },
];

const SEPARATION_LABELS: Record<SeparationDiagramId, Text4> = {
  filtration: t("Filtration", "szűrés", "filtrare", "filtration"),
  evaporation: t("Eindampfen", "bepárlás", "evaporare", "evaporation"),
  magnet: t("Magnettrennung", "mágneses elválasztás", "separare magnetică", "magnetic separation"),
  decanting: t("Abgießen", "leöntés", "decantare", "decanting"),
  distillation: t("Destillation", "desztilláció", "distilare", "distillation"),
  chromatography: t("Chromatografie", "kromatográfia", "cromatografie", "chromatography"),
};

const SEPARATION_ITEMS: { id: SeparationDiagramId; prompt: Text4; scenario: Text4 }[] = [
  { id: "filtration", prompt: t("Welche Trennmethode passt?", "Melyik elválasztási módszer megfelelő?", "Ce metodă de separare este potrivită?", "Which separation method is suitable?"), scenario: t("Sand soll aus Wasser entfernt werden.", "A homokot el kell választani a víztől.", "Nisipul trebuie separat de apă.", "Sand must be removed from water.") },
  { id: "evaporation", prompt: t("Wie gewinnt man das gelöste Salz zurück?", "Hogyan nyerhető vissza az oldott só?", "Cum se recuperează sarea dizolvată?", "How can the dissolved salt be recovered?"), scenario: t("Aus Salzwasser sollen Salzkristalle entstehen.", "A sós vízből sókristályokat szeretnénk nyerni.", "Din apa sărată trebuie obținute cristale de sare.", "Salt crystals should be obtained from salt water.") },
  { id: "magnet", prompt: t("Welche Methode trennt dieses Gemisch am besten?", "Melyik módszer választja szét legjobban ezt a keveréket?", "Ce metodă separă cel mai bine acest amestec?", "Which method best separates this mixture?"), scenario: t("Eisenspäne sind mit Sand vermischt.", "Vasreszelék keveredett homokkal.", "Pilitura de fier este amestecată cu nisip.", "Iron filings are mixed with sand.") },
  { id: "decanting", prompt: t("Wie trennt man die beiden Flüssigkeitsschichten?", "Hogyan választjuk szét a két folyadékréteget?", "Cum se separă cele două straturi de lichid?", "How are the two liquid layers separated?"), scenario: t("Öl schwimmt als eigene Schicht auf Wasser.", "Az olaj külön rétegként úszik a vízen.", "Uleiul plutește într-un strat separat pe apă.", "Oil floats as a separate layer on water.") },
  { id: "distillation", prompt: t("Welche Methode liefert reines Wasser?", "Melyik módszerrel nyerhető tiszta víz?", "Ce metodă produce apă pură?", "Which method produces pure water?"), scenario: t("Wasser soll durch Verdampfen und Kondensieren gereinigt werden.", "A vizet párologtatással és lecsapatással kell tisztítani.", "Apa trebuie purificată prin evaporare și condensare.", "Water is purified by evaporation and condensation.") },
  { id: "chromatography", prompt: t("Wie trennt man die Farbstoffe der Tinte?", "Hogyan választjuk szét a tinta színezékeit?", "Cum se separă coloranții din cerneală?", "How are the dyes in ink separated?"), scenario: t("Ein Tintenfleck wandert mit Wasser über Papier.", "Egy tintafolt vízzel vándorol a papíron.", "O pată de cerneală migrează cu apa pe hârtie.", "An ink spot travels with water across paper.") },
];

const HAZARD_LABELS: Record<HazardDiagramId, Text4> = {
  flammable: t("entzündlich", "tűzveszélyes", "inflamabil", "flammable"),
  toxic: t("giftig", "mérgező", "toxic", "toxic"),
  corrosive: t("ätzend", "maró", "coroziv", "corrosive"),
  irritant: t("reizend", "irritáló", "iritant", "irritant"),
  oxidizing: t("brandfördernd", "oxidáló", "oxidant", "oxidizing"),
  explosive: t("explosiv", "robbanásveszélyes", "exploziv", "explosive"),
};

const HAZARD_ITEMS: { id: HazardDiagramId; prompt: Text4 }[] = [
  { id: "flammable", prompt: t("Wovor warnt dieses GHS-Symbol?", "Mire figyelmeztet ez a GHS-jel?", "Ce pericol indică acest simbol GHS?", "What hazard does this GHS symbol indicate?") },
  { id: "toxic", prompt: t("Welche Gefahr zeigt der Totenkopf?", "Milyen veszélyt jelez a koponya?", "Ce pericol indică simbolul cu craniu?", "What danger does the skull symbol show?") },
  { id: "corrosive", prompt: t("Was bedeutet dieses Laborsymbol?", "Mit jelent ez a laboratóriumi jel?", "Ce înseamnă acest simbol de laborator?", "What does this laboratory symbol mean?") },
  { id: "irritant", prompt: t("Welche Bedeutung hat das Ausrufezeichen?", "Mit jelent a felkiáltójel?", "Ce semnificație are semnul exclamării?", "What does the exclamation mark mean?") },
  { id: "oxidizing", prompt: t("Welche Stoffeigenschaft kennzeichnet dieses Zeichen?", "Milyen anyagtulajdonságot jelöl ez a jel?", "Ce proprietate a substanței indică acest simbol?", "Which substance property does this symbol indicate?") },
  { id: "explosive", prompt: t("Vor welcher Gefahr warnt das explodierende Symbol?", "Milyen veszélyre figyelmeztet a robbanó jel?", "Ce pericol indică simbolul exploziei?", "What danger does the exploding symbol warn about?") },
];

const CHANGE_LABELS = {
  physical: t("physikalische Veränderung", "fizikai változás", "schimbare fizică", "physical change"),
  chemical: t("chemische Reaktion", "kémiai reakció", "reacție chimică", "chemical reaction"),
};

const CHANGE_ITEMS: { id: ChangeDiagramId; kind: keyof typeof CHANGE_LABELS; prompt: Text4; scenario: Text4 }[] = [
  { id: "melting", kind: "physical", prompt: t("Wie ist der Vorgang einzuordnen?", "Hogyan sorolható be a folyamat?", "Cum se clasifică procesul?", "How should the process be classified?"), scenario: t("Ein Eiswürfel schmilzt.", "Egy jégkocka megolvad.", "Un cub de gheață se topește.", "An ice cube melts.") },
  { id: "rusting", kind: "chemical", prompt: t("Entsteht dabei ein neuer Stoff?", "Keletkezik közben új anyag?", "Se formează o substanță nouă?", "Is a new substance formed?"), scenario: t("Eisen rostet an feuchter Luft.", "A vas nedves levegőn rozsdásodik.", "Fierul ruginește în aer umed.", "Iron rusts in moist air.") },
  { id: "dissolving", kind: "physical", prompt: t("Ist Lösen eine chemische Reaktion?", "Az oldódás kémiai reakció?", "Dizolvarea este o reacție chimică?", "Is dissolving a chemical reaction?"), scenario: t("Zucker löst sich in Wasser.", "A cukor feloldódik a vízben.", "Zahărul se dizolvă în apă.", "Sugar dissolves in water.") },
  { id: "burning", kind: "chemical", prompt: t("Welche Art von Veränderung findet statt?", "Milyen változás történik?", "Ce tip de schimbare are loc?", "What type of change occurs?"), scenario: t("Holz brennt und Asche entsteht.", "A fa elég és hamu keletkezik.", "Lemnul arde și se formează cenușă.", "Wood burns and ash forms.") },
  { id: "fizzing", kind: "chemical", prompt: t("Was zeigt die Gasentwicklung an?", "Mit jelez a gázfejlődés?", "Ce indică degajarea de gaz?", "What does the gas formation indicate?"), scenario: t("Essig reagiert mit Natron und es entstehen Bläschen.", "Az ecet szódabikarbónával reagál, és buborékok keletkeznek.", "Oțetul reacționează cu bicarbonat și apar bule.", "Vinegar reacts with baking soda and bubbles form.") },
  { id: "precipitate", kind: "chemical", prompt: t("Wie deutet man den entstehenden Feststoff?", "Hogyan értelmezzük a keletkező szilárd anyagot?", "Cum se interpretează solidul format?", "How should the newly formed solid be interpreted?"), scenario: t("Zwei klare Lösungen bilden einen Niederschlag.", "Két tiszta oldat csapadékot képez.", "Două soluții limpezi formează un precipitat.", "Two clear solutions form a precipitate.") },
];

export function getParticleItems(lang?: string) { const l=kemiaVisualLang(lang); return PARTICLE_ITEMS.map(x=>({ id:x.id, prompt:x.prompt[l], options:x.choices.map(c=>PARTICLE_LABELS[c][l]), answer:PARTICLE_LABELS[x.id][l] })); }
export function getSeparationItems(lang?: string) { const l=kemiaVisualLang(lang); const options=(Object.keys(SEPARATION_LABELS) as SeparationDiagramId[]).map(k=>SEPARATION_LABELS[k][l]); return SEPARATION_ITEMS.map(x=>({ id:x.id, prompt:x.prompt[l], scenario:x.scenario[l], options, answer:SEPARATION_LABELS[x.id][l] })); }
export function getHazardItems(lang?: string) { const l=kemiaVisualLang(lang); const options=(Object.keys(HAZARD_LABELS) as HazardDiagramId[]).map(k=>HAZARD_LABELS[k][l]); return HAZARD_ITEMS.map(x=>({ id:x.id, prompt:x.prompt[l], options, answer:HAZARD_LABELS[x.id][l] })); }
export function getChangeItems(lang?: string) { const l=kemiaVisualLang(lang); const options=[CHANGE_LABELS.physical[l],CHANGE_LABELS.chemical[l]]; return CHANGE_ITEMS.map(x=>({ id:x.id, prompt:x.prompt[l], scenario:x.scenario[l], options, answer:CHANGE_LABELS[x.kind][l] })); }

export const KEMIA_VISUAL_UI = {
  de: { particle:"Teilchenmodell", mixture:"Gemisch", symbol:"Gefahrensymbol", correct:"Richtig!", correctPrefix:"Richtig:", diagram:"Skizze" },
  hu: { particle:"Részecskemodell", mixture:"Keverék", symbol:"Veszélyjel", correct:"Helyes!", correctPrefix:"Helyes válasz:", diagram:"Ábra" },
  ro: { particle:"Model de particule", mixture:"Amestec", symbol:"Simbol de pericol", correct:"Corect!", correctPrefix:"Răspuns corect:", diagram:"Schemă" },
  en: { particle:"Particle model", mixture:"Mixture", symbol:"Hazard symbol", correct:"Correct!", correctPrefix:"Correct answer:", diagram:"Diagram" },
} satisfies Record<KemiaVisualLang, Record<string,string>>;

export const KEMIA_VISUAL_TYPE_LABELS = {
  de: ["Teilchenbild deuten", "Trennmethode wählen", "Gefahrensymbol erkennen", "Reaktion oder Veränderung"],
  hu: ["Részecskeábra értelmezése", "Elválasztási módszer", "Veszélyjel felismerése", "Reakció vagy változás"],
  ro: ["Interpretarea particulelor", "Metodă de separare", "Recunoașterea pericolului", "Reacție sau schimbare"],
  en: ["Interpret particle model", "Choose separation method", "Recognize hazard symbol", "Reaction or change"],
} satisfies Record<KemiaVisualLang, [string,string,string,string]>;
