
import re
with open("lib/visualLab/data/romaniaPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()
ids = re.findall(r'id:\s*"([^"]+)"', content)
print("\n".join(ids))
