import type {
  CellDiagramId,
  GeneticsDiagramId,
  OrganDiagramId,
  PlantDiagramId,
} from "@/components/biologie-visual/BiologyTestDiagrams";

export type BiologieVisualLang = "de" | "hu" | "ro" | "en";
type Text4 = Record<BiologieVisualLang, string>;
const t = (de: string, hu: string, ro: string, en: string): Text4 => ({ de, hu, ro, en });

export function biologieVisualLang(lang?: string): BiologieVisualLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

const ORGAN_LABELS: Record<OrganDiagramId, Text4> = {
  heart: t("Herz", "szív", "inimă", "heart"),
  lungs: t("Lunge", "tüdő", "plămâni", "lungs"),
  brain: t("Gehirn", "agy", "creier", "brain"),
  stomach: t("Magen", "gyomor", "stomac", "stomach"),
  liver: t("Leber", "máj", "ficat", "liver"),
  kidney: t("Niere", "vese", "rinichi", "kidney"),
};
const ORGAN_HINTS: Record<OrganDiagramId, Text4> = {
  heart: t("Pumpt Blut durch den Körper.", "Vért pumpál a testben.", "Pompează sângele prin corp.", "Pumps blood through the body."),
  lungs: t("Tauscht Sauerstoff und Kohlendioxid aus.", "Oxigént és szén-dioxidot cserél.", "Realizează schimbul de oxigen și dioxid de carbon.", "Exchanges oxygen and carbon dioxide."),
  brain: t("Steuert Wahrnehmung, Denken und Bewegung.", "Irányítja az érzékelést, gondolkodást és mozgást.", "Controlează percepția, gândirea și mișcarea.", "Controls perception, thought and movement."),
  stomach: t("Mischt Nahrung und beginnt ihre Verdauung.", "Keveri a táplálékot és megkezdi emésztését.", "Amestecă hrana și începe digestia.", "Mixes food and begins digestion."),
  liver: t("Verarbeitet Nährstoffe und bildet Galle.", "Feldolgozza a tápanyagokat és epét termel.", "Prelucrează nutrienții și produce bilă.", "Processes nutrients and produces bile."),
  kidney: t("Filtert das Blut und bildet Urin.", "Szűri a vért és vizeletet képez.", "Filtrează sângele și formează urina.", "Filters blood and produces urine."),
};

const PLANT_LABELS: Record<PlantDiagramId, Text4> = {
  flower: t("Blüte", "virág", "floare", "flower"),
  leaf: t("Blatt", "levél", "frunză", "leaf"),
  stem: t("Stängel", "szár", "tulpină", "stem"),
  root: t("Wurzel", "gyökér", "rădăcină", "root"),
  fruit: t("Frucht", "termés", "fruct", "fruit"),
  seed: t("Samen", "mag", "sămânță", "seed"),
};
const PLANT_HINTS: Record<PlantDiagramId, Text4> = {
  flower: t("Dient der Fortpflanzung und lockt Bestäuber an.", "A szaporodást szolgálja és beporzókat vonz.", "Participă la reproducere și atrage polenizatori.", "Supports reproduction and attracts pollinators."),
  leaf: t("Hier findet der größte Teil der Fotosynthese statt.", "Itt zajlik a fotoszintézis nagy része.", "Aici are loc cea mai mare parte a fotosintezei.", "Most photosynthesis takes place here."),
  stem: t("Trägt die Pflanze und transportiert Stoffe.", "Tartja a növényt és anyagokat szállít.", "Susține planta și transportă substanțe.", "Supports the plant and transports substances."),
  root: t("Verankert die Pflanze und nimmt Wasser auf.", "Rögzíti a növényt és vizet vesz fel.", "Fixează planta și absoarbe apă.", "Anchors the plant and absorbs water."),
  fruit: t("Schützt die Samen und hilft bei ihrer Verbreitung.", "Védi a magokat és segíti terjedésüket.", "Protejează semințele și ajută la răspândire.", "Protects seeds and helps disperse them."),
  seed: t("Enthält Embryo und Nährstoffvorrat.", "Embriót és tápanyagtartalékot tartalmaz.", "Conține embrionul și rezerve nutritive.", "Contains an embryo and stored nutrients."),
};

const CELL_LABELS: Record<CellDiagramId, Text4> = {
  nucleus: t("Zellkern", "sejtmag", "nucleu", "nucleus"),
  mitochondrion: t("Mitochondrium", "mitokondrium", "mitocondrie", "mitochondrion"),
  membrane: t("Zellmembran", "sejthártya", "membrană celulară", "cell membrane"),
  ribosome: t("Ribosom", "riboszóma", "ribozom", "ribosome"),
  chloroplast: t("Chloroplast", "kloroplasztisz", "cloroplast", "chloroplast"),
  vacuole: t("Vakuole", "vakuólum", "vacuolă", "vacuole"),
};
const CELL_HINTS: Record<CellDiagramId, Text4> = {
  nucleus: t("Enthält die DNA und steuert Zellvorgänge.", "A DNS-t tartalmazza és irányítja a sejtműködést.", "Conține ADN-ul și controlează procesele celulare.", "Contains DNA and controls cell processes."),
  mitochondrion: t("Gewinnt nutzbare Energie durch Zellatmung.", "Sejtlégzéssel hasznosítható energiát termel.", "Produce energie utilizabilă prin respirație celulară.", "Releases usable energy through cellular respiration."),
  membrane: t("Regelt den Stoffaustausch mit der Umgebung.", "Szabályozza az anyagcserét a környezettel.", "Reglează schimbul de substanțe cu mediul.", "Controls exchange of substances with the environment."),
  ribosome: t("Baut Proteine nach genetischer Vorlage.", "A genetikai minta alapján fehérjéket épít.", "Construiește proteine după informația genetică.", "Builds proteins from genetic instructions."),
  chloroplast: t("Wandelt Lichtenergie bei der Fotosynthese um.", "A fotoszintézis során fényenergiát alakít át.", "Transformă energia luminoasă prin fotosinteză.", "Converts light energy during photosynthesis."),
  vacuole: t("Speichert Wasser und stabilisiert Pflanzenzellen.", "Vizet tárol és merevíti a növényi sejtet.", "Stochează apă și stabilizează celula vegetală.", "Stores water and supports plant cells."),
};

const GENETICS_LABELS: Record<GeneticsDiagramId, Text4> = {
  dna: t("DNA-Doppelhelix", "DNS-kettős spirál", "dublu helix ADN", "DNA double helix"),
  chromosome: t("Chromosom", "kromoszóma", "cromozom", "chromosome"),
  punnett: t("Kreuzungsschema", "Punnett-tábla", "pătrat Punnett", "Punnett square"),
  mutation: t("Mutation", "mutáció", "mutație", "mutation"),
  selection: t("natürliche Selektion", "természetes szelekció", "selecție naturală", "natural selection"),
  phylogeny: t("Stammbaum", "törzsfa", "arbore filogenetic", "phylogenetic tree"),
};
const GENETICS_HINTS: Record<GeneticsDiagramId, Text4> = {
  dna: t("Speichert die Erbinformation in einer Basenfolge.", "A bázissorrendben tárolja az öröklődő információt.", "Stochează informația ereditară în secvența bazelor.", "Stores hereditary information in a base sequence."),
  chromosome: t("Verdichtete DNA während der Zellteilung.", "A sejtosztódáskor tömörödött DNS.", "ADN condensat în timpul diviziunii celulare.", "Condensed DNA during cell division."),
  punnett: t("Zeigt mögliche Allelkombinationen der Nachkommen.", "Az utódok lehetséges allélkombinációit mutatja.", "Arată combinațiile posibile de alele la urmași.", "Shows possible allele combinations in offspring."),
  mutation: t("Eine dauerhafte Veränderung der DNA-Sequenz.", "A DNS-sorrend tartós megváltozása.", "O modificare permanentă a secvenței ADN.", "A permanent change in a DNA sequence."),
  selection: t("Vorteilhafte Merkmale werden häufiger weitergegeben.", "Az előnyös tulajdonságok gyakrabban öröklődnek tovább.", "Trăsăturile avantajoase sunt transmise mai des.", "Advantageous traits are passed on more often."),
  phylogeny: t("Veranschaulicht gemeinsame Vorfahren und Verzweigungen.", "Közös ősöket és elágazásokat szemléltet.", "Arată strămoși comuni și ramificații.", "Shows common ancestors and branching lineages."),
};

type VisualItem<T extends string> = { id: T; prompt: Text4; hint: Text4 };
const prompt = {
  organ: t("Welches Organ ist dargestellt?", "Melyik szerv látható?", "Ce organ este reprezentat?", "Which organ is shown?"),
  plant: t("Welcher Pflanzenteil ist dargestellt?", "Melyik növényi rész látható?", "Ce parte a plantei este reprezentată?", "Which plant part is shown?"),
  cell: t("Welcher Zellbestandteil ist dargestellt?", "Melyik sejtalkotó látható?", "Ce componentă celulară este reprezentată?", "Which cell structure is shown?"),
  genetics: t("Welches biologische Konzept zeigt die Skizze?", "Melyik biológiai fogalmat mutatja az ábra?", "Ce concept biologic arată schema?", "Which biological concept does the diagram show?"),
};

const makeItems = <T extends string>(labels: Record<T, Text4>, hints: Record<T, Text4>, familyPrompt: Text4): VisualItem<T>[] =>
  (Object.keys(labels) as T[]).map(id => ({ id, prompt: familyPrompt, hint: hints[id] }));

const ORGAN_ITEMS = makeItems(ORGAN_LABELS, ORGAN_HINTS, prompt.organ);
const PLANT_ITEMS = makeItems(PLANT_LABELS, PLANT_HINTS, prompt.plant);
const CELL_ITEMS = makeItems(CELL_LABELS, CELL_HINTS, prompt.cell);
const GENETICS_ITEMS = makeItems(GENETICS_LABELS, GENETICS_HINTS, prompt.genetics);

function localizedItems<T extends string>(items: VisualItem<T>[], labels: Record<T, Text4>, lang?: string) {
  const l = biologieVisualLang(lang);
  const options = (Object.keys(labels) as T[]).map(id => labels[id][l]);
  return items.map(item => ({ id: item.id, prompt: item.prompt[l], hint: item.hint[l], options, answer: labels[item.id][l] }));
}

export const getOrganItems = (lang?: string) => localizedItems(ORGAN_ITEMS, ORGAN_LABELS, lang);
export const getPlantItems = (lang?: string) => localizedItems(PLANT_ITEMS, PLANT_LABELS, lang);
export const getCellItems = (lang?: string) => localizedItems(CELL_ITEMS, CELL_LABELS, lang);
export const getGeneticsItems = (lang?: string) => localizedItems(GENETICS_ITEMS, GENETICS_LABELS, lang);

export const BIOLOGIE_VISUAL_UI = {
  de: { correct: "Richtig!", correctPrefix: "Richtig:", diagram: "Skizze" },
  hu: { correct: "Helyes!", correctPrefix: "Helyes válasz:", diagram: "Ábra" },
  ro: { correct: "Corect!", correctPrefix: "Răspuns corect:", diagram: "Schemă" },
  en: { correct: "Correct!", correctPrefix: "Correct answer:", diagram: "Diagram" },
} satisfies Record<BiologieVisualLang, Record<string, string>>;

export const BIOLOGIE_VISUAL_TYPE_LABELS = {
  de: ["Organ erkennen", "Pflanzenteil erkennen", "Zellbestandteil erkennen", "Genetik und Evolution"],
  hu: ["Szerv felismerése", "Növényi rész felismerése", "Sejtalkotó felismerése", "Genetika és evolúció"],
  ro: ["Recunoașterea organului", "Recunoașterea părții plantei", "Recunoașterea structurii celulare", "Genetică și evoluție"],
  en: ["Identify organ", "Identify plant part", "Identify cell structure", "Genetics and evolution"],
} satisfies Record<BiologieVisualLang, [string, string, string, string]>;
