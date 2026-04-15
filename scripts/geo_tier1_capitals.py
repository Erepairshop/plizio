from __future__ import annotations

import json
import hashlib
import time
import sys
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
IMAGES = ROOT / "public" / "geo-images"
AUDIO = ROOT / "public" / "geo-audio"
INVENTORY = ROOT / "public" / "geo-assets-inventory.json"
POI_PATH = ROOT / "lib" / "visualLab" / "data" / "poi.ts"


CAPITALS = [
    {
        "title": "Berlin",
        "slug": "berlin",
        "parent": "DE-BE",
        "description": {
            "de": "Hauptstadt von Deutschland und zugleich ein eigenes Bundesland.",
            "hu": "Németország fővárosa, és egyben önálló szövetségi tartomány.",
            "ro": "Capitala Germaniei și în același timp un land separat.",
            "en": "Capital of Germany and also a federal state of its own.",
        },
        "facts": {
            "de": ["Brandenburger Tor und Reichstag.", "Die Spree fließt durch die Stadt.", "1989 fiel hier die Berliner Mauer."],
            "hu": ["Itt áll a Brandenburgi kapu és a Reichstag.", "A Spree folyó áthalad a városon.", "1989-ben itt omlott le a berlini fal."],
            "ro": ["Aici se află Poarta Brandenburg și Reichstagul.", "Râul Spree traversează orașul.", "Aici a căzut Zidul Berlinului în 1989."],
            "en": ["Home to the Brandenburg Gate and the Reichstag.", "The River Spree flows through the city.", "The Berlin Wall fell here in 1989."],
        },
    },
    {
        "title": "München",
        "slug": "muenchen",
        "parent": "DE-BY",
        "description": {
            "de": "Hauptstadt von Bayern und eine der bekanntesten Städte Süddeutschlands.",
            "hu": "Bajorország fővárosa és Dél-Németország egyik legismertebb városa.",
            "ro": "Capitala Bavariei și unul dintre cele mai cunoscute orașe din sudul Germaniei.",
            "en": "Capital of Bavaria and one of southern Germany's best-known cities.",
        },
        "facts": {
            "de": ["Marienplatz und Frauenkirche liegen im Zentrum.", "Das Oktoberfest findet hier statt.", "Von hier sind die Alpen nicht weit entfernt."],
            "hu": ["A belvárosban van a Marienplatz és a Frauenkirche.", "Itt rendezik meg az Oktoberfestet.", "Az Alpok innen már közel vannak."],
            "ro": ["În centru se află Marienplatz și Frauenkirche.", "Aici are loc Oktoberfestul.", "Alpii sunt destul de aproape de oraș."],
            "en": ["Marienplatz and the Frauenkirche are in the center.", "The Oktoberfest is held here.", "The Alps are not far away."],
        },
    },
    {
        "title": "Stuttgart",
        "slug": "stuttgart",
        "parent": "DE-BW",
        "description": {
            "de": "Hauptstadt von Baden-Württemberg in einem von Weinbergen umgebenen Kessel.",
            "hu": "Baden-Württemberg fővárosa, amelyet dombok és szőlők vesznek körül.",
            "ro": "Capitala landului Baden-Württemberg, așezată într-o vale înconjurată de dealuri și vii.",
            "en": "Capital of Baden-Württemberg, set in a basin surrounded by hills and vineyards.",
        },
        "facts": {
            "de": ["Mercedes-Benz und Porsche sind hier stark verbunden.", "Der Neckar fließt durch die Region.", "Viele Hügel und Aussichtspunkte prägen die Stadt."],
            "hu": ["Erősen kötődik a Mercedes-Benzhez és a Porsche-hoz.", "A Neckar a térség fontos folyója.", "Sok domb és kilátópont jellemzi."],
            "ro": ["Este strâns legat de Mercedes-Benz și Porsche.", "Râul Neckar traversează regiunea.", "Orașul are multe dealuri și puncte de belvedere."],
            "en": ["Closely linked to Mercedes-Benz and Porsche.", "The Neckar shapes the region.", "Many hills and viewpoints define the city."],
        },
    },
    {
        "title": "Düsseldorf",
        "slug": "duesseldorf",
        "parent": "DE-NW",
        "description": {
            "de": "Hauptstadt von Nordrhein-Westfalen am Rhein.",
            "hu": "Észak-Rajna–Vesztfália fővárosa a Rajna partján.",
            "ro": "Capitala landului Renania de Nord-Westfalia, pe malul Rinului.",
            "en": "Capital of North Rhine-Westphalia on the River Rhine.",
        },
        "facts": {
            "de": ["Die Altstadt ist sehr bekannt.", "Der Rhein prägt das Stadtbild.", "Sie ist wichtig für Mode und Messen."],
            "hu": ["Óvárosa nagyon ismert.", "A Rajna meghatározza a város képét.", "Fontos divat- és vásárváros."],
            "ro": ["Centrul vechi este foarte cunoscut.", "Rinul definește imaginea orașului.", "Este important pentru modă și târguri."],
            "en": ["Its old town is well known.", "The Rhine shapes the cityscape.", "It is important for fashion and trade fairs."],
        },
    },
    {
        "title": "Hamburg",
        "slug": "hamburg",
        "parent": "DE-HH",
        "description": {
            "de": "Hamburg ist ein Stadtstaat und Deutschlands großer Hafen an Elbe und Alster.",
            "hu": "Hamburg városállam, Németország nagy kikötővárosa az Elba és az Alster mellett.",
            "ro": "Hamburg este un oraș-stat și marele port al Germaniei la Elba și Alster.",
            "en": "Hamburg is a city-state and Germany's major port on the Elbe and Alster.",
        },
        "facts": {
            "de": ["Die Elbphilharmonie ist ein modernes Wahrzeichen.", "Der Hafen gehört zu den größten Europas.", "Viele Brücken überspannen die Wasserarme."],
            "hu": ["Az Elbphilharmonie modern jelkép.", "Kikötője Európa legnagyobbjai közé tartozik.", "Sok híd ível át a vízágak felett."],
            "ro": ["Elbphilharmonie este un simbol modern al orașului.", "Portul se numără printre cele mai mari din Europa.", "Multe poduri traversează canalele și brațele de apă."],
            "en": ["The Elbphilharmonie is a modern landmark.", "Its port is among Europe's largest.", "Many bridges cross its waterways."],
        },
    },
    {
        "title": "Hannover",
        "slug": "hannover",
        "parent": "DE-NI",
        "description": {
            "de": "Hauptstadt von Niedersachsen und wichtige Messe-Stadt.",
            "hu": "Alsó-Szászország fővárosa és jelentős vásárváros.",
            "ro": "Capitala Saxoniei Inferioare și un important oraș al târgurilor.",
            "en": "Capital of Lower Saxony and an important trade fair city.",
        },
        "facts": {
            "de": ["Die Herrenhäuser Gärten sind berühmt.", "Hannover ist ein Verkehrsknotenpunkt.", "Viele internationale Messen finden hier statt."],
            "hu": ["A Herrenhäuser kertek híresek.", "Hannover fontos közlekedési csomópont.", "Sok nemzetközi vásárt rendeznek itt."],
            "ro": ["Grădinile Herrenhausen sunt celebre.", "Hanovra este un nod important de transport.", "Aici au loc multe târguri internaționale."],
            "en": ["The Herrenhausen Gardens are famous.", "Hanover is a major transport hub.", "Many international trade fairs take place here."],
        },
    },
    {
        "title": "Wiesbaden",
        "slug": "wiesbaden",
        "parent": "DE-HE",
        "description": {
            "de": "Hauptstadt von Hessen, bekannt für Thermalquellen und elegante Bauten.",
            "hu": "Hessen fővárosa, amely gyógyforrásairól és elegáns épületeiről ismert.",
            "ro": "Capitala landului Hessa, cunoscută pentru izvoarele termale și clădirile elegante.",
            "en": "Capital of Hesse, known for thermal springs and elegant architecture.",
        },
        "facts": {
            "de": ["Die Stadt liegt am Rhein gegenüber von Mainz.", "Schon die Römer nutzten die heißen Quellen.", "Das Kurhaus ist ein bekanntes Gebäude."],
            "hu": ["A Rajna partján, Mainzzal szemben fekszik.", "A forró forrásokat már a rómaiak is használták.", "A Kurhaus híres épülete."],
            "ro": ["Se află pe Rin, vizavi de Mainz.", "Romanii foloseau deja izvoarele fierbinți.", "Kurhausul este o clădire cunoscută."],
            "en": ["It lies on the Rhine opposite Mainz.", "The Romans already used its hot springs.", "The Kurhaus is a famous building."],
        },
    },
    {
        "title": "Mainz",
        "slug": "mainz",
        "parent": "DE-RP",
        "description": {
            "de": "Hauptstadt von Rheinland-Pfalz am Rhein.",
            "hu": "Rajna-vidék–Pfalz fővárosa a Rajna partján.",
            "ro": "Capitala landului Renania-Palatinat, pe malul Rinului.",
            "en": "Capital of Rhineland-Palatinate on the Rhine.",
        },
        "facts": {
            "de": ["Johannes Gutenberg wurde hier geboren.", "Der Main mündet in der Nähe in den Rhein.", "Der Mainzer Dom prägt die Altstadt."],
            "hu": ["Itt született Johannes Gutenberg.", "A Main nem messze innen ömlik a Rajnába.", "A mainzi dóm uralja az óvárost."],
            "ro": ["Aici s-a născut Johannes Gutenberg.", "Râul Main se varsă în apropiere în Rin.", "Domul din Mainz domină centrul vechi."],
            "en": ["Johannes Gutenberg was born here.", "The River Main meets the Rhine nearby.", "Mainz Cathedral shapes the old town."],
        },
    },
    {
        "title": "Saarbrücken",
        "slug": "saarbruecken",
        "parent": "DE-SL",
        "description": {
            "de": "Hauptstadt des Saarlands nahe der französischen Grenze.",
            "hu": "A Saar-vidék fővárosa, közel a francia határhoz.",
            "ro": "Capitala Saarlandului, aproape de granița cu Franța.",
            "en": "Capital of Saarland near the French border.",
        },
        "facts": {
            "de": ["Die Saar fließt durch die Stadt.", "Französische Einflüsse sind gut spürbar.", "Die Region hat eine Bergbau- und Industriegeschichte."],
            "hu": ["A Saar folyó áthalad a városon.", "Erős benne a francia hatás.", "A térségnek bányászati és ipari múltja van."],
            "ro": ["Râul Saar traversează orașul.", "Influența franceză se simte clar.", "Regiunea are un trecut minier și industrial."],
            "en": ["The River Saar flows through the city.", "French influence is easy to notice.", "The region has a mining and industrial history."],
        },
    },
    {
        "title": "Bremen",
        "slug": "bremen",
        "parent": "DE-HB",
        "description": {
            "de": "Bremen ist die Hauptstadt des kleinsten deutschen Bundeslands.",
            "hu": "Bremen a legkisebb német szövetségi tartomány fővárosa.",
            "ro": "Bremen este capitala celui mai mic land german.",
            "en": "Bremen is the capital of Germany's smallest federal state.",
        },
        "facts": {
            "de": ["Bekannt durch die Bremer Stadtmusikanten.", "Die Weser verbindet die Stadt mit der Nordsee.", "Das Rathaus gehört zum UNESCO-Welterbe."],
            "hu": ["A brémai muzsikusokról híres.", "A Weser köti össze a várost az Északi-tengerrel.", "A városháza világörökségi helyszín."],
            "ro": ["Este faimos pentru Muzicanții din Bremen.", "Weserul leagă orașul de Marea Nordului.", "Primăria face parte din patrimoniul UNESCO."],
            "en": ["Famous for the Town Musicians of Bremen.", "The Weser links the city to the North Sea.", "Its town hall is a UNESCO World Heritage Site."],
        },
    },
    {
        "title": "Kiel",
        "slug": "kiel",
        "parent": "DE-SH",
        "description": {
            "de": "Hauptstadt von Schleswig-Holstein an der Ostsee.",
            "hu": "Schleswig-Holstein fővárosa a Balti-tengernél.",
            "ro": "Capitala landului Schleswig-Holstein, la Marea Baltică.",
            "en": "Capital of Schleswig-Holstein on the Baltic Sea.",
        },
        "facts": {
            "de": ["Die Kieler Förde ist ein langer Meeresarm.", "Die Kieler Woche ist ein großes Segelereignis.", "Von hier startet der Nord-Ostsee-Kanal."],
            "hu": ["A Kieli-öböl hosszú tengeri beágazás.", "A Kieler Woche nagy vitorlás esemény.", "Innen indul az Északi- és Balti-tengert összekötő csatorna."],
            "ro": ["Fiordul Kieler Förde este un braț lung al mării.", "Săptămâna Kielului este un mare eveniment de navigație.", "De aici începe Canalul Kiel."],
            "en": ["The Kiel Fjord is a long inlet of the sea.", "Kiel Week is a major sailing event.", "The Kiel Canal starts here."],
        },
    },
    {
        "title": "Schwerin",
        "slug": "schwerin",
        "parent": "DE-MV",
        "description": {
            "de": "Hauptstadt von Mecklenburg-Vorpommern, bekannt für Schloss und Seen.",
            "hu": "Mecklenburg–Elő-Pomeránia fővárosa, amely kastélyáról és tavairól ismert.",
            "ro": "Capitala Mecklenburg-Pomeraniei Inferioare, cunoscută pentru castel și lacuri.",
            "en": "Capital of Mecklenburg-Western Pomerania, known for its castle and lakes.",
        },
        "facts": {
            "de": ["Das Schweriner Schloss liegt auf einer Insel.", "Rund um die Stadt gibt es viele Seen.", "Die Nähe zur Ostsee prägt die Region."],
            "hu": ["A schwerini kastély egy szigeten áll.", "A várost sok tó veszi körül.", "A Balti-tenger közelsége meghatározza a térséget."],
            "ro": ["Castelul Schwerin se află pe o insulă.", "Orașul este înconjurat de multe lacuri.", "Regiunea este influențată de apropierea de Marea Baltică."],
            "en": ["Schwerin Castle stands on an island.", "Many lakes surround the city.", "The nearby Baltic Sea shapes the region."],
        },
    },
    {
        "title": "Potsdam",
        "slug": "potsdam",
        "parent": "DE-BB",
        "description": {
            "de": "Hauptstadt von Brandenburg mit berühmten Schlössern und Parks.",
            "hu": "Brandenburg fővárosa híres kastélyokkal és parkokkal.",
            "ro": "Capitala Brandenburgului, cu palate și parcuri celebre.",
            "en": "Capital of Brandenburg with famous palaces and parks.",
        },
        "facts": {
            "de": ["Schloss Sanssouci ist das bekannteste Bauwerk.", "Potsdam liegt direkt neben Berlin.", "Im Schloss Cecilienhof fand 1945 die Potsdamer Konferenz statt."],
            "hu": ["A Sanssouci-kastély a legismertebb épülete.", "Potsdam közvetlenül Berlin mellett fekszik.", "A cecilienhofi kastélyban tartották az 1945-ös potsdami konferenciát."],
            "ro": ["Palatul Sanssouci este cel mai cunoscut monument.", "Potsdam se află chiar lângă Berlin.", "În Palatul Cecilienhof a avut loc Conferința de la Potsdam din 1945."],
            "en": ["Sanssouci Palace is its best-known landmark.", "Potsdam lies right next to Berlin.", "The 1945 Potsdam Conference took place at Cecilienhof Palace."],
        },
    },
    {
        "title": "Magdeburg",
        "slug": "magdeburg",
        "parent": "DE-ST",
        "description": {
            "de": "Hauptstadt von Sachsen-Anhalt an der Elbe.",
            "hu": "Szász-Anhalt fővárosa az Elba partján.",
            "ro": "Capitala Saxoniei-Anhalt, pe malul Elbei.",
            "en": "Capital of Saxony-Anhalt on the River Elbe.",
        },
        "facts": {
            "de": ["Der Magdeburger Dom ist ein bedeutendes Wahrzeichen.", "Otto der Große machte die Stadt früh wichtig.", "Die Elbe ist für Verkehr und Landschaft wichtig."],
            "hu": ["A magdeburgi dóm fontos jelkép.", "Nagy Ottó korán jelentős várossá tette.", "Az Elba fontos a közlekedés és a táj szempontjából."],
            "ro": ["Catedrala din Magdeburg este un simbol important.", "Otto cel Mare a făcut orașul important încă din Evul Mediu timpuriu.", "Elba este importantă pentru transport și peisaj."],
            "en": ["Magdeburg Cathedral is an important landmark.", "Otto the Great made the city important early on.", "The Elbe is important for transport and landscape."],
        },
    },
    {
        "title": "Erfurt",
        "slug": "erfurt",
        "parent": "DE-TH",
        "description": {
            "de": "Hauptstadt von Thüringen mit einer gut erhaltenen Altstadt.",
            "hu": "Türingia fővárosa, jól megőrzött óvárossal.",
            "ro": "Capitala Turingiei, cu un centru vechi foarte bine păstrat.",
            "en": "Capital of Thuringia with a well-preserved old town.",
        },
        "facts": {
            "de": ["Die Krämerbrücke ist eine besondere bebaute Brücke.", "Martin Luther studierte in Erfurt.", "Der Erfurter Dom steht auf einem Hügel über der Stadt."],
            "hu": ["A Krämerbrücke híres, beépített híd.", "Luther Márton Erfurtban tanult.", "Az erfurti dóm dombon magasodik a város fölé."],
            "ro": ["Podul Krämerbrücke este un pod locuit foarte special.", "Martin Luther a studiat la Erfurt.", "Domul din Erfurt se ridică deasupra orașului pe o colină."],
            "en": ["Krämerbrücke is a special bridge lined with houses.", "Martin Luther studied in Erfurt.", "Erfurt Cathedral rises above the city on a hill."],
        },
    },
    {
        "title": "Dresden",
        "slug": "dresden",
        "parent": "DE-SN",
        "description": {
            "de": "Hauptstadt von Sachsen an der Elbe mit reicher Kunst- und Baugeschichte.",
            "hu": "Szászország fővárosa az Elba mellett, gazdag művészeti és építészeti múlttal.",
            "ro": "Capitala Saxoniei, pe Elba, cu o istorie bogată a artei și arhitecturii.",
            "en": "Capital of Saxony on the Elbe, known for art and architecture.",
        },
        "facts": {
            "de": ["Der Zwinger und die Frauenkirche sind sehr bekannt.", "Dresden wurde im Zweiten Weltkrieg schwer zerstört.", "Die Stadt wurde in großen Teilen wieder aufgebaut."],
            "hu": ["A Zwinger és a Frauenkirche nagyon híres.", "Drezda a második világháborúban súlyosan megsérült.", "A város nagy részét újjáépítették."],
            "ro": ["Zwingerul și Frauenkirche sunt foarte cunoscute.", "Dresda a fost grav distrusă în Al Doilea Război Mondial.", "Orașul a fost reconstruit în mare parte."],
            "en": ["The Zwinger and Frauenkirche are famous landmarks.", "Dresden was heavily destroyed in World War II.", "Large parts of the city were rebuilt."],
        },
    },
]

def get_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": "CodexGeoTask/1.0"})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8"))


def download(url: str, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    delay = 1.5
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "CodexGeoTask/1.0"})
            with urllib.request.urlopen(req) as response:
                target.write_bytes(response.read())
            time.sleep(0.8)
            return
        except urllib.error.HTTPError as error:
            if error.code != 429 or attempt == 5:
                raise
            time.sleep(delay)
            delay *= 1.8


def safe_download(url: str, target: Path) -> bool:
    try:
        download(url, target)
        return True
    except Exception as error:
        print(f"WARN download failed for {target.name}: {error}")
        return False


def commons_file_url(filename: str) -> str:
    normalized = filename.replace(" ", "_")
    digest = hashlib.md5(normalized.encode("utf-8")).hexdigest()
    quoted = urllib.parse.quote(normalized)
    return f"https://upload.wikimedia.org/wikipedia/commons/{digest[0]}/{digest[:2]}/{quoted}"


def fetch_entity_by_title(title: str) -> dict:
    url = (
        "https://www.wikidata.org/w/api.php?action=wbgetentities&sites=dewiki"
        f"&titles={urllib.parse.quote(title)}&languages=de|en|hu|ro&format=json"
    )
    payload = get_json(url)
    entities = payload.get("entities", {})
    entity = next(iter(entities.values()))
    if "missing" in entity:
        raise RuntimeError(f"Missing wikidata entity for {title}")
    return entity


def claim_value(entity: dict, prop: str):
    claims = entity.get("claims", {}).get(prop)
    if not claims:
        return None
    return claims[0]["mainsnak"]["datavalue"]["value"]


def get_label(entity: dict, lang: str, fallback_lang: str = "de") -> str:
    labels = entity.get("labels", {})
    return labels.get(lang, labels.get(fallback_lang, {})).get("value", "")


def scan_inventory() -> dict:
    inventory = {"coats_of_arms": {}, "photos": {}, "audio": {}}
    for file in sorted(IMAGES.iterdir()):
        if not file.is_file():
            continue
        stem = file.stem
        rel = f"/geo-images/{file.name}"
        if file.name.startswith("coa_"):
            inventory["coats_of_arms"][file.stem[4:]] = rel
        elif file.suffix.lower() in {".jpg", ".jpeg", ".webp", ".png"}:
            inventory["photos"][stem] = rel
    for file in sorted(AUDIO.iterdir()):
        if not file.is_file():
            continue
        if file.suffix.lower() in {".ogg", ".oga", ".mp3", ".wav"}:
            inventory["audio"][file.stem] = f"/geo-audio/{file.name}"
    return inventory


def patch_poi(entries: list[dict]) -> None:
    text = POI_PATH.read_text(encoding="utf-8")
    text = text.replace(
        'type: "city" | "river" | "mountain" | "lake" | "island" | "landmark" | "historical" | "country" | "region";',
        'type: "state-capital" | "city" | "river" | "mountain" | "lake" | "island" | "landmark" | "historical" | "forest" | "sea" | "country" | "region";',
    )
    text = text.replace(
        "  facts: { de: string[]; hu: string[]; ro: string[]; en: string[] };\n  image?: string;\n  coa?: string;\n  audio?: string;\n};",
        '  facts: { de: string[]; hu: string[]; ro: string[]; en: string[] };\n  descriptionAdvanced?: { de: string; hu: string; ro: string; en: string };\n  factsAdvanced?: { de: string[]; hu: string[]; ro: string[]; en: string[] };\n  subjects?: ("sachkunde" | "geographie" | "geschichte")[];\n  grades?: number[];\n  historyPeriod?: "middle-ages" | "reformation" | "empire" | "ww1" | "ww2" | "ddr" | "modern";\n  historyYear?: number | [number, number];\n  elevation?: number;\n  length?: number;\n  area?: number;\n  image?: string;\n  coa?: string;\n  audio?: string;\n};',
    )
    insert_marker = "export const pois: POI[] = [\n  ...regions,"
    if insert_marker not in text:
        raise RuntimeError("Could not find pois array marker")

    payload = []
    for item in entries:
        payload.append("  {")
        payload.append(f'    id: "{item["id"]}",')
        payload.append('    type: "state-capital",')
        payload.append(f'    parent: "{item["parent"]}",')
        payload.append(f'    coords: [{item["coords"][0]}, {item["coords"][1]}],')
        payload.append(
            f'    name: {{ de: "{item["name"]["de"]}", hu: "{item["name"]["hu"]}", ro: "{item["name"]["ro"]}", en: "{item["name"]["en"]}" }},'
        )
        payload.append(
            f'    description: {{ de: "{item["description"]["de"]}", hu: "{item["description"]["hu"]}", ro: "{item["description"]["ro"]}", en: "{item["description"]["en"]}" }},'
        )
        payload.append(
            f'    facts: {{ de: {json.dumps(item["facts"]["de"], ensure_ascii=False)}, hu: {json.dumps(item["facts"]["hu"], ensure_ascii=False)}, ro: {json.dumps(item["facts"]["ro"], ensure_ascii=False)}, en: {json.dumps(item["facts"]["en"], ensure_ascii=False)} }},'
        )
        payload.append('    subjects: ["sachkunde", "geographie", "geschichte"],')
        payload.append('    grades: [1, 2, 3, 4, 5, 6, 7, 8],')
        if item.get("image"):
            payload.append(f'    image: "{item["image"]}",')
        if item.get("coa"):
            payload.append(f'    coa: "{item["coa"]}",')
        if item.get("audio"):
            payload.append(f'    audio: "{item["audio"]}",')
        payload.append("  },")
    block = "\n" + "\n".join(payload)

    start = text.index(insert_marker) + len(insert_marker)
    end = text.index("\n];", start)
    new_text = text[:start] + block + "\n" + text[end:]
    POI_PATH.write_text(new_text, encoding="utf-8")


def main() -> None:
    generated_entries: list[dict] = []

    for capital in CAPITALS:
        entity = fetch_entity_by_title(capital["title"])
        coords = claim_value(entity, "P625")
        image_name = claim_value(entity, "P18")
        coa_name = claim_value(entity, "P94")

        slug = capital["slug"]
        image_path = IMAGES / f"city-{slug}.jpg"
        coa_path = IMAGES / f"coa_city-{slug}.svg"

        if image_name and not image_path.exists():
            safe_download(commons_file_url(image_name), image_path)
        if coa_name and not coa_path.exists():
            safe_download(commons_file_url(coa_name), coa_path)

        generated_entries.append(
            {
                "id": f"city-{slug}",
                "parent": capital["parent"],
                "coords": [round(coords["longitude"], 4), round(coords["latitude"], 4)],
                "name": {
                    "de": get_label(entity, "de"),
                    "hu": get_label(entity, "hu") or get_label(entity, "de"),
                    "ro": get_label(entity, "ro") or get_label(entity, "de"),
                    "en": get_label(entity, "en") or get_label(entity, "de"),
                },
                "description": capital["description"],
                "facts": capital["facts"],
                "image": f"/geo-images/city-{slug}.jpg" if image_path.exists() else None,
                "coa": f"/geo-images/coa_city-{slug}.svg" if coa_path.exists() else None,
                "audio": f"/geo-audio/city-{slug}.ogg" if (AUDIO / f"city-{slug}.ogg").exists() else None,
            }
        )

    INVENTORY.write_text(json.dumps(scan_inventory(), ensure_ascii=False, indent=2), encoding="utf-8")
    patch_poi(generated_entries)
    print("Tier 1 capitals processed:", len(generated_entries))


if __name__ == "__main__":
    main()
