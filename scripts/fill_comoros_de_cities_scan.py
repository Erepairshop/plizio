"""Quick scan: list POI ids missing descriptionAdvanced.de in Comoros cities V2 file."""
import re
from pathlib import Path

PATH = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraComorosCitiesV2.ts")
text = PATH.read_text(encoding="utf-8")

# Split by id occurrences
# Find each POI block: from "{\n    id:" to next sibling start.
pattern = re.compile(r'\{\s*\n\s*id:\s*"([^"]+)",.*?(?=\n\s*\},\s*\n\s*\{|\n\s*\}\s*\n\s*\];?)', re.DOTALL)

ids_total = re.findall(r'\n    id:\s*"([^"]+)"', text)
print(f"Total POIs: {len(ids_total)}")

# For a more precise approach, slice by id positions
positions = [(m.start(), m.group(1)) for m in re.finditer(r'\n  \{\s*\n    id:\s*"([^"]+)"', text)]
positions.append((len(text), "__END__"))

missing_de = []
has_de = []
for i in range(len(positions) - 1):
    start, pid = positions[i]
    end = positions[i + 1][0]
    block = text[start:end]
    # Look for descriptionAdvanced block with de:
    m = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', block, re.DOTALL)
    if not m:
        missing_de.append((pid, "no descAdv block"))
        continue
    inner = m.group(1)
    de_match = re.search(r'\bde:\s*"([^"]*)"', inner)
    if not de_match or not de_match.group(1).strip():
        missing_de.append((pid, "empty/missing de"))
    else:
        has_de.append(pid)

print(f"\nWith de: {len(has_de)}")
print(f"Missing de: {len(missing_de)}")
for pid, reason in missing_de:
    print(f"  - {pid}: {reason}")
