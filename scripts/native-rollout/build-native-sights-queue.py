#!/usr/bin/env python3
"""Build a deterministic native sight-name and description translation queue."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 85


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def data_root(repo: Path) -> Path:
    generated = repo / "public/data"
    return generated if generated.is_dir() else repo / "data"


def plain_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def extract_sights(page: Path) -> list[dict[str, str]]:
    source = page.read_text(encoding="utf-8")
    section = re.search(r'<section class="plz-sights">.*?</section>', source, re.DOTALL)
    if not section:
        return []
    sights = []
    for article in re.findall(r'<article class="plz-sight".*?</article>', section.group(0), re.DOTALL):
        name_match = re.search(r'<h3 itemprop="name">(.*?)(?:<a |<span |</h3>)', article, re.DOTALL)
        desc_match = re.search(r'<div itemprop="description"><p>(.*?)</p></div>', article, re.DOTALL)
        name = plain_text(name_match.group(1)) if name_match else ""
        description = plain_text(desc_match.group(1)) if desc_match else ""
        if name or description:
            sights.append({"sourceName": name, "name": name, "desc": description})
    return sights


def make_batches(records: list[dict], prefix: str) -> list[dict]:
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
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--language", choices=("it", "es"), required=True)
    args = parser.parse_args()

    repo = args.repo.resolve()
    data = data_root(repo)
    sidecar_dir = data / "i18n" / args.language
    url_index = load_json(data / "_poi-url-index.json", {})
    if not sidecar_dir.is_dir() or not url_index:
        raise SystemExit(f"Native sidecars or URL index missing under {data}")

    records, targets = [], {}
    poi_count = sight_count = 0
    missing_pages = []
    for sidecar_path in sorted(sidecar_dir.glob("*.json")):
        poi_id = sidecar_path.stem
        url = str((url_index.get(poi_id) or {}).get("en") or "")
        relative = url.removeprefix("https://plizio.com").strip("/")
        page = repo / relative / "index.html"
        if not relative or not page.exists():
            missing_pages.append(poi_id)
            continue
        sights = extract_sights(page)
        if not sights:
            continue
        poi_count += 1
        sight_count += len(sights)
        for index, sight in enumerate(sights):
            for part in ("name", "desc"):
                text = sight[part]
                if not text:
                    continue
                key = f"core::{poi_id}::sights::{index}::{part}"
                records.append({"key": key, "text": text})
                targets[key] = {
                    "kind": "core", "poi": poi_id, "field": "sights",
                    "index": index, "part": part, "sourceName": sight["sourceName"],
                }

    prefix = f"{args.language}sights-v1"
    batches = make_batches(records, prefix)
    summary = {
        "version": 1,
        "language": args.language,
        "poiCount": poi_count,
        "sightCount": sight_count,
        "stringCount": len(records),
        "sourceCharacters": sum(len(item["text"]) for item in records),
        "batchCount": len(batches),
        "missingPageCount": len(missing_pages),
        "missingPageIds": missing_pages,
    }
    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "queue.json").write_text(json.dumps(batches, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "manifest.json").write_text(
        json.dumps({**summary, "targets": targets}, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
