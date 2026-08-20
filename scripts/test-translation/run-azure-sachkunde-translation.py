#!/usr/bin/env python3
"""Translate exact-key German Sachkunde test batches through Azure OpenAI."""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import json
import os
from pathlib import Path
import threading
import time
import urllib.error
import urllib.request


INSTRUCTIONS = """Translate every supplied German primary-school Sachkunde string into natural {language_name}.
The strings belong only to grades 1-4 test questions, answer choices, short answers, topic names, hints and visual tasks.
Use clear age-appropriate terminology and preserve facts. Preserve numbers, units, symbols, arrows, placeholders and
proper names where appropriate. Never leave a German phrase unchanged unless it is genuinely identical in the target
language. Return only one JSON object: {{"translations":{{"input_key":"translated text"}}}}. Every input key must
occur exactly once and no extra key is allowed. Do not add commentary or markdown. Use correct UTF-8 spelling."""


class RateLimiter:
    def __init__(self, rpm: float):
        self.interval = 60.0 / rpm if rpm > 0 else 0
        self.next_time = 0.0
        self.lock = threading.Lock()

    def wait(self) -> None:
        with self.lock:
            now = time.monotonic()
            delay = max(0.0, self.next_time - now)
            self.next_time = max(now, self.next_time) + self.interval
        if delay:
            time.sleep(delay)


def output_text(response: dict) -> str:
    for item in response.get("output", []):
        for content in item.get("content", []):
            if content.get("type") == "output_text" and content.get("text"):
                return content["text"]
    raise ValueError("Azure response has no output text")


def parse_translations(text: str, expected: set[str]) -> dict[str, str]:
    value = text.strip()
    if value.startswith("```"):
        value = value.split("\n", 1)[-1].rsplit("```", 1)[0].strip()
    try:
        parsed = json.loads(value)
    except json.JSONDecodeError:
        parsed, _ = json.JSONDecoder().raw_decode(value)
    translated = parsed.get("translations") if isinstance(parsed, dict) else None
    if not isinstance(translated, dict) or set(translated) != expected:
        raise ValueError("Translation key mismatch")
    if any(not isinstance(item, str) or not item.strip() for item in translated.values()):
        raise ValueError("Empty or non-string translation")
    return {key: item.strip() for key, item in translated.items()}


def request_batch(endpoint: str, key: str, deployment: str, instructions: str,
                  task: dict, limiter: RateLimiter, retries: int) -> dict:
    aliases = {f"k{index:04d}": original for index, original in enumerate(task["items"])}
    payload = {
        "model": deployment,
        "instructions": instructions,
        "input": json.dumps({alias: task["items"][original] for alias, original in aliases.items()}, ensure_ascii=False),
        "reasoning": {"effort": "minimal"},
        "max_output_tokens": 12000,
    }
    transient = {408, 409, 429, 500, 502, 503, 504}
    last_error = "unknown"
    for attempt in range(retries + 1):
        limiter.wait()
        request = urllib.request.Request(
            endpoint.rstrip("/") + "/openai/v1/responses",
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json", "api-key": key},
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=180) as response:
                raw = json.loads(response.read())
            translated = parse_translations(output_text(raw), set(aliases))
            return {
                "id": task["id"], "status": "completed",
                "translations": {aliases[alias]: value for alias, value in translated.items()},
                "usage": raw.get("usage", {}), "attempts": attempt + 1,
            }
        except urllib.error.HTTPError as error:
            last_error = f"HTTP {error.code}: {error.reason}"
            if error.code not in transient:
                break
            retry_after = float(error.headers.get("Retry-After", 0) or 0)
        except (urllib.error.URLError, TimeoutError, ValueError, json.JSONDecodeError) as error:
            last_error = f"{type(error).__name__}: {error}"
            retry_after = 0
        if attempt < retries:
            time.sleep(max(retry_after, min(60, 2 ** (attempt + 1))))
    return {"id": task["id"], "status": "error", "error": last_error, "attempts": retries + 1}


def normalize_completed_rows(path: Path) -> int:
    if not path.exists():
        return 0
    completed: dict[str, str] = {}
    discarded: list[str] = []
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            row = json.loads(line)
            if row.get("status") != "completed" or not isinstance(row.get("id"), str):
                discarded.append(line)
                continue
            if row["id"] in completed:
                discarded.append(completed[row["id"]])
            completed[row["id"]] = line
        except (json.JSONDecodeError, TypeError):
            discarded.append(line)
    if not discarded:
        return 0
    with path.with_suffix(path.suffix + ".invalid").open("a", encoding="utf-8") as target:
        target.writelines(line + "\n" for line in discarded)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text("".join(line + "\n" for line in completed.values()), encoding="utf-8")
    temporary.replace(path)
    return len(discarded)


def load_completed(path: Path) -> set[str]:
    if not path.exists():
        return set()
    completed = set()
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            row = json.loads(line)
            if row.get("status") == "completed":
                completed.add(row["id"])
        except (json.JSONDecodeError, KeyError):
            pass
    return completed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--queue", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--language-name", required=True)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--rpm", type=float, default=9)
    parser.add_argument("--retries", type=int, default=4)
    args = parser.parse_args()

    endpoint = os.environ.get("AZURE_OPENAI_ENDPOINT", "")
    key = os.environ.get("AZURE_OPENAI_API_KEY", "")
    deployment = os.environ.get("AZURE_OPENAI_DEPLOYMENT", "")
    if not endpoint or not key or not deployment:
        raise SystemExit("Azure OpenAI environment variables are required")

    queue = json.loads(args.queue.read_text(encoding="utf-8"))
    normalize_completed_rows(args.output)
    completed = load_completed(args.output)
    pending = [task for task in queue if task["id"] not in completed]
    print(json.dumps({"queued": len(queue), "completed": len(completed), "selected": len(pending)}), flush=True)
    if not pending:
        return 0

    limiter = RateLimiter(args.rpm)
    instructions = INSTRUCTIONS.format(language_name=args.language_name)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    errors = 0
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = [executor.submit(request_batch, endpoint, key, deployment, instructions, task, limiter, args.retries)
                   for task in pending]
        for future in as_completed(futures):
            row = future.result()
            with args.output.open("a", encoding="utf-8") as target:
                target.write(json.dumps(row, ensure_ascii=False) + "\n")
            errors += row["status"] != "completed"
            print(f"{row['id']} {row['status']} attempts={row['attempts']}", flush=True)
    return 0 if errors == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
