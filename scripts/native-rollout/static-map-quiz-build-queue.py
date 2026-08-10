#!/usr/bin/env python3
"""Build deterministic Azure translation batches for static HTML map quizzes."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 85

ENGLISH_UI = {
    "launch": "Quiz",
    "start": "Start quiz",
    "next": "Next",
    "close": "Exit",
    "restart": "Play again",
    "correct": "Correct!",
    "wrong": "Not quite.",
    "answer": "Correct answer",
    "score": "Score",
    "task": "Task",
    "complete": "Complete!",
    "intro": "10 varied map challenges",
    "sequence": "Next place",
    "namePrompt": "What is your name?",
    "namePlaceholder": "Player name",
    "save": "Save result",
    "saved": "Result saved",
    "best": "Your best score",
    "invalidName": "Use 2-16 characters: letters, numbers, _ or -",
}


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def find_base_pool(repo: Path, country_iso: str) -> tuple[Path, list[dict]]:
    pool_dir = repo / "data" / "map-quiz-pools"
    for path in sorted(pool_dir.glob("*.json")):
        parsed = load_json(path)
        if country_iso in parsed:
            tasks = parsed[country_iso]
            if not isinstance(tasks, list):
                raise SystemExit(f"Base pool {path} for {country_iso} is not a list")
            return path, tasks
    raise SystemExit(f"No base pool found for {country_iso}")


def find_extension_pool(repo: Path, country_iso: str) -> tuple[Path, list[dict]]:
    path = repo / "data" / "map-quiz-pool-extensions" / f"{country_iso}.json"
    if not path.exists():
        raise SystemExit(f"Extension pool file is missing for {country_iso}: {path}")
    parsed = load_json(path)
    tasks = parsed.get(country_iso)
    if not isinstance(tasks, list):
        raise SystemExit(f"Extension pool {path} for {country_iso} is not a list")
    return path, tasks


def question_key(country_iso: str, task_id: str) -> str:
    return f"{country_iso}:{task_id}"


def add_target(records: list[dict], targets: dict[str, dict], key: str, text: str, target: dict) -> None:
    clean = str(text).strip()
    if not clean:
        raise SystemExit(f"Empty source string for {key}")
    if key in targets:
        raise SystemExit(f"Duplicate translation key: {key}")
    records.append({"key": key, "text": clean})
    payload = dict(target)
    payload["source"] = clean
    targets[key] = payload


def collect_questions(
    records: list[dict],
    targets: dict[str, dict],
    tasks: list[dict],
    *,
    country_iso: str,
    source_file: Path,
    pool_kind: str,
    expected_count: int,
) -> None:
    if len(tasks) != expected_count:
        raise SystemExit(
            f"{pool_kind} pool for {country_iso} must contain exactly {expected_count} tasks, got {len(tasks)}"
        )
    seen_ids: set[str] = set()
    for index, task in enumerate(tasks):
        task_id = str(task.get("id") or "").strip()
        if not task_id:
            raise SystemExit(f"{pool_kind} task #{index + 1} in {source_file} is missing an id")
        if task_id in seen_ids:
            raise SystemExit(f"Duplicate task id in {source_file}: {task_id}")
        seen_ids.add(task_id)
        question = task.get("question")
        if not isinstance(question, dict):
            raise SystemExit(f"Task {task_id} in {source_file} is missing question translations")
        english = str(question.get("en") or "").strip()
        if not english:
            raise SystemExit(f"Task {task_id} in {source_file} is missing English source text")
        add_target(
            records,
            targets,
            question_key(country_iso, task_id),
            english,
            {
                "kind": "question",
                "countryIso": country_iso,
                "taskId": task_id,
                "pool": pool_kind,
                "sourceFile": source_file.relative_to(source_file.parents[2]).as_posix(),
            },
        )


def chunk_records(records: list[dict], *, language: str) -> list[dict]:
    queue: list[dict] = []
    chunk: list[dict] = []
    chunk_chars = 0
    batch_number = 1

    def flush() -> None:
        nonlocal chunk, chunk_chars, batch_number
        if not chunk:
            return
        queue.append(
            {
                "id": f"static-map-quiz-{language}-{batch_number:03d}",
                "items": {item["key"]: item["text"] for item in chunk},
            }
        )
        batch_number += 1
        chunk = []
        chunk_chars = 0

    for item in records:
        item_chars = len(item["key"]) + len(item["text"])
        if item_chars > MAX_INPUT_CHARS:
            raise SystemExit(f"Single item is too large for batching: {item['key']}")
        if chunk and (len(chunk) >= MAX_ITEMS or chunk_chars + item_chars > MAX_INPUT_CHARS):
            flush()
        chunk.append(item)
        chunk_chars += item_chars
    flush()
    return queue


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--language", required=True)
    parser.add_argument("--country-iso", required=True)
    args = parser.parse_args()

    repo = args.repo.resolve()
    output_dir = args.output_dir.resolve()
    language = args.language.strip().lower()
    country_iso = args.country_iso.strip().lower()

    base_path, base_tasks = find_base_pool(repo, country_iso)
    extension_path, extension_tasks = find_extension_pool(repo, country_iso)

    records: list[dict] = []
    targets: dict[str, dict] = {}

    for ui_key, text in ENGLISH_UI.items():
        add_target(
            records,
            targets,
            f"ui:{ui_key}",
            text,
            {
                "kind": "ui",
                "uiKey": ui_key,
            },
        )

    collect_questions(
        records,
        targets,
        base_tasks,
        country_iso=country_iso,
        source_file=base_path,
        pool_kind="base",
        expected_count=10,
    )
    collect_questions(
        records,
        targets,
        extension_tasks,
        country_iso=country_iso,
        source_file=extension_path,
        pool_kind="extension",
        expected_count=20,
    )

    queue = chunk_records(records, language=language)

    output_dir.mkdir(parents=True, exist_ok=True)
    manifest = {
        "meta": {
            "language": language,
            "countryIso": country_iso,
            "sourceLanguage": "en",
            "basePoolFile": base_path.relative_to(repo).as_posix(),
            "extensionPoolFile": extension_path.relative_to(repo).as_posix(),
            "uiKeyCount": len(ENGLISH_UI),
            "baseQuestionCount": 10,
            "extensionQuestionCount": 20,
            "questionCount": 30,
            "totalTargets": len(records),
        },
        "targets": targets,
    }
    summary = {
        "language": language,
        "countryIso": country_iso,
        "uiKeyCount": len(ENGLISH_UI),
        "baseQuestionCount": 10,
        "extensionQuestionCount": 20,
        "questionCount": 30,
        "totalTargets": len(records),
        "batches": len(queue),
    }
    source_preview = {
        "ui": ENGLISH_UI,
        "questions": {
            key: target["source"]
            for key, target in targets.items()
            if target["kind"] == "question"
        },
    }

    (output_dir / "queue.json").write_text(json.dumps(queue, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (output_dir / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (output_dir / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (output_dir / "source-preview.json").write_text(
        json.dumps(source_preview, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
