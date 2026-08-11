"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Camera, Check, Copy, Download, Globe2, ImagePlus, Link2, LoaderCircle, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { canvasToBlob, renderPostcard, type PostcardLanguage, type PostcardTheme } from "@/lib/postcard/renderPostcard";
import { getLanguage } from "@/lib/language";

const themes: PostcardTheme[] = ["vintage", "polaroid", "airmail", "scrapbook", "minimal"];
type ShareExpiry = "7" | "30" | "forever";

const COPY = {
  de: {
    placeDefault: "Berlin", countryDefault: "Deutschland", messageDefault: "Grüße von diesem wunderschönen Ort!",
    studio: "Postkartenstudio", eyebrow: "Eine Reise wird zur persönlichen Erinnerung", titleA: "Sende ein Stück", titleB: "der Welt.",
    intro: "Gestalte eine echte, persönliche Postkarte aus deinem eigenen Foto. Ohne Anmeldung; dein Bild bleibt auf dem Gerät, bis du bewusst einen teilbaren Link erstellst.",
    place: "Ort", country: "Land", choosePhoto: "Eigenes Foto auswählen", photoHint: "JPG, PNG oder Smartphone-Foto", message: "Nachricht",
    sender: "Unterschrift", senderPlaceholder: "Dein Name (optional)", style: "Stil", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Luftpost", scrapbook: "Reisetagebuch", minimal: "Minimal" },
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
    sender: "Aláírás", senderPlaceholder: "A neved (nem kötelező)", style: "Stílus", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Légiposta", scrapbook: "Utazási napló", minimal: "Minimal" },
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
    sender: "Signature", senderPlaceholder: "Your name (optional)", style: "Style", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Air mail", scrapbook: "Scrapbook", minimal: "Minimal" },
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
    sender: "Semnătură", senderPlaceholder: "Numele tău (opțional)", style: "Stil", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Poștă aeriană", scrapbook: "Jurnal de călătorie", minimal: "Minimal" },
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
    sender: "Firma", senderPlaceholder: "Il tuo nome (opzionale)", style: "Stile", themes: { vintage: "Vintage", polaroid: "Polaroid", airmail: "Posta aerea", scrapbook: "Diario di viaggio", minimal: "Minimal" },
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

export default function PostcardEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [lang, setLang] = useState<PostcardLanguage>("en");
  const [place, setPlace] = useState(COPY.en.placeDefault);
  const [country, setCountry] = useState(COPY.en.countryDefault);
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [placeKind, setPlaceKind] = useState("");
  const [message, setMessage] = useState(COPY.en.messageDefault);
  const [sender, setSender] = useState("");
  const [theme, setTheme] = useState<PostcardTheme>("vintage");
  const [photoName, setPhotoName] = useState("");
  const [imageRevision, setImageRevision] = useState(0);
  const [notice, setNotice] = useState("");
  const [showPublicShare, setShowPublicShare] = useState(false);
  const [shareExpiry, setShareExpiry] = useState<ShareExpiry>("30");
  const [shareConsent, setShareConsent] = useState(false);
  const [publicUrl, setPublicUrl] = useState("");
  const [creatingLink, setCreatingLink] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const t = COPY[lang];
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
    setCountry(initialCountry ? initialCountry.slice(0, 60) : preferredCopy.countryDefault);
    const latitudeParam = params.get("lat");
    const longitudeParam = params.get("lng");
    const parsedLatitude = latitudeParam === null ? NaN : Number(latitudeParam);
    const parsedLongitude = longitudeParam === null ? NaN : Number(longitudeParam);
    setLatitude(Number.isFinite(parsedLatitude) && Math.abs(parsedLatitude) <= 90 ? parsedLatitude : undefined);
    setLongitude(Number.isFinite(parsedLongitude) && Math.abs(parsedLongitude) <= 180 ? parsedLongitude : undefined);
    setPlaceKind((params.get("kind") || "").slice(0, 40));
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
    if (!canvasRef.current) return;
    renderPostcard(canvasRef.current, imageRef.current, { place, country, latitude, longitude, placeKind, message, sender, theme, date, lang });
  }, [place, country, latitude, longitude, placeKind, message, sender, theme, date, lang, photoName, imageRevision]);

  useEffect(() => () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

  useEffect(() => {
    setPublicUrl("");
    setLinkCopied(false);
  }, [place, country, message, sender, theme, photoName, imageRevision]);

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
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="font-serif text-xl font-black tracking-[0.18em]">PLIZIO</a>
        <span className="rounded-full border border-[#28231e]/15 bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">{t.studio}</span>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:pt-10">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#b7462f]"><Sparkles size={16} /> {t.eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl">{t.titleA}<br />{t.titleB}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#54493e]">{t.intro}</p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[28px] border border-[#6d5037]/20 bg-[#fffaf0]/85 p-5 shadow-[0_24px_70px_rgba(63,42,22,.12)] backdrop-blur sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><MapPin size={15} /> {t.place}</span><input value={place} maxLength={80} onChange={(e) => setPlace(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
              <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.country}</span><input value={country} maxLength={60} onChange={(e) => setCountry(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
            </div>

            <label className="mt-5 block cursor-pointer rounded-2xl border-2 border-dashed border-[#b7462f]/35 bg-[#f8dec0]/35 p-5 text-center transition hover:bg-[#f8dec0]/65">
              <input type="file" accept="image/*" className="sr-only" onChange={loadPhoto} />
              <ImagePlus className="mx-auto text-[#b7462f]" />
              <span className="mt-2 block font-bold">{photoName || t.choosePhoto}</span>
              <span className="mt-1 block text-xs text-[#6b5c4e]">{t.photoHint}</span>
            </label>

            <label className="mt-5 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.message}</span><textarea value={message} maxLength={500} rows={5} onChange={(e) => setMessage(e.target.value)} className="w-full resize-y rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /><span className="mt-1 block text-right text-xs text-[#76685b]">{message.length}/500</span></label>
            <label className="mt-3 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">{t.sender}</span><input value={sender} maxLength={30} placeholder={t.senderPlaceholder} onChange={(e) => setSender(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>

            <fieldset className="mt-6 min-w-0"><legend className="text-xs font-bold uppercase tracking-widest">{t.style}</legend><div className="-mx-1 mt-3 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]"><div className="grid auto-cols-[128px] grid-flow-col gap-3 sm:auto-cols-[142px]">{themes.map((item) => <button type="button" key={item} aria-pressed={theme === item} onClick={() => setTheme(item)} className={`snap-start rounded-2xl border p-2 text-left text-xs font-bold transition ${theme === item ? "border-[#28231e] bg-white shadow-md ring-2 ring-[#b7462f]/20" : "border-[#6d5037]/15 bg-white/35 hover:border-[#6d5037]/35 hover:bg-white/60"}`}><ThemePreview theme={item} /><span className="mt-2 block truncate px-1">{t.themes[item]}</span></button>)}</div></div></fieldset>

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
                  <select value={shareExpiry} onChange={(event) => setShareExpiry(event.target.value as ShareExpiry)} className="mt-2 w-full rounded-xl border border-[#47745f]/25 bg-white/80 px-3 py-2.5 text-sm font-semibold normal-case tracking-normal outline-none focus:border-[#47745f]">
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
                    <input readOnly value={publicUrl} aria-label={t.publicReady} className="min-w-0 flex-1 bg-transparent text-xs text-[#3d4c43] outline-none" />
                    <button type="button" onClick={copyPublicLink} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#e0e8dc] text-[#345847]" aria-label={t.copyLink}>{linkCopied ? <Check size={17} /> : <Copy size={17} />}</button>
                  </div>
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

          <div className="relative lg:sticky lg:top-6">
            <div className="absolute -inset-5 -rotate-2 rounded-[36px] bg-[#dfc5a0]/70" />
            <div className="relative rotate-[1deg] rounded-[22px] bg-white p-3 shadow-[0_32px_80px_rgba(56,36,16,.25)] transition duration-500 hover:rotate-0 sm:p-5">
              <canvas ref={canvasRef} className="block h-auto w-full rounded-[10px] bg-[#e7cda7]" aria-label={t.previewLabel} />
            </div>
            <p className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[#65584c]"><Camera size={17} /> {t.preview}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
