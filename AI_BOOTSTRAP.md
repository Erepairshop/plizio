# AI Bootstrap — kondenzált kontextus új Claude/AI session-höz

> **Mire való**: ha a Win gép leesik, ha új Claude session indul memória nélkül, ha váltottál eszközt — másold be ezt egy üres AI-be (Claude.ai web, ChatGPT, Termux Claude, stb.) hogy gyorsan vissza tudjon térni a rendszerbe.

## Ki vagyok

Magyar fejlesztő, Németországban élek, távolról dolgozom. Két fő projekt:

1. **plizio.com** — oktatási/visual lab platform (Next.js, statikus export, Three.js, Tailwind). Repo: `~/plizio-repo` (Win) és `~/Desktop/punktepass-code` (CB).
2. **PunktePass (PP)** — loyalty + advertiser platform (WordPress plugin). Domain: punktepass.de. Forrás: `~/punktepass-code` (Win), élesben Hostinger.

## Aktuális állapot (2026-04-29)

- **PP éles**, fagyizó és más boltok használják (ne törd!)
- **Magyarországra utazás péntek (2026-05-01)** — addig a Win gép itt áll, utána CB lesz az elsődleges
- **CB elérhető**: `ssh borota25@100.108.42.13`
- **PP szerver**: `ssh -p 65002 u660905446@72.61.100.230` (CB-n keresztül)

## Aktív háttérfolyamatok (Win)

| Script | Mit csinál | Hány perc |
|---|---|---|
| `orchestrator.py` (Pro) | Gemini 2.5 Pro POI-generálás | folyamatos |
| `orchestrator.py` (Flash) | Gemini 3.1 flash-lite SEO content, 2 párhuzam | folyamatos |
| `syntax_guard.py` | Real-time TS parse-error figyelő → auto-codex fix | file-watcher |
| `tsc_codex_loop.py` | 20 percenként mély `tsc --noEmit` + auto-codex fix | 20 |
| `auto_push.py` | git push | 120 |
| `sync_claude_to_cb.py` | memory + sessions backup CB-re | 240 |

CB-n: `~/.claude-backup-from-win/memory/` és `~/.claude-backup-from-win/sessions/` mindig friss.

## Friss munka témák

- **PP push notifications** — APNs (iOS native) + FCM (Android TWA). Auto-follow scan után. `/me` REST endpoint a userId visszanyerésére. `/business/admin/push` business-name mint Absender.
- **Profile-lite modern CSS** — `assets/css/ppv-profile-modern.css` overlay (lila gradient, kompakt cards, floating save).
- **Anti-trial-abuse** — name + cím + GPS-pin collision check `/business/admin/profile`-on.
- **Kovi Ice** — `enforce_opening_hours=0` (idő-független szken).
- **Stats tracking** — impressions/clicks az ad-click endpoint redirecten át.

## Kritikus szabályok (memóriából)

- **Magyarul beszélünk**.
- **Token-takarékos** mód — rövid válaszok, csak szükséges tool call.
- **Ne `npx next build`** automata, csak `tsc --noEmit`.
- **PP deploy = scp lánc** Win → CB → Hostinger (NEM git, mert szerveren nincs `.git`).
- **PP éles bug > minden plizio munka**.
- **Ntfy-ról jött üzenetre KÖTELEZŐ ntfy-ra is válaszolni** (`http://100.109.55.70:8888/plizio-borota25-alerts`).
- **Bash compound (`&&`, `;`, `|`) tilos** — külön Bash hívásokra bontsd.
- **Sérült fájlt NE git restore-old**, először stash + inkrementális javítás.

## Hol nézz utána, ha vissza kell térned

- `~/plizio-repo/AI_BOOTSTRAP.md` — ez a fájl
- `~/.claude/projects/C--Users-User/memory/MEMORY.md` (Win) vagy `~/.claude-backup-from-win/memory/MEMORY.md` (CB) — index, tovább mutat 45+ md fájlra
- `~/.claude-backup-from-win/sessions/*.jsonl` — teljes Claude beszélgetések
- `~/plizio-repo/GEMINI.md` — Gemini Pro/Flash munkaszabályok
- `~/plizio-repo/CLAUDE.md` — plizio specifikus

## Aktív session resume tipp

Ha új gépen / új terminálban kell folytatni: használd a **session UUID-t** közvetlenül (a `claude --resume` lista szűri cwd alapján és csak lezárt sessionöket mutat):

```bash
# Példa parancs — UUID a sessions/ mappában lévő .jsonl fájlnévből
claude --resume <session-uuid>
```

Aktuális (legnagyobb, élő) Win-session UUID-ja a `~/.claude-backup-from-win/sessions/` mappában az **utolsó módosítású .jsonl** fájlnak.

## Ha új Claude/AI session indul

1. Olvasd el ezt a fájlt
2. Olvasd be `MEMORY.md`-t (a teljes memory-index)
3. Ha kell részletesen: az adott topic md-jét olvasd be
4. Folytasd ahogy én csinálnám — magyarul, tömören, ntfy-ra reagálva, és eszközöket használva amik már fenn vannak
