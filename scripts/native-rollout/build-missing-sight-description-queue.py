#!/usr/bin/env python3
"""Build Azure batches for sight cards whose English description is empty."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 70
LANGUAGE_NAMES = {
    "de": "German",
    "en": "English",
    "es": "European Spanish",
    "fr": "French",
    "hr": "Croatian",
    "hu": "Hungarian",
    "it": "Italian",
    "ro": "Romanian",
}


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def data_root(repo: Path) -> Path:
    generated = repo / "public/data"
    return generated if generated.is_dir() else repo / "data"


def plain_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def extract_sights(page: Path) -> tuple[str, list[dict[str, str]], set[str]]:
    source = page.read_text(encoding="utf-8")
    alternate_langs = set(re.findall(r'hreflang="([a-z]{2})"', source, re.IGNORECASE))
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', source, re.DOTALL)
    place = plain_text(title_match.group(1)) if title_match else page.parent.name
    section = re.search(r'<section class="plz-sights">.*?</section>', source, re.DOTALL)
    if not section:
        return place, [], alternate_langs

    sights = []
    for article in re.findall(r'<article class="plz-sight".*?</article>', section.group(0), re.DOTALL):
        heading_match = re.search(r'<h3 itemprop="name">(.*?)</h3>', article, re.DOTALL)
        if not heading_match:
            continue
        heading = heading_match.group(1)
        name_part = re.split(r'<a class="plz-sight-sv|<span class="plz-sight-cat"', heading, maxsplit=1)[0]
        name = plain_text(name_part)
        desc_match = re.search(r'<div itemprop="description">(.*?)</div>', article, re.DOTALL)
        description = plain_text(desc_match.group(1)) if desc_match else ""
        category_match = re.search(r'<span class="plz-sight-cat">(.*?)</span>', heading, re.DOTALL)
        category = plain_text(category_match.group(1)) if category_match else ""
        if name:
            sights.append({
                "sourceName": name, "place": place,
                "category": category, "description": description,
            })
    return place, sights, alternate_langs


def make_batches(records: list[dict]) -> list[dict]:
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
        {"id": f"missing-sight-desc-b{number:04d}", "items": {item["key"]: item["text"] for item in batch}}
        for number, batch in enumerate(batches, 1)
    ]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True, help="Rendered release containing English POI HTML")
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()

    repo = args.repo.resolve()
    data = data_root(repo)
    url_index = load_json(data / "_poi-url-index.json", {})
    hr_native = load_json(data / "poi-hr-native.json", {})
    if not url_index:
        raise SystemExit(f"POI URL index missing under {data}")

    records, targets = [], {}
    poi_count = sight_count = 0
    translation_only_count = 0
    missing_pages = []
    for poi_id, urls in sorted(url_index.items()):
        en_url = str((urls or {}).get("en") or "")
        relative = en_url.removeprefix("https://plizio.com").strip("/")
        page = repo / relative / "index.html"
        if not relative or not page.exists():
            missing_pages.append(poi_id)
            continue
        _, sights, alternate_langs = extract_sights(page)
        missing = [sight for sight in sights if not sight["description"]]
        if not missing:
            continue
        poi_count += 1
        sight_count += len(missing)
        target_langs = [lang for lang in LANGUAGE_NAMES if lang in alternate_langs]
        if poi_id in hr_native and "hr" not in target_langs:
            target_langs.append("hr")
        for index, sight in enumerate(missing):
            context = {
                "place": sight["place"],
                "sight": sight["sourceName"],
                "category": sight["category"],
            }
            for lang in target_langs:
                key = f"{poi_id}::{index}::{lang}"
                records.append({
                    "key": key,
                    "text": json.dumps({**context, "targetLanguage": LANGUAGE_NAMES[lang]}, ensure_ascii=False),
                })
                targets[key] = {
                    "poi": poi_id,
                    "index": index,
                    "lang": lang,
                    "sourceName": sight["sourceName"],
                }

    # Croatian sidecars can lack a translation even when the English source is
    # complete. Queue those as grounded translations in the same resumable run.
    for poi_id, native in sorted(hr_native.items()):
        native_sights = (native or {}).get("sights") or []
        if not native_sights:
            continue
        en_url = str((url_index.get(poi_id) or {}).get("en") or "")
        relative = en_url.removeprefix("https://plizio.com").strip("/")
        page = repo / relative / "index.html"
        if not relative or not page.exists():
            continue
        _, source_sights, _ = extract_sights(page)
        for index, target_sight in enumerate(native_sights):
            if target_sight.get("desc") or index >= len(source_sights):
                continue
            source = source_sights[index]
            if not source["description"]:
                continue
            key = f"{poi_id}::{index}::hr"
            if key in targets:
                continue
            records.append({
                "key": key,
                "text": json.dumps({
                    "place": source["place"], "sight": source["sourceName"],
                    "category": source["category"], "sourceDescription": source["description"],
                    "targetLanguage": LANGUAGE_NAMES["hr"],
                }, ensure_ascii=False),
            })
            targets[key] = {
                "poi": poi_id, "index": index, "lang": "hr",
                "sourceName": source["sourceName"],
            }
            translation_only_count += 1

    summary = {
        "version": 1,
        "poiCount": poi_count,
        "sightCount": sight_count,
        "translationOnlyCount": translation_only_count,
        "stringCount": len(records),
        "sourceCharacters": sum(len(item["text"]) for item in records),
        "batchCount": 0,
        "missingPageCount": len(missing_pages),
    }
    batches = make_batches(records)
    summary["batchCount"] = len(batches)
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
