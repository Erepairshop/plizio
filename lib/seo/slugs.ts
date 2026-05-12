import { pois as dePois, regions as deRegions, type POI } from "@/lib/visualLab/data/poi";
import { romaniaAllPois, romaniaRegions } from "@/lib/visualLab/data/romaniaPoi";
import { hungaryAllPoi, hungaryRegions } from "@/lib/visualLab/data/hungaryPoi";
import { vaticanPois, vaticanCountry } from "@/lib/visualLab/data/vaticanPoi";
import { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS } from "@/lib/visualLab/data/allCountryPois";
import { slugify } from "@/lib/seo/slugify";

export type Lang = "de" | "hu" | "ro" | "en";

export const SUPPORTED_LANGS: Lang[] = ["de", "hu", "ro", "en"];

function isDefinedPoi(poi: POI | null | undefined): poi is POI {
  return Boolean(poi && poi.id && poi.name && poi.type);
}

// Base: DE + RO + HU + Vatican (explicit, for backward compat).
// Plus: all other countries via ALL_COUNTRY_POIS aggregate.
// De-duplicate by id (RO/HU/Vatican already in the aggregate list too, keep first occurrence).
const _poiById = new Map<string, POI>();
for (const p of [...dePois, ...ALL_DE_EXTRA_POIS, ...romaniaAllPois, ...hungaryAllPoi, vaticanCountry, ...vaticanPois, ...ALL_COUNTRY_POIS]) {
  if (p && p.id && !_poiById.has(p.id)) _poiById.set(p.id, p);
}
// GPS-alapú dedup: ha 2 POI ugyanazon koordinátán (~50m radius), keep az elsőt.
// Az "ugyanaz a hely más ID-val" Google-szempontból Soft-404 duplicate canonical.
// Region/country típusokat hagyjuk (ezek admin határok, lehetnek "egymáson").
function poiCoords(p: POI): [number, number] | null {
  if (p.coords && p.coords.length >= 2) return [Number(p.coords[0]), Number(p.coords[1])];
  const c = (p as { coordinates?: { lat: number; lng: number } }).coordinates;
  if (c && typeof c.lat === "number" && typeof c.lng === "number") return [c.lng, c.lat];
  return null;
}
const _seenCoords = new Map<string, string>(); // bucket-key -> first poi-id
const _dedupedPois: POI[] = [];
for (const p of _poiById.values()) {
  if (!p || p.type === "region" || p.type === "country") {
    _dedupedPois.push(p);
    continue;
  }
  const xy = poiCoords(p);
  if (!xy) {
    _dedupedPois.push(p);
    continue;
  }
  // Bucket at ~0.0005° (~50m latitude). Same bucket = same place.
  const key = `${Math.round(xy[1] / 0.0005)}:${Math.round(xy[0] / 0.0005)}`;
  if (_seenCoords.has(key)) continue;
  _seenCoords.set(key, p.id);
  _dedupedPois.push(p);
}
export const pois = _dedupedPois;
const _regionById = new Map<string, POI>();
for (const r of [...deRegions, ...romaniaRegions, ...hungaryRegions]) {
  if (r && r.id && !_regionById.has(r.id)) _regionById.set(r.id, r);
}
for (const p of pois) {
  if (p && (p.type === "region" || p.type === "country") && !_regionById.has(p.id)) {
    _regionById.set(p.id, p);
  }
}
export const regions = Array.from(_regionById.values());

export const COUNTRY_SLUGS: Record<string, Record<Lang, string>> = {
  germany: {
    de: "deutschland",
    hu: "nemetorszag",
    ro: "germania",
    en: "germany",
  },
  romania: {
    de: "rumaenien",
    hu: "romania",
    ro: "romania",
    en: "romania",
  },
  hungary: {
    de: "ungarn",
    hu: "magyarorszag",
    ro: "ungaria",
    en: "hungary",
  },
  vatican: {
    de: "vatikanstadt",
    hu: "vatikan",
    ro: "vatican",
    en: "vatican",
  },
  // Additional EU countries (auto-generated, ISO2 lowercase + localized variants)
  austria:        { de: "oesterreich", hu: "ausztria", ro: "austria", en: "austria" },
  switzerland:    { de: "schweiz", hu: "svajc", ro: "elvetia", en: "switzerland" },
  france:         { de: "frankreich", hu: "franciaorszag", ro: "franta", en: "france" },
  italy:          { de: "italien", hu: "olaszorszag", ro: "italia", en: "italy" },
  spain:          { de: "spanien", hu: "spanyolorszag", ro: "spania", en: "spain" },
  portugal:       { de: "portugal", hu: "portugalia", ro: "portugalia", en: "portugal" },
  netherlands:    { de: "niederlande", hu: "hollandia", ro: "olanda", en: "netherlands" },
  belgium:        { de: "belgien", hu: "belgium", ro: "belgia", en: "belgium" },
  luxembourg:     { de: "luxemburg", hu: "luxemburg", ro: "luxemburg", en: "luxembourg" },
  "united-kingdom": { de: "vereinigtes-koenigreich", hu: "egyesult-kiralysag", ro: "regatul-unit", en: "united-kingdom" },
  ireland:        { de: "irland", hu: "irorszag", ro: "irlanda", en: "ireland" },
  poland:         { de: "polen", hu: "lengyelorszag", ro: "polonia", en: "poland" },
  "czech-republic": { de: "tschechien", hu: "csehorszag", ro: "cehia", en: "czech-republic" },
  slovakia:       { de: "slowakei", hu: "szlovakia", ro: "slovacia", en: "slovakia" },
  slovenia:       { de: "slowenien", hu: "szlovenia", ro: "slovenia", en: "slovenia" },
  croatia:        { de: "kroatien", hu: "horvatorszag", ro: "croatia", en: "croatia" },
  serbia:         { de: "serbien", hu: "szerbia", ro: "serbia", en: "serbia" },
  bosnia:         { de: "bosnien", hu: "bosznia", ro: "bosnia", en: "bosnia" },
  montenegro:     { de: "montenegro", hu: "montenegro", ro: "muntenegru", en: "montenegro" },
  "north-macedonia": { de: "nordmazedonien", hu: "eszak-macedonia", ro: "macedonia-de-nord", en: "north-macedonia" },
  albania:        { de: "albanien", hu: "albania", ro: "albania", en: "albania" },
  kosovo:         { de: "kosovo", hu: "koszovo", ro: "kosovo", en: "kosovo" },
  bulgaria:       { de: "bulgarien", hu: "bulgaria", ro: "bulgaria", en: "bulgaria" },
  greece:         { de: "griechenland", hu: "gorogorszag", ro: "grecia", en: "greece" },
  turkey:         { de: "tuerkei", hu: "torokorszag", ro: "turcia", en: "turkey" },
  cyprus:         { de: "zypern", hu: "ciprus", ro: "cipru", en: "cyprus" },
  malta:          { de: "malta", hu: "malta", ro: "malta", en: "malta" },
  denmark:        { de: "daenemark", hu: "dania", ro: "danemarca", en: "denmark" },
  norway:         { de: "norwegen", hu: "norvegia", ro: "norvegia", en: "norway" },
  sweden:         { de: "schweden", hu: "svedorszag", ro: "suedia", en: "sweden" },
  finland:        { de: "finnland", hu: "finnorszag", ro: "finlanda", en: "finland" },
  iceland:        { de: "island", hu: "izland", ro: "islanda", en: "iceland" },
  estonia:        { de: "estland", hu: "esztorszag", ro: "estonia", en: "estonia" },
  latvia:         { de: "lettland", hu: "lettorszag", ro: "letonia", en: "latvia" },
  lithuania:      { de: "litauen", hu: "litvania", ro: "lituania", en: "lithuania" },
  belarus:        { de: "belarus", hu: "feheroroszorszag", ro: "belarus", en: "belarus" },
  ukraine:        { de: "ukraine", hu: "ukrajna", ro: "ucraina", en: "ukraine" },
  moldova:        { de: "moldau", hu: "moldova", ro: "moldova", en: "moldova" },
  andorra:        { de: "andorra", hu: "andorra", ro: "andorra", en: "andorra" },
  monaco:         { de: "monaco", hu: "monaco", ro: "monaco", en: "monaco" },
  "san-marino":   { de: "san-marino", hu: "san-marino", ro: "san-marino", en: "san-marino" },
  liechtenstein:  { de: "liechtenstein", hu: "liechtenstein", ro: "liechtenstein", en: "liechtenstein" },
  // North America
  usa:            { de: "usa", hu: "amerikai-egyesult-allamok", ro: "sua", en: "usa" },
  canada:         { de: "kanada", hu: "kanada", ro: "canada", en: "canada" },
  mexico:         { de: "mexiko", hu: "mexiko", ro: "mexic", en: "mexico" },
  guatemala:      { de: "guatemala", hu: "guatemala", ro: "guatemala", en: "guatemala" },
  honduras:       { de: "honduras", hu: "honduras", ro: "honduras", en: "honduras" },
  nicaragua:      { de: "nicaragua", hu: "nicaragua", ro: "nicaragua", en: "nicaragua" },
  "costa-rica":   { de: "costa-rica", hu: "costa-rica", ro: "costa-rica", en: "costa-rica" },
  panama:         { de: "panama", hu: "panama", ro: "panama", en: "panama" },
  cuba:           { de: "kuba", hu: "kuba", ro: "cuba", en: "cuba" },
  "dominican-republic": { de: "dominikanische-republik", hu: "dominikai-koztarsasag", ro: "republica-dominicana", en: "dominican-republic" },
  haiti:          { de: "haiti", hu: "haiti", ro: "haiti", en: "haiti" },
  jamaica:        { de: "jamaika", hu: "jamaica", ro: "jamaica", en: "jamaica" },
  bahamas:        { de: "bahamas", hu: "bahamak", ro: "bahamas", en: "bahamas" },
  trinidad:       { de: "trinidad-und-tobago", hu: "trinidad-es-tobago", ro: "trinidad-tobago", en: "trinidad-tobago" },
  belize:         { de: "belize", hu: "belize", ro: "belize", en: "belize" },
  "el-salvador":  { de: "el-salvador", hu: "el-salvador", ro: "el-salvador", en: "el-salvador" },
  // South America (covered via templateCopy/COUNTRY_NAMES if missing)
  argentina:      { de: "argentinien", hu: "argentina", ro: "argentina", en: "argentina" },
  brazil:         { de: "brasilien", hu: "brazilia", ro: "brazilia", en: "brazil" },
  chile:          { de: "chile", hu: "chile", ro: "chile", en: "chile" },
  colombia:       { de: "kolumbien", hu: "kolumbia", ro: "columbia", en: "colombia" },
  venezuela:      { de: "venezuela", hu: "venezuela", ro: "venezuela", en: "venezuela" },
  peru:           { de: "peru", hu: "peru", ro: "peru", en: "peru" },
  ecuador:        { de: "ecuador", hu: "ecuador", ro: "ecuador", en: "ecuador" },
  bolivia:        { de: "bolivien", hu: "bolivia", ro: "bolivia", en: "bolivia" },
  paraguay:       { de: "paraguay", hu: "paraguay", ro: "paraguay", en: "paraguay" },
  uruguay:        { de: "uruguay", hu: "uruguay", ro: "uruguay", en: "uruguay" },
  guyana:         { de: "guyana", hu: "guyana", ro: "guyana", en: "guyana" },
  suriname:       { de: "suriname", hu: "suriname", ro: "suriname", en: "suriname" },
  // Asia
  japan:          { de: "japan", hu: "japan", ro: "japonia", en: "japan" },
  thailand:       { de: "thailand", hu: "thaifold", ro: "thailanda", en: "thailand" },
  vietnam:        { de: "vietnam", hu: "vietnam", ro: "vietnam", en: "vietnam" },
  china:          { de: "china", hu: "kina", ro: "china", en: "china" },
  india:          { de: "indien", hu: "india", ro: "india", en: "india" },
  indonesia:      { de: "indonesien", hu: "indonezia", ro: "indonezia", en: "indonesia" },
  philippines:    { de: "philippinen", hu: "fulop-szigetek", ro: "filipine", en: "philippines" },
  malaysia:       { de: "malaysia", hu: "malajzia", ro: "malaezia", en: "malaysia" },
  singapore:      { de: "singapur", hu: "szingapur", ro: "singapore", en: "singapore" },
  "south-korea":  { de: "suedkorea", hu: "del-korea", ro: "coreea-de-sud", en: "south-korea" },
  "north-korea":  { de: "nordkorea", hu: "eszak-korea", ro: "coreea-de-nord", en: "north-korea" },
  taiwan:         { de: "taiwan", hu: "tajvan", ro: "taiwan", en: "taiwan" },
  mongolia:       { de: "mongolei", hu: "mongolia", ro: "mongolia", en: "mongolia" },
  kazakhstan:     { de: "kasachstan", hu: "kazahsztan", ro: "kazahstan", en: "kazakhstan" },
  uzbekistan:     { de: "usbekistan", hu: "uzbegisztan", ro: "uzbekistan", en: "uzbekistan" },
  turkmenistan:   { de: "turkmenistan", hu: "turkmenisztan", ro: "turkmenistan", en: "turkmenistan" },
  kyrgyzstan:     { de: "kirgisistan", hu: "kirgizisztan", ro: "kargazstan", en: "kyrgyzstan" },
  tajikistan:     { de: "tadschikistan", hu: "tadzsikisztan", ro: "tadjikistan", en: "tajikistan" },
  afghanistan:    { de: "afghanistan", hu: "afganisztan", ro: "afganistan", en: "afghanistan" },
  pakistan:       { de: "pakistan", hu: "pakisztan", ro: "pakistan", en: "pakistan" },
  bangladesh:     { de: "bangladesch", hu: "banglades", ro: "bangladesh", en: "bangladesh" },
  "sri-lanka":    { de: "sri-lanka", hu: "sri-lanka", ro: "sri-lanka", en: "sri-lanka" },
  nepal:          { de: "nepal", hu: "nepal", ro: "nepal", en: "nepal" },
  bhutan:         { de: "bhutan", hu: "bhutan", ro: "bhutan", en: "bhutan" },
  myanmar:        { de: "myanmar", hu: "mianmar", ro: "myanmar", en: "myanmar" },
  cambodia:       { de: "kambodscha", hu: "kambodzsa", ro: "cambodgia", en: "cambodia" },
  laos:           { de: "laos", hu: "laosz", ro: "laos", en: "laos" },
  iran:           { de: "iran", hu: "iran", ro: "iran", en: "iran" },
  iraq:           { de: "irak", hu: "irak", ro: "irak", en: "iraq" },
  syria:          { de: "syrien", hu: "szíria", ro: "siria", en: "syria" },
  lebanon:        { de: "libanon", hu: "libanon", ro: "liban", en: "lebanon" },
  jordan:         { de: "jordanien", hu: "jordania", ro: "iordania", en: "jordan" },
  israel:         { de: "israel", hu: "izrael", ro: "israel", en: "israel" },
  palestine:      { de: "palaestina", hu: "palesztina", ro: "palestina", en: "palestine" },
  "saudi-arabia": { de: "saudi-arabien", hu: "szaud-arabia", ro: "arabia-saudita", en: "saudi-arabia" },
  yemen:          { de: "jemen", hu: "jemen", ro: "yemen", en: "yemen" },
  oman:           { de: "oman", hu: "oman", ro: "oman", en: "oman" },
  qatar:          { de: "katar", hu: "katar", ro: "qatar", en: "qatar" },
  bahrain:        { de: "bahrain", hu: "bahrein", ro: "bahrain", en: "bahrain" },
  kuwait:         { de: "kuwait", hu: "kuvait", ro: "kuwait", en: "kuwait" },
  "united-arab-emirates": { de: "vereinigte-arabische-emirate", hu: "egyesult-arab-emirsegek", ro: "emiratele-arabe-unite", en: "united-arab-emirates" },
  azerbaijan:     { de: "aserbaidschan", hu: "azerbajdzsan", ro: "azerbaidjan", en: "azerbaijan" },
  armenia:        { de: "armenien", hu: "ormenyorszag", ro: "armenia", en: "armenia" },
  georgia:        { de: "georgien", hu: "grúzia", ro: "georgia", en: "georgia" },
  "timor-leste":  { de: "osttimor", hu: "kelet-timor", ro: "timorul-de-est", en: "timor-leste" },
  brunei:         { de: "brunei", hu: "brunei", ro: "brunei", en: "brunei" },
  maldives:       { de: "malediven", hu: "maldiv-szigetek", ro: "maldive", en: "maldives" },
  // Africa
  algeria:        { de: "algerien", hu: "algeria", ro: "algeria", en: "algeria" },
  angola:         { de: "angola", hu: "angola", ro: "angola", en: "angola" },
  benin:          { de: "benin", hu: "benin", ro: "benin", en: "benin" },
  botswana:       { de: "botsuana", hu: "botswana", ro: "botswana", en: "botswana" },
  "burkina-faso": { de: "burkina-faso", hu: "burkina-faso", ro: "burkina-faso", en: "burkina-faso" },
  burundi:        { de: "burundi", hu: "burundi", ro: "burundi", en: "burundi" },
  cameroon:       { de: "kamerun", hu: "kamerun", ro: "camerun", en: "cameroon" },
  "cape-verde":   { de: "kap-verde", hu: "zold-foki-koztarsasag", ro: "capul-verde", en: "cape-verde" },
  "central-african-republic": { de: "zentralafrikanische-republik", hu: "kozep-afrikai-koztarsasag", ro: "republica-centrafricana", en: "central-african-republic" },
  chad:           { de: "tschad", hu: "csad", ro: "ciad", en: "chad" },
  comoros:        { de: "komoren", hu: "comore-szigetek", ro: "comore", en: "comoros" },
  congo:          { de: "kongo", hu: "kongoi-koztarsasag", ro: "republica-congo", en: "congo" },
  "democratic-republic-of-congo": { de: "demokratische-republik-kongo", hu: "kongoi-demokratikus-koztarsasag", ro: "republica-democrata-congo", en: "democratic-republic-of-congo" },
  djibouti:       { de: "dschibuti", hu: "dzsibuti", ro: "djibouti", en: "djibouti" },
  egypt:          { de: "aegypten", hu: "egyiptom", ro: "egipt", en: "egypt" },
  "equatorial-guinea": { de: "aequatorialguinea", hu: "egyenlitoi-guinea", ro: "guineea-ecuatoriala", en: "equatorial-guinea" },
  eritrea:        { de: "eritrea", hu: "eritrea", ro: "eritreea", en: "eritrea" },
  eswatini:       { de: "eswatini", hu: "szvazifold", ro: "eswatini", en: "eswatini" },
  ethiopia:       { de: "aethiopien", hu: "etiopia", ro: "etiopia", en: "ethiopia" },
  gabon:          { de: "gabun", hu: "gabon", ro: "gabon", en: "gabon" },
  gambia:         { de: "gambia", hu: "gambia", ro: "gambia", en: "gambia" },
  ghana:          { de: "ghana", hu: "ghana", ro: "ghana", en: "ghana" },
  guinea:         { de: "guinea", hu: "guinea", ro: "guineea", en: "guinea" },
  "guinea-bissau":{ de: "guinea-bissau", hu: "bissau-guinea", ro: "guineea-bissau", en: "guinea-bissau" },
  "ivory-coast":  { de: "elfenbeinkueste", hu: "elefantcsontpart", ro: "coasta-de-fildes", en: "ivory-coast" },
  kenya:          { de: "kenia", hu: "kenya", ro: "kenya", en: "kenya" },
  lesotho:        { de: "lesotho", hu: "lesotho", ro: "lesotho", en: "lesotho" },
  liberia:        { de: "liberia", hu: "liberia", ro: "liberia", en: "liberia" },
  libya:          { de: "libyen", hu: "libia", ro: "libia", en: "libya" },
  madagascar:     { de: "madagaskar", hu: "madagaszkar", ro: "madagascar", en: "madagascar" },
  malawi:         { de: "malawi", hu: "malawi", ro: "malawi", en: "malawi" },
  mali:           { de: "mali", hu: "mali", ro: "mali", en: "mali" },
  mauritania:     { de: "mauretanien", hu: "mauritania", ro: "mauritania", en: "mauritania" },
  mauritius:      { de: "mauritius", hu: "mauritius", ro: "mauritius", en: "mauritius" },
  morocco:        { de: "marokko", hu: "marokko", ro: "maroc", en: "morocco" },
  mozambique:     { de: "mosambik", hu: "mozambik", ro: "mozambic", en: "mozambique" },
  namibia:        { de: "namibia", hu: "namibia", ro: "namibia", en: "namibia" },
  niger:          { de: "niger", hu: "niger", ro: "niger", en: "niger" },
  nigeria:        { de: "nigeria", hu: "nigeria", ro: "nigeria", en: "nigeria" },
  rwanda:         { de: "ruanda", hu: "ruanda", ro: "rwanda", en: "rwanda" },
  "sao-tome-and-principe": { de: "sao-tome-und-principe", hu: "sao-tome-es-principe", ro: "sao-tome-si-principe", en: "sao-tome-and-principe" },
  senegal:        { de: "senegal", hu: "szenegal", ro: "senegal", en: "senegal" },
  seychelles:     { de: "seychellen", hu: "seychelle-szigetek", ro: "seychelles", en: "seychelles" },
  "sierra-leone": { de: "sierra-leone", hu: "sierra-leone", ro: "sierra-leone", en: "sierra-leone" },
  somalia:        { de: "somalia", hu: "szomalia", ro: "somalia", en: "somalia" },
  "south-africa": { de: "suedafrika", hu: "del-afrika", ro: "africa-de-sud", en: "south-africa" },
  "south-sudan":  { de: "suedsudan", hu: "del-szudan", ro: "sudanul-de-sud", en: "south-sudan" },
  sudan:          { de: "sudan", hu: "szudan", ro: "sudan", en: "sudan" },
  tanzania:       { de: "tansania", hu: "tanzania", ro: "tanzania", en: "tanzania" },
  togo:           { de: "togo", hu: "togo", ro: "togo", en: "togo" },
  tunisia:        { de: "tunesien", hu: "tunezia", ro: "tunisia", en: "tunisia" },
  uganda:         { de: "uganda", hu: "uganda", ro: "uganda", en: "uganda" },
  zambia:         { de: "sambia", hu: "zambia", ro: "zambia", en: "zambia" },
  zimbabwe:       { de: "simbabwe", hu: "zimbabwe", ro: "zimbabwe", en: "zimbabwe" },
  // Oceania
  australia:      { de: "australien", hu: "ausztralia", ro: "australia", en: "australia" },
  "new-zealand":  { de: "neuseeland", hu: "uj-zeland", ro: "noua-zeelanda", en: "new-zealand" },
  fiji:           { de: "fidschi", hu: "fidzsi", ro: "fiji", en: "fiji" },
  "papua-new-guinea": { de: "papua-neuguinea", hu: "papua-uj-guinea", ro: "papua-noua-guinee", en: "papua-new-guinea" },
};

export const STATE_SLUGS: Record<string, Record<Lang, string>> = {
  // Germany
  "DE-BW": { de: "baden-wuerttemberg", hu: "baden-wurttemberg", ro: "baden-wurttemberg", en: "baden-wurttemberg" },
  "DE-BY": { de: "bayern", hu: "bajororszag", ro: "bavaria", en: "bavaria" },
  "DE-BE": { de: "berlin", hu: "berlin", ro: "berlin", en: "berlin" },
  "DE-BB": { de: "brandenburg", hu: "brandenburg", ro: "brandenburg", en: "brandenburg" },
  "DE-HB": { de: "bremen", hu: "brema", ro: "bremen", en: "bremen" },
  "DE-HH": { de: "hamburg", hu: "hamburg", ro: "hamburg", en: "hamburg" },
  "DE-HE": { de: "hessen", hu: "hessen", ro: "hessa", en: "hesse" },
  "DE-MV": { de: "mecklenburg-vorpommern", hu: "mecklenburg-elo-pomerania", ro: "mecklenburg-pomerania-inferioara", en: "mecklenburg-western-pomerania" },
  "DE-NI": { de: "niedersachsen", hu: "also-szaszorszag", ro: "saxonia-inferioara", en: "lower-saxony" },
  "DE-NW": { de: "nordrhein-westfalen", hu: "eszak-rajna-vesztfalia", ro: "renania-de-nord-westfalia", en: "north-rhine-westphalia" },
  "DE-RP": { de: "rheinland-pfalz", hu: "rajna-videk-pfalz", ro: "renania-palatinat", en: "rhineland-palatinate" },
  "DE-SL": { de: "saarland", hu: "saar-videk", ro: "saarland", en: "saarland" },
  "DE-SN": { de: "sachsen", hu: "szaszorszag", ro: "saxonia", en: "saxony" },
  "DE-ST": { de: "sachsen-anhalt", hu: "szasz-anhalt", ro: "saxonia-anhalt", en: "saxony-anhalt" },
  "DE-SH": { de: "schleswig-holstein", hu: "schleswig-holstein", ro: "schleswig-holstein", en: "schleswig-holstein" },
  "DE-TH": { de: "thueringen", hu: "turingia", ro: "turingia", en: "thuringia" },
  // Romania - Using IDs as slugs as requested
  "RO-AB": { de: "ro-ab", hu: "ro-ab", ro: "ro-ab", en: "ro-ab" },
  "RO-AG": { de: "ro-ag", hu: "ro-ag", ro: "ro-ag", en: "ro-ag" },
  "RO-AR": { de: "ro-ar", hu: "ro-ar", ro: "ro-ar", en: "ro-ar" },
  "RO-B": { de: "ro-b", hu: "ro-b", ro: "ro-b", en: "ro-b" },
  "RO-BC": { de: "ro-bc", hu: "ro-bc", ro: "ro-bc", en: "ro-bc" },
  "RO-BH": { de: "ro-bh", hu: "ro-bh", ro: "ro-bh", en: "ro-bh" },
  "RO-BN": { de: "ro-bn", hu: "ro-bn", ro: "ro-bn", en: "ro-bn" },
  "RO-BR": { de: "ro-br", hu: "ro-br", ro: "ro-br", en: "ro-br" },
  "RO-BT": { de: "ro-bt", hu: "ro-bt", ro: "ro-bt", en: "ro-bt" },
  "RO-BV": { de: "ro-bv", hu: "ro-bv", ro: "ro-bv", en: "ro-bv" },
  "RO-BZ": { de: "ro-bz", hu: "ro-bz", ro: "ro-bz", en: "ro-bz" },
  "RO-CJ": { de: "ro-cj", hu: "ro-cj", ro: "ro-cj", en: "ro-cj" },
  "RO-CL": { de: "ro-cl", hu: "ro-cl", ro: "ro-cl", en: "ro-cl" },
  "RO-CS": { de: "ro-cs", hu: "ro-cs", ro: "ro-cs", en: "ro-cs" },
  "RO-CT": { de: "ro-ct", hu: "ro-ct", ro: "ro-ct", en: "ro-ct" },
  "RO-CV": { de: "ro-cv", hu: "ro-cv", ro: "ro-cv", en: "ro-cv" },
  "RO-DB": { de: "ro-db", hu: "ro-db", ro: "ro-db", en: "ro-db" },
  "RO-DJ": { de: "ro-dj", hu: "ro-dj", ro: "ro-dj", en: "ro-dj" },
  "RO-GJ": { de: "ro-gj", hu: "ro-gj", ro: "ro-gj", en: "ro-gj" },
  "RO-GL": { de: "ro-gl", hu: "ro-gl", ro: "ro-gl", en: "ro-gl" },
  "RO-GR": { de: "ro-gr", hu: "ro-gr", ro: "ro-gr", en: "ro-gr" },
  "RO-HD": { de: "ro-hd", hu: "ro-hd", ro: "ro-hd", en: "ro-hd" },
  "RO-HR": { de: "ro-hr", hu: "ro-hr", ro: "ro-hr", en: "ro-hr" },
  "RO-IF": { de: "ro-if", hu: "ro-if", ro: "ro-if", en: "ro-if" },
  "RO-IL": { de: "ro-il", hu: "ro-il", ro: "ro-il", en: "ro-il" },
  "RO-IS": { de: "ro-is", hu: "ro-is", ro: "ro-is", en: "ro-is" },
  "RO-MH": { de: "ro-mh", hu: "ro-mh", ro: "ro-mh", en: "ro-mh" },
  "RO-MM": { de: "ro-mm", hu: "ro-mm", ro: "ro-mm", en: "ro-mm" },
  "RO-MS": { de: "ro-ms", hu: "ro-ms", ro: "ro-ms", en: "ro-ms" },
  "RO-NT": { de: "ro-nt", hu: "ro-nt", ro: "ro-nt", en: "ro-nt" },
  "RO-OT": { de: "ro-ot", hu: "ro-ot", ro: "ro-ot", en: "ro-ot" },
  "RO-PH": { de: "ro-ph", hu: "ro-ph", ro: "ro-ph", en: "ro-ph" },
  "RO-SB": { de: "ro-sb", hu: "ro-sb", ro: "ro-sb", en: "ro-sb" },
  "RO-SJ": { de: "ro-sj", hu: "ro-sj", ro: "ro-sj", en: "ro-sj" },
  "RO-SM": { de: "ro-sm", hu: "ro-sm", ro: "ro-sm", en: "ro-sm" },
  "RO-SV": { de: "ro-sv", hu: "ro-sv", ro: "ro-sv", en: "ro-sv" },
  "RO-TL": { de: "ro-tl", hu: "ro-tl", ro: "ro-tl", en: "ro-tl" },
  "RO-TM": { de: "ro-tm", hu: "ro-tm", ro: "ro-tm", en: "ro-tm" },
  "RO-TR": { de: "ro-tr", hu: "ro-tr", ro: "ro-tr", en: "ro-tr" },
  "RO-VL": { de: "ro-vl", hu: "ro-vl", ro: "ro-vl", en: "ro-vl" },
  "RO-VN": { de: "ro-vn", hu: "ro-vn", ro: "ro-vn", en: "ro-vn" },
  "RO-VS": { de: "ro-vs", hu: "ro-vs", ro: "ro-vs", en: "ro-vs" },
  // Hungary
  "budapest": { de: "budapest", hu: "budapest", ro: "budapest", en: "budapest" },
  "baranya": { de: "baranya", hu: "baranya", ro: "baranya", en: "baranya" },
  "bacs-kiskun": { de: "bacs-kiskun", hu: "bacs-kiskun", ro: "bacs-kiskun", en: "bacs-kiskun" },
  "bekes": { de: "bekes", hu: "bekes", ro: "bekes", en: "bekes" },
  "borsod-abauj-zemplen": { de: "borsod-abauj-zemplen", hu: "borsod-abauj-zemplen", ro: "borsod-abauj-zemplen", en: "borsod-abauj-zemplen" },
  "csongrad-csanad": { de: "csongrad-csanad", hu: "csongrad-csanad", ro: "csongrad-csanad", en: "csongrad-csanad" },
  "fejer": { de: "fejer", hu: "fejer", ro: "fejer", en: "fejer" },
  "gyor-moson-sopron": { de: "gyor-moson-sopron", hu: "gyor-moson-sopron", ro: "gyor-moson-sopron", en: "gyor-moson-sopron" },
  "hajdu-bihar": { de: "hajdu-bihar", hu: "hajdu-bihar", ro: "hajdu-bihar", en: "hajdu-bihar" },
  "heves": { de: "heves", hu: "heves", ro: "heves", en: "heves" },
  "jasz-nagykun-szolnok": { de: "jasz-nagykun-szolnok", hu: "jasz-nagykun-szolnok", ro: "jasz-nagykun-szolnok", en: "jasz-nagykun-szolnok" },
  "komarom-esztergom": { de: "komarom-esztergom", hu: "komarom-esztergom", ro: "komarom-esztergom", en: "komarom-esztergom" },
  "nograd": { de: "nograd", hu: "nograd", ro: "nograd", en: "nograd" },
  "pest": { de: "pest", hu: "pest", ro: "pest", en: "pest" },
  "somogy": { de: "somogy", hu: "somogy", ro: "somogy", en: "somogy" },
  "szabolcs-szatmar-bereg": { de: "szabolcs-szatmar-bereg", hu: "szabolcs-szatmar-bereg", ro: "szabolcs-szatmar-bereg", en: "szabolcs-szatmar-bereg" },
  "tolna": { de: "tolna", hu: "tolna", ro: "tolna", en: "tolna" },
  "vas": { de: "vas", hu: "vas", ro: "vas", en: "vas" },
  "veszprem": { de: "veszprem", hu: "veszprem", ro: "veszprem", en: "veszprem" },
  "zala": { de: "zala", hu: "zala", ro: "zala", en: "zala" },
};

export const REGION_BY_ID = new Map(
  regions.filter(isDefinedPoi).map((region) => [region.id, region])
);

const poisOnly = pois.filter((poi): poi is POI => isDefinedPoi(poi) && poi.type !== "region" && poi.type !== "country");
const poiIdByLangSlug = new Map<string, string>();

function slugKey(lang: Lang, slug: string) {
  return `${lang}:${slug}`;
}

function localizedPoiBaseSlug(poi: POI, lang: Lang) {
  return slugify(poi.name?.[lang] || poi.name?.de || poi.id);
}

function disambiguatedPoiSlug(poi: POI, lang: Lang) {
  const base = localizedPoiBaseSlug(poi, lang);
  const key = slugKey(lang, base);
  const existing = poiIdByLangSlug.get(key);
  if (!existing || existing === poi.id) {
    poiIdByLangSlug.set(key, poi.id);
    return base;
  }

  const fallback = slugify(`${poi.type}-${poi.name[lang] || poi.name.de || poi.id}`);
  poiIdByLangSlug.set(slugKey(lang, fallback), poi.id);
  return fallback;
}

export const POI_SLUGS: Record<string, Record<Lang, string>> = Object.fromEntries(
  poisOnly.map((poi) => [
    poi.id,
    Object.fromEntries(
      SUPPORTED_LANGS.map((lang) => [lang, disambiguatedPoiSlug(poi, lang)]),
    ) as Record<Lang, string>,
  ]),
);

export function poiSlug(poi: POI, lang: Lang) {
  return POI_SLUGS[poi.id]?.[lang] ?? localizedPoiBaseSlug(poi, lang);
}

export function findRegionByStateSlug(lang: Lang, stateSlug: string) {
  return regions.find((region): region is POI => isDefinedPoi(region) && stateSlugFor(region.id, lang) === stateSlug) ?? null;
}

export function findPoiBySlug(lang: Lang, poiSlugValue: string) {
  return poisOnly.find((poi): poi is POI => POI_SLUGS[poi.id]?.[lang] === poiSlugValue) ?? null;
}

// Map of ISO2/state-prefix to country-id (used as slug key in COUNTRY_SLUGS)
const ISO2_TO_COUNTRY: Record<string, string> = {
  DE: "germany", AT: "austria", CH: "switzerland", FR: "france", IT: "italy",
  ES: "spain", PT: "portugal", NL: "netherlands", BE: "belgium", LU: "luxembourg",
  GB: "united-kingdom", UK: "united-kingdom", IE: "ireland",
  PL: "poland", CZ: "czech-republic", SK: "slovakia",
  HU: "hungary", RO: "romania", SI: "slovenia", HR: "croatia",
  RS: "serbia", BA: "bosnia", ME: "montenegro", MK: "north-macedonia",
  AL: "albania", XK: "kosovo", BG: "bulgaria", GR: "greece",
  TR: "turkey", CY: "cyprus", MT: "malta",
  DK: "denmark", NO: "norway", SE: "sweden", FI: "finland", IS: "iceland",
  EE: "estonia", LV: "latvia", LT: "lithuania", BY: "belarus", UA: "ukraine", MD: "moldova",
  AD: "andorra", MC: "monaco", SM: "san-marino", LI: "liechtenstein", VA: "vatican",
  US: "usa", CA: "canada", MX: "mexico", GT: "guatemala", HN: "honduras",
  NI: "nicaragua", CR: "costa-rica", PA: "panama", CU: "cuba", DO: "dominican-republic",
  HT: "haiti", JM: "jamaica", BS: "bahamas", TT: "trinidad", BZ: "belize", SV: "el-salvador",
  // South America
  AR: "argentina", BR: "brazil", CL: "chile", CO: "colombia", VE: "venezuela",
  PE: "peru", EC: "ecuador", BO: "bolivia", PY: "paraguay", UY: "uruguay",
  GY: "guyana", SR: "suriname",
  // Asia
  JP: "japan", TH: "thailand", VN: "vietnam", CN: "china", IN: "india",
  ID: "indonesia", PH: "philippines", MY: "malaysia", SG: "singapore",
  KR: "south-korea", KP: "north-korea", TW: "taiwan", MN: "mongolia",
  KZ: "kazakhstan", UZ: "uzbekistan", TM: "turkmenistan", KG: "kyrgyzstan",
  TJ: "tajikistan", AF: "afghanistan", PK: "pakistan", BD: "bangladesh",
  LK: "sri-lanka", NP: "nepal", BT: "bhutan", MM: "myanmar", KH: "cambodia",
  LA: "laos", IR: "iran", IQ: "iraq", SY: "syria", LB: "lebanon",
  JO: "jordan", IL: "israel", PS: "palestine", SA: "saudi-arabia", YE: "yemen",
  OM: "oman", QA: "qatar", BH: "bahrain", KW: "kuwait", AE: "united-arab-emirates",
  AZ: "azerbaijan", AM: "armenia", GE: "georgia", TL: "timor-leste",
  BN: "brunei", MV: "maldives",
  // Africa
  DZ: "algeria", AO: "angola", BJ: "benin", BW: "botswana", BF: "burkina-faso",
  BI: "burundi", CM: "cameroon", CV: "cape-verde", CF: "central-african-republic",
  TD: "chad", KM: "comoros", CG: "congo", CD: "democratic-republic-of-congo",
  DJ: "djibouti", EG: "egypt", GQ: "equatorial-guinea", ER: "eritrea",
  SZ: "eswatini", ET: "ethiopia", GA: "gabon", GM: "gambia", GH: "ghana",
  GN: "guinea", GW: "guinea-bissau", CI: "ivory-coast", KE: "kenya",
  LS: "lesotho", LR: "liberia", LY: "libya", MG: "madagascar", MW: "malawi",
  ML: "mali", MR: "mauritania", MU: "mauritius", MA: "morocco", MZ: "mozambique",
  NA: "namibia", NE: "niger", NG: "nigeria", RW: "rwanda",
  ST: "sao-tome-and-principe", SN: "senegal", SC: "seychelles", SL: "sierra-leone",
  SO: "somalia", ZA: "south-africa", SS: "south-sudan", SD: "sudan",
  TZ: "tanzania", TG: "togo", TN: "tunisia", UG: "uganda", ZM: "zambia",
  ZW: "zimbabwe",
  // Oceania
  AU: "australia", NZ: "new-zealand", FJ: "fiji", PG: "papua-new-guinea",
};

// Compact (one-word) country-id alias -> kanonikus dashed slug
// (POI fajlnevek/aggregator-ok pl. drcongoAllPoi, sanmarinoPoi, saotomeAllPoi)
const COUNTRY_ID_ALIASES: Record<string, string> = {
  drcongo: "democratic-republic-of-congo",
  equatorialguinea: "equatorial-guinea",
  saotome: "sao-tome-and-principe",
  centralafricanrepublic: "central-african-republic",
  capeverde: "cape-verde",
  burkinafaso: "burkina-faso",
  ivorycoast: "ivory-coast",
  guineabissau: "guinea-bissau",
  sierraleone: "sierra-leone",
  southafrica: "south-africa",
  southsudan: "south-sudan",
  northmacedonia: "north-macedonia",
  northkorea: "north-korea",
  southkorea: "south-korea",
  costarica: "costa-rica",
  elsalvador: "el-salvador",
  dominicanrepublic: "dominican-republic",
  sanmarino: "san-marino",
  unitedkingdom: "united-kingdom",
  unitedarabemirates: "united-arab-emirates",
  saudiarabia: "saudi-arabia",
  srilanka: "sri-lanka",
  newzealand: "new-zealand",
  papuanewguinea: "papua-new-guinea",
  timorleste: "timor-leste",
  czechrepublic: "czech-republic",
  mk: "north-macedonia",
};

export function getCountryId(id: string) {
  if (!id) return "germany";
  // HU regions: legacy slug ("budapest", "fejer") VAGY uj parent="HU-XX" -> hungary
  const huMatch = regions.some(r => r.id === id && (r.parent === "HU" || r.parent?.startsWith("HU-")));
  if (huMatch) return "hungary";
  if (id.startsWith("country-")) {
    const rest = id.replace("country-", "");
    // direct match (pl. "albania", "san-marino")
    if (COUNTRY_SLUGS[rest]) return rest;
    // ISO2 fallback (pl. "country-mk" -> "MK" -> "north-macedonia")
    const iso2 = rest.toUpperCase();
    if (ISO2_TO_COUNTRY[iso2]) return ISO2_TO_COUNTRY[iso2];
    // Compact-name aliases (pl. "country-sanmarino" -> "san-marino", "country-drcongo" -> "democratic-republic-of-congo")
    const alias = COUNTRY_ID_ALIASES[rest];
    if (alias) return alias;
    return rest;
  }
  // Compact id passed directly (pl. parent="drcongo")
  const aliasDirect = COUNTRY_ID_ALIASES[id];
  if (aliasDirect) return aliasDirect;
  // Strip "XX-YY" prefix to get ISO2
  const iso2 = id.includes("-") ? id.split("-")[0].toUpperCase() : id.toUpperCase();
  return ISO2_TO_COUNTRY[iso2] ?? "germany";
}

export function countrySlugFor(lang: Lang, countryId: string = "germany") {
  return COUNTRY_SLUGS[countryId]?.[lang] ?? COUNTRY_SLUGS.germany[lang];
}

// HU: POI parent is "HU-XX" (ISO), but the URL slug is the legacy region.id (pl. "budapest", "pest")
const HU_PARENT_TO_SLUG = new Map<string, string>(
  hungaryRegions.filter(r => r.parent?.startsWith("HU-")).map(r => [r.parent!, r.id])
);
const HU_LEGACY_IDS = new Set<string>(hungaryRegions.map(r => r.id));

export function stateSlugFor(stateId: string, lang: Lang) {
  // HU ISO kod -> legacy slug (HU-FE -> "fejer")
  if (stateId.startsWith("HU-")) {
    const slug = HU_PARENT_TO_SLUG.get(stateId);
    if (slug) return slug;
  }
  // HU legacy id (pl "fejer") -> ugyanaz
  if (HU_LEGACY_IDS.has(stateId)) return stateId;
  return STATE_SLUGS[stateId]?.[lang] ?? slugify(REGION_BY_ID.get(stateId)?.name?.[lang] || REGION_BY_ID.get(stateId)?.name?.de || stateId);
}

export function getStateForPoi(poi: POI) {
  return poi.parent ? (REGION_BY_ID.get(poi.parent) ?? null) : null;
}

export function localizedStateName(stateId: string, lang: Lang) {
  const state = REGION_BY_ID.get(stateId);
  return state?.name?.[lang] || state?.name?.de || stateId;
}

export function buildCountryPath(lang: Lang, countryId: string = "germany") {
  return `/${lang}/${countrySlugFor(lang, countryId)}/`;
}

export function buildStatePath(lang: Lang, stateId: string) {
  const countryId = getCountryId(stateId);
  return `${buildCountryPath(lang, countryId)}${stateSlugFor(stateId, lang)}/`;
}

export function buildPoiPath(lang: Lang, poi: POI) {
  return `${buildStatePath(lang, poi.parent ?? "")}${poiSlug(poi, lang)}/`;
}

export function buildPoiPathById(lang: Lang, poiId: string) {
  const poi = poisOnly.find((entry) => entry.id === poiId);
  return poi ? buildPoiPath(lang, poi) : null;
}
