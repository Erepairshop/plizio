// POI → short cityscape video lookup. Returns absolute URL on plizio.com CDN
// (nginx /poi-videos/ location, ~5-25s h264 baseline 480p mp4 files).
//
// Source: /home/erik/plizio/shared/poi-videos/<slug>.mp4 (auto-fetched daily
// by /home/erik/imgpipe/fetch_poi_videos.py — see CITIES list there).
//
// Match strategy: normalize POI name.de + id, check if it CONTAINS any alias
// of a known video slug. DE-aliases included so "Mailand" → milano, "Prag" →
// praha, "Rom" → roma etc.

const VIDEO_ALIASES: Record<string, string[]> = {
  // DE
  berlin: ["berlin"],
  hamburg: ["hamburg"],
  muenchen: ["muenchen", "munchen", "munich"],
  koeln: ["koeln", "koln", "cologne"],
  frankfurt: ["frankfurt"],
  stuttgart: ["stuttgart"],
  duesseldorf: ["duesseldorf", "dusseldorf", "duesseldorf"],
  dresden: ["dresden"],
  leipzig: ["leipzig"],
  hannover: ["hannover", "hanover"],
  // AT
  wien: ["wien", "vienna"],
  salzburg: ["salzburg"],
  innsbruck: ["innsbruck"],
  graz: ["graz"],
  // CH
  zuerich: ["zuerich", "zurich"],
  geneve: ["geneve", "genf", "geneva"],
  bern: ["bern"],
  luzern: ["luzern", "lucerne"],
  // FR
  paris: ["paris"],
  lyon: ["lyon"],
  marseille: ["marseille"],
  nice: ["nice", "nizza"],
  bordeaux: ["bordeaux"],
  strasbourg: ["strasbourg", "strassburg"],
  // IT
  roma: ["roma", "rom", "rome"],
  milano: ["milano", "mailand", "milan"],
  venezia: ["venezia", "venedig", "venice"],
  firenze: ["firenze", "florenz", "florence"],
  napoli: ["napoli", "neapel", "naples"],
  torino: ["torino", "turin"],
  // ES
  madrid: ["madrid"],
  barcelona: ["barcelona"],
  sevilla: ["sevilla", "seville"],
  valencia: ["valencia"],
  granada: ["granada"],
  // PT
  lisboa: ["lisboa", "lissabon", "lisbon"],
  porto: ["porto"],
  // NL
  amsterdam: ["amsterdam"],
  rotterdam: ["rotterdam"],
  denhaag: ["denhaag", "haag", "hague"],
  // BE
  brussels: ["brussels", "bruessel", "brussel"],
  brugge: ["brugge", "bruegge", "bruges"],
  antwerpen: ["antwerpen", "antwerp"],
  // GR
  athens: ["athen", "athens"],
  santorini: ["santorin", "santorini"],
  // CZ
  praha: ["praha", "prag", "prague"],
  // PL
  warszawa: ["warszawa", "warschau", "warsaw"],
  krakow: ["krakow", "krakau", "cracow"],
  // HU
  budapest: ["budapest"],
  // SE
  stockholm: ["stockholm"],
};

// Build alias → slug reverse map at import time. Longer aliases first so
// "muenchen" matches before "munich" subset matches accidentally.
const REVERSE: Array<[string, string]> = Object.entries(VIDEO_ALIASES)
  .flatMap(([slug, aliases]) => aliases.map((a) => [normalize(a), slug] as [string, string]))
  .sort((a, b) => b[0].length - a[0].length);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ü/g, "ue")
    .replace(/ö/g, "oe")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

/** Return /poi-videos/<slug>.mp4 if this POI has a matching cityscape video. */
export function getPoiVideo(poi: {
  id?: string;
  name?: { de?: string; en?: string };
}): string | null {
  const candidates = [poi.name?.de, poi.name?.en, poi.id]
    .filter((s): s is string => typeof s === "string" && s.length > 0)
    .map(normalize);
  for (const [alias, slug] of REVERSE) {
    if (candidates.some((c) => c === alias || c.includes(alias))) {
      return `/poi-videos/${slug}.mp4`;
    }
  }
  return null;
}
