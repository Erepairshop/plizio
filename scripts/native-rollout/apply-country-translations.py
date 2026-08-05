#!/usr/bin/env python3
"""Apply a completed country translation queue to JSON sidecars and layers."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


def load_json(path: Path, default: Any = None) -> Any:
    if not path.exists():
        return {} if default is None else default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def load_translations(path: Path) -> dict[str, str]:
    latest: dict[str, dict] = {}
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            row = json.loads(line)
        except json.JSONDecodeError:
            continue
        if row.get("id"):
            latest[row["id"]] = row

    failed = sorted(key for key, row in latest.items() if row.get("status") != "completed")
    if failed:
        raise SystemExit(f"Incomplete translation batches: {len(failed)}")

    translations: dict[str, str] = {}
    for row in latest.values():
        for key, value in (row.get("translations") or {}).items():
            if key in translations and translations[key] != value:
                raise SystemExit(f"Conflicting translation for {key}")
            if not isinstance(value, str) or not value.strip():
                raise SystemExit(f"Empty translation for {key}")
            translations[key] = value.strip()
    return translations


def nested_value(root: Any, path: list[Any]) -> Any:
    current = root
    for part in path:
        if isinstance(part, int):
            if not isinstance(current, list) or part >= len(current):
                raise KeyError(f"Missing list path segment {part}")
            current = current[part]
        else:
            if not isinstance(current, dict) or part not in current:
                raise KeyError(f"Missing object path segment {part}")
            current = current[part]
    return current


def ensure_list(value: Any, size: int) -> list:
    result = list(value) if isinstance(value, list) else []
    if len(result) < size:
        result.extend([""] * (size - len(result)))
    return result


def serialize_like(path: Path, value: Any) -> str:
    original = path.read_text(encoding="utf-8-sig") if path.exists() else ""
    if "\n" in original.strip():
        return json.dumps(value, ensure_ascii=False, indent=2) + "\n"
    return json.dumps(value, ensure_ascii=False) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("--work-dir", type=Path, required=True)
    parser.add_argument("--language", default="es")
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()

    repo = args.repo.resolve()
    work = args.work_dir.resolve()
    data_root = repo / "public" / "data"
    if not data_root.is_dir():
        data_root = repo / "data"
    manifest = load_json(work / "manifest.json")
    targets: dict[str, dict] = manifest.get("targets") or {}
    translations = load_translations(work / "results.jsonl")

    missing = sorted(set(targets) - set(translations))
    extra = sorted(set(translations) - set(targets))
    if missing or extra:
        raise SystemExit(f"Translation/manifest mismatch missing={len(missing)} extra={len(extra)}")

    language = args.language
    documents: dict[Path, Any] = {}
    applied = {"core": 0, "layer-string": 0, "layer-list": 0}

    def document(path: Path, default: Any = None) -> Any:
        if path not in documents:
            documents[path] = load_json(path, default)
        return documents[path]

    for key, target in targets.items():
        value = translations[key]
        kind = target.get("kind")
        if kind == "core":
            path = data_root / "i18n" / language / f"{target['poi']}.json"
            sidecar = document(path, {})
            field = target["field"]
            if field in {"name", "description", "descAdv", "descriptionAdvanced"}:
                sidecar[field] = value
            elif field == "facts":
                index = int(target["index"])
                sidecar["facts"] = ensure_list(sidecar.get("facts"), index + 1)
                sidecar["facts"][index] = value
            elif field == "faq":
                index = int(target["index"])
                sidecar["faq"] = ensure_list(sidecar.get("faq"), index + 1)
                if not isinstance(sidecar["faq"][index], dict):
                    sidecar["faq"][index] = {}
                sidecar["faq"][index][target["part"]] = value
            elif field == "sights":
                index = int(target["index"])
                sidecar["sights"] = ensure_list(sidecar.get("sights"), index + 1)
                if not isinstance(sidecar["sights"][index], dict):
                    sidecar["sights"][index] = {}
                sidecar["sights"][index]["sourceName"] = target.get("sourceName", "")
                sidecar["sights"][index][target["part"]] = value
            else:
                raise SystemExit(f"Unsupported core field: {field}")
        elif kind in {"layer-string", "layer-list"}:
            path = repo / target["file"]
            if not path.exists() and str(target["file"]).startswith("public/data/"):
                path = data_root / str(target["file"])[len("public/data/"):]
            if not path.exists():
                raise SystemExit(f"Target file is missing: {path}")
            root = document(path)
            node = nested_value(root, target["path"])
            if not isinstance(node, dict):
                raise SystemExit(f"Localized target is not an object: {key}")
            if kind == "layer-string":
                node[language] = value
            else:
                source = node.get("en")
                if not isinstance(source, list):
                    raise SystemExit(f"English source list is missing: {key}")
                index = int(target["index"])
                node[language] = ensure_list(node.get(language), len(source))
                node[language][index] = value
        else:
            raise SystemExit(f"Unsupported target kind: {kind}")
        applied[kind] += 1

    if args.write:
        for path, value in documents.items():
            path.parent.mkdir(parents=True, exist_ok=True)
            temporary = path.with_suffix(path.suffix + ".tmp")
            temporary.write_text(serialize_like(path, value), encoding="utf-8")
            temporary.replace(path)

    summary = {
        "language": language,
        "mode": "write" if args.write else "dry-run",
        "translations": len(translations),
        "files": len(documents),
        "applied": applied,
    }
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
