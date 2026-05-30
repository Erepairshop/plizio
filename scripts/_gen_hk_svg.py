"""Generate hongkong.svg.ts only, reusing generate_missing_country_svgs.generate_country_svg.
HK admin-1 districts come from Natural Earth (iso_a2 == 'HK')."""
import json, importlib.util, os

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("genmod", os.path.join(HERE, "generate_missing_country_svgs.py"))
# The module runs its main block on import; guard by reading only the function.
src = open(os.path.join(HERE, "generate_missing_country_svgs.py"), encoding="utf-8").read()
# strip the top-level main (everything from the first `print("Loading GeoJSON...")`)
cut = src.index('print("Loading GeoJSON')
exec(compile(src[:cut], "genmod", "exec"), globals())

GEO = "C:/Users/User/ne_admin1_10m.geojson"
geo = json.load(open(GEO, encoding="utf-8"))
feats = [f for f in geo["features"] if f.get("properties", {}).get("iso_a2") == "HK"]
print(f"HK admin-1 features: {len(feats)}")
n = generate_country_svg("HK", "hongkong", feats, dateline_wrap=False)
print(f"wrote hongkong.svg.ts ({n} regions)")
