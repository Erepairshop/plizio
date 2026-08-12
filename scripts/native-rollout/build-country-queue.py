#!/usr/bin/env python3
"""Build a deterministic native-country translation queue for any language."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
from pathlib import Path


LANG_KEYS = {"de", "hu", "ro", "en", "fr", "tr", "hr", "it", "es", "pt", "pl", "nl", "cs", "sk", "da", "sv", "fi", "el", "bg"}
MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 85

LANGUAGE = "es"


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def data_root(repo: Path) -> Path:
    generated = repo / "public/data"
    return generated if generated.is_dir() else repo / "data"


def country_ids(data: Path, country_slug: str) -> set[str]:
    index = load_json(data / "_poi-url-index.json", {})
    return {
        poi_id
        for poi_id, urls in index.items()
        if len(str((urls or {}).get("en", "")).split("/")) > 2
        and str((urls or {}).get("en", "")).split("/")[2] == country_slug
    }


# Which POIs actually get a page in a given language, mirroring extraLangsFor()
# in lib/seo/slugs.ts. The deployed url-index only records the four core langs
# even though the generator writes fr/tr/hr pages, so it cannot answer this.
PARENT_PREFIX_GATE = {"fr": "FR", "tr": "DE"}


def rendered_ids(data: Path, ids: set[str], language: str, pois_file: str) -> set[str]:
    prefix = PARENT_PREFIX_GATE.get(language)
    if prefix:
        pois = load_json(data / "pois" / pois_file, {}).get("pois", [])
        return {
            poi["id"]
            for poi in pois
            if poi.get("id") in ids and str(poi.get("parent") or "").startswith(prefix)
        }
    if language == "hr":
        # hrLong: flat hr-native corpus, plus anything already sidecar-translated.
        native = load_json(data / "poi-hr-native.json", {})
        sidecars = {p.stem for p in (data / "i18n" / "hr").glob("*.json")} if (data / "i18n" / "hr").is_dir() else set()
        return {poi_id for poi_id in ids if poi_id in native or poi_id in sidecars}
    # it/es/pt/nl are gated on the country alone.
    return ids


def load_faqs(data: Path) -> dict:
    shards = sorted(data.glob("poi-faqs-[0-9]*.json"))
    if not shards:
        shards = [data / "poi-faqs.json"]
    result = {}
    for shard in shards:
        result.update(load_json(shard, {}))
    return result


def english_value(value):
    if isinstance(value, dict):
        return value.get("en") or value.get("de")
    return value


def add(records: list, targets: dict, key: str, text, target: dict) -> None:
    if not isinstance(text, str) or not text.strip():
        return
    records.append({"key": key, "text": text.strip()})
    targets[key] = target


def collect_core(data: Path, pois_file: str, ids: set[str], records: list, targets: dict) -> None:
    pois = load_json(data / "pois" / pois_file, {}).get("pois", [])
    faqs = load_faqs(data)
    for poi in pois:
        poi_id = poi.get("id")
        if not poi_id or poi_id not in ids:
            continue
        sidecar = load_json(data / f"i18n/{LANGUAGE}/{poi_id}.json", {})
        add(records, targets, f"core::{poi_id}::name", english_value(poi.get("name")),
            {"kind": "core", "poi": poi_id, "field": "name"})
        add(records, targets, f"core::{poi_id}::description", english_value(poi.get("description")),
            {"kind": "core", "poi": poi_id, "field": "description"})
        facts = english_value(poi.get("facts")) or []
        if isinstance(facts, list):
            for index, fact in enumerate(facts):
                add(records, targets, f"core::{poi_id}::facts::{index}", fact,
                    {"kind": "core", "poi": poi_id, "field": "facts", "index": index})
        if not sidecar.get("faq"):
            for index, faq in enumerate(faqs.get(poi_id) or []):
                add(records, targets, f"core::{poi_id}::faq::{index}::q", (faq.get("q") or {}).get("en"),
                    {"kind": "core", "poi": poi_id, "field": "faq", "index": index, "part": "q"})
                add(records, targets, f"core::{poi_id}::faq::{index}::a", (faq.get("a") or {}).get("en"),
                    {"kind": "core", "poi": poi_id, "field": "faq", "index": index, "part": "a"})


def html_text(fragment: str) -> str:
    text = html.unescape(re.sub(r"<[^>]+>", " ", fragment))
    return re.sub(r"\s+", " ", text).strip()


def collect_missing_descadv(repo: Path, data: Path, ids: set[str], records: list, targets: dict) -> dict:
    url_index = load_json(data / "_poi-url-index.json", {})
    missing_source = []
    descadv_count = 0
    facts_count = 0
    for poi_id in sorted(ids):
        sidecar = load_json(data / f"i18n/{LANGUAGE}/{poi_id}.json", {})
        url = str((url_index.get(poi_id) or {}).get("en") or "")
        relative = url.removeprefix("https://plizio.com").strip("/")
        page = repo / relative / "index.html"
        if not relative or not page.exists():
            missing_source.append(poi_id)
            continue
        source_html = page.read_text(encoding="utf-8")
        lead_match = re.search(r'<p class="poi-lead-paragraph">(.*?)</p>', source_html, re.DOTALL)
        if not lead_match:
            missing_source.append(poi_id)
            continue
        if not (sidecar.get("descAdv") or sidecar.get("descriptionAdvanced")):
            add(records, targets, f"core::{poi_id}::descAdv", html_text(lead_match.group(1)),
                {"kind": "core", "poi": poi_id, "field": "descAdv"})
            descadv_count += 1

        # The thin POI export contains only short generic facts. The rendered
        # English page still has the richer factsAdvanced list, so use it as
        # the deterministic source for native-language pages as well.
        facts_match = re.search(r'<ul class="plz-facts">(.*?)</ul>', source_html, re.DOTALL)
        if facts_match:
            facts = [html_text(item) for item in re.findall(r"<li[^>]*>(.*?)</li>", facts_match.group(1), re.DOTALL)]
            facts = [fact for fact in facts if fact]
            for index, fact in enumerate(facts):
                add(records, targets, f"core::{poi_id}::facts-rich::{index}", fact,
                    {"kind": "core", "poi": poi_id, "field": "facts", "index": index,
                     "replace": True})
                facts_count += 1
    if missing_source:
        raise SystemExit(
            f"Missing English lead paragraph for {len(missing_source)} POIs: "
            + ", ".join(missing_source[:10])
        )
    return {"descAdv": descadv_count, "factsAdvanced": facts_count}


def layer_key(layer: str, poi_id: str, relative: str, path: list, index=None) -> str:
    raw = json.dumps([layer, poi_id, relative, path, index], ensure_ascii=False, separators=(",", ":"))
    return f"{layer}::{poi_id}::{hashlib.sha1(raw.encode()).hexdigest()[:16]}"


def nested_optional(root, path: tuple):
    current = root
    for part in path:
        if isinstance(part, int):
            if not isinstance(current, list) or part >= len(current):
                return None
        elif not isinstance(current, dict) or part not in current:
            return None
        current = current[part]
    return current


def collect_structured_missing(
    layer: str,
    poi_id: str,
    relative: str,
    source,
    translated,
    records: list,
    targets: dict,
    path: list,
    source_path: tuple = (),
) -> None:
    if isinstance(source, str):
        leaf = source_path[-1] if source_path else None
        if leaf not in {"name", "tip"} or not source.strip():
            return
        existing = nested_optional(translated, source_path)
        if isinstance(existing, str) and existing.strip():
            return
        key = layer_key(layer, poi_id, relative, path, list(source_path))
        add(records, targets, key, source, {
            "kind": "layer-structured",
            "layer": layer,
            "poi": poi_id,
            "file": relative,
            "path": path,
            "sourcePath": list(source_path),
        })
    elif isinstance(source, dict):
        for key, child in source.items():
            collect_structured_missing(
                layer, poi_id, relative, child, translated, records, targets,
                path, source_path + (key,),
            )
    elif isinstance(source, list):
        for index, child in enumerate(source):
            collect_structured_missing(
                layer, poi_id, relative, child, translated, records, targets,
                path, source_path + (index,),
            )


def collect_localized(
    layer: str,
    poi_id: str,
    relative: str,
    value,
    records: list,
    targets: dict,
    path=None,
    include_structured: bool = False,
) -> None:
    path = path or []
    if isinstance(value, dict):
        source = value.get("en")
        if isinstance(source, str) and source.strip():
            key = layer_key(layer, poi_id, relative, path)
            add(records, targets, key, source,
                {"kind": "layer-string", "layer": layer, "poi": poi_id, "file": relative, "path": path})
        elif isinstance(source, list) and source and all(isinstance(item, str) for item in source):
            for index, text in enumerate(source):
                if not text.strip():
                    continue
                key = layer_key(layer, poi_id, relative, path, index)
                add(records, targets, key, text,
                    {"kind": "layer-list", "layer": layer, "poi": poi_id, "file": relative,
                     "path": path, "index": index})
        elif include_structured and isinstance(source, (dict, list)):
            collect_structured_missing(
                layer, poi_id, relative, source, value.get(LANGUAGE), records, targets, path,
            )
        for key, child in value.items():
            if key not in LANG_KEYS:
                collect_localized(
                    layer, poi_id, relative, child, records, targets, path + [key], include_structured,
                )
    elif isinstance(value, list):
        for index, child in enumerate(value):
            collect_localized(
                layer, poi_id, relative, child, records, targets, path + [index], include_structured,
            )


def collect_layers(data: Path, ids: set[str], records: list, targets: dict) -> dict:
    counts = {}
    for layer, directory in (
        ("citytips", "city-tips"),
        ("pinfo", "poi-practical"),
        ("itinerary", "itinerary"),
    ):
        count = 0
        for poi_id in sorted(ids):
            path = data / directory / f"{poi_id}.json"
            if not path.exists():
                continue
            relative = f"public/data/{path.relative_to(data).as_posix()}"
            collect_localized(
                layer, poi_id, relative, load_json(path, {}), records, targets,
                include_structured=layer == "citytips",
            )
            count += 1
        counts[layer] = count

    events_path = data / "poi-yearly-highlights.json"
    events = load_json(events_path, {})
    relative = "public/data/poi-yearly-highlights.json"
    count = 0
    for poi_id in sorted(ids):
        if poi_id not in events:
            continue
        collect_localized("events", poi_id, relative, events[poi_id], records, targets, [poi_id])
        count += 1
    counts["events"] = count
    return counts


def collect_missing_citytips_structured(
    data: Path, ids: set[str], records: list, targets: dict,
) -> dict:
    def collect_nodes(layer: str, poi_id: str, relative: str, value, path=None) -> None:
        path = path or []
        if isinstance(value, dict):
            source = value.get("en")
            if isinstance(source, (dict, list)):
                collect_structured_missing(
                    layer, poi_id, relative, source, value.get(LANGUAGE), records, targets, path,
                )
            for key, child in value.items():
                if key not in LANG_KEYS:
                    collect_nodes(layer, poi_id, relative, child, path + [key])
        elif isinstance(value, list):
            for index, child in enumerate(value):
                collect_nodes(layer, poi_id, relative, child, path + [index])

    files = 0
    for poi_id in sorted(ids):
        path = data / "city-tips" / f"{poi_id}.json"
        if not path.exists():
            continue
        relative = f"public/data/{path.relative_to(data).as_posix()}"
        collect_nodes("citytips", poi_id, relative, load_json(path, {}))
        files += 1
    return {"citytips": files, "structuredMissing": len(records)}


def make_batches(records: list, prefix: str) -> list[dict]:
    batches, current, size = [], [], 0
    for item in records:
        item_size = len(item["key"]) + len(item["text"]) + 30
        if current and (len(current) >= MAX_ITEMS or size + item_size > MAX_INPUT_CHARS):
            batches.append(current)
            current, size = [], 0
        current.append(item)
        size += item_size
    if current:
        batches.append(current)
    return [
        {"id": f"{prefix}-b{number:04d}", "items": {item["key"]: item["text"] for item in batch}}
        for number, batch in enumerate(batches, 1)
    ]


def main() -> int:
    global LANGUAGE
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--language", required=True, help="Target sidecar language key, e.g. pt")
    parser.add_argument("--country-slug", required=True, help="Country slug in English URLs, e.g. portugal")
    parser.add_argument("--pois-file", required=True, help="POI source file under data/pois, e.g. PT.json")
    parser.add_argument(
        "--mode",
        choices=("full", "missing-descadv", "missing-citytips-structured"),
        default="full",
    )
    parser.add_argument(
        "--only-rendered",
        action="store_true",
        help="Restrict to POIs that actually get a page in the target language, "
             "mirroring extraLangsFor(). Use for fr/tr/hr, whose page set is "
             "narrower than their country; omit when bootstrapping a language "
             "whose pages do not exist yet.",
    )
    args = parser.parse_args()
    if args.language not in LANG_KEYS:
        raise SystemExit(f"Unknown language key {args.language}")
    LANGUAGE = args.language
    repo = args.repo.resolve()
    args.output_dir.mkdir(parents=True, exist_ok=True)

    data = data_root(repo)
    ids = country_ids(data, args.country_slug)
    if not ids:
        raise SystemExit(
            f"No {args.country_slug} POIs found under {repo}. "
            "Use the generated-data working tree, not a clean Git checkout."
        )
    country_total = len(ids)
    if args.only_rendered:
        ids = rendered_ids(data, ids, LANGUAGE, args.pois_file)
        if not ids:
            raise SystemExit(
                f"None of the {country_total} {args.country_slug} POIs render in "
                f"'{LANGUAGE}'. Drop --only-rendered to bootstrap a new language."
            )
    records, targets = [], {}
    if args.mode == "missing-descadv":
        file_counts = collect_missing_descadv(repo, data, ids, records, targets)
        batch_prefix = f"{LANGUAGE}descadv-v1"
    elif args.mode == "missing-citytips-structured":
        file_counts = collect_missing_citytips_structured(data, ids, records, targets)
        batch_prefix = f"{LANGUAGE}citytips-v1"
    else:
        collect_core(data, args.pois_file, ids, records, targets)
        file_counts = collect_layers(data, ids, records, targets)
        batch_prefix = f"{LANGUAGE}full-v1"
    batches = make_batches(records, batch_prefix)
    source_chars = sum(len(item["text"]) for item in records)
    existing = list((data / f"i18n/{LANGUAGE}").glob("*.json"))
    summary = {
        "version": 1,
        "mode": args.mode,
        "country": args.country_slug,
        "language": LANGUAGE,
        "onlyRendered": bool(args.only_rendered),
        "countryPoiCount": country_total,
        "poiCount": len(ids),
        "existingSidecars": len(existing),
        "fileCounts": file_counts,
        "stringCount": len(records),
        "sourceCharacters": source_chars,
        "batchCount": len(batches),
    }
    (args.output_dir / "queue.json").write_text(json.dumps(batches, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "manifest.json").write_text(
        json.dumps({**summary, "targets": targets}, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
