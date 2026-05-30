"""Cross-parent duplicate audit (the class the original (parent,name) audit missed):
same city name + <=2km apart but DIFFERENT parent (e.g. legacy `city-zurich`/country-
parent vs region `ch-zuerich`/CH-ZH). Keep rule (user): PlizioGo (go) wins, then richer
content. Loser -> blocklist. Merges into lib/visualLab/data/_dedup_blocklist.json (.bak).
Read pois/*.json (current) for content signals + itinerary/*.json for the GO signal.
Usage: python _dedup_crossparent.py [--dry]"""
import json, io, sys, glob, os, math, unicodedata, re, shutil, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace", write_through=True)

REPO = r"C:/Users/User/plizio-repo"
POIS = os.path.join(REPO, "public/data/pois")
ITIN = os.path.join(REPO, "public/data/itinerary")
BLOCK = os.path.join(REPO, "lib/visualLab/data/_dedup_blocklist.json")
DRY = "--dry" in sys.argv
CITY = {"city", "capital", "state-capital", "town", "village", "municipality", "commune"}

itin_ids = set(os.path.splitext(f)[0] for f in os.listdir(ITIN)) if os.path.isdir(ITIN) else set()

def norm(s):
    s = (s or "").lower()
    s = unicodedata.normalize("NFD", s); s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", s)

def hav(a, b):
    R = 6371; dlat = math.radians(b[1]-a[1]); dlon = math.radians(b[0]-a[0])
    x = math.sin(dlat/2)**2 + math.cos(math.radians(a[1]))*math.cos(math.radians(b[1]))*math.sin(dlon/2)**2
    return 2*R*math.asin(min(1, math.sqrt(x)))

def score(p):
    s = 0.0
    pid = p.get("id", "")
    # never keep a malformed id (space / non-slug chars) over a clean twin
    if re.search(r"[^a-z0-9-]", pid): s -= 5_000_000
    # GO signal dominates
    if p.get("hasSights"): s += 1_000_000
    if pid in itin_ids: s += 1_000_000
    # content richness
    desc = p.get("description") or {}
    for l in ("de", "hu", "ro", "en"):
        s += len(desc.get(l, "") or "")
    facts = p.get("facts") or {}
    for l in ("de", "hu", "ro", "en"):
        v = facts.get(l)
        if isinstance(v, list): s += len(v) * 20
    if p.get("image"): s += 200
    if p.get("population"): s += min(p["population"] / 1000.0, 500)
    return s

removals = []  # (loser_id, keep_id, country, name)
keepers = set()
for f in sorted(glob.glob(os.path.join(POIS, "*.json"))):
    iso = os.path.basename(f)[:-5]
    try: d = json.load(open(f, encoding="utf-8"))
    except Exception: continue
    pois = [p for p in (d if isinstance(d, list) else d.get("pois", d))
            if p.get("type") in CITY and p.get("coords")]
    by = {}
    for p in pois:
        nm = norm((p.get("name") or {}).get("de") or (p.get("name") or {}).get("en"))
        if nm: by.setdefault(nm, []).append(p)
    for nm, grp in by.items():
        if len(grp) < 2: continue
        # build cross-parent <=2km clusters via union of close, different-parent members
        used = [False]*len(grp)
        for i in range(len(grp)):
            if used[i]: continue
            cluster = [grp[i]]; used[i] = True
            for j in range(i+1, len(grp)):
                if used[j]: continue
                if any(m.get("parent") != grp[j].get("parent") and hav(m["coords"], grp[j]["coords"]) <= 2 for m in cluster):
                    cluster.append(grp[j]); used[j] = True
            if len(cluster) < 2: continue
            parents = {m.get("parent") for m in cluster}
            if len(parents) < 2: continue  # only cross-parent
            cluster.sort(key=lambda p: (-score(p), p.get("id", "")))
            keep = cluster[0]; keepers.add(keep["id"])
            for loser in cluster[1:]:
                removals.append((loser["id"], keep["id"], iso, nm))

print(f"cross-parent dup-clusters → removals: {len(removals)}")
for lid, kid, iso, nm in removals:
    go = " [GO-keep]" if (kid in itin_ids) else ""
    print(f"  {iso}: remove {lid}  ->  keep {kid}{go}")

# merge into blocklist
existing = set(json.load(open(BLOCK, encoding="utf-8")))
new_ids = sorted(existing | {lid for lid, *_ in removals})
added = len(new_ids) - len(existing)
print(f"\nblocklist: {len(existing)} -> {len(new_ids)} (+{added})")
# guard: never blocklist an id we also chose to keep
conflict = keepers & set(lid for lid, *_ in removals)
if conflict: print("WARN conflict keep&remove:", conflict)
if DRY:
    print("DRY — no write")
else:
    shutil.copy(BLOCK, BLOCK + f".before_crossparent.{int(time.time())}.bak")
    json.dump(new_ids, open(BLOCK, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    print("WROTE blocklist + .bak")
    # affected country slugs for map rebuild hint
    isos = sorted({iso for _, _, iso, _ in removals})
    print("affected country JSONs:", isos)
