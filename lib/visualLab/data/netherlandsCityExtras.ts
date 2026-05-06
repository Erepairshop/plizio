// @ts-nocheck
import type { POI } from "./poi";

type Lang = "de" | "hu" | "ro" | "en";
type SettlementTheme =
  | "capital"
  | "historic"
  | "fortified"
  | "coastal"
  | "port"
  | "nature"
  | "industrial"
  | "university"
  | "sports"
  | "border"
  | "polder"
  | "island"
  | "flower"
  | "new-town"
  | "shopping"
  | "water"
  | "royal"
  | "market"
  | "tourism"
  | "fruit"
  | "cheese"
  | "seafood"
  | "suburb"
  | "events";

interface SettlementRow {
  id: string;
  parent: string;
  coords: [number, number];
  name: string;
  theme: SettlementTheme;
}

const PROVINCES: Record<string, Record<Lang, string>> = {
  "NL-DR": { de: "Drenthe", hu: "Drenthe", ro: "Drenthe", en: "Drenthe" },
  "NL-FL": { de: "Flevoland", hu: "Flevoland", ro: "Flevoland", en: "Flevoland" },
  "NL-FR": { de: "Friesland", hu: "Friesland", ro: "Friesland", en: "Friesland" },
  "NL-GE": { de: "Gelderland", hu: "Gelderland", ro: "Gelderland", en: "Gelderland" },
  "NL-GR": { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
  "NL-LI": { de: "Limburg", hu: "Limburg", ro: "Limburg", en: "Limburg" },
  "NL-NB": { de: "North Brabant", hu: "North Brabant", ro: "North Brabant", en: "North Brabant" },
  "NL-NH": { de: "North Holland", hu: "Észak-Holland", ro: "Olanda de Nord", en: "North Holland" },
  "NL-OV": { de: "Overijssel", hu: "Overijssel", ro: "Overijssel", en: "Overijssel" },
  "NL-UT": { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
  "NL-ZE": { de: "Zeeland", hu: "Zeeland", ro: "Zeeland", en: "Zeeland" },
  "NL-ZH": { de: "South Holland", hu: "Dél-Holland", ro: "Olanda de Sud", en: "South Holland" },
};

const THEME_LABELS: Record<SettlementTheme, string> = {
  capital: "provincial capital",
  historic: "historic town",
  fortified: "fortified town",
  coastal: "coastal town",
  port: "port city",
  nature: "nature town",
  industrial: "industrial city",
  university: "university city",
  sports: "sports town",
  border: "border town",
  polder: "polder town",
  island: "island village",
  flower: "flower town",
  "new-town": "new town",
  shopping: "shopping city",
  water: "water town",
  royal: "royal town",
  market: "market town",
  tourism: "tourist town",
  fruit: "fruit town",
  cheese: "cheese town",
  seafood: "seafood village",
  suburb: "suburban city",
  events: "events town",
};

function buildSettlementPoi(row: SettlementRow): POI {
  const province = PROVINCES[row.parent] ?? { de: row.parent, hu: row.parent, ro: row.parent, en: row.parent };
  const label = THEME_LABELS[row.theme];

  return {
    id: row.id,
    type: "city",
    parent: row.parent,
    coords: row.coords,
    name: { de: row.name, hu: row.name, ro: row.name, en: row.name },
    description: {
      de: `${row.name} ist eine Stadt in ${province.de}. Sie steht fur ${label}.`,
      hu: `${row.name} ${province.hu} egyik varosa. A ${label} jellemzi.`,
      ro: `${row.name} este un oras din ${province.ro}. Este cunoscut pentru ${label}.`,
      en: `${row.name} is a city in ${province.en}. It is known for its ${label}.`,
    },
    facts: {
      de: [`Liegt in ${province.de}.`, `Steht fur ${label}.`, "Erganzt das Netz der niederlandischen Stadte und Gemeinden.", "Beliebt fur Tagesausfluge und lokale Erkundungen."],
      hu: [`A ${province.hu} tartomanyban talalhato.`, `A ${label} egyik peldaja.`, "Gazdagitja a holland telepuleshalozatot.", "Jó celpont egynapos kirandulasokhoz."],
      ro: [`Se afla in ${province.ro}.`, `Este cunoscut pentru ${label}.`, "Completeaza reteaua de orase si localitati din Tarile de Jos.", "Potrivit pentru o excursie de o zi."],
      en: [`Located in ${province.en}.`, `Known for its ${label}.`, "Part of the Dutch network of towns and cities.", "A good destination for a day trip."],
    },
  };
}

const settlementRows: SettlementRow[] = [
  { id: "nl-almere", parent: "NL-FL", coords: [5.209294, 52.441751], name: "Almere", theme: "polder" },
  { id: "nl-amersfoort", parent: "NL-UT", coords: [5.408885, 52.16377], name: "Amersfoort", theme: "historic" },
  { id: "nl-amstelveen", parent: "NL-NH", coords: [4.859684, 52.302821], name: "Amstelveen", theme: "suburb" },
  { id: "nl-apeldoorn", parent: "NL-GE", coords: [5.930078, 52.179574], name: "Apeldoorn", theme: "royal" },
  { id: "nl-assen", parent: "NL-DR", coords: [6.560498, 52.995227], name: "Assen", theme: "capital" },
  { id: "nl-aalsmeer", parent: "NL-NH", coords: [4.749338, 52.266944], name: "Aalsmeer", theme: "flower" },
  { id: "nl-bergen-op-zoom", parent: "NL-NB", coords: [4.287154, 51.494476], name: "Bergen op Zoom", theme: "fortified" },
  { id: "nl-beverwijk", parent: "NL-NH", coords: [4.67284, 52.47879], name: "Beverwijk", theme: "market" },
  { id: "nl-biddinghuizen", parent: "NL-FL", coords: [5.69216, 52.455222], name: "Biddinghuizen", theme: "events" },
  { id: "nl-bolsward", parent: "NL-FR", coords: [5.522896, 53.062018], name: "Bolsward", theme: "historic" },
  { id: "nl-barneveld", parent: "NL-GE", coords: [5.645439, 52.171507], name: "Barneveld", theme: "nature" },
  { id: "nl-culemborg", parent: "NL-GE", coords: [5.225304, 51.95735], name: "Culemborg", theme: "fortified" },
  { id: "nl-dokkum", parent: "NL-FR", coords: [5.999231, 53.324351], name: "Dokkum", theme: "fortified" },
  { id: "nl-doesburg", parent: "NL-GE", coords: [6.151558, 52.018751], name: "Doesburg", theme: "historic" },
  { id: "nl-dronten", parent: "NL-FL", coords: [5.716038, 52.523661], name: "Dronten", theme: "polder" },
  { id: "nl-ede", parent: "NL-GE", coords: [5.745511, 52.071683], name: "Ede", theme: "nature" },
  { id: "nl-edam", parent: "NL-NH", coords: [5.056285, 52.511912], name: "Edam", theme: "historic" },
  { id: "nl-elburg", parent: "NL-GE", coords: [5.841322, 52.415659], name: "Elburg", theme: "fortified" },
  { id: "nl-emmen", parent: "NL-DR", coords: [6.952514, 52.752866], name: "Emmen", theme: "nature" },
  { id: "nl-emmeloord", parent: "NL-FL", coords: [5.746637, 52.708745], name: "Emmeloord", theme: "polder" },
  { id: "nl-enkhuizen", parent: "NL-NH", coords: [5.320694, 52.75772], name: "Enkhuizen", theme: "port" },
  { id: "nl-etten-leur", parent: "NL-NB", coords: [4.636081, 51.569206], name: "Etten-Leur", theme: "industrial" },
  { id: "nl-franeker", parent: "NL-FR", coords: [5.540965, 53.188051], name: "Franeker", theme: "university" },
  { id: "nl-gorinchem", parent: "NL-ZH", coords: [4.973874, 51.829613], name: "Gorinchem", theme: "fortified" },
  { id: "nl-harderwijk", parent: "NL-GE", coords: [5.618933, 52.349069], name: "Harderwijk", theme: "historic" },
  { id: "nl-heerenveen", parent: "NL-FR", coords: [5.923149, 52.998474], name: "Heerenveen", theme: "sports" },
  { id: "nl-heerlen", parent: "NL-LI", coords: [5.981507, 50.877524], name: "Heerlen", theme: "industrial" },
  { id: "nl-helmond", parent: "NL-NB", coords: [5.655769, 51.479096], name: "Helmond", theme: "industrial" },
  { id: "nl-hengelo", parent: "NL-OV", coords: [6.795526, 52.252319], name: "Hengelo", theme: "industrial" },
  { id: "nl-hoorn", parent: "NL-NH", coords: [5.07358, 52.653272], name: "Hoorn", theme: "port" },
  { id: "nl-huizen", parent: "NL-NH", coords: [5.256721, 52.295812], name: "Huizen", theme: "coastal" },
  { id: "nl-kampen", parent: "NL-OV", coords: [5.90333, 52.555948], name: "Kampen", theme: "historic" },
  { id: "nl-katwijk", parent: "NL-ZH", coords: [4.414558, 52.189855], name: "Katwijk", theme: "coastal" },
  { id: "nl-kerkrade", parent: "NL-LI", coords: [6.059385, 50.874909], name: "Kerkrade", theme: "border" },
  { id: "nl-leeuwarden", parent: "NL-FR", coords: [5.791855, 53.200594], name: "Leeuwarden", theme: "capital" },
  { id: "nl-lelystad", parent: "NL-FL", coords: [5.361044, 52.536681], name: "Lelystad", theme: "capital" },
  { id: "nl-lisse", parent: "NL-ZH", coords: [4.563033, 52.25761], name: "Lisse", theme: "flower" },
  { id: "nl-maassluis", parent: "NL-ZH", coords: [4.244001, 51.926667], name: "Maassluis", theme: "port" },
  { id: "nl-medemblik", parent: "NL-NH", coords: [5.168623, 52.790714], name: "Medemblik", theme: "historic" },
  { id: "nl-middelburg", parent: "NL-ZE", coords: [3.613737, 51.499678], name: "Middelburg", theme: "capital" },
  { id: "nl-naarden", parent: "NL-NH", coords: [5.163364, 52.295763], name: "Naarden", theme: "fortified" },
  { id: "nl-nieuwegein", parent: "NL-UT", coords: [5.092933, 52.02987], name: "Nieuwegein", theme: "new-town" },
  { id: "nl-noordwijk", parent: "NL-ZH", coords: [4.446197, 52.241086], name: "Noordwijk", theme: "coastal" },
  { id: "nl-oisterwijk", parent: "NL-NB", coords: [5.198645, 51.566108], name: "Oisterwijk", theme: "nature" },
  { id: "nl-oss", parent: "NL-NB", coords: [5.532084, 51.778354], name: "Oss", theme: "industrial" },
  { id: "nl-oudewater", parent: "NL-UT", coords: [4.87013, 52.022606], name: "Oudewater", theme: "historic" },
  { id: "nl-purmerend", parent: "NL-NH", coords: [4.961483, 52.502479], name: "Purmerend", theme: "market" },
  { id: "nl-rhenen", parent: "NL-UT", coords: [5.57222, 51.960876], name: "Rhenen", theme: "historic" },
  { id: "nl-roermond", parent: "NL-LI", coords: [5.988265, 51.19339], name: "Roermond", theme: "shopping" },
  { id: "nl-schagen", parent: "NL-NH", coords: [4.741357, 52.788221], name: "Schagen", theme: "market" },
  { id: "nl-schiedam", parent: "NL-ZH", coords: [4.386451, 51.930045], name: "Schiedam", theme: "industrial" },
  { id: "nl-sittard", parent: "NL-LI", coords: [5.866663, 50.997423], name: "Sittard", theme: "historic" },
  { id: "nl-sneek", parent: "NL-FR", coords: [5.661103, 53.033548], name: "Sneek", theme: "water" },
  { id: "nl-steenwijk", parent: "NL-OV", coords: [6.121048, 52.78955], name: "Steenwijk", theme: "fortified" },
  { id: "nl-terneuzen", parent: "NL-ZE", coords: [3.842204, 51.298843], name: "Terneuzen", theme: "port" },
  { id: "nl-tiel", parent: "NL-GE", coords: [5.437268, 51.887433], name: "Tiel", theme: "fruit" },
  { id: "nl-uithoorn", parent: "NL-NH", coords: [4.828161, 52.244003], name: "Uithoorn", theme: "water" },
  { id: "nl-urk", parent: "NL-FL", coords: [5.598789, 52.665452], name: "Urk", theme: "island" },
  { id: "nl-valkenburg", parent: "NL-LI", coords: [5.831252, 50.864753], name: "Valkenburg", theme: "tourism" },
  { id: "nl-veere", parent: "NL-ZE", coords: [3.577269, 51.556404], name: "Veere", theme: "historic" },
  { id: "nl-venlo", parent: "NL-LI", coords: [6.151172, 51.392449], name: "Venlo", theme: "border" },
  { id: "nl-vlissingen", parent: "NL-ZE", coords: [3.415006, 51.494339], name: "Vlissingen", theme: "port" },
  { id: "nl-wageningen", parent: "NL-GE", coords: [5.668298, 51.968582], name: "Wageningen", theme: "university" },
  { id: "nl-weert", parent: "NL-LI", coords: [5.70508, 51.235583], name: "Weert", theme: "historic" },
  { id: "nl-woerden", parent: "NL-UT", coords: [4.883294, 52.085926], name: "Woerden", theme: "cheese" },
  { id: "nl-yerseke", parent: "NL-ZE", coords: [4.04525, 51.493579], name: "Yerseke", theme: "seafood" },
  { id: "nl-zeist", parent: "NL-UT", coords: [5.227631, 52.089283], name: "Zeist", theme: "royal" },
  { id: "nl-zierikzee", parent: "NL-ZE", coords: [3.920837, 51.649769], name: "Zierikzee", theme: "historic" },
  { id: "nl-zeewolde", parent: "NL-FL", coords: [5.543031, 52.331111], name: "Zeewolde", theme: "polder" },
  { id: "nl-zutphen", parent: "NL-GE", coords: [6.194772, 52.139693], name: "Zutphen", theme: "historic" },
  { id: "nl-wijk-bij-duurstede", parent: "NL-UT", coords: [5.337435, 51.975186], name: "Wijk bij Duurstede", theme: "historic" },
  { id: "nl-goirle", parent: "NL-NB", coords: [5.033774, 51.505627], name: "Goirle", theme: "nature" },
  { id: "nl-houten", parent: "NL-UT", coords: [5.162064, 52.027143], name: "Houten", theme: "new-town" },
  { id: "nl-ijsselstein", parent: "NL-UT", coords: [5.028686, 52.026205], name: "IJsselstein", theme: "historic" },
  { id: "nl-lochem", parent: "NL-GE", coords: [6.343658, 52.171513], name: "Lochem", theme: "nature" },
  { id: "nl-nijkerk", parent: "NL-GE", coords: [5.478146, 52.214854], name: "Nijkerk", theme: "market" },
  { id: "nl-oldebroek", parent: "NL-GE", coords: [5.951864, 52.456736], name: "Oldebroek", theme: "nature" },
  { id: "nl-rijswijk", parent: "NL-ZH", coords: [4.322503, 52.037393], name: "Rijswijk", theme: "suburb" },
];

export const netherlandsCityExtras: POI[] = settlementRows.map(buildSettlementPoi);

