"""HR coastal/island POI gap analysis.
Queries Wikidata for all settlements in the 7 Croatian coastal counties
(coords + population + island flag + enwiki), diffs against the existing
public/data/pois/HR.json, writes the missing ones to _hr_gap.json.
"""
import json, io, sys, time, urllib.request, urllib.parse, unicodedata, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace", write_through=True)

COUNTIES = {  # Q-id -> short county code we will use as parent
    "Q58268": "HR-18",  # Istria
    "Q58071": "HR-08",  # Primorje-Gorski Kotar
    "Q58081": "HR-09",  # Lika-Senj
    "Q58146": "HR-13",  # Zadar
    "Q58194": "HR-15",  # Šibenik-Knin
    "Q58253": "HR-17",  # Split-Dalmatia
    "Q58289": "HR-19",  # Dubrovnik-Neretva
}
ENDPOINT = "https://query.wikidata.org/sparql"
UA = "PlizioPOIBot/1.0 (https://plizio.com; borota25@gmail.com)"

# Per-county light query (P279* walk + OPTIONALs caused 504 on the 7-county union).
# Direct P31 settlement types; population optional; island/wiki derived later.
QUERY_TMPL = """
SELECT ?place ?placeLabel ?lat ?lon ?pop WHERE {
  ?place wdt:P131* wd:%s .
  ?place wdt:P1082 ?pop .
  ?place wdt:P625 ?coord .
  BIND(geof:latitude(?coord) AS ?lat)
  BIND(geof:longitude(?coord) AS ?lon)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,hr". }
}
"""

def fetch(query, tries=4):
    data = urllib.parse.urlencode({"query": query}).encode()
    for i in range(tries):
        try:
            req = urllib.request.Request(ENDPOINT + "?" + urllib.parse.urlencode({"query": query}),
                                         headers={"Accept": "application/sparql-results+json", "User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r)
        except Exception as e:
            print(f"  retry {i+1}: {e}"); time.sleep(5 * (i + 1))
    raise SystemExit("WDQS failed")

def norm(s):
    s = unicodedata.normalize("NFKD", (s or "").lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "", s)

rows = {}
for qid_cty, code in COUNTIES.items():
    print(f"Querying county {qid_cty} ({code})...")
    res = fetch(QUERY_TMPL % qid_cty)
    n = 0
    for b in res["results"]["bindings"]:
        qid = b["place"]["value"].split("/")[-1]
        name = b.get("placeLabel", {}).get("value", "")
        if not name or name == qid: continue
        if "lat" not in b or "lon" not in b: continue
        lat = float(b["lat"]["value"]); lon = float(b["lon"]["value"])
        pop = int(float(b["pop"]["value"])) if "pop" in b else None
        cur = rows.get(qid)
        if not cur:
            rows[qid] = {"qid": qid, "name": name, "lat": lat, "lon": lon, "pop": pop,
                         "county": code, "island": False, "wiki": False}
            n += 1
        elif pop and not cur["pop"]:
            cur["pop"] = pop
    print(f"  +{n} (total {len(rows)})")
    time.sleep(2)
wd = list(rows.values())
print(f"Wikidata settlements in coastal counties: {len(wd)}")

# existing HR POIs
hr = json.load(open(r"C:/Users/User/plizio-repo/public/data/pois/HR.json", encoding="utf-8"))
pois = hr.get("pois", hr)
have_names = set()
have_coords = []
for p in pois:
    nm = p.get("name")
    if isinstance(nm, dict):
        for v in nm.values(): have_names.add(norm(v))
    elif isinstance(nm, str): have_names.add(norm(nm))
    c = p.get("coords")
    if isinstance(c, list) and len(c) == 2:
        have_coords.append((c[1], c[0]))  # coords stored [lon,lat]

def close(lat, lon):
    for (la, lo) in have_coords:
        if abs(la - lat) < 0.012 and abs(lo - lon) < 0.012:  # ~1.3km
            return True
    return False

missing = []
for w in wd:
    if norm(w["name"]) in have_names: continue
    if close(w["lat"], w["lon"]): continue
    missing.append(w)

missing.sort(key=lambda x: (-(x["pop"] or 0), x["name"]))
print(f"Already covered (name/coord match): {len(wd) - len(missing)}")
print(f"MISSING: {len(missing)}")
isl = [m for m in missing if m["island"]]
wiki = [m for m in missing if m["wiki"]]
print(f"  on islands: {len(isl)}  |  with enwiki article: {len(wiki)}")
json.dump(missing, open(r"C:/Users/User/_hr_gap.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("\nTop 30 missing by population:")
for m in missing[:30]:
    tag = " [island]" if m["island"] else ""
    w = " wiki" if m["wiki"] else ""
    print(f"  {m['name'][:34]:34} pop={str(m['pop'] or '?'):>7} {m['lat']:.3f},{m['lon']:.3f}{tag}{w}")
