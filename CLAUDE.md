# CLAUDE.md - Projekt utasítások

## Repo struktúra

A repo tisztán van szervezve:
- **Forráskód**: `app/`, `components/`, `lib/`, `data/`, `public/`
- **Build output**: `out/` mappa (ez megy a szerverre `public_html/`-be)
- A gyökérben NEM lehetnek build output fájlok (index.html, _next/, stb.)

## SSH Pull + Deploy parancs minden feladat végén

**FONTOS:** Minden feladat befejezésekor küldj a felhasználónak egy copy-paste kész parancsot, amivel:
1. Lehúzza a friss fájlokat gitből
2. Deployolja a `public_html/` mappába

Formátum:
```bash
# 1. Fájlok lehúzása gitből:
git fetch origin <branch-neve> && git checkout FETCH_HEAD -- out/

# 2. Deploy a public_html-be (public_html mappából futtatva):
cd ~/public_html && rm -rf _next && cp -r out/* . && rm -rf out
```

Szabályok:
- A branch neve mindig az aktuális fejlesztési branch legyen
- Az `out/` mappát MINDIG egészben húzd le (ne fájlonként)
- Ha forráskód fájlok is változtak, azokat is sorold fel külön
- Minden push után küldd el a teljes pull+deploy parancsot

## Out mappa szinkron (public_html deploy)

**FONTOS:** A felhasználó szerverén a fájlok a `public_html/` mappából futnak.

Minden feladat végén:
1. Futtasd le a `npm run build` parancsot
2. Az `out/` mappa automatikusan generálódik
3. Commitold és pushold az `out/` mappát is

Szabályok:
- Minden kód módosítás után MINDIG buildelj (`npm run build`)
- Az `out/` mappát MINDIG commitold és pushold
- A deploy parancsban MINDIG töröld a régi `_next/` mappát először (`rm -rf ~/public_html/_next`)
  - Ez azért fontos, mert a JS chunk fájlnevek minden buildnél változnak
  - Ha nem törlöd, régi és új chunk fájlok keverednek, és elromlik az oldal
