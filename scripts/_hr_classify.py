"""Fetch P31 (instance-of) for the Tier1+Tier2 HR gap qids, classify into
settlement / island / neighborhood(drop) / municipality, and write clean lists."""
import json, io, sys, time, urllib.request, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace", write_through=True)
ENDPOINT = "https://query.wikidata.org/sparql"; UA = "PlizioPOIBot/1.0 (borota25@gmail.com)"

t1 = json.load(open(r"C:/Users/User/_hr_tier1.json", encoding="utf-8"))
t2 = json.load(open(r"C:/Users/User/_hr_tier2.json", encoding="utf-8"))
allrows = {x["qid"]: x for x in (t1 + t2)}
qids = list(allrows)

# Wikidata class buckets
ISLAND = {"Q23442"}                       # island
DROP = {"Q123705", "Q3957", "Q19730508"}  # neighborhood/quarter/city district -> drop? (Q3957=town keep)
NEIGH = {"Q123705", "Q19730508", "Q2983893", "Q253019"}  # neighbourhood/quarter/suburb/Stadtteil

def fetch(query, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(ENDPOINT + "?" + urllib.parse.urlencode({"query": query}),
                                         headers={"Accept": "application/sparql-results+json", "User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r:
                return json.load(r)
        except Exception as e:
            print(f"  retry {i+1}: {e}"); time.sleep(4 * (i + 1))
    raise SystemExit("WDQS failed")

types = {}  # qid -> set of P31 qids
for i in range(0, len(qids), 250):
    chunk = qids[i:i+250]
    vals = " ".join("wd:" + q for q in chunk)
    q = "SELECT ?p ?t WHERE { VALUES ?p { %s } ?p wdt:P31 ?t }" % vals
    res = fetch(q)
    for b in res["results"]["bindings"]:
        p = b["p"]["value"].split("/")[-1]; t = b["t"]["value"].split("/")[-1]
        types.setdefault(p, set()).add(t)
    print(f"  classified {min(i+250,len(qids))}/{len(qids)}")
    time.sleep(1)

islands, neigh, settlements = [], [], []
for qid, row in allrows.items():
    ts = types.get(qid, set())
    row["p31"] = sorted(ts)
    if ts & ISLAND:
        islands.append(row)
    elif ts & NEIGH and not (ts - NEIGH - {"Q486972"}):
        neigh.append(row)
    else:
        settlements.append(row)

settlements.sort(key=lambda x: -(x["pop"] or 0))
islands.sort(key=lambda x: -(x["pop"] or 0))
s_t1 = [x for x in settlements if (x["pop"] or 0) >= 1000]
s_t2 = [x for x in settlements if 100 <= (x["pop"] or 0) < 1000]
json.dump(s_t1, open(r"C:/Users/User/_hr_settle_t1.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(s_t2, open(r"C:/Users/User/_hr_settle_t2.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(islands, open(r"C:/Users/User/_hr_islands.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print(f"\nSettlements: {len(settlements)} (Tier1 {len(s_t1)} / Tier2 {len(s_t2)})")
print(f"Islands: {len(islands)} -> {', '.join(x['name'] for x in islands[:20])}")
print(f"Dropped neighborhoods: {len(neigh)} -> {', '.join(x['name'] for x in neigh[:15])}")
