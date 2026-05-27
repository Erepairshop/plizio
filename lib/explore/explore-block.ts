// "Discover more places" block for POI HTML pages.
// Shows a stylized continent SVG + headline + secondary country link.
import { CONTINENT_SVG } from "./continent-svgs";

export type ExploreLang = "de" | "hu" | "ro" | "en" | "fr" | "tr";

// Country slug → continent slug (one of: europe-map, northamerica-map, southamerica-map, africa-map, asia-map, oceania-map)
export const COUNTRY_TO_CONTINENT: Record<string, string> = {
  // Europe
  "albania":"europe-map","andorra":"europe-map","austria":"europe-map","belarus":"europe-map","belgium":"europe-map","bosnia-and-herzegovina":"europe-map","bulgaria":"europe-map","croatia":"europe-map","cyprus":"europe-map","czech-republic":"europe-map","czechia":"europe-map","denmark":"europe-map","estonia":"europe-map","finland":"europe-map","france":"europe-map","germany":"europe-map","greece":"europe-map","hungary":"europe-map","iceland":"europe-map","ireland":"europe-map","italy":"europe-map","kosovo":"europe-map","latvia":"europe-map","liechtenstein":"europe-map","lithuania":"europe-map","luxembourg":"europe-map","malta":"europe-map","moldova":"europe-map","monaco":"europe-map","montenegro":"europe-map","netherlands":"europe-map","north-macedonia":"europe-map","norway":"europe-map","poland":"europe-map","portugal":"europe-map","romania":"europe-map","russia":"europe-map","san-marino":"europe-map","serbia":"europe-map","slovakia":"europe-map","slovenia":"europe-map","spain":"europe-map","sweden":"europe-map","switzerland":"europe-map","turkey":"europe-map","ukraine":"europe-map","united-kingdom":"europe-map","vatican":"europe-map","vatican-city":"europe-map",
  // North America
  "antigua-and-barbuda":"northamerica-map","bahamas":"northamerica-map","barbados":"northamerica-map","belize":"northamerica-map","canada":"northamerica-map","costa-rica":"northamerica-map","cuba":"northamerica-map","dominica":"northamerica-map","dominican-republic":"northamerica-map","el-salvador":"northamerica-map","grenada":"northamerica-map","guatemala":"northamerica-map","haiti":"northamerica-map","honduras":"northamerica-map","jamaica":"northamerica-map","mexico":"northamerica-map","nicaragua":"northamerica-map","panama":"northamerica-map","saint-kitts-and-nevis":"northamerica-map","saint-lucia":"northamerica-map","saint-vincent-and-the-grenadines":"northamerica-map","trinidad-and-tobago":"northamerica-map","united-states":"northamerica-map","usa":"northamerica-map","united-states-of-america":"northamerica-map","puerto-rico":"northamerica-map","greenland":"northamerica-map",
  // South America
  "argentina":"southamerica-map","bolivia":"southamerica-map","brazil":"southamerica-map","chile":"southamerica-map","colombia":"southamerica-map","ecuador":"southamerica-map","french-guiana":"southamerica-map","guyana":"southamerica-map","paraguay":"southamerica-map","peru":"southamerica-map","suriname":"southamerica-map","uruguay":"southamerica-map","venezuela":"southamerica-map",
  // Africa
  "algeria":"africa-map","angola":"africa-map","benin":"africa-map","botswana":"africa-map","burkina-faso":"africa-map","burundi":"africa-map","cabo-verde":"africa-map","cape-verde":"africa-map","cameroon":"africa-map","central-african-republic":"africa-map","chad":"africa-map","comoros":"africa-map","congo":"africa-map","democratic-republic-of-congo":"africa-map","djibouti":"africa-map","egypt":"africa-map","equatorial-guinea":"africa-map","eritrea":"africa-map","eswatini":"africa-map","ethiopia":"africa-map","gabon":"africa-map","gambia":"africa-map","ghana":"africa-map","guinea":"africa-map","guinea-bissau":"africa-map","ivory-coast":"africa-map","cote-divoire":"africa-map","kenya":"africa-map","lesotho":"africa-map","liberia":"africa-map","libya":"africa-map","madagascar":"africa-map","malawi":"africa-map","mali":"africa-map","mauritania":"africa-map","mauritius":"africa-map","morocco":"africa-map","mozambique":"africa-map","namibia":"africa-map","niger":"africa-map","nigeria":"africa-map","rwanda":"africa-map","sao-tome-and-principe":"africa-map","senegal":"africa-map","seychelles":"africa-map","sierra-leone":"africa-map","somalia":"africa-map","south-africa":"africa-map","south-sudan":"africa-map","sudan":"africa-map","tanzania":"africa-map","togo":"africa-map","tunisia":"africa-map","uganda":"africa-map","western-sahara":"africa-map","zambia":"africa-map","zimbabwe":"africa-map",
  // Asia
  "afghanistan":"asia-map","armenia":"asia-map","azerbaijan":"asia-map","bahrain":"asia-map","bangladesh":"asia-map","bhutan":"asia-map","brunei":"asia-map","cambodia":"asia-map","china":"asia-map","east-timor":"asia-map","timor-leste":"asia-map","georgia":"asia-map","india":"asia-map","indonesia":"asia-map","iran":"asia-map","iraq":"asia-map","israel":"asia-map","japan":"asia-map","jordan":"asia-map","kazakhstan":"asia-map","kuwait":"asia-map","kyrgyzstan":"asia-map","laos":"asia-map","lebanon":"asia-map","malaysia":"asia-map","maldives":"asia-map","mongolia":"asia-map","myanmar":"asia-map","nepal":"asia-map","north-korea":"asia-map","oman":"asia-map","pakistan":"asia-map","palestine":"asia-map","philippines":"asia-map","qatar":"asia-map","saudi-arabia":"asia-map","singapore":"asia-map","south-korea":"asia-map","sri-lanka":"asia-map","syria":"asia-map","taiwan":"asia-map","tajikistan":"asia-map","thailand":"asia-map","turkmenistan":"asia-map","united-arab-emirates":"asia-map","uzbekistan":"asia-map","vietnam":"asia-map","yemen":"asia-map","hong-kong":"asia-map","macau":"asia-map",
  // Oceania
  "australia":"oceania-map","fiji":"oceania-map","kiribati":"oceania-map","marshall-islands":"oceania-map","micronesia":"oceania-map","nauru":"oceania-map","new-zealand":"oceania-map","palau":"oceania-map","papua-new-guinea":"oceania-map","samoa":"oceania-map","solomon-islands":"oceania-map","tonga":"oceania-map","tuvalu":"oceania-map","vanuatu":"oceania-map","new-caledonia":"oceania-map","french-polynesia":"oceania-map","cook-islands":"oceania-map",
};

const CONTINENT_NAME: Record<string, Record<ExploreLang, string>> = {
  "europe-map": { de: "Europa", hu: "Európa", ro: "Europa", en: "Europe", fr: "Europe", tr: "Avrupa" },
  "northamerica-map": { de: "Nordamerika", hu: "Észak-Amerika", ro: "America de Nord", en: "North America", fr: "Amérique du Nord", tr: "Kuzey Amerika" },
  "southamerica-map": { de: "Südamerika", hu: "Dél-Amerika", ro: "America de Sud", en: "South America", fr: "Amérique du Sud", tr: "Güney Amerika" },
  "africa-map": { de: "Afrika", hu: "Afrika", ro: "Africa", en: "Africa", fr: "Afrique", tr: "Afrika" },
  "asia-map": { de: "Asien", hu: "Ázsia", ro: "Asia", en: "Asia", fr: "Asie", tr: "Asya" },
  "oceania-map": { de: "Ozeanien", hu: "Óceánia", ro: "Oceania", en: "Oceania", fr: "Océanie", tr: "Okyanusya" },
};

const COPY: Record<ExploreLang, { discover: (c: string) => string; moreIn: (c: string) => string; sectionTitle: string }> = {
  de: { discover: (c) => `Entdecke weitere Orte in ${c}`, moreIn: (c) => `Mehr Orte in ${c}`, sectionTitle: "Auf Entdeckungsreise mit Plizio" },
  hu: { discover: (c) => `Fedezz fel ${c === "Európa" ? "Európa más helyeit" : c === "Észak-Amerika" ? "Észak-Amerika más helyeit" : c === "Dél-Amerika" ? "Dél-Amerika más helyeit" : c === "Afrika" ? "Afrika más helyeit" : c === "Ázsia" ? "Ázsia más helyeit" : "Óceánia más helyeit"}`, moreIn: (c) => `További helyek itt: ${c}`, sectionTitle: "Felfedezés a Plizioval" },
  ro: { discover: (c) => `Descoperă mai multe locuri în ${c}`, moreIn: (c) => `Mai multe locuri în ${c}`, sectionTitle: "Explorează cu Plizio" },
  en: { discover: (c) => `Discover more places in ${c}`, moreIn: (c) => `More places in ${c}`, sectionTitle: "Explore with Plizio" },
  fr: { discover: (c) => `Découvrez d'autres lieux en ${c}`, moreIn: (c) => `Plus de lieux en ${c}`, sectionTitle: "Explorez avec Plizio" },
  tr: { discover: (c) => `${c}'da daha fazla yer keşfedin`, moreIn: (c) => `${c} içinde daha fazla yer`, sectionTitle: "Plizio ile keşfet" },
};

function _langFallback(lang: ExploreLang): ExploreLang { return lang === "tr" ? "de" : lang === "fr" ? "en" : lang; }
function _lk(lang: ExploreLang): ExploreLang { return (["de","hu","ro","en","fr","tr"].includes(lang) ? lang : "en") as ExploreLang; }

export interface ExploreBlockOpts {
  poiId: string;
  countryId: string;
  countryName: string;       // already-localized human name
  countryMapUrl: string | null; // null if no map exists
  lang: ExploreLang;
}

/** Render "Discover more" block. Returns "" if no continent mapping found. */
export function renderExploreBlock(opts: ExploreBlockOpts): string {
  const lang = _lk(opts.lang);
  const continentSlug = COUNTRY_TO_CONTINENT[opts.countryId];
  if (!continentSlug) return "";
  const continentName = CONTINENT_NAME[continentSlug]?.[lang] ?? CONTINENT_NAME[continentSlug]?.[_langFallback(lang)] ?? continentSlug;
  const svg = CONTINENT_SVG[continentSlug];
  if (!svg) return "";
  const c = COPY[lang] ?? COPY.en;
  const continentHref = `/${continentSlug}/`;
  const countryLink = opts.countryMapUrl
    ? `<a class="plz-explore-link" href="${opts.countryMapUrl}">${c.moreIn(opts.countryName)} →</a>`
    : "";
  return `<section class="plz-explore" aria-label="${c.sectionTitle}">
  <a class="plz-explore-card" href="${continentHref}">
    <div class="plz-explore-svg">${svg}</div>
    <div class="plz-explore-text">
      <span class="plz-explore-eyebrow">${c.sectionTitle}</span>
      <strong>${c.discover(continentName)}</strong>
    </div>
  </a>
  ${countryLink}
</section>`;
}

export const EXPLORE_CSS = `
.plz-explore{margin:24px 0;display:flex;flex-direction:column;gap:8px}
.plz-explore-card{display:flex;gap:14px;align-items:center;background:linear-gradient(135deg,#0e2840,#163f5e);border:1px solid #2a5980;border-radius:14px;padding:12px;text-decoration:none;color:#fff;transition:transform .15s,box-shadow .15s}
.plz-explore-card:hover{transform:translateY(-2px);box-shadow:0 6px 22px rgba(58,160,216,.25)}
.plz-explore-svg{flex:0 0 110px;width:110px;height:77px;border-radius:8px;overflow:hidden}
.plz-explore-svg svg{width:100%;height:100%;display:block}
.plz-explore-text{flex:1 1 auto;min-width:0}
.plz-explore-eyebrow{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.5px;opacity:.7;margin-bottom:3px}
.plz-explore-text strong{display:block;font-size:15px;line-height:1.25;font-weight:600}
.plz-explore-link{align-self:flex-start;font-size:13px;color:#7cb9e0;text-decoration:none;padding:4px 0}
.plz-explore-link:hover{text-decoration:underline}
@media (min-width:640px){.plz-explore-svg{flex-basis:140px;width:140px;height:98px}.plz-explore-text strong{font-size:16px}}
`;
