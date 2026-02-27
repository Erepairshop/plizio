# CLAUDE.md - Projekt utasítások

## SSH Pull parancs minden feladat végén

**FONTOS:** Minden feladat befejezésekor küldj a felhasználónak egy copy-paste kész SSH parancsot, amivel lokálra le tudja húzni a frissített fájlokat.

Formátum:
```
git fetch origin <branch-neve> && git checkout FETCH_HEAD -- <fajl1> <fajl2> ...
```

Példa:
```
git fetch origin claude/setup-ssh-access-NmvX6 && git checkout FETCH_HEAD -- includes/class-example.php templates/example.html
```

Szabályok:
- A branch neve mindig az aktuális fejlesztési branch legyen
- Sorold fel az ÖSSZES módosított/létrehozott fájlt a parancsban
- Minden push után küldd el ezt a parancsot

## Out mappa szinkron (public_html deploy)

**FONTOS:** Minden build után az `out/` mappa tartalmát MINDIG szinkronizáld! A felhasználó szerverén a fájlok közvetlenül a `public_html/` mappából futnak, nem az `out/` mappából.

Minden feladat végén:
1. Futtasd le a `npm run build` parancsot
2. Az `out/` mappa automatikusan generálódik
3. A push parancs után add hozzá a deploy utasítást is:

```
# Lokális deploy (a szerveren futtatandó):
cp -r out/* ~/public_html/
```

Szabályok:
- Minden kód módosítás után MINDIG buildelj (`npm run build`)
- Az `out/` mappát MINDIG commitold és pushold
- A felhasználónak MINDIG küldj deploy parancsot is a git pull parancs mellé
