"""Fix literal backslash-u unicode escapes that leaked into POI .ts data files.
A bad apply/generation batch double/quad-escaped accented chars, so the source
contains literal `\\u00e1` (one or more backslashes + uXXXX) which renders as
the raw escape text instead of the accented character (e.g. 'Megv\\u00e1lt\\u00f3'
instead of 'Megvalto'/'Megvalto' -> should be the accented form).

Strategy: collapse any run of 1+ backslashes immediately followed by uXXXX into
the actual unicode character. Safe: \\n/\\t etc. are not matched (need u+4hex).
Capital \\U... and Windows paths (\\Users) are not matched (lowercase u + 4 hex
required, 'sers' is not 4 hex).
"""
import io, sys, re, os, shutil
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

DATA = "lib/visualLab/data"
FILES = [
    "poiExtraCameroonCitiesV2.ts",
    "poiExtraBrazilLandmarksV2.ts",
    "poiExtraLibyaHistoryV2.ts",
    "poiExtraMadagascarLandmarksV2.ts",
    "poiExtraBrazilHistoryV2.ts",
    "poiExtraUruguayCitiesV2.ts",
    "poiExtraUruguayHistoryV2.ts",
]

# one-or-more backslashes, then u, then exactly 4 hex digits
PAT = re.compile(r"\\+u([0-9a-fA-F]{4})")

def repl(m):
    return chr(int(m.group(1), 16))

DRY = "--apply" not in sys.argv

total = 0
for fn in FILES:
    fp = os.path.join(DATA, fn)
    if not os.path.exists(fp):
        print(f"  MISSING {fp}")
        continue
    t = open(fp, encoding="utf-8").read()
    n = len(PAT.findall(t))
    fixed = PAT.sub(repl, t)
    left = len(re.findall(r"\\+u[0-9a-fA-F]{4}", fixed))
    total += n
    print(f"{fn}: {n} escapes -> fixed, {left} remaining")
    if not DRY and n:
        shutil.copy2(fp, fp + ".before_unicodefix.bak")
        open(fp, "w", encoding="utf-8").write(fixed)

print(f"\nTOTAL escapes: {total}  ({'DRY-RUN (use --apply)' if DRY else 'APPLIED'})")

# before/after sample for the Brasilia cathedral name
fp = os.path.join(DATA, "poiExtraBrazilLandmarksV2.ts")
for ln in open(fp, encoding="utf-8").read().splitlines():
    if "liav" in ln and ("u00" in ln or "rosi" in ln):
        print("SAMPLE:", PAT.sub(repl, ln).strip())
        break
