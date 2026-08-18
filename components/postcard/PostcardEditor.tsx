"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AlignCenter, AlignLeft, AlignRight, Camera, Check, Copy, Download, Globe2, ImagePlus, Link2, LoaderCircle, MapPin, RotateCcw, Search, Send, ShieldCheck, SlidersHorizontal, Sparkles, Stamp, Type } from "lucide-react";
import { canvasToBlob, renderPostcard, type PostcardDistanceMode, type PostcardFont, type PostcardLanguage, type PostcardMood, type PostcardPhotoEdit, type PostcardStamp, type PostcardTextAlign, type PostcardTheme } from "@/lib/postcard/renderPostcard";
import { getLanguage } from "@/lib/language";
import QRCode from "qrcode";

const themes: PostcardTheme[] = ["vintage", "polaroid", "airmail", "scrapbook", "minimal"];
const fonts: PostcardFont[] = ["classic", "handwritten", "editorial", "modern", "typewriter"];
const stamps: PostcardStamp[] = ["local", "passport", "airmail", "rail", "modern"];
const DEFAULT_PHOTO_EDIT: PostcardPhotoEdit = { zoom: 1, offsetX: 0, offsetY: 0, rotation: 0, brightness: 100, contrast: 100, saturation: 100 };
const ROUTE_API_URL = "https://plizio-camper.plizio.workers.dev/plan";
const FONT_PREVIEWS: Record<PostcardFont, string> = {
  classic: "Georgia, serif",
  handwritten: '"Segoe Print", "Bradley Hand", cursive',
  editorial: '"Palatino Linotype", Palatino, Georgia, serif',
  modern: '"Trebuchet MS", Arial, sans-serif',
  typewriter: '"Courier New", monospace',
};
type ShareExpiry = "7" | "30" | "forever";
type PlaceSearchRow = [name: string, country: string, url: string, lat: number | null, lng: number | null, kind: string];
type LocationState = "idle" | "loading" | "ready" | "error";

const moods: PostcardMood[] = ["joyful", "adventure", "calm", "romantic"];
const MOOD_SYMBOLS: Record<PostcardMood, string> = { joyful: "☀", adventure: "⌁", calm: "❋", romantic: "♥" };

const MOMENT_COPY: Record<PostcardLanguage, {
  title: string;
  intro: string;
  mood: string;
  moods: Record<PostcardMood, string>;
  suggest: string;
  distance: string;
  locating: string;
  locationMissing: string;
  locationError: string;
  locationReady: (distance: string) => string;
  locationFallback: (distance: string) => string;
  byCar: string;
  straightLine: string;
  routePrivacy: string;
  placeLink: string;
  qrTitle: string;
  qrHint: string;
  previewTap: string;
  previewClose: string;
  messages: Record<PostcardMood, (place: string, country: string) => string>;
}> = {
  de: {
    title: "Dein Reisemoment", intro: "Gib der Karte eine Stimmung und verbinde sie mit dem echten Ort.", mood: "Stimmung",
    moods: { joyful: "Sonnig", adventure: "Abenteuer", calm: "Auszeit", romantic: "Von Herzen" },
    suggest: "Text vorschlagen", distance: "Entfernung von mir", locating: "Standort wird ermittelt…",
    locationMissing: "Wähle zuerst einen Plizio-Ort mit Koordinaten aus.", locationError: "Dein Standort konnte nicht ermittelt werden.",
    locationReady: (distance) => `Mit dem Auto sind es etwa ${distance} km bis zu diesem Ort.`, locationFallback: (distance) => `Die Fahrstrecke war nicht verfügbar. Luftlinie: ${distance} km.`, byCar: "Mit dem Auto", straightLine: "Luftlinie", routePrivacy: "Für die Fahrstrecke wird dein Standort nur an den Routendienst übermittelt und nicht in der Postkarte gespeichert.", placeLink: "Ort auf Plizio öffnen",
    qrTitle: "QR-Code zum Reisemoment", qrHint: "Nach dem Erstellen eines Links erscheint der QR-Code auch auf neu heruntergeladenen Karten.", previewTap: "Vorschau vergrößern", previewClose: "Vorschau schließen",
    messages: {
      joyful: (place) => `Was für ein schöner Tag in ${place}! Ich schicke dir sonnige Grüße und ein kleines Stück dieser Reise.`,
      adventure: (place, country) => `${place} in ${country} steckt voller Entdeckungen. Dieses Abenteuer werde ich so schnell nicht vergessen!`,
      calm: (place) => `Ein ruhiger Moment in ${place}, fern vom Alltag. Ich wünschte, du könntest diese Aussicht gerade mit mir teilen.`,
      romantic: (place) => `Ein besonderer Moment in ${place}, den ich von Herzen mit dir teilen möchte.`,
    },
  },
  hu: {
    title: "A te utazási pillanatod", intro: "Adj hangulatot a képeslapnak, és kösd össze a valódi hellyel.", mood: "Hangulat",
    moods: { joyful: "Napsütés", adventure: "Kaland", calm: "Megpihenés", romantic: "Szívből" },
    suggest: "Szövegjavaslat", distance: "Távolság tőlem", locating: "Helyzet meghatározása…",
    locationMissing: "Először válassz koordinátával rendelkező Plizio-helyet.", locationError: "Nem sikerült meghatározni a helyzetedet.",
    locationReady: (distance) => `Autóval körülbelül ${distance} km-re vagy ettől a helytől.`, locationFallback: (distance) => `Az autós útvonal nem volt elérhető. Légvonalban ${distance} km.`, byCar: "Autóval", straightLine: "Légvonal", routePrivacy: "Az autós útvonalhoz a helyzeted csak az útvonal-szolgáltatáshoz kerül, a képeslap nem tárolja.", placeLink: "Hely megnyitása a Plizión",
    qrTitle: "QR-kód az utazási pillanathoz", qrHint: "A link elkészülte után a QR-kód az újonnan letöltött képeslapon is megjelenik.", previewTap: "Előnézet nagyítása", previewClose: "Előnézet bezárása",
    messages: {
      joyful: (place) => `Csodás nap ${place} városában! Küldök egy kis napsütést és egy darabot ebből az utazásból.`,
      adventure: (place, country) => `${place}, ${country} tele van felfedeznivalóval. Ezt a kalandot sokáig nem fogom elfelejteni!`,
      calm: (place) => `Egy nyugodt pillanat ${place} környékén, távol a hétköznapoktól. Bárcsak te is látnád ezt!`,
      romantic: (place) => `Egy különleges pillanat ${place} városában, amit szívből szeretnék megosztani veled.`,
    },
  },
  en: {
    title: "Your travel moment", intro: "Give the card a mood and connect it to the real place.", mood: "Mood",
    moods: { joyful: "Sunshine", adventure: "Adventure", calm: "Slow moment", romantic: "From the heart" },
    suggest: "Suggest a message", distance: "Distance from me", locating: "Finding your location…",
    locationMissing: "First choose a Plizio place that has coordinates.", locationError: "Your location could not be determined.",
    locationReady: (distance) => `It is about ${distance} km by car to this place.`, locationFallback: (distance) => `The driving route was unavailable. Straight-line distance: ${distance} km.`, byCar: "By car", straightLine: "Straight line", routePrivacy: "Your location is sent only to the routing service and is not stored in the postcard.", placeLink: "Open place on Plizio",
    qrTitle: "QR code for this travel moment", qrHint: "After creating a link, the QR code also appears on newly downloaded cards.", previewTap: "Enlarge preview", previewClose: "Close preview",
    messages: {
      joyful: (place) => `What a beautiful day in ${place}! Sending you some sunshine and a little piece of this journey.`,
      adventure: (place, country) => `${place}, ${country} is full of discoveries. I will remember this adventure for a long time!`,
      calm: (place) => `A quiet moment in ${place}, far from everyday life. I wish you could see this view with me.`,
      romantic: (place) => `A special moment in ${place} that I wanted to share with you from the heart.`,
    },
  },
  ro: {
    title: "Momentul călătoriei tale", intro: "Alege o stare și leagă cartea poștală de locul real.", mood: "Stare",
    moods: { joyful: "Soare", adventure: "Aventură", calm: "Liniște", romantic: "Din inimă" },
    suggest: "Sugerează un mesaj", distance: "Distanța de la mine", locating: "Se caută poziția…",
    locationMissing: "Alege mai întâi un loc Plizio cu coordonate.", locationError: "Poziția ta nu a putut fi determinată.",
    locationReady: (distance) => `Sunt aproximativ ${distance} km cu mașina până la acest loc.`, locationFallback: (distance) => `Ruta auto nu este disponibilă. Distanța în linie dreaptă: ${distance} km.`, byCar: "Cu mașina", straightLine: "Linie dreaptă", routePrivacy: "Poziția ta este trimisă doar serviciului de rutare și nu este salvată în cartea poștală.", placeLink: "Deschide locul pe Plizio",
    qrTitle: "Cod QR pentru acest moment", qrHint: "După crearea linkului, codul QR apare și pe cărțile poștale descărcate ulterior.", previewTap: "Mărește previzualizarea", previewClose: "Închide previzualizarea",
    messages: {
      joyful: (place) => `Ce zi frumoasă în ${place}! Îți trimit puțin soare și o parte din această călătorie.`,
      adventure: (place, country) => `${place}, ${country} este plin de descoperiri. Nu voi uita prea curând această aventură!`,
      calm: (place) => `Un moment liniștit în ${place}, departe de agitația zilnică. Mi-aș dori să vezi și tu priveliștea.`,
      romantic: (place) => `Un moment special în ${place}, pe care vreau să îl împărtășesc cu tine din inimă.`,
    },
  },
  it: {
    title: "Il tuo momento di viaggio", intro: "Scegli un'emozione e collega la cartolina al luogo reale.", mood: "Atmosfera",
    moods: { joyful: "Sole", adventure: "Avventura", calm: "Relax", romantic: "Dal cuore" },
    suggest: "Suggerisci un messaggio", distance: "Distanza da me", locating: "Ricerca della posizione…",
    locationMissing: "Scegli prima un luogo Plizio con coordinate.", locationError: "Non è stato possibile trovare la tua posizione.",
    locationReady: (distance) => `Questo luogo dista circa ${distance} km in auto.`, locationFallback: (distance) => `Il percorso in auto non è disponibile. Distanza in linea d'aria: ${distance} km.`, byCar: "In auto", straightLine: "Linea d'aria", routePrivacy: "La posizione viene inviata solo al servizio di itinerari e non viene salvata nella cartolina.", placeLink: "Apri il luogo su Plizio",
    qrTitle: "Codice QR del momento di viaggio", qrHint: "Dopo la creazione del link, il QR appare anche sulle cartoline scaricate in seguito.", previewTap: "Ingrandisci anteprima", previewClose: "Chiudi anteprima",
    messages: {
      joyful: (place) => `Che bella giornata a ${place}! Ti mando un po' di sole e un piccolo pezzo di questo viaggio.`,
      adventure: (place, country) => `${place}, ${country} è piena di scoperte. Ricorderò a lungo questa avventura!`,
      calm: (place) => `Un momento tranquillo a ${place}, lontano dalla vita quotidiana. Vorrei che vedessi questo panorama con me.`,
      romantic: (place) => `Un momento speciale a ${place}, che desidero condividere con te dal profondo del cuore.`,
    },
  },
};

function distanceBetweenKm(fromLat: number, fromLng: number, toLat: number, toLng: number) {
  const radians = (value: number) => value * Math.PI / 180;
  const latDelta = radians(toLat - fromLat);
  const lngDelta = radians(toLng - fromLng);
  const a = Math.sin(latDelta / 2) ** 2 + Math.cos(radians(fromLat)) * Math.cos(radians(toLat)) * Math.sin(lngDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(value: number) {
  return value < 10 ? value.toFixed(1) : String(Math.round(value));
}

async function drivingDistanceKm(fromLat: number, fromLng: number, toLat: number, toLng: number, straightKm: number) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(ROUTE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin: [fromLng, fromLat], destination: [toLng, toLat], days: 1, stops: 0, mode: "car" }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("route_failed");
    const result = await response.json();
    const routePoints = Array.isArray(result?.route) ? result.route.filter((point: unknown) => Array.isArray(point) && point.length === 2) as [number, number][] : [];
    const geometryKm = routePoints.reduce((total, point, index) => index === 0 ? 0 : total + distanceBetweenKm(routePoints[index - 1][1], routePoints[index - 1][0], point[1], point[0]), 0);
    const summaryKm = Number(result?.summary?.km);
    const routeKm = Number.isFinite(geometryKm) && geometryKm > 0 ? geometryKm : summaryKm;
    if (!Number.isFinite(routeKm) || routeKm < straightKm * 0.9 || routeKm > Math.max(50000, straightKm * 12)) throw new Error("invalid_route");
    return routeKm;
  } finally {
    window.clearTimeout(timeout);
  }
}
const COPY = {
  de: {
    placeDefault: "Berlin", countryDefault: "Deutschland", messageDefault: "Grüße von diesem wunderschönen Ort!",
    studio: "Postkartenstudio", eyebrow: "Eine Reise wird zur persönlichen Erinnerung", titleA: "Sende ein Stück", titleB: "der Welt.",
    intro: "Gestalte eine echte, persönliche Postkarte aus deinem eigenen Foto. Ohne Anmeldung; dein Bild bleibt auf dem Gerät, bis du bewusst einen teilbaren Link erstellst.",
    place: "Ort", country: "Land", choosePhoto: "Eigenes Foto auswählen", photoHint: "JPG, PNG oder Smartphone-Foto", message: "Nachricht",
    placeSearch: "Ort auf Plizio suchen", placeSearchHint: "Stadt oder Sehenswürdigkeit eingeben", placeSearching: "Orte werden gesucht…", placeNoResults: "Kein passender Ort gefunden. Du kannst den Namen unten weiterhin selbst eingeben.",
    sender: "Unterschrift", senderPlaceholder: "Dein Name (optional)", style: "Stil", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Luftpost", scrapbook: "Reisetagebuch", minimal: "Minimal" },
    photoEdit: "Foto bearbeiten", zoom: "Zoom", horizontal: "Horizontal", vertical: "Vertikal", rotation: "Drehung", brightness: "Helligkeit", contrast: "Kontrast", saturation: "Sättigung", reset: "Zurücksetzen",
    textDesign: "Text gestalten", font: "Schrift", fontSize: "Größe", alignment: "Ausrichtung", fonts: { classic: "Klassisch", handwritten: "Handschrift", editorial: "Editorial", modern: "Modern", typewriter: "Schreibmaschine" },
    stampStyle: "Stempel wählen", stamps: { local: "Ortsstempel", passport: "Reisepass", airmail: "Luftpost", rail: "Bahnreise", modern: "Koordinaten" },
    share: "Teilen", download: "Herunterladen", privacy: "Standardmäßig bleibt dein Foto auf dem Gerät. Es wird nur hochgeladen, wenn du ausdrücklich einen teilbaren Link erstellst.",
    preview: "Die Vorschau wird automatisch aktualisiert", previewLabel: "Postkartenvorschau", invalidImage: "Bitte wähle eine Bilddatei aus.",
    imageError: "Das Bild konnte nicht geöffnet werden.", ready: "Die Postkarte ist fertig.", shareTitle: (place: string) => `Grüße aus ${place}`,
    shareText: "Diese Postkarte habe ich für dich mit Plizio gestaltet.", shareFallback: "Direktes Teilen wird von deinem Browser nicht unterstützt. Die Postkarte wurde stattdessen heruntergeladen.",
    publicShare: "Teilbaren Link erstellen", publicIntro: "Erstelle eine private, nicht gelistete Momentaufnahme. Nur Personen mit dem Link können sie öffnen.",
    expiry: "Verfügbarkeit", expiryOptions: { "7": "7 Tage", "30": "30 Tage", forever: "Unbegrenzt" },
    consent: "Ich stimme zu, dass diese Postkarte zur Bereitstellung des Links auf Plizio hochgeladen wird.", createLink: "Link erstellen", creating: "Link wird erstellt…",
    copyLink: "Link kopieren", copied: "Kopiert", shareLink: "Link teilen", publicReady: "Der teilbare Link ist fertig.", publicError: "Der Link konnte nicht erstellt werden. Bitte versuche es erneut.",
    file: "plizio-postkarte", locale: "de-DE",
  },
  hu: {
    placeDefault: "Budapest", countryDefault: "Magyarország", messageDefault: "Üdvözlet erről a csodálatos helyről!",
    studio: "Képeslapstúdió", eyebrow: "Egy utazásból személyes emlék", titleA: "Küldj egy darabot", titleB: "a világból.",
    intro: "Készíts valódi, személyes képeslapot saját fotódból. Nincs regisztráció; a képed addig marad az eszközödön, amíg külön megosztható linket nem készítesz.",
    place: "Hely", country: "Ország", choosePhoto: "Saját fotó kiválasztása", photoHint: "JPG, PNG vagy telefonos fotó", message: "Üzenet",
    placeSearch: "Hely keresése a Plizión", placeSearchHint: "Írj be egy várost vagy látnivalót", placeSearching: "Helyek keresése…", placeNoResults: "Nem találtam megfelelő helyet. Alul kézzel is beírhatod.",
    sender: "Aláírás", senderPlaceholder: "A neved (nem kötelező)", style: "Stílus", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Légiposta", scrapbook: "Utazási napló", minimal: "Minimal" },
    photoEdit: "Fotó szerkesztése", zoom: "Nagyítás", horizontal: "Vízszintes", vertical: "Függőleges", rotation: "Forgatás", brightness: "Fényerő", contrast: "Kontraszt", saturation: "Színtelítettség", reset: "Alaphelyzet",
    textDesign: "Szöveg formázása", font: "Betűtípus", fontSize: "Méret", alignment: "Igazítás", fonts: { classic: "Klasszikus", handwritten: "Kézírás", editorial: "Elegáns", modern: "Modern", typewriter: "Írógép" },
    stampStyle: "Bélyegző kiválasztása", stamps: { local: "Helyi pecsét", passport: "Útlevél", airmail: "Légiposta", rail: "Vasúti", modern: "Koordináta" },
    share: "Megosztás", download: "Letöltés", privacy: "Alapértelmezésben a fotó az eszközödön marad. Csak akkor töltjük fel, ha külön megosztható linket készítesz.",
    preview: "Az előnézet automatikusan frissül", previewLabel: "A képeslap előnézete", invalidImage: "Kérlek, képfájlt válassz.",
    imageError: "A képet nem sikerült megnyitni.", ready: "A képeslap elkészült.", shareTitle: (place: string) => `Üdvözlet ${place} városából`,
    shareText: "Ezt a képeslapot neked készítettem a Plizión.", shareFallback: "A böngésződön a közvetlen megosztás nem elérhető, ezért letöltöttem a képet.",
    publicShare: "Megosztható link létrehozása", publicIntro: "Készíts egy privát, listázatlan pillanatképet. Csak az tudja megnyitni, akinek elküldöd a linket.",
    expiry: "Elérhetőség", expiryOptions: { "7": "7 nap", "30": "30 nap", forever: "Korlátlan" },
    consent: "Hozzájárulok, hogy ezt a képeslapot a link működéséhez feltöltsük a Plizióra.", createLink: "Link létrehozása", creating: "Link készítése…",
    copyLink: "Link másolása", copied: "Másolva", shareLink: "Link megosztása", publicReady: "A megosztható link elkészült.", publicError: "Nem sikerült létrehozni a linket. Próbáld újra.",
    file: "plizio-kepeslap", locale: "hu-HU",
  },
  en: {
    placeDefault: "London", countryDefault: "United Kingdom", messageDefault: "Greetings from this wonderful place!",
    studio: "Postcard studio", eyebrow: "Turn a journey into a personal memory", titleA: "Send a piece", titleB: "of the world.",
    intro: "Create a real, personal postcard from your own photo. No sign-up; your image stays on your device until you deliberately create a shareable link.",
    place: "Place", country: "Country", choosePhoto: "Choose your own photo", photoHint: "JPG, PNG or smartphone photo", message: "Message",
    placeSearch: "Find a place on Plizio", placeSearchHint: "Type a city or attraction", placeSearching: "Searching places…", placeNoResults: "No matching place found. You can still enter it manually below.",
    sender: "Signature", senderPlaceholder: "Your name (optional)", style: "Style", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Air mail", scrapbook: "Scrapbook", minimal: "Minimal" },
    photoEdit: "Edit photo", zoom: "Zoom", horizontal: "Horizontal", vertical: "Vertical", rotation: "Rotation", brightness: "Brightness", contrast: "Contrast", saturation: "Saturation", reset: "Reset",
    textDesign: "Style text", font: "Font", fontSize: "Size", alignment: "Alignment", fonts: { classic: "Classic", handwritten: "Handwritten", editorial: "Editorial", modern: "Modern", typewriter: "Typewriter" },
    stampStyle: "Choose stamp", stamps: { local: "Local mark", passport: "Passport", airmail: "Air mail", rail: "Rail journey", modern: "Coordinates" },
    share: "Share", download: "Download", privacy: "By default, your photo stays on your device. It is uploaded only when you explicitly create a shareable link.",
    preview: "The preview updates automatically", previewLabel: "Postcard preview", invalidImage: "Please choose an image file.",
    imageError: "The image could not be opened.", ready: "Your postcard is ready.", shareTitle: (place: string) => `Greetings from ${place}`,
    shareText: "I made this postcard for you with Plizio.", shareFallback: "Direct sharing is not supported by your browser, so the postcard was downloaded instead.",
    publicShare: "Create a shareable link", publicIntro: "Create a private, unlisted snapshot. Only people you send the link to can open it.",
    expiry: "Availability", expiryOptions: { "7": "7 days", "30": "30 days", forever: "Unlimited" },
    consent: "I agree that this postcard will be uploaded to Plizio so the link can work.", createLink: "Create link", creating: "Creating link…",
    copyLink: "Copy link", copied: "Copied", shareLink: "Share link", publicReady: "Your shareable link is ready.", publicError: "The link could not be created. Please try again.",
    file: "plizio-postcard", locale: "en-GB",
  },
  ro: {
    placeDefault: "București", countryDefault: "România", messageDefault: "Salutări din acest loc minunat!",
    studio: "Studio de cărți poștale", eyebrow: "Transformă o călătorie într-o amintire personală", titleA: "Trimite o parte", titleB: "din lume.",
    intro: "Creează o carte poștală personală din fotografia ta. Fără înregistrare; imaginea rămâne pe dispozitiv până când creezi în mod intenționat un link de distribuire.",
    place: "Loc", country: "Țară", choosePhoto: "Alege fotografia ta", photoHint: "JPG, PNG sau fotografie de telefon", message: "Mesaj",
    placeSearch: "Caută un loc pe Plizio", placeSearchHint: "Scrie un oraș sau un obiectiv", placeSearching: "Se caută locuri…", placeNoResults: "Nu am găsit locul. Îl poți introduce manual mai jos.",
    sender: "Semnătură", senderPlaceholder: "Numele tău (opțional)", style: "Stil", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Poștă aeriană", scrapbook: "Jurnal de călătorie", minimal: "Minimal" },
    photoEdit: "Editează fotografia", zoom: "Zoom", horizontal: "Orizontal", vertical: "Vertical", rotation: "Rotire", brightness: "Luminozitate", contrast: "Contrast", saturation: "Saturație", reset: "Resetează",
    textDesign: "Stilizează textul", font: "Font", fontSize: "Mărime", alignment: "Aliniere", fonts: { classic: "Clasic", handwritten: "Scris de mână", editorial: "Editorial", modern: "Modern", typewriter: "Mașină de scris" },
    stampStyle: "Alege ștampila", stamps: { local: "Ștampilă locală", passport: "Pașaport", airmail: "Poștă aeriană", rail: "Călătorie feroviară", modern: "Coordonate" },
    share: "Distribuie", download: "Descarcă", privacy: "În mod implicit, fotografia rămâne pe dispozitiv. Este încărcată doar dacă creezi în mod explicit un link de distribuire.",
    preview: "Previzualizarea se actualizează automat", previewLabel: "Previzualizarea cărții poștale", invalidImage: "Alege un fișier imagine.",
    imageError: "Imaginea nu a putut fi deschisă.", ready: "Cartea poștală este gata.", shareTitle: (place: string) => `Salutări din ${place}`,
    shareText: "Am creat această carte poștală pentru tine cu Plizio.", shareFallback: "Browserul nu permite distribuirea directă, așa că am descărcat cartea poștală.",
    publicShare: "Creează un link de distribuire", publicIntro: "Creează o copie privată, nelistată. Doar persoanele cărora le trimiți linkul o pot deschide.",
    expiry: "Disponibilitate", expiryOptions: { "7": "7 zile", "30": "30 de zile", forever: "Nelimitat" },
    consent: "Sunt de acord ca această carte poștală să fie încărcată pe Plizio pentru ca linkul să funcționeze.", createLink: "Creează linkul", creating: "Se creează linkul…",
    copyLink: "Copiază linkul", copied: "Copiat", shareLink: "Distribuie linkul", publicReady: "Linkul de distribuire este gata.", publicError: "Linkul nu a putut fi creat. Încearcă din nou.",
    file: "plizio-carte-postala", locale: "ro-RO",
  },
  it: {
    placeDefault: "Roma", countryDefault: "Italia", messageDefault: "Saluti da questo luogo meraviglioso!",
    studio: "Studio di cartoline", eyebrow: "Trasforma un viaggio in un ricordo personale", titleA: "Invia un pezzo", titleB: "di mondo.",
    intro: "Crea una cartolina personale con la tua foto. Non serve registrarsi; l'immagine resta sul dispositivo finché non scegli di creare un link condivisibile.",
    place: "Luogo", country: "Paese", choosePhoto: "Scegli una foto", photoHint: "JPG, PNG o foto dello smartphone", message: "Messaggio",
    placeSearch: "Cerca un luogo su Plizio", placeSearchHint: "Scrivi una città o un'attrazione", placeSearching: "Ricerca dei luoghi…", placeNoResults: "Nessun luogo trovato. Puoi inserirlo manualmente qui sotto.",
    sender: "Firma", senderPlaceholder: "Il tuo nome (opzionale)", style: "Stile", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Posta aerea", scrapbook: "Diario di viaggio", minimal: "Minimal" },
    photoEdit: "Modifica foto", zoom: "Zoom", horizontal: "Orizzontale", vertical: "Verticale", rotation: "Rotazione", brightness: "Luminosità", contrast: "Contrasto", saturation: "Saturazione", reset: "Ripristina",
    textDesign: "Stile del testo", font: "Carattere", fontSize: "Dimensione", alignment: "Allineamento", fonts: { classic: "Classico", handwritten: "Corsivo", editorial: "Editoriale", modern: "Moderno", typewriter: "Macchina da scrivere" },
    stampStyle: "Scegli timbro", stamps: { local: "Timbro locale", passport: "Passaporto", airmail: "Posta aerea", rail: "Viaggio in treno", modern: "Coordinate" },
    share: "Condividi", download: "Scarica", privacy: "La foto resta sul dispositivo per impostazione predefinita. Viene caricata solo quando crei esplicitamente un link condivisibile.",
    preview: "L'anteprima si aggiorna automaticamente", previewLabel: "Anteprima della cartolina", invalidImage: "Scegli un file immagine.",
    imageError: "Impossibile aprire l'immagine.", ready: "La cartolina è pronta.", shareTitle: (place: string) => `Saluti da ${place}`,
    shareText: "Ho creato questa cartolina per te con Plizio.", shareFallback: "Il browser non supporta la condivisione diretta, quindi la cartolina è stata scaricata.",
    publicShare: "Crea un link condivisibile", publicIntro: "Crea una copia privata e non elencata. Solo chi riceve il link può aprirla.",
    expiry: "Disponibilità", expiryOptions: { "7": "7 giorni", "30": "30 giorni", forever: "Senza scadenza" },
    consent: "Accetto che questa cartolina venga caricata su Plizio per rendere disponibile il link.", createLink: "Crea link", creating: "Creazione del link…",
    copyLink: "Copia link", copied: "Copiato", shareLink: "Condividi link", publicReady: "Il link condivisibile è pronto.", publicError: "Impossibile creare il link. Riprova.",
    file: "plizio-cartolina", locale: "it-IT",
  },
} satisfies Record<PostcardLanguage, Record<string, unknown>>;

function isLanguage(value: string | null): value is PostcardLanguage {
  return value === "de" || value === "hu" || value === "en" || value === "ro" || value === "it";
}

function normalizePlaceSearch(value: string): string {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, " ").trim();
}

function trackPostcard(event: string, data?: Record<string, string>) {
  const analytics = (window as Window & {
    umami?: { track: (name: string, data?: Record<string, string>) => void };
  }).umami;
  try {
    analytics?.track(event, data);
  } catch {
    // Analytics must never interrupt postcard creation.
  }
}

function ThemePreview({ theme }: { theme: PostcardTheme }) {
  if (theme === "vintage") {
    return <span className="relative block h-16 overflow-hidden rounded-lg bg-[#c6a674]"><span className="absolute inset-2 border border-[#60452d]/60 bg-[#ead9b8]" /><span className="absolute inset-x-4 bottom-3 top-3 bg-gradient-to-b from-[#8da59c] to-[#b8784f] opacity-75" /><span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-2 border-[#9a3e2c]/70" /></span>;
  }
  if (theme === "polaroid") {
    return <span className="relative block h-16 overflow-hidden rounded-lg bg-[#5d665f]"><span className="absolute left-1/2 top-1/2 h-14 w-11 -translate-x-1/2 -translate-y-1/2 -rotate-3 bg-white p-1 shadow-md"><span className="block h-9 bg-gradient-to-br from-[#8cb5bb] to-[#d38b60]" /></span></span>;
  }
  if (theme === "airmail") {
    return <span className="relative block h-16 overflow-hidden rounded-lg bg-[repeating-linear-gradient(135deg,#b63337_0_7px,#f5ead4_7px_14px,#285d88_14px_21px,#f5ead4_21px_28px)] p-1.5"><span className="relative block h-full bg-[#fffaf0]"><span className="absolute left-2 top-2 h-7 w-10 bg-[#8db7c6]" /><span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-2 border-[#b63337]/70" /></span></span>;
  }
  if (theme === "scrapbook") {
    return <span className="relative block h-16 overflow-hidden rounded-lg bg-[#a67d52]"><span className="absolute left-3 top-2 h-12 w-14 rotate-3 bg-[#f2e6cc] shadow"><span className="m-1 block h-7 bg-[#6f9b9a]" /></span><span className="absolute left-8 top-0 h-3 w-8 -rotate-6 bg-[#e7cc87]/80" /><span className="absolute bottom-2 right-2 text-lg text-[#f3d46b]">&#10022;</span></span>;
  }
  return <span className="relative block h-16 overflow-hidden rounded-lg border border-[#d8d4ca] bg-[#fbfaf6]"><span className="absolute bottom-2 left-2 top-2 w-[58%] bg-gradient-to-br from-[#b9c9c3] to-[#7f9c98]" /><span className="absolute right-2 top-3 h-px w-7 bg-[#252a28]" /><span className="absolute right-2 top-6 h-1.5 w-8 bg-[#252a28]" /><span className="absolute right-2 top-9 h-px w-6 bg-[#8a8d87]" /></span>;
}

function StampPreview({ stamp }: { stamp: PostcardStamp }) {
  const common = "grid h-14 place-items-center text-[#a54231] opacity-80";
  if (stamp === "local") return <span className={common}><span className="grid h-11 w-11 rotate-[-7deg] place-items-center rounded-full border-2 border-dashed border-current text-[8px] font-black">PLIZIO</span></span>;
  if (stamp === "passport") return <span className={common}><span className="grid h-10 w-14 rotate-[-4deg] place-items-center rounded-md border-[3px] border-double border-current text-[8px] font-black">PASSPORT</span></span>;
  if (stamp === "airmail") return <span className={common}><span className="grid h-9 w-16 rotate-[-3deg] place-items-center rounded-[50%] border-[3px] border-double border-current text-base">✈</span></span>;
  if (stamp === "rail") return <span className={common}><span className="grid h-10 w-16 place-items-center border-2 border-dashed border-current text-[8px] font-black">RAIL</span></span>;
  return <span className={common}><span className="relative grid h-12 w-12 place-items-center border-2 border-current text-[8px] font-black before:absolute before:h-px before:w-8 before:bg-current after:absolute after:h-8 after:w-px after:bg-current">GPS</span></span>;
}

function RangeControl({ label, value, min, max, step = 1, unit = "", onChange }: { label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (value: number) => void }) {
  return <label className="block"><span className="mb-1.5 flex items-center justify-between gap-3 text-xs font-semibold text-[#625446]"><span>{label}</span><span className="tabular-nums text-[#9b4632]">{value}{unit}</span></span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="h-2 w-full cursor-pointer accent-[#b7462f]" /></label>;
}

export default function PostcardEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);
  const qrImageRef = useRef<HTMLImageElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const placeShardCacheRef = useRef(new Map<string, PlaceSearchRow[]>());
  const [lang, setLang] = useState<PostcardLanguage>("en");
  const [place, setPlace] = useState(COPY.en.placeDefault);
  const [country, setCountry] = useState(COPY.en.countryDefault);
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [placeKind, setPlaceKind] = useState("");
  const [sourcePoiUrl, setSourcePoiUrl] = useState("");
  const [placeQuery, setPlaceQuery] = useState("");
  const [placeSuggestions, setPlaceSuggestions] = useState<PlaceSearchRow[]>([]);
  const [placeSearchState, setPlaceSearchState] = useState<"idle" | "loading" | "empty" | "ready">("idle");
  const [placeSearchOpen, setPlaceSearchOpen] = useState(false);
  const [message, setMessage] = useState(COPY.en.messageDefault);
  const [sender, setSender] = useState("");
  const [theme, setTheme] = useState<PostcardTheme>("vintage");
  const [font, setFont] = useState<PostcardFont>("classic");
  const [fontSize, setFontSize] = useState(42);
  const [textAlign, setTextAlign] = useState<PostcardTextAlign>("left");
  const [stamp, setStamp] = useState<PostcardStamp>("local");
  const [mood, setMood] = useState<PostcardMood>("joyful");
  const [distanceKm, setDistanceKm] = useState<number | undefined>();
  const [distanceMode, setDistanceMode] = useState<PostcardDistanceMode | undefined>();
  const [locationState, setLocationState] = useState<LocationState>("idle");
  const [photoEdit, setPhotoEdit] = useState<PostcardPhotoEdit>({ ...DEFAULT_PHOTO_EDIT });
  const [photoName, setPhotoName] = useState("");
  const [imageRevision, setImageRevision] = useState(0);
  const [notice, setNotice] = useState("");
  const [showPublicShare, setShowPublicShare] = useState(false);
  const [shareExpiry, setShareExpiry] = useState<ShareExpiry>("30");
  const [shareConsent, setShareConsent] = useState(false);
  const [publicUrl, setPublicUrl] = useState("");
  const [creatingLink, setCreatingLink] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrRevision, setQrRevision] = useState(0);
  const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);
  const t = COPY[lang];
  const moment = MOMENT_COPY[lang];
  const date = new Intl.DateTimeFormat(t.locale, { year: "numeric", month: "short", day: "numeric" }).format(new Date());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedLanguage = params.get("lang");
    const preferredLanguage = isLanguage(requestedLanguage) ? requestedLanguage : getLanguage();
    const preferredCopy = COPY[preferredLanguage];
    setLang(preferredLanguage);
    const initialPlace = params.get(`place_${preferredLanguage}`) || params.get("place");
    const initialCountry = params.get(`country_${preferredLanguage}`) || params.get("country");
    setPlace(initialPlace ? initialPlace.slice(0, 80) : preferredCopy.placeDefault);
    setPlaceQuery(initialPlace ? initialPlace.slice(0, 80) : "");
    setCountry(initialCountry ? initialCountry.slice(0, 60) : preferredCopy.countryDefault);
    const latitudeParam = params.get("lat");
    const longitudeParam = params.get("lng");
    const parsedLatitude = latitudeParam === null ? NaN : Number(latitudeParam);
    const parsedLongitude = longitudeParam === null ? NaN : Number(longitudeParam);
    setLatitude(Number.isFinite(parsedLatitude) && Math.abs(parsedLatitude) <= 90 ? parsedLatitude : undefined);
    setLongitude(Number.isFinite(parsedLongitude) && Math.abs(parsedLongitude) <= 180 ? parsedLongitude : undefined);
    setPlaceKind((params.get("kind") || "").slice(0, 40));
    const sourceCandidate = params.get("source") || document.referrer;
    try {
      const sourceUrl = new URL(sourceCandidate, window.location.origin);
      const poiPathPattern = /^\/(?:de|hu|ro|en|fr|tr|hr|it|es|nl|pl|pt)\/[^/?#]+\/[^/?#]+\/[^/?#]+\/?$/;
      if (sourceUrl.origin === window.location.origin && poiPathPattern.test(sourceUrl.pathname)) {
        setSourcePoiUrl(sourceUrl.pathname);
      }
    } catch {
      // A postcard opened directly simply has no POI backlink.
    }
    setMessage(preferredCopy.messageDefault);

    async function loadPlaceImage() {
      if (!document.referrer) return;
      try {
        const sourceUrl = new URL(document.referrer);
        if (sourceUrl.origin !== window.location.origin || sourceUrl.pathname.startsWith("/postcard")) return;
        const response = await fetch(sourceUrl.pathname, { credentials: "same-origin" });
        if (!response.ok) return;
        const documentCopy = new DOMParser().parseFromString(await response.text(), "text/html");
        const imageValue = documentCopy.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content;
        if (!imageValue) return;
        const imageUrl = new URL(imageValue, window.location.origin);
        if (imageUrl.origin !== window.location.origin) return;
        const image = new Image();
        image.onload = () => {
          imageRef.current = image;
          setImageRevision((value) => value + 1);
        };
        image.src = imageUrl.href;
      } catch {
        // The illustrated postcard background remains the offline-safe fallback.
      }
    }

    void loadPlaceImage();
  }, []);

  useEffect(() => {
    if (!placeSearchOpen) return;
    const query = normalizePlaceSearch(placeQuery);
    if (query.length < 2) {
      setPlaceSuggestions([]);
      setPlaceSearchState("idle");
      return;
    }

    const bucket = query.charAt(0) || "_";
    const cacheKey = `${lang}/${bucket}`;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setPlaceSearchState("loading");
      try {
        let rows = placeShardCacheRef.current.get(cacheKey);
        if (!rows) {
          const response = await fetch(`/data/postcard-places/${lang}/${encodeURIComponent(bucket)}.json`, { signal: controller.signal });
          if (!response.ok) throw new Error("place_index");
          rows = await response.json() as PlaceSearchRow[];
          placeShardCacheRef.current.set(cacheKey, rows);
        }
        const matches = rows
          .filter((row) => normalizePlaceSearch(row[0]).includes(query))
          .sort((a, b) => {
            const aStarts = normalizePlaceSearch(a[0]).startsWith(query) ? 0 : 1;
            const bStarts = normalizePlaceSearch(b[0]).startsWith(query) ? 0 : 1;
            return aStarts - bStarts || a[0].localeCompare(b[0], lang);
          })
          .slice(0, 8);
        setPlaceSuggestions(matches);
        setPlaceSearchState(matches.length ? "ready" : "empty");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setPlaceSuggestions([]);
        setPlaceSearchState("empty");
      }
    }, 220);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [lang, placeQuery, placeSearchOpen]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    renderPostcard(canvas, imageRef.current, { place, country, latitude, longitude, placeKind, message, sender, theme, date, lang, font, fontSize, textAlign, stamp, mood, distanceKm, distanceMode, qrImage: qrImageRef.current, photoEdit });
    const mobileCanvas = mobileCanvasRef.current;
    const mobileContext = mobileCanvas?.getContext("2d");
    if (mobileCanvas && mobileContext) {
      mobileCanvas.width = 600;
      mobileCanvas.height = Math.max(1, Math.round(canvas.height / 2));
      mobileContext.drawImage(canvas, 0, 0, mobileCanvas.width, mobileCanvas.height);
    }
  }, [place, country, latitude, longitude, placeKind, message, sender, theme, date, lang, font, fontSize, textAlign, stamp, mood, distanceKm, distanceMode, qrRevision, photoEdit, photoName, imageRevision]);

  useEffect(() => () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!publicUrl) {
      qrImageRef.current = null;
      setQrDataUrl("");
      setQrRevision((value) => value + 1);
      return () => { cancelled = true; };
    }
    void QRCode.toDataURL(publicUrl, { errorCorrectionLevel: "M", margin: 1, width: 220, color: { dark: "#28231e", light: "#fffaf0" } }).then((dataUrl) => {
      if (cancelled) return;
      const image = new Image();
      image.onload = () => {
        if (cancelled) return;
        qrImageRef.current = image;
        setQrDataUrl(dataUrl);
        setQrRevision((value) => value + 1);
      };
      image.src = dataUrl;
    }).catch(() => {
      if (!cancelled) setQrDataUrl("");
    });
    return () => { cancelled = true; };
  }, [publicUrl]);

  useEffect(() => {
    setPublicUrl("");
    setLinkCopied(false);
  }, [place, country, latitude, longitude, placeKind, sourcePoiUrl, message, sender, theme, font, fontSize, textAlign, stamp, mood, distanceKm, photoEdit, photoName, imageRevision]);

  function updatePhotoEdit(key: keyof PostcardPhotoEdit, value: number) {
    setPhotoEdit((current) => ({ ...current, [key]: value }));
  }

  function choosePlace(row: PlaceSearchRow) {
    setPlace(row[0]);
    setCountry(row[1]);
    setSourcePoiUrl(row[2]);
    setLatitude(row[3] ?? undefined);
    setLongitude(row[4] ?? undefined);
    setPlaceKind(row[5]);
    setDistanceKm(undefined);
    setDistanceMode(undefined);
    setLocationState("idle");
    setPlaceQuery(row[0]);
    setPlaceSuggestions([]);
    setPlaceSearchState("idle");
    setPlaceSearchOpen(false);
    trackPostcard("postcard_place_selected", { lang, kind: row[5] || "unknown" });
  }

  function clearSelectedPlace() {
    setSourcePoiUrl("");
    setLatitude(undefined);
    setLongitude(undefined);
    setPlaceKind("");
    setDistanceKm(undefined);
    setDistanceMode(undefined);
    setLocationState("idle");
  }

  function suggestMessage() {
    setMessage(moment.messages[mood](place, country));
    trackPostcard("postcard_message_suggested", { lang, mood });
  }

  function detectDistance() {
    if (latitude == null || longitude == null) {
      setNotice(moment.locationMissing);
      setLocationState("error");
      return;
    }
    if (!("geolocation" in navigator)) {
      setNotice(moment.locationError);
      setLocationState("error");
      return;
    }
    setNotice("");
    setLocationState("loading");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const straightDistance = distanceBetweenKm(position.coords.latitude, position.coords.longitude, latitude, longitude);
        try {
          const distance = await drivingDistanceKm(position.coords.latitude, position.coords.longitude, latitude, longitude, straightDistance);
          setDistanceKm(distance);
          setDistanceMode("road");
          setLocationState("ready");
          setNotice(moment.locationReady(formatDistance(distance)));
          trackPostcard("postcard_distance_added", { distance: String(Math.round(distance)), mode: "road" });
        } catch {
          setDistanceKm(straightDistance);
          setDistanceMode("straight");
          setLocationState("ready");
          setNotice(moment.locationFallback(formatDistance(straightDistance)));
          trackPostcard("postcard_distance_added", { distance: String(Math.round(straightDistance)), mode: "straight_fallback" });
        }
      },
      () => {
        setLocationState("error");
        setNotice(moment.locationError);
      },
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 },
    );
  }

  function loadPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setNotice(t.invalidImage);
      return;
    }
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    const image = new Image();
    image.onload = () => {
      imageRef.current = image;
      setPhotoName(file.name);
      setPhotoEdit({ ...DEFAULT_PHOTO_EDIT });
      setNotice("");
      trackPostcard("postcard_photo_added", { theme });
    };
    image.onerror = () => setNotice(t.imageError);
    image.src = url;
  }

  async function getFile(type: "image/png" | "image/webp" = "image/png") {
    if (!canvasRef.current) return null;
    const blob = await canvasToBlob(canvasRef.current, type, type === "image/webp" ? 0.84 : 0.94);
    const extension = type === "image/webp" ? "webp" : "png";
    return blob ? new File([blob], `${t.file}-${place.toLowerCase().replace(/[^a-z0-9]+/gi, "-") || "travel"}.${extension}`, { type }) : null;
  }

  async function download() {
    const file = await getFile();
    if (!file) return;
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = file.name;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(t.ready);
    trackPostcard("postcard_download", { theme, has_photo: imageRef.current ? "yes" : "no" });
  }

  async function share() {
    const file = await getFile();
    if (!file) return;
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: t.shareTitle(place), text: t.shareText });
        trackPostcard("postcard_share", { theme, has_photo: imageRef.current ? "yes" : "no" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        trackPostcard("postcard_share_fallback", { theme });
        await download();
        setNotice(t.shareFallback);
      }
      return;
    }
    trackPostcard("postcard_share_fallback", { theme });
    await download();
    setNotice(t.shareFallback);
  }

  async function createPublicLink() {
    if (!shareConsent || creatingLink) return;
    const file = await getFile("image/webp");
    if (!file) return;
    setCreatingLink(true);
    setNotice("");
    setLinkCopied(false);
    try {
      const body = new FormData();
      body.append("card", file);
      body.append("place", place);
      body.append("country", country);
      body.append("lang", lang);
      body.append("theme", theme);
      body.append("mood", mood);
      if (distanceKm != null) body.append("distance_km", distanceKm.toFixed(1));
      if (distanceMode) body.append("distance_mode", distanceMode);
      if (sourcePoiUrl) body.append("poi_url", sourcePoiUrl);
      if (latitude != null && longitude != null) {
        body.append("lat", latitude.toFixed(6));
        body.append("lng", longitude.toFixed(6));
      }
      body.append("expiry", shareExpiry);
      body.append("consent", "yes");
      body.append("website", "");
      const response = await fetch("/postcard-share.php", { method: "POST", body, credentials: "same-origin" });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || typeof result.url !== "string") throw new Error("share_failed");
      const url = new URL(result.url, window.location.origin).href;
      setPublicUrl(url);
      setNotice(t.publicReady);
      trackPostcard("postcard_link_created", { theme, expiry: shareExpiry, has_photo: imageRef.current ? "yes" : "no" });
    } catch {
      setNotice(t.publicError);
    } finally {
      setCreatingLink(false);
    }
  }

  async function copyPublicLink() {
    if (!publicUrl) return;
    try {
      await navigator.clipboard.writeText(publicUrl);
    } catch {
      const input = document.createElement("textarea");
      input.value = publicUrl;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setLinkCopied(true);
    trackPostcard("postcard_link_copied", { theme });
    setTimeout(() => setLinkCopied(false), 1800);
  }

  async function sharePublicLink() {
    if (!publicUrl) return;
    if (navigator.share) {
      try {
        await navigator.share({ url: publicUrl, title: t.shareTitle(place), text: t.shareText });
        trackPostcard("postcard_link_shared", { theme });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyPublicLink();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4ead8] text-[#28231e]">
      <div className="pointer-events-none fixed inset-0 opacity-35 [background-image:radial-gradient(#875f3b_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
      <header className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6">
        <a href="/" className="font-serif text-xl font-black tracking-[0.18em]">PLIZIO</a>
        <span className="hidden rounded-full border border-[#28231e]/15 bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] sm:block">{t.studio}</span>
      </header>

      <section className="relative mx-auto box-border w-full max-w-7xl px-4 pb-12 pt-3 sm:px-8 sm:pb-16 sm:pt-5 lg:pt-10">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#b7462f]"><Sparkles size={16} /> {t.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[2.5rem] font-black leading-[0.96] tracking-[-0.04em] sm:text-7xl">{t.titleA}<br />{t.titleB}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#54493e]">{t.intro}</p>
        </div>

        <div className="mt-8 grid min-w-0 items-start gap-7 sm:mt-10 sm:gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="min-w-0 rounded-[22px] border border-[#6d5037]/20 bg-[#fffaf0]/85 p-4 shadow-[0_24px_70px_rgba(63,42,22,.12)] backdrop-blur sm:rounded-[28px] sm:p-7">
            <div className="relative mb-5">
              <label htmlFor="postcard-place-search" className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Search size={15} /> {t.placeSearch}</label>
              <div className="relative">
                <input
                  id="postcard-place-search"
                  value={placeQuery}
                  autoComplete="off"
                  placeholder={t.placeSearchHint}
                  role="combobox"
                  aria-autocomplete="list"
                  aria-controls="postcard-place-results"
                  aria-expanded={placeSearchOpen && placeSuggestions.length > 0}
                  onFocus={() => setPlaceSearchOpen(true)}
                  onChange={(event) => {
                    setPlaceQuery(event.target.value.slice(0, 100));
                    setPlaceSearchOpen(true);
                  }}
                  className="box-border min-w-0 w-full rounded-xl border border-[#b7462f]/30 bg-white px-4 py-3 pr-11 outline-none focus:border-[#b7462f] focus:ring-2 focus:ring-[#b7462f]/10"
                />
                {placeSearchState === "loading" ? <LoaderCircle size={18} className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-[#b7462f]" /> : <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8b7662]" />}
              </div>
              {placeSearchOpen && placeSuggestions.length > 0 ? (
                <div id="postcard-place-results" role="listbox" className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-[#6d5037]/20 bg-[#fffdf8] p-1.5 shadow-[0_18px_45px_rgba(63,42,22,.2)]">
                  {placeSuggestions.map((row) => (
                    <button key={row[2]} type="button" role="option" aria-selected="false" onClick={() => choosePlace(row)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-[#f8dec0]/55">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#b7462f]/10 text-[#b7462f]"><MapPin size={17} /></span>
                      <span className="min-w-0"><strong className="block truncate text-sm">{row[0]}</strong><span className="block truncate text-xs text-[#76685b]">{row[1]}</span></span>
                    </button>
                  ))}
                </div>
              ) : null}
              {placeSearchOpen && placeSearchState === "empty" && normalizePlaceSearch(placeQuery).length >= 2 ? <p className="mt-2 text-xs leading-5 text-[#76685b]">{t.placeNoResults}</p> : null}
              {placeSearchOpen && placeSearchState === "loading" ? <span className="sr-only" aria-live="polite">{t.placeSearching}</span> : null}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="min-w-0 block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><MapPin size={15} /> {t.place}</span><input value={place} maxLength={80} onChange={(e) => { setPlace(e.target.value); clearSelectedPlace(); }} className="box-border min-w-0 w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
              <label className="min-w-0 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.country}</span><input value={country} maxLength={60} onChange={(e) => { setCountry(e.target.value); clearSelectedPlace(); }} className="box-border min-w-0 w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
            </div>

            <section aria-label={moment.title} className="mt-5 overflow-hidden rounded-2xl border border-[#b7462f]/20 bg-gradient-to-br from-[#fff8e9] via-white/70 to-[#eef1e7] p-4 shadow-[0_10px_28px_rgba(80,53,28,.08)]">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b7462f] text-lg text-white shadow-sm">{MOOD_SYMBOLS[mood]}</span>
                <div className="min-w-0"><h2 className="font-serif text-lg font-black">{moment.title}</h2><p className="mt-0.5 text-xs leading-5 text-[#6b5c4e]">{moment.intro}</p></div>
              </div>
              <fieldset className="mt-4"><legend className="text-[11px] font-bold uppercase tracking-widest text-[#6b5c4e]">{moment.mood}</legend>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {moods.map((item) => <button type="button" key={item} aria-pressed={mood === item} onClick={() => setMood(item)} className={`min-h-11 rounded-xl border px-2 py-2 text-xs font-bold transition ${mood === item ? "border-[#b7462f] bg-[#f8dec0]/75 text-[#8f3928] shadow-sm" : "border-[#6d5037]/15 bg-white/65 text-[#65584c] hover:bg-white"}`}><span className="mr-1" aria-hidden="true">{MOOD_SYMBOLS[item]}</span>{moment.moods[item]}</button>)}
                </div>
              </fieldset>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <button type="button" onClick={suggestMessage} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#b7462f] px-3 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"><Sparkles size={16} />{moment.suggest}</button>
                <button type="button" onClick={detectDistance} disabled={locationState === "loading"} className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#47745f]/30 bg-[#eef1e7]/80 px-3 py-2 text-sm font-bold text-[#345847] transition hover:bg-white disabled:cursor-wait disabled:opacity-60"><MapPin size={16} />{locationState === "loading" ? moment.locating : distanceKm == null ? moment.distance : `${distanceMode === "road" ? moment.byCar : moment.straightLine}: ${formatDistance(distanceKm)} km`}</button>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c4e]">{moment.routePrivacy}</p>
              {sourcePoiUrl ? <a href={sourcePoiUrl} className="mt-3 flex min-h-10 items-center justify-between gap-3 rounded-xl border border-[#47745f]/20 bg-white/65 px-3 py-2 text-sm font-bold text-[#345847] transition hover:bg-white"><span className="flex min-w-0 items-center gap-2"><MapPin size={15} className="shrink-0" /><span className="truncate">{moment.placeLink}</span></span><span aria-hidden="true">↗</span></a> : null}
            </section>
            <label className="mt-5 block cursor-pointer rounded-2xl border-2 border-dashed border-[#b7462f]/35 bg-[#f8dec0]/35 p-5 text-center transition hover:bg-[#f8dec0]/65">
              <input type="file" accept="image/*" className="sr-only" onChange={loadPhoto} />
              <ImagePlus className="mx-auto text-[#b7462f]" />
              <span className="mt-2 block font-bold">{photoName || t.choosePhoto}</span>
              <span className="mt-1 block text-xs text-[#6b5c4e]">{t.photoHint}</span>
            </label>

            <details className="mt-3 overflow-hidden rounded-2xl border border-[#6d5037]/15 bg-white/35">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-bold marker:content-none"><span className="flex items-center gap-2"><SlidersHorizontal size={18} className="text-[#b7462f]" />{t.photoEdit}</span><span className="text-xs text-[#8b7662]">+</span></summary>
              <div className="grid gap-4 border-t border-[#6d5037]/10 px-4 pb-4 pt-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <RangeControl label={t.zoom} value={photoEdit.zoom} min={1} max={2} step={0.05} unit="×" onChange={(value) => updatePhotoEdit("zoom", value)} />
                <RangeControl label={t.rotation} value={photoEdit.rotation} min={-15} max={15} unit="°" onChange={(value) => updatePhotoEdit("rotation", value)} />
                <RangeControl label={t.horizontal} value={photoEdit.offsetX} min={-100} max={100} unit="%" onChange={(value) => updatePhotoEdit("offsetX", value)} />
                <RangeControl label={t.vertical} value={photoEdit.offsetY} min={-100} max={100} unit="%" onChange={(value) => updatePhotoEdit("offsetY", value)} />
                <RangeControl label={t.brightness} value={photoEdit.brightness} min={50} max={150} unit="%" onChange={(value) => updatePhotoEdit("brightness", value)} />
                <RangeControl label={t.contrast} value={photoEdit.contrast} min={50} max={150} unit="%" onChange={(value) => updatePhotoEdit("contrast", value)} />
                <RangeControl label={t.saturation} value={photoEdit.saturation} min={0} max={180} unit="%" onChange={(value) => updatePhotoEdit("saturation", value)} />
                <button type="button" onClick={() => setPhotoEdit({ ...DEFAULT_PHOTO_EDIT })} className="flex items-center justify-center gap-2 self-end rounded-full border border-[#6d5037]/20 bg-white/70 px-4 py-2 text-sm font-bold"><RotateCcw size={15} />{t.reset}</button>
              </div>
            </details>

            <label className="mt-5 min-w-0 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.message}</span><textarea value={message} maxLength={500} rows={5} onChange={(e) => setMessage(e.target.value)} className="box-border min-w-0 w-full resize-y rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /><span className="mt-1 block text-right text-xs text-[#76685b]">{message.length}/500</span></label>
            <label className="mt-3 min-w-0 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.sender}</span><input value={sender} maxLength={30} placeholder={t.senderPlaceholder} onChange={(e) => setSender(e.target.value)} className="box-border min-w-0 w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>

            <details className="mt-3 overflow-hidden rounded-2xl border border-[#6d5037]/15 bg-white/35">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-bold marker:content-none"><span className="flex items-center gap-2"><Type size={18} className="text-[#b7462f]" />{t.textDesign}</span><span className="text-xs text-[#8b7662]">+</span></summary>
              <div className="border-t border-[#6d5037]/10 px-4 pb-4 pt-4">
                <span className="text-xs font-bold uppercase tracking-widest">{t.font}</span>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">{fonts.map((item) => <button type="button" key={item} aria-pressed={font === item} onClick={() => setFont(item)} style={{ fontFamily: FONT_PREVIEWS[item] }} className={`min-h-11 rounded-xl border px-2 py-2 text-sm transition ${font === item ? "border-[#b7462f] bg-[#f8dec0]/70 shadow-sm" : "border-[#6d5037]/15 bg-white/65"}`}>{t.fonts[item]}</button>)}</div>
                <div className="mt-4"><RangeControl label={t.fontSize} value={fontSize} min={30} max={54} unit=" px" onChange={setFontSize} /></div>
                <div className="mt-4 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-widest">{t.alignment}</span><div className="flex rounded-xl border border-[#6d5037]/15 bg-white/65 p-1">{(["left", "center", "right"] as PostcardTextAlign[]).map((item) => { const Icon = item === "left" ? AlignLeft : item === "center" ? AlignCenter : AlignRight; return <button type="button" key={item} aria-label={`${t.alignment}: ${item}`} aria-pressed={textAlign === item} onClick={() => setTextAlign(item)} className={`grid h-9 w-10 place-items-center rounded-lg ${textAlign === item ? "bg-[#b7462f] text-white" : "text-[#65584c]"}`}><Icon size={17} /></button>; })}</div></div>
              </div>
            </details>

            <fieldset className="mt-6 min-w-0"><legend className="text-xs font-bold uppercase tracking-widest">{t.style}</legend><div className="-mx-1 mt-3 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]"><div className="grid auto-cols-[128px] grid-flow-col gap-3 sm:auto-cols-[142px]">{themes.map((item) => <button type="button" key={item} aria-pressed={theme === item} onClick={() => setTheme(item)} className={`snap-start rounded-2xl border p-2 text-left text-xs font-bold transition ${theme === item ? "border-[#28231e] bg-white shadow-md ring-2 ring-[#b7462f]/20" : "border-[#6d5037]/15 bg-white/35 hover:border-[#6d5037]/35 hover:bg-white/60"}`}><ThemePreview theme={item} /><span className="mt-2 block truncate px-1">{t.themes[item]}</span></button>)}</div></div></fieldset>

            <fieldset className="mt-5 min-w-0"><legend className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Stamp size={15} />{t.stampStyle}</legend><div className="-mx-1 mt-3 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]"><div className="grid auto-cols-[116px] grid-flow-col gap-2">{stamps.map((item) => <button type="button" key={item} aria-pressed={stamp === item} onClick={() => setStamp(item)} className={`rounded-2xl border p-2 text-center text-xs font-bold transition ${stamp === item ? "border-[#b7462f] bg-white shadow-md ring-2 ring-[#b7462f]/15" : "border-[#6d5037]/15 bg-white/35 hover:bg-white/60"}`}><StampPreview stamp={item} /><span className="mt-1 block truncate">{t.stamps[item]}</span></button>)}</div></div></fieldset>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button type="button" onClick={share} className="flex items-center justify-center gap-2 rounded-full bg-[#b7462f] px-5 py-3.5 font-bold text-white shadow-[0_10px_24px_rgba(183,70,47,.28)] transition hover:-translate-y-0.5"><Send size={18} /> {t.share}</button>
              <button type="button" onClick={download} className="flex items-center justify-center gap-2 rounded-full border border-[#28231e]/25 bg-white/70 px-5 py-3.5 font-bold transition hover:bg-white"><Download size={18} /> {t.download}</button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-[#47745f]/25 bg-[#eef1e7]/70">
              <button type="button" onClick={() => setShowPublicShare((value) => !value)} aria-expanded={showPublicShare} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-bold text-[#345847] transition hover:bg-white/45">
                <span className="flex items-center gap-2"><Globe2 size={18} /> {t.publicShare}</span>
                <Link2 size={17} className={`transition ${showPublicShare ? "rotate-45" : ""}`} />
              </button>
              {showPublicShare ? <div className="border-t border-[#47745f]/20 px-4 pb-4 pt-3">
                <p className="text-sm leading-6 text-[#526158]">{t.publicIntro}</p>
                <label className="mt-3 block text-xs font-bold uppercase tracking-widest text-[#445248]">{t.expiry}
                  <select value={shareExpiry} onChange={(event) => setShareExpiry(event.target.value as ShareExpiry)} className="mt-2 box-border min-w-0 w-full rounded-xl border border-[#47745f]/25 bg-white/80 px-3 py-2.5 text-sm font-semibold normal-case tracking-normal outline-none focus:border-[#47745f]">
                    {(["7", "30", "forever"] as ShareExpiry[]).map((value) => <option key={value} value={value}>{t.expiryOptions[value]}</option>)}
                  </select>
                </label>
                <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-[#4f5d54]">
                  <input type="checkbox" checked={shareConsent} onChange={(event) => setShareConsent(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#47745f]" />
                  <span>{t.consent}</span>
                </label>
                {!publicUrl ? <button type="button" disabled={!shareConsent || creatingLink} onClick={createPublicLink} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#47745f] px-5 py-3 font-bold text-white shadow-[0_8px_20px_rgba(71,116,95,.2)] transition hover:bg-[#365d4a] disabled:cursor-not-allowed disabled:opacity-45">
                  {creatingLink ? <LoaderCircle size={18} className="animate-spin" /> : <Link2 size={18} />}{creatingLink ? t.creating : t.createLink}
                </button> : <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 rounded-xl border border-[#47745f]/25 bg-white/75 p-2 pl-3">
                    <input readOnly value={publicUrl} aria-label={t.publicReady} className="box-border min-w-0 flex-1 bg-transparent text-xs text-[#3d4c43] outline-none" />
                    <button type="button" onClick={copyPublicLink} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#e0e8dc] text-[#345847]" aria-label={t.copyLink}>{linkCopied ? <Check size={17} /> : <Copy size={17} />}</button>
                  </div>
                  {qrDataUrl ? <div className="flex items-center gap-3 rounded-2xl border border-[#47745f]/20 bg-white/70 p-3">
                    <img src={qrDataUrl} alt={moment.qrTitle} width={96} height={96} className="h-24 w-24 shrink-0 rounded-lg border border-[#6d5037]/10 bg-white p-1" />
                    <div className="min-w-0"><strong className="block text-sm text-[#345847]">{moment.qrTitle}</strong><span className="mt-1 block text-xs leading-5 text-[#5a685f]">{moment.qrHint}</span></div>
                  </div> : null}
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={copyPublicLink} className="flex items-center justify-center gap-2 rounded-full border border-[#47745f]/30 bg-white/70 px-3 py-2.5 text-sm font-bold text-[#345847]"><Copy size={16} /> {linkCopied ? t.copied : t.copyLink}</button>
                    <button type="button" onClick={sharePublicLink} className="flex items-center justify-center gap-2 rounded-full bg-[#47745f] px-3 py-2.5 text-sm font-bold text-white"><Send size={16} /> {t.shareLink}</button>
                  </div>
                </div>}
              </div> : null}
            </div>
            {notice ? <p className="mt-4 text-center text-sm font-semibold text-[#8f3928]" role="status">{notice}</p> : null}
            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#65584c]"><ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#47745f]" />{t.privacy}</p>
          </div>

          <div className="relative mx-auto min-w-0 w-full max-w-[880px] lg:sticky lg:top-6">
            <div className="absolute -inset-2 -rotate-1 rounded-[24px] bg-[#dfc5a0]/70 sm:-inset-5 sm:-rotate-2 sm:rounded-[36px]" />
            <div className="relative min-w-0 rounded-[16px] bg-white p-2 shadow-[0_24px_55px_rgba(56,36,16,.22)] transition duration-500 sm:rotate-[1deg] sm:rounded-[22px] sm:p-5 sm:shadow-[0_32px_80px_rgba(56,36,16,.25)] sm:hover:rotate-0">
              <div aria-label="Live postcard mood" className="pointer-events-none absolute left-4 top-4 z-10 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/60 bg-[#28231e]/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-sm sm:left-7 sm:top-7"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f4c95d]" /><span className="truncate">{moment.moods[mood]}{distanceKm == null ? "" : ` · ${distanceMode === "road" ? moment.byCar : moment.straightLine} ${formatDistance(distanceKm)} km`}</span></div>
              <canvas ref={canvasRef} className="box-border block h-auto max-w-full w-full rounded-[8px] bg-[#e7cda7] sm:rounded-[10px]" aria-label={t.previewLabel} />
            </div>
            <p className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[#65584c]"><Camera size={17} /> {t.preview}</p>
            <button type="button" onClick={() => setMobilePreviewOpen((value) => !value)} aria-label={mobilePreviewOpen ? moment.previewClose : moment.previewTap} aria-expanded={mobilePreviewOpen} className={`fixed z-50 overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-2 text-left shadow-[0_18px_55px_rgba(43,31,20,.35)] backdrop-blur transition-all duration-300 lg:hidden ${mobilePreviewOpen ? "bottom-20 left-3 right-3" : "bottom-20 right-3 w-28"}`}>
              <span className="mb-1.5 flex items-center justify-between gap-2 px-1 text-[9px] font-black uppercase tracking-widest text-[#65584c]"><span className="flex items-center gap-1"><Camera size={11} />{t.previewLabel}</span><span aria-hidden="true">{mobilePreviewOpen ? "×" : "+"}</span></span>
              <canvas ref={mobileCanvasRef} className={`mx-auto block h-auto rounded-lg bg-[#e7cda7] ${mobilePreviewOpen ? "max-h-[62vh] max-w-full" : "max-h-28 max-w-full"}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
