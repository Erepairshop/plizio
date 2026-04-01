# SESSION_STATE.md

Rövid, kézi állapotfájl Codexnek.
Nem napló, hanem gyors memóriasegéd, hogy kevesebb újrabeolvasás kelljen.

## Mostani workflow

- gyors preview: `npm run dev:host`
- gyors szerkezeti check: `npm run lint`
- build előtti check: `npm run preflight`
- production build csak stabil dev állapot után

## Fontos elv

- előbb dev preview / pontos hiba
- utána célzott fájlolvasás
- csak ezután build vagy deploy

## Aktív technikai megjegyzések

- a repo nagy és memóriaigényes; a full build drága
- a Hostinger 3 GB-os szerver nem jó elsődleges build gép
- telefonos teszteléshez a hálózati dev preview a preferált út

## Frissítsd, ha változik

- jelenlegi fő hibaterület
- érintett fájlok
- mi lett már javítva
- mi maradt nyitva
