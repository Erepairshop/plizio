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
