// Render-time "de-slop" sanitizer for POI descriptionAdvanced (and any prose).
// Goal: break the cross-page AI-cliche fingerprint without a regen. Deterministic
// per (poiId, word) so a given page is stable across builds, but the SAME cliche
// word maps to DIFFERENT synonyms across DIFFERENT pages -> the repetition that
// reads as "AI filler" disappears site-wide.
//
// Philosophy (matches sightFilter / curriculum-leak strip): SOURCE IS UNTOUCHED,
// transform runs at generate time. Conservative: only swaps forms that are
// grammatically safe; anything uncertain is left as-is. Idempotent-ish.
//
// EN: free synonym rotation (no inflection). DE/HU/RO: conservative stem/base swap
// that preserves the inflectional ending so declension stays valid. All langs:
// em/en dash -> comma (also the project's external-text rule), + a few clean
// whole-phrase removals.

export type DeslopLang = "de" | "en" | "hu" | "ro" | "fr" | "tr" | "hr";

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function preserveCase(repl: string, orig: string): string {
  if (orig && orig[0] === orig[0].toUpperCase() && orig[0] !== orig[0].toLowerCase()) {
    return repl[0].toUpperCase() + repl.slice(1);
  }
  return repl;
}
function isVowelStart(w: string): boolean { return /^[aeiouAEIOU]/.test(w); }

// ---- EN: single-word / phrase rotation pools (no inflection) -----------------
const EN_POOLS: Record<string, string[]> = {
  vibrant: ["lively", "bustling", "animated", "spirited"],
  stunning: ["striking", "impressive", "remarkable", "memorable"],
  picturesque: ["scenic", "photogenic", "pretty", "easy on the eye"],
  nestled: ["set", "located", "tucked away", "positioned"],
  breathtaking: ["sweeping", "dramatic", "wide-open", "panoramic"],
  charming: ["appealing", "welcoming", "characterful", "pleasant"],
  boasts: ["has", "features", "offers", "is home to"],
  "hidden gem": ["lesser-known spot", "quiet find", "low-key spot", "under-the-radar destination"],
};

// ---- DE: stem swaps; ending group (e|en|er|es|em) preserved -------------------
const DE_STEMS: Record<string, string[]> = {
  malerisch: ["reizvoll", "idyllisch", "stimmungsvoll"],
  lebendig: ["belebt", "lebhaft", "quirlig"],
  atemberaubend: ["eindrucksvoll", "beeindruckend", "fesselnd"],
  charmant: ["reizend", "einnehmend", "ansprechend"],
  vielfaeltig: ["abwechslungsreich", "vielseitig", "reichhaltig"],
};
// accent-safe lookup key for DE (vielfältig)
const DE_KEY_FIX: Record<string, string> = { "vielfältig": "vielfaeltig" };

// ---- HU: base-form swaps (attributive/predicative base only; skip suffixed) ---
const HU_BASE: Record<string, string[]> = {
  "festői": ["hangulatos", "látványos", "mutatós"],
  "lenyűgöző": ["emlékezetes", "kivételes", "pazar"],
  "elbűvölő": ["bájos", "kellemes", "vonzó"],
};

// ---- RO: base masculine-singular swaps only -----------------------------------
const RO_BASE: Record<string, string[]> = {
  "pitoresc": ["atrăgător", "fotogenic", "plăcut"],
  "fermecător": ["plăcut", "atrăgător", "primitor"],
};

// whole-phrase removals (clean clauses), per lang
const PHRASE_KILL: Record<string, RegExp[]> = {
  en: [
    /,?\s*(?:truly\s+)?a must-visit(?:\s+(?:destination|spot|place))?/gi,
    /\.\s*There(?:'s| is) (?:truly\s+)?something for everyone[^.]*\./g,
    /,?\s*offering something for everyone/gi,
  ],
  de: [
    /,?\s*ein wahres Paradies(?:\s+f[uü]r[^.,;]*)?/gi,
    /,?\s*(?:ein|das) Muss f[uü]r jeden (?:Besucher|Reisenden)[^.,;]*/gi,
  ],
  hu: [
    /,?\s*(?:egy\s+)?igazi gy[oö]ngyszeme?(?:\s+a[^.,;]*)?/gi,
    /,?\s*(?:egy\s+)?val[oó]di gy[oö]ngyszeme?/gi,
  ],
  ro: [
    /,?\s*un adev[aă]rat paradis(?:\s+pentru[^.,;]*)?/gi,
  ],
};

function fixDash(t: string): string {
  // keep numeric ranges as hyphen, otherwise em/en dash -> comma
  t = t.replace(/(\d)\s*[—–]\s*(\d)/g, "$1-$2");
  t = t.replace(/\s*[—–]\s*/g, ", ");
  return t;
}

function rotateEN(t: string, id: string): string {
  for (const [word, pool] of Object.entries(EN_POOLS)) {
    let occ = 0;
    const wEsc = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // article + word first (fix a/an for the picked synonym)
    const reArt = new RegExp(`\\b(an?|An?)\\s+${wEsc}\\b`, "g");
    t = t.replace(reArt, (_m, art) => {
      const pick = pool[(hash(id + word) + occ) % pool.length]; occ++;
      const cap = art[0] === "A";
      const article = (isVowelStart(pick) ? "an" : "a");
      return (cap ? article[0].toUpperCase() + article.slice(1) : article) + " " + pick;
    });
    // remaining bare occurrences
    const reBare = new RegExp(`\\b${wEsc}\\b`, "gi");
    t = t.replace(reBare, (m) => {
      const pick = pool[(hash(id + word) + occ) % pool.length]; occ++;
      return preserveCase(pick, m);
    });
  }
  return t;
}

function swapStemDE(t: string, id: string): string {
  for (const [stemRaw, pool] of Object.entries(DE_STEMS)) {
    // build a regex that also matches the umlaut original (vielfältig)
    const variants = [stemRaw, ...Object.keys(DE_KEY_FIX).filter((k) => DE_KEY_FIX[k] === stemRaw)];
    for (const v of variants) {
      const vEsc = v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`\\b(${vEsc})(e|en|er|es|em)?\\b`, "gi");
      let occ = 0;
      t = t.replace(re, (_m, _stem, end) => {
        const pick = pool[(hash(id + stemRaw) + occ) % pool.length]; occ++;
        const out = pick + (end || "");
        return preserveCase(out, _m);
      });
    }
  }
  return t;
}

function swapBase(t: string, id: string, table: Record<string, string[]>): string {
  for (const [base, pool] of Object.entries(table)) {
    if (pool.length === 1 && pool[0] === base) continue; // noop placeholder
    const bEsc = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Unicode-safe boundary: ASCII \b breaks on accented endings (ő/ű/ă), so
    // "lenyűgöző" never matched. Use letter/number lookarounds instead.
    const re = new RegExp(`(?<![\\p{L}\\p{N}])${bEsc}(?![\\p{L}\\p{N}])`, "giu");
    let occ = 0;
    t = t.replace(re, (m) => {
      const pick = pool[(hash(id + base) + occ) % pool.length]; occ++;
      return preserveCase(pick, m);
    });
  }
  return t;
}

export function deSlop(text: string, lang: DeslopLang, id: string): string {
  if (typeof text !== "string" || text.length < 1) return text;
  let t = text;
  t = fixDash(t);
  for (const re of (PHRASE_KILL[lang] || [])) t = t.replace(re, "");
  if (lang === "en") t = rotateEN(t, id);
  else if (lang === "de") t = swapStemDE(t, id);
  else if (lang === "hu") t = swapBase(t, id, HU_BASE);
  else if (lang === "ro") t = swapBase(t, id, RO_BASE);
  // tidy: collapse spaces, remove space before punctuation, fix double commas
  t = t.replace(/\s{2,}/g, " ").replace(/\s+([.,;:!?])/g, "$1").replace(/,\s*,/g, ",").trim();
  return t;
}
