#!/usr/bin/env python3
"""Apply completed Azure translations to static map quiz translation files."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any


PLACEHOLDER_RE = re.compile(r"\{\{[^{}]+\}\}")


def load_json(path: Path, default: Any = None) -> Any:
    if not path.exists():
        return {} if default is None else default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def load_translations(path: Path) -> dict[str, str]:
    latest: dict[str, dict] = {}
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        if not line.strip():
            continue
        try:
            row = json.loads(line)
        except json.JSONDecodeError:
            continue
        if row.get("id"):
            latest[row["id"]] = row

    failed = sorted(batch_id for batch_id, row in latest.items() if row.get("status") != "completed")
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


def placeholder_list(text: str) -> list[str]:
    return PLACEHOLDER_RE.findall(text)


def validate_placeholders(source: str, translated: str, key: str) -> None:
    source_placeholders = placeholder_list(source)
    translated_placeholders = placeholder_list(translated)
    if source_placeholders != translated_placeholders:
        raise SystemExit(
            f"Placeholder mismatch for {key}: source={source_placeholders} translated={translated_placeholders}"
        )


def serialize_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("--work-dir", type=Path, required=True)
    parser.add_argument("--language", required=True)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()

    repo = args.repo.resolve()
    work_dir = args.work_dir.resolve()
    language = args.language.strip().lower()

    manifest = load_json(work_dir / "manifest.json")
    targets: dict[str, dict] = manifest.get("targets") or {}
    meta = manifest.get("meta") or {}
    translations = load_translations(work_dir / "results.jsonl")

    missing = sorted(set(targets) - set(translations))
    extra = sorted(set(translations) - set(targets))
    if missing or extra:
        raise SystemExit(f"Translation/manifest mismatch missing={len(missing)} extra={len(extra)}")

    expected_ui: dict[str, str] = {}
    expected_questions: dict[str, str] = {}
    for key, target in targets.items():
        translated = translations[key]
        source = str(target.get("source") or "")
        validate_placeholders(source, translated, key)
        kind = target.get("kind")
        if kind == "ui":
            expected_ui[target["uiKey"]] = translated
        elif kind == "question":
            expected_questions[key] = translated
        else:
            raise SystemExit(f"Unsupported target kind: {kind}")

    if len(expected_ui) != int(meta.get("uiKeyCount") or 0):
        raise SystemExit(f"UI translation count mismatch: expected {meta.get('uiKeyCount')} got {len(expected_ui)}")
    if len(expected_questions) != int(meta.get("questionCount") or 0):
        raise SystemExit(
            f"Question translation count mismatch: expected {meta.get('questionCount')} got {len(expected_questions)}"
        )

    output_path = repo / "data" / "map-quiz-translations" / f"{language}.json"
    payload = {
        "meta": {
            "language": language,
            "countryIso": meta.get("countryIso"),
            "sourceLanguage": meta.get("sourceLanguage", "en"),
            "basePoolFile": meta.get("basePoolFile"),
            "extensionPoolFile": meta.get("extensionPoolFile"),
            "uiKeyCount": meta.get("uiKeyCount"),
            "baseQuestionCount": meta.get("baseQuestionCount"),
            "extensionQuestionCount": meta.get("extensionQuestionCount"),
            "questionCount": meta.get("questionCount"),
        },
        "ui": {key: expected_ui[key] for key in sorted(expected_ui)},
        "questions": {key: expected_questions[key] for key in sorted(expected_questions)},
    }

    if args.write:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(serialize_json(payload), encoding="utf-8")

    summary = {
        "language": language,
        "mode": "write" if args.write else "dry-run",
        "output": output_path.relative_to(repo).as_posix(),
        "ui": len(expected_ui),
        "questions": len(expected_questions),
    }
    (work_dir / "written-files.txt").write_text(output_path.relative_to(repo).as_posix() + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
