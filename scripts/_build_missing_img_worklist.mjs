// Build the worklist for _fetch_images_allsource_vps.py: every POI whose actual
// p.image file is NOT in the image manifest (missing or broken /geo-images ref).
// Output: [{id, name, parent:<country name>, coords:[lng,lat]}]
import fs from "node:fs";
import path from "node:path";

const D = path.resolve(process.cwd(), "public", "data");
const J = (f) => JSON.parse(fs.readFileSync(path.join(D, f), "utf8"));
const manifestFile = process.env.IMAGE_MANIFEST_FILE;
const manifestEntries = manifestFile
  ? fs.readFileSync(path.resolve(manifestFile), "utf8").split(/\r?\n/).filter(Boolean)
  : J("_image-manifest.json");
const imgSet = new Set(manifestEntries.map((f) => path.basename(f).replace(/\.webp$/i, "").toLowerCase()));
const imgOk = (image) => { if (!image) return false; const b = String(image).split("/").pop().replace(/\.webp$/i, "").toLowerCase(); return imgSet.has(b); };

// ISO2 -> English country name (parent for stock-API validation + name disambig).
const CC = {
  FR:"France",GB:"United Kingdom",DE:"Germany",HR:"Croatia",US:"United States",AU:"Australia",RO:"Romania",
  PH:"Philippines",JP:"Japan",CA:"Canada",GR:"Greece",IN:"India",HU:"Hungary",EE:"Estonia",AT:"Austria",
  NZ:"New Zealand",ID:"Indonesia",IE:"Ireland",TR:"Turkey",DK:"Denmark",NO:"Norway",TH:"Thailand",MX:"Mexico",
  DZ:"Algeria",SE:"Sweden",SB:"Solomon Islands",KR:"South Korea",LV:"Latvia",IT:"Italy",PG:"Papua New Guinea",
  ES:"Spain",PT:"Portugal",NL:"Netherlands",BE:"Belgium",PL:"Poland",CZ:"Czechia",SK:"Slovakia",SI:"Slovenia",
  CH:"Switzerland",FI:"Finland",IS:"Iceland",UA:"Ukraine",BY:"Belarus",RU:"Russia",RS:"Serbia",BA:"Bosnia and Herzegovina",
  ME:"Montenegro",MK:"North Macedonia",AL:"Albania",BG:"Bulgaria",MD:"Moldova",LT:"Lithuania",MT:"Malta",CY:"Cyprus",
  LU:"Luxembourg",AD:"Andorra",MC:"Monaco",SM:"San Marino",LI:"Liechtenstein",VA:"Vatican City",XK:"Kosovo",
  CN:"China",TW:"Taiwan",HK:"Hong Kong",VN:"Vietnam",MY:"Malaysia",SG:"Singapore",KH:"Cambodia",LA:"Laos",
  MM:"Myanmar",BD:"Bangladesh",LK:"Sri Lanka",NP:"Nepal",PK:"Pakistan",AF:"Afghanistan",IR:"Iran",IQ:"Iraq",
  SA:"Saudi Arabia",AE:"United Arab Emirates",QA:"Qatar",KW:"Kuwait",BH:"Bahrain",OM:"Oman",YE:"Yemen",JO:"Jordan",
  LB:"Lebanon",SY:"Syria",IL:"Israel",PS:"Palestine",GE:"Georgia",AM:"Armenia",AZ:"Azerbaijan",KZ:"Kazakhstan",
  UZ:"Uzbekistan",TM:"Turkmenistan",KG:"Kyrgyzstan",TJ:"Tajikistan",MN:"Mongolia",BT:"Bhutan",BN:"Brunei",
  TL:"Timor-Leste",MV:"Maldives",
  EG:"Egypt",MA:"Morocco",TN:"Tunisia",LY:"Libya",SD:"Sudan",SS:"South Sudan",ET:"Ethiopia",ER:"Eritrea",
  DJ:"Djibouti",SO:"Somalia",KE:"Kenya",TZ:"Tanzania",UG:"Uganda",RW:"Rwanda",BI:"Burundi",CD:"DR Congo",
  CG:"Republic of the Congo",GA:"Gabon",GQ:"Equatorial Guinea",CM:"Cameroon",CF:"Central African Republic",
  TD:"Chad",NE:"Niger",NG:"Nigeria",BJ:"Benin",TG:"Togo",GH:"Ghana",CI:"Ivory Coast",LR:"Liberia",SL:"Sierra Leone",
  GN:"Guinea",GW:"Guinea-Bissau",SN:"Senegal",GM:"Gambia",MR:"Mauritania",ML:"Mali",BF:"Burkina Faso",
  CV:"Cape Verde",ST:"Sao Tome and Principe",AO:"Angola",ZM:"Zambia",ZW:"Zimbabwe",MW:"Malawi",MZ:"Mozambique",
  MG:"Madagascar",BW:"Botswana",NA:"Namibia",ZA:"South Africa",LS:"Lesotho",SZ:"Eswatini",KM:"Comoros",
  MU:"Mauritius",SC:"Seychelles",
  BR:"Brazil",AR:"Argentina",CL:"Chile",PE:"Peru",CO:"Colombia",VE:"Venezuela",EC:"Ecuador",BO:"Bolivia",
  PY:"Paraguay",UY:"Uruguay",GY:"Guyana",SR:"Suriname",GF:"French Guiana",
  MX_:"Mexico",GT:"Guatemala",BZ:"Belize",SV:"El Salvador",HN:"Honduras",NI:"Nicaragua",CR:"Costa Rica",
  PA:"Panama",CU:"Cuba",DO:"Dominican Republic",HT:"Haiti",JM:"Jamaica",BS:"Bahamas",BB:"Barbados",
  TT:"Trinidad and Tobago",LC:"Saint Lucia",VC:"Saint Vincent and the Grenadines",
  FJ:"Fiji",VU:"Vanuatu",TO:"Tonga",WS:"Samoa",KI:"Kiribati",TV:"Tuvalu",NR:"Nauru",PW:"Palau",
  FM:"Micronesia",MH:"Marshall Islands",NC:"New Caledonia",PF:"French Polynesia",CK:"Cook Islands",
};

const out = [];
for (const f of fs.readdirSync(path.join(D, "pois")).filter((f) => f.endsWith(".json"))) {
  const cc = f.replace(".json", "");
  let arr; try { arr = J(`pois/${f}`).pois || []; } catch { continue; }
  const country = CC[cc] || cc;
  for (const p of arr) {
    if (!p?.id || imgOk(p.image) || imgSet.has(String(p.id).toLowerCase())) continue;
    const name = (p.name && (p.name.en || p.name.de || p.name.hu || p.name.ro)) || p.id;
    const coords = Array.isArray(p.coords) && p.coords.length === 2 ? p.coords : null;
    out.push({ id: p.id, name, parent: p.region || country, coords });
  }
}
const outputFile = path.resolve(process.env.MISSING_IMG_WORKLIST_OUT || path.join(D, "_missing_img_worklist.json"));
fs.writeFileSync(outputFile, JSON.stringify(out));
console.log(`missing-image worklist: ${out.length} POIs -> ${outputFile}`);
const withCoords = out.filter((x) => x.coords).length;
console.log(`  with coords: ${withCoords} | without: ${out.length - withCoords}`);
