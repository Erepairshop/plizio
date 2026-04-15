from __future__ import annotations

import json
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(r"C:\Users\User\plizio-repo")
SEED_PATH = ROOT / "scripts" / "geo_full_seed.json"
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"
IMAGES = ROOT / "public" / "geo-images"
INVENTORY = ROOT / "public" / "geo-assets-inventory.json"
AUDIO = ROOT / "public" / "geo-audio"

LANGS = ["de", "hu", "ro", "en"]

PARENT_LABELS = {
    "DE": {"de": "Deutschland", "hu": "Németország", "ro": "Germania", "en": "Germany"},
    "DE-BW": {"de": "Baden-Württemberg", "hu": "Baden-Württemberg", "ro": "Baden-Württemberg", "en": "Baden-Württemberg"},
    "DE-BY": {"de": "Bayern", "hu": "Bajorország", "ro": "Bavaria", "en": "Bavaria"},
    "DE-BE": {"de": "Berlin", "hu": "Berlin", "ro": "Berlin", "en": "Berlin"},
    "DE-BB": {"de": "Brandenburg", "hu": "Brandenburg", "ro": "Brandenburg", "en": "Brandenburg"},
    "DE-HB": {"de": "Bremen", "hu": "Bréma", "ro": "Bremen", "en": "Bremen"},
    "DE-HH": {"de": "Hamburg", "hu": "Hamburg", "ro": "Hamburg", "en": "Hamburg"},
    "DE-HE": {"de": "Hessen", "hu": "Hessen", "ro": "Hessa", "en": "Hesse"},
    "DE-MV": {"de": "Mecklenburg-Vorpommern", "hu": "Mecklenburg–Elő-Pomeránia", "ro": "Mecklenburg-Pomerania Inferioară", "en": "Mecklenburg-Western Pomerania"},
    "DE-NI": {"de": "Niedersachsen", "hu": "Alsó-Szászország", "ro": "Saxonia Inferioară", "en": "Lower Saxony"},
    "DE-NW": {"de": "Nordrhein-Westfalen", "hu": "Észak-Rajna–Vesztfália", "ro": "Renania de Nord-Westfalia", "en": "North Rhine-Westphalia"},
    "DE-RP": {"de": "Rheinland-Pfalz", "hu": "Rajna-vidék–Pfalz", "ro": "Renania-Palatinat", "en": "Rhineland-Palatinate"},
    "DE-SL": {"de": "Saarland", "hu": "Saar-vidék", "ro": "Saarland", "en": "Saarland"},
    "DE-SN": {"de": "Sachsen", "hu": "Szászország", "ro": "Saxonia", "en": "Saxony"},
    "DE-ST": {"de": "Sachsen-Anhalt", "hu": "Szász-Anhalt", "ro": "Saxonia-Anhalt", "en": "Saxony-Anhalt"},
    "DE-SH": {"de": "Schleswig-Holstein", "hu": "Schleswig-Holstein", "ro": "Schleswig-Holstein", "en": "Schleswig-Holstein"},
    "DE-TH": {"de": "Thüringen", "hu": "Türingia", "ro": "Turingia", "en": "Thuringia"},
}

TYPE_SUBJECTS = {
    "state-capital": ["sachkunde", "geographie", "geschichte"],
    "city": ["sachkunde", "geographie", "geschichte"],
    "river": ["sachkunde", "geographie"],
    "mountain": ["sachkunde", "geographie"],
    "lake": ["sachkunde", "geographie"],
    "island": ["sachkunde", "geographie"],
    "forest": ["sachkunde", "geographie"],
    "sea": ["sachkunde", "geographie"],
    "landmark": ["sachkunde", "geographie", "geschichte"],
    "historical": ["geschichte", "geographie"],
}

TYPE_GRADES = {
    "state-capital": [1, 2, 3, 4, 5, 6, 7, 8],
    "city": [2, 3, 4, 5, 6, 7, 8],
    "river": [2, 3, 4, 5, 6, 7, 8],
    "mountain": [2, 3, 4, 5, 6, 7, 8],
    "lake": [2, 3, 4, 5, 6, 7, 8],
    "island": [2, 3, 4, 5, 6, 7, 8],
    "forest": [2, 3, 4, 5, 6, 7, 8],
    "sea": [2, 3, 4, 5, 6, 7, 8],
    "landmark": [3, 4, 5, 6, 7, 8],
    "historical": [4, 5, 6, 7, 8],
}


def request_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": "CodexGeoTask/1.0"})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_entity(title: str) -> dict:
    url = (
        "https://www.wikidata.org/w/api.php?action=wbgetentities&sites=dewiki"
        f"&titles={urllib.parse.quote(title)}&languages=de|hu|ro|en&props=labels|descriptions|claims&format=json"
    )
    payload = request_json(url)
    entity = next(iter(payload["entities"].values()))
    if "missing" in entity:
        raise RuntimeError(f"Missing entity for {title}")
    return entity


def claim_first(entity: dict, prop: str):
    claims = entity.get("claims", {}).get(prop)
    if not claims:
        return None
    return claims[0]["mainsnak"]["datavalue"]["value"]


def label(entity: dict, lang: str) -> str:
    return entity.get("labels", {}).get(lang, entity.get("labels", {}).get("de", {})).get("value", "")


def description(entity: dict, lang: str, seed: dict) -> str:
    raw = entity.get("descriptions", {}).get(lang, entity.get("descriptions", {}).get("de", {})).get("value")
    if raw:
        return raw[0].upper() + raw[1:]
    parent = PARENT_LABELS.get(seed["parent"], PARENT_LABELS["DE"])[lang]
    type_name = {
        "de": {
            "state-capital": "Landeshauptstadt",
            "city": "wichtige Stadt",
            "river": "wichtiger Fluss",
            "mountain": "bekannter Berg",
            "lake": "bekannter See",
            "island": "bekannte Insel",
            "forest": "bekannte Landschaft",
            "sea": "Meer",
            "landmark": "bekanntes Wahrzeichen",
            "historical": "historischer Ort",
        },
        "hu": {
            "state-capital": "tartományi főváros",
            "city": "fontos város",
            "river": "fontos folyó",
            "mountain": "ismert hegy",
            "lake": "ismert tó",
            "island": "ismert sziget",
            "forest": "ismert táj",
            "sea": "tenger",
            "landmark": "ismert nevezetesség",
            "historical": "történelmi helyszín",
        },
        "ro": {
            "state-capital": "capitală de land",
            "city": "oraș important",
            "river": "râu important",
            "mountain": "munte cunoscut",
            "lake": "lac cunoscut",
            "island": "insulă cunoscută",
            "forest": "peisaj cunoscut",
            "sea": "mare",
            "landmark": "obiectiv cunoscut",
            "historical": "loc istoric",
        },
        "en": {
            "state-capital": "state capital",
            "city": "important city",
            "river": "important river",
            "mountain": "well-known mountain",
            "lake": "well-known lake",
            "island": "well-known island",
            "forest": "well-known landscape",
            "sea": "sea",
            "landmark": "famous landmark",
            "historical": "historical place",
        },
    }[lang][seed["type"]]
    join = {
        "de": f"{type_name} in {parent}.",
        "hu": f"{type_name} {parent} területén.",
        "ro": f"{type_name} în {parent}.",
        "en": f"{type_name} in {parent}.",
    }
    return join[lang]


def render_facts(seed: dict, entity: dict) -> dict[str, list[str]]:
    coords = claim_first(entity, "P625")
    population = claim_first(entity, "P1082")
    elevation = claim_first(entity, "P2044")
    length = claim_first(entity, "P2043")
    area = claim_first(entity, "P2046")
    inception = claim_first(entity, "P571")
    parent = PARENT_LABELS.get(seed["parent"], PARENT_LABELS["DE"])

    facts = {lang: [] for lang in LANGS}
    for lang in LANGS:
        facts[lang].append(
            {
                "de": f"Liegt in {parent[lang]}.",
                "hu": f"{parent[lang]} területén található.",
                "ro": f"Se află în {parent[lang]}.",
                "en": f"Located in {parent[lang]}.",
            }[lang]
        )
        if population and seed["type"] in {"city", "state-capital"}:
            value = int(population["amount"].replace("+", "").split(".")[0])
            facts[lang].append(
                {
                    "de": f"Etwa {value:,} Einwohner.".replace(",", "."),
                    "hu": f"Körülbelül {value:,} lakos.".replace(",", " "),
                    "ro": f"Aproximativ {value:,} locuitori.".replace(",", "."),
                    "en": f"About {value:,} inhabitants.",
                }[lang]
            )
        if elevation and seed["type"] == "mountain":
            value = int(float(elevation["amount"]))
            facts[lang].append(
                {
                    "de": f"{value} m Höhe.",
                    "hu": f"{value} m magas.",
                    "ro": f"{value} m altitudine.",
                    "en": f"{value} m high.",
                }[lang]
            )
        if length and seed["type"] == "river":
            value = int(float(length["amount"]))
            facts[lang].append(
                {
                    "de": f"Etwa {value} km lang.",
                    "hu": f"Körülbelül {value} km hosszú.",
                    "ro": f"Aproximativ {value} km lungime.",
                    "en": f"About {value} km long.",
                }[lang]
            )
        if area and seed["type"] in {"lake", "island", "sea"}:
            value = int(float(area["amount"]))
            facts[lang].append(
                {
                    "de": f"Fläche etwa {value} km².",
                    "hu": f"Területe kb. {value} km².",
                    "ro": f"Suprafață de aproximativ {value} km².",
                    "en": f"Area about {value} km².",
                }[lang]
            )
        if inception and seed["type"] in {"historical", "landmark"}:
            year = str(inception["time"])[1:5]
            facts[lang].append(
                {
                    "de": f"Wichtig seit {year}.",
                    "hu": f"{year} óta fontos helyszín.",
                    "ro": f"Loc important din {year}.",
                    "en": f"Important since {year}.",
                }[lang]
            )
        if coords:
            lon = round(coords["longitude"], 2)
            lat = round(coords["latitude"], 2)
            facts[lang].append(
                {
                    "de": f"Koordinate: {lat}, {lon}.",
                    "hu": f"Koordináta: {lat}, {lon}.",
                    "ro": f"Coordonate: {lat}, {lon}.",
                    "en": f"Coordinates: {lat}, {lon}.",
                }[lang]
            )
        facts[lang] = facts[lang][:3]
    return facts


ASSET_ALIASES = {
    "lake-starnberger-see": "lake-starnberg",
    "landmark-speyer-cathedral": "hist-speyer",
    "landmark-sanssouci": "hist-potsdam",
    "landmark-zwinger": "city-dresden",
    "landmark-elbphilharmonie": "city-hamburg",
    "landmark-brandenburg-gate": "city-berlin",
    "landmark-reichstag": "city-berlin",
    "landmark-fernsehturm": "city-berlin",
    "landmark-frauenkirche-muenchen": "city-muenchen",
    "landmark-porta-nigra": "city-trier",
    "landmark-schwerin-castle": "city-schwerin",
    "hist-cecilienhof": "hist-potsdam",
    "hist-reichsparteitag": "hist-nuernberg-trials",
    "hist-berliner-mauer": "hist-checkpoint-charlie",
    "hist-leipzig-montagsdemos": "city-leipzig",
    "hist-aachen-cathedral": "landmark-cologne-cathedral",
    "hist-augsburg": "city-augsburg",
    "hist-rothenburg": "city-wuerzburg",
    "hist-point-alpha": "hist-iron-curtain",
    "hist-bonn-bundeshaus": "city-bonn",
    "hist-berlin-reichstag-1945": "city-berlin",
    "hist-wartburg": "landmark-wartburg",
    "forest-schwarzwald": "landmark-schwarzwald",
}


def scan_inventory() -> dict:
    inventory = {"coats_of_arms": {}, "photos": {}, "audio": {}}
    for file in sorted(IMAGES.iterdir()):
        if not file.is_file():
            continue
        rel = f"/geo-images/{file.name}"
        if file.name.startswith("coa_"):
            inventory["coats_of_arms"][file.stem[4:]] = rel
        else:
            inventory["photos"][file.stem] = rel
    for file in sorted(AUDIO.iterdir()):
        if file.is_file() and file.suffix.lower() in {".ogg", ".oga", ".mp3", ".wav"}:
            inventory["audio"][file.stem] = f"/geo-audio/{file.name}"
    return inventory


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def asset_path(section: str, poi_id: str, inventory: dict) -> str | None:
    if poi_id in inventory[section]:
        return inventory[section][poi_id]
    alias = ASSET_ALIASES.get(poi_id)
    if alias and alias in inventory[section]:
        return inventory[section][alias]
    return None


def render_entry(seed: dict, entity: dict, inventory: dict) -> str:
    coords = claim_first(entity, "P625")
    if not coords and "coords" in seed:
        coords = {"longitude": seed["coords"][0], "latitude": seed["coords"][1]}
    if not coords:
        raise RuntimeError(f"Missing coordinates for {seed['id']} ({seed.get('queryTitle', seed['title'])})")
    entry = [
        "  {",
        f'    id: "{seed["id"]}",',
        f'    type: "{seed["type"]}",',
        f'    parent: "{seed["parent"]}",',
        f'    coords: [{round(coords["longitude"], 4)}, {round(coords["latitude"], 4)}],',
    ]
    if "name" in seed:
        names = {lang: seed["name"].get(lang, seed["name"].get("de", seed["title"])) for lang in LANGS}
    else:
        names = {lang: label(entity, lang) or label(entity, "de") or seed["title"] for lang in LANGS}
    descs = {lang: description(entity, lang, seed) for lang in LANGS}
    facts = render_facts(seed, entity)
    entry.append(
        "    name: { "
        + ", ".join(f'{lang}: {ts_string(names[lang])}' for lang in LANGS)
        + " },"
    )
    entry.append(
        "    description: { "
        + ", ".join(f'{lang}: {ts_string(descs[lang])}' for lang in LANGS)
        + " },"
    )
    entry.append(
        "    facts: { "
        + ", ".join(f"{lang}: {json.dumps(facts[lang], ensure_ascii=False)}" for lang in LANGS)
        + " },"
    )
    entry.append(f'    subjects: {json.dumps(TYPE_SUBJECTS[seed["type"]])},')
    entry.append(f'    grades: {json.dumps(TYPE_GRADES[seed["type"]])},')
    if "historyPeriod" in seed:
        entry.append(f'    historyPeriod: "{seed["historyPeriod"]}",')
    if "historyYear" in seed:
        entry.append(f'    historyYear: {json.dumps(seed["historyYear"])},')

    claims = entity.get("claims", {})
    if seed["type"] == "mountain" and "P2044" in claims:
        elev = int(float(claim_first(entity, "P2044")["amount"]))
        entry.append(f"    elevation: {elev},")
    if seed["type"] == "river" and "P2043" in claims:
        lng = int(float(claim_first(entity, "P2043")["amount"]))
        entry.append(f"    length: {lng},")
    if seed["type"] in {"lake", "island", "sea"} and "P2046" in claims:
        area = int(float(claim_first(entity, "P2046")["amount"]))
        entry.append(f"    area: {area},")

    image = asset_path("photos", seed["id"], inventory)
    coa = asset_path("coats_of_arms", seed["id"], inventory)
    audio = asset_path("audio", seed["id"], inventory)
    if image:
        entry.append(f'    image: "{image}",')
    if coa:
        entry.append(f'    coa: "{coa}",')
    if audio:
        entry.append(f'    audio: "{audio}",')
    entry.append("  },")
    return "\n".join(entry)


def rewrite_poi(entries: list[str]) -> None:
    text = POI_PATH.read_text(encoding="utf-8")
    start = text.index("export const pois: POI[] = [")
    prefix = text[:start]
    new_pois = "export const pois: POI[] = [\n  ...regions,\n" + "\n".join(entries) + "\n];\n"
    POI_PATH.write_text(prefix + new_pois, encoding="utf-8")


def main() -> None:
    seeds = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    IMAGES.mkdir(parents=True, exist_ok=True)

    inventory = scan_inventory()
    INVENTORY.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")

    rendered = []
    for seed in seeds:
        try:
            entity = fetch_entity(seed.get("queryTitle", seed["title"]))
        except Exception:
            entity = {}
        rendered.append(render_entry(seed, entity, inventory))

    rewrite_poi(rendered)
    print(f"Generated POIs: {len(rendered)}")


if __name__ == "__main__":
    main()
