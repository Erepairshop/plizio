import re
with open("lib/visualLab/data/slovakiaPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

country = re.search(r'id:\s*"country-slovakia".*?factsAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
if country:
    print("country-slovakia factsAdvanced:", country.group(1))

city = re.search(r'id:\s*"city-bratislava".*?factsAdvanced:\s*\{(.*?)\}', content, re.DOTALL)
if city:
    print("city-bratislava factsAdvanced:", city.group(1))
