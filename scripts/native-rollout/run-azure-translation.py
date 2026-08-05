#!/usr/bin/env python3
"""Run and resume exact-key translation batches through Azure OpenAI."""

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


INSTRUCTIONS = """Translate every supplied English travel-guide string into natural European Spanish.
Return only one JSON object with this schema: {"translations":{"input_key":"Spanish text"}}.
Every input key must occur exactly once; no extra key is allowed. Do not add facts, commentary or markdown.
Preserve URLs, dates, numbers, units and proper nouns in their established Spanish or local form. Keep concise
source strings concise. Use correct Spanish punctuation and UTF-8 characters."""


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


def parse_translations(text: str, expected: set[str]) -> dict:
    value = text.strip()
    if value.startswith("```"):
        value = value.split("\n", 1)[-1].rsplit("```", 1)[0].strip()
    parsed = json.loads(value)
    translated = parsed.get("translations") if isinstance(parsed, dict) else None
    if not isinstance(translated, dict):
        raise ValueError("Missing translations object")
    if set(translated) != expected:
        raise ValueError(f"Key mismatch missing={len(expected-set(translated))} extra={len(set(translated)-expected)}")
    if any(not isinstance(item, str) or not item.strip() for item in translated.values()):
        raise ValueError("Empty or non-string translation")
    return {key: item.strip() for key, item in translated.items()}


def request_batch(endpoint: str, key: str, deployment: str, task: dict, limiter: RateLimiter, retries: int) -> dict:
    payload = {
        "model": deployment,
        "instructions": INSTRUCTIONS,
        "input": json.dumps(task["items"], ensure_ascii=False, separators=(",", ":")),
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
            translated = parse_translations(output_text(raw), set(task["items"]))
            return {
                "id": task["id"], "status": "completed", "translations": translated,
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


def load_completed(path: Path) -> set[str]:
    completed = set()
    if not path.exists():
        return completed
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            row = json.loads(line)
            if row.get("status") == "completed":
                completed.add(row["id"])
        except (json.JSONDecodeError, KeyError):
            continue
    return completed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--queue", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--limit", type=int, default=2, help="0 translates every pending batch")
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
    completed = load_completed(args.output)
    pending = [task for task in queue if task["id"] not in completed]
    selected = pending if args.limit == 0 else pending[:args.limit]
    print(json.dumps({"queued": len(queue), "completed": len(completed), "selected": len(selected)}), flush=True)
    if not selected:
        return 0

    limiter = RateLimiter(args.rpm)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    write_lock = threading.Lock()
    rows = []
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(request_batch, endpoint, key, deployment, task, limiter, args.retries): task["id"]
            for task in selected
        }
        for future in as_completed(futures):
            row = future.result()
            with write_lock, args.output.open("a", encoding="utf-8") as target:
                target.write(json.dumps(row, ensure_ascii=False) + "\n")
            rows.append(row)
            print(f"{row['id']} {row['status']} attempts={row['attempts']}", flush=True)

    usage = {"input_tokens": 0, "output_tokens": 0, "total_tokens": 0}
    for row in rows:
        for field in usage:
            usage[field] += int((row.get("usage") or {}).get(field, 0) or 0)
    estimated_usd = usage["input_tokens"] / 1_000_000 * 0.25 + usage["output_tokens"] / 1_000_000 * 2.00
    summary = {
        "selected": len(rows),
        "completed": sum(row["status"] == "completed" for row in rows),
        "errors": sum(row["status"] != "completed" for row in rows),
        "usage": usage,
        "estimatedUsdAtGpt5MiniStandard": round(estimated_usd, 4),
    }
    print(json.dumps(summary), flush=True)
    return 0 if summary["errors"] == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
