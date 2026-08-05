#!/usr/bin/env python3
"""Build a deterministic Spanish native-country translation queue."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path


LANG_KEYS = {"de", "hu", "ro", "en", "fr", "tr", "hr", "it", "es", "pt", "pl"}
MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 85


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def data_root(repo: Path) -> Path:
    generated = repo / "public/data"
    return generated if generated.is_dir() else repo / "data"


def spanish_ids(data: Path) -> set[str]:
    index = load_json(data / "_poi-url-index.json", {})
    return {
        poi_id
        for poi_id, urls in index.items()
        if len(str((urls or {}).get("en", "")).split("/")) > 2
        and str((urls or {}).get("en", "")).split("/")[2] == "spain"
    }


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


def collect_core(data: Path, ids: set[str], records: list, targets: dict) -> None:
    pois = load_json(data / "pois/ES.json", {}).get("pois", [])
    faqs = load_faqs(data)
    for poi in pois:
        poi_id = poi.get("id")
        if not poi_id or poi_id not in ids:
            continue
        sidecar = load_json(data / f"i18n/es/{poi_id}.json", {})
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


def layer_key(layer: str, poi_id: str, relative: str, path: list, index=None) -> str:
    raw = json.dumps([layer, poi_id, relative, path, index], ensure_ascii=False, separators=(",", ":"))
    return f"{layer}::{poi_id}::{hashlib.sha1(raw.encode()).hexdigest()[:16]}"


def collect_localized(layer: str, poi_id: str, relative: str, value, records: list, targets: dict, path=None) -> None:
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
        for key, child in value.items():
            if key not in LANG_KEYS:
                collect_localized(layer, poi_id, relative, child, records, targets, path + [key])
    elif isinstance(value, list):
        for index, child in enumerate(value):
            collect_localized(layer, poi_id, relative, child, records, targets, path + [index])


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
            collect_localized(layer, poi_id, relative, load_json(path, {}), records, targets)
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


def make_batches(records: list) -> list[dict]:
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
        {"id": f"esfull-v1-b{number:04d}", "items": {item["key"]: item["text"] for item in batch}}
        for number, batch in enumerate(batches, 1)
    ]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()
    repo = args.repo.resolve()
    args.output_dir.mkdir(parents=True, exist_ok=True)

    data = data_root(repo)
    ids = spanish_ids(data)
    if not ids:
        raise SystemExit(
            f"No Spanish POIs found under {repo}. "
            "Use the generated-data working tree, not a clean Git checkout."
        )
    records, targets = [], {}
    collect_core(data, ids, records, targets)
    file_counts = collect_layers(data, ids, records, targets)
    batches = make_batches(records)
    source_chars = sum(len(item["text"]) for item in records)
    existing = list((data / "i18n/es").glob("*.json"))
    summary = {
        "version": 1,
        "country": "spain",
        "language": "es",
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
