"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Camera, Download, ImagePlus, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { canvasToBlob, renderPostcard, type PostcardTheme } from "@/lib/postcard/renderPostcard";
import { getLanguage, type Language } from "@/lib/language";

const themes: { id: PostcardTheme; colors: string }[] = [
  { id: "sunset", colors: "from-[#f8c76c] to-[#ef674b]" },
  { id: "coast", colors: "from-[#c9e7df] to-[#4aa6aa]" },
  { id: "paper", colors: "from-[#eee4d2] to-[#bda789]" },
];

const COPY = {
  de: {
    placeDefault: "Berlin", countryDefault: "Deutschland", messageDefault: "Grüße von diesem wunderschönen Ort!",
    studio: "Postkartenstudio", eyebrow: "Eine Reise wird zur persönlichen Erinnerung", titleA: "Sende ein Stück", titleB: "der Welt.",
    intro: "Gestalte eine echte, persönliche Postkarte aus deinem eigenen Foto. Ohne Anmeldung, und dein Bild verlässt dein Gerät nicht.",
    place: "Ort", country: "Land", choosePhoto: "Eigenes Foto auswählen", photoHint: "JPG, PNG oder Smartphone-Foto", message: "Nachricht",
    sender: "Unterschrift", senderPlaceholder: "Dein Name (optional)", style: "Stil", themes: { sunset: "Sonnenuntergang", coast: "Küste", paper: "Vintage" },
    share: "Teilen", download: "Herunterladen", privacy: "Das Foto wird in deinem Browser verarbeitet. Es wird weder hochgeladen noch gespeichert.",
    preview: "Die Vorschau wird automatisch aktualisiert", previewLabel: "Postkartenvorschau", invalidImage: "Bitte wähle eine Bilddatei aus.",
    imageError: "Das Bild konnte nicht geöffnet werden.", ready: "Die Postkarte ist fertig.", shareTitle: (place: string) => `Grüße aus ${place}`,
    shareText: "Diese Postkarte habe ich für dich mit Plizio gestaltet.", shareFallback: "Direktes Teilen wird von deinem Browser nicht unterstützt. Die Postkarte wurde stattdessen heruntergeladen.",
    file: "plizio-postkarte", locale: "de-DE",
  },
  hu: {
    placeDefault: "Budapest", countryDefault: "Magyarország", messageDefault: "Üdvözlet erről a csodálatos helyről!",
    studio: "Képeslapstúdió", eyebrow: "Egy utazásból személyes emlék", titleA: "Küldj egy darabot", titleB: "a világból.",
    intro: "Készíts valódi, személyes képeslapot saját fotódból. Nincs regisztráció, a képed nem hagyja el a telefonodat.",
    place: "Hely", country: "Ország", choosePhoto: "Saját fotó kiválasztása", photoHint: "JPG, PNG vagy telefonos fotó", message: "Üzenet",
    sender: "Aláírás", senderPlaceholder: "A neved (nem kötelező)", style: "Stílus", themes: { sunset: "Naplemente", coast: "Tengerpart", paper: "Régi képeslap" },
    share: "Megosztás", download: "Letöltés", privacy: "A fotót a böngésződ dolgozza fel. Nem töltjük fel és nem tároljuk.",
    preview: "Az előnézet automatikusan frissül", previewLabel: "A képeslap előnézete", invalidImage: "Kérlek, képfájlt válassz.",
    imageError: "A képet nem sikerült megnyitni.", ready: "A képeslap elkészült.", shareTitle: (place: string) => `Üdvözlet ${place} városából`,
    shareText: "Ezt a képeslapot neked készítettem a Plizión.", shareFallback: "A böngésződön a közvetlen megosztás nem elérhető, ezért letöltöttem a képet.",
    file: "plizio-kepeslap", locale: "hu-HU",
  },
  en: {
    placeDefault: "London", countryDefault: "United Kingdom", messageDefault: "Greetings from this wonderful place!",
    studio: "Postcard studio", eyebrow: "Turn a journey into a personal memory", titleA: "Send a piece", titleB: "of the world.",
    intro: "Create a real, personal postcard from your own photo. No sign-up, and your image never leaves your device.",
    place: "Place", country: "Country", choosePhoto: "Choose your own photo", photoHint: "JPG, PNG or smartphone photo", message: "Message",
    sender: "Signature", senderPlaceholder: "Your name (optional)", style: "Style", themes: { sunset: "Sunset", coast: "Coast", paper: "Vintage" },
    share: "Share", download: "Download", privacy: "Your photo is processed in your browser. It is not uploaded or stored.",
    preview: "The preview updates automatically", previewLabel: "Postcard preview", invalidImage: "Please choose an image file.",
    imageError: "The image could not be opened.", ready: "Your postcard is ready.", shareTitle: (place: string) => `Greetings from ${place}`,
    shareText: "I made this postcard for you with Plizio.", shareFallback: "Direct sharing is not supported by your browser, so the postcard was downloaded instead.",
    file: "plizio-postcard", locale: "en-GB",
  },
  ro: {
    placeDefault: "București", countryDefault: "România", messageDefault: "Salutări din acest loc minunat!",
    studio: "Studio de cărți poștale", eyebrow: "Transformă o călătorie într-o amintire personală", titleA: "Trimite o parte", titleB: "din lume.",
    intro: "Creează o carte poștală personală din fotografia ta. Fără înregistrare, iar imaginea nu părăsește dispozitivul.",
    place: "Loc", country: "Țară", choosePhoto: "Alege fotografia ta", photoHint: "JPG, PNG sau fotografie de telefon", message: "Mesaj",
    sender: "Semnătură", senderPlaceholder: "Numele tău (opțional)", style: "Stil", themes: { sunset: "Apus", coast: "Litoral", paper: "Vintage" },
    share: "Distribuie", download: "Descarcă", privacy: "Fotografia este procesată în browser. Nu este încărcată și nu este stocată.",
    preview: "Previzualizarea se actualizează automat", previewLabel: "Previzualizarea cărții poștale", invalidImage: "Alege un fișier imagine.",
    imageError: "Imaginea nu a putut fi deschisă.", ready: "Cartea poștală este gata.", shareTitle: (place: string) => `Salutări din ${place}`,
    shareText: "Am creat această carte poștală pentru tine cu Plizio.", shareFallback: "Browserul nu permite distribuirea directă, așa că am descărcat cartea poștală.",
    file: "plizio-carte-postala", locale: "ro-RO",
  },
} satisfies Record<Language, Record<string, unknown>>;

function isLanguage(value: string | null): value is Language {
  return value === "de" || value === "hu" || value === "en" || value === "ro";
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

export default function PostcardEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [lang, setLang] = useState<Language>("en");
  const [place, setPlace] = useState(COPY.en.placeDefault);
  const [country, setCountry] = useState(COPY.en.countryDefault);
  const [message, setMessage] = useState(COPY.en.messageDefault);
  const [sender, setSender] = useState("");
  const [theme, setTheme] = useState<PostcardTheme>("sunset");
  const [photoName, setPhotoName] = useState("");
  const [imageRevision, setImageRevision] = useState(0);
  const [notice, setNotice] = useState("");
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
    renderPostcard(canvasRef.current, imageRef.current, { place, country, message, sender, theme, date, lang });
  }, [place, country, message, sender, theme, date, lang, photoName, imageRevision]);

  useEffect(() => () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

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

  async function getFile() {
    if (!canvasRef.current) return null;
    const blob = await canvasToBlob(canvasRef.current);
    return blob ? new File([blob], `${t.file}-${place.toLowerCase().replace(/[^a-z0-9]+/gi, "-") || "travel"}.png`, { type: "image/png" }) : null;
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
      await navigator.share({ files: [file], title: t.shareTitle(place), text: t.shareText });
      trackPostcard("postcard_share", { theme, has_photo: imageRef.current ? "yes" : "no" });
      return;
    }
    trackPostcard("postcard_share_fallback", { theme });
    await download();
    setNotice(t.shareFallback);
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

            <fieldset className="mt-6"><legend className="text-xs font-bold uppercase tracking-widest">{t.style}</legend><div className="mt-3 grid grid-cols-3 gap-2">{themes.map((item) => <button type="button" key={item.id} onClick={() => setTheme(item.id)} className={`rounded-xl border p-2 text-xs font-bold transition ${theme === item.id ? "border-[#28231e] bg-white shadow-md" : "border-transparent"}`}><span className={`mx-auto mb-2 block h-8 rounded-lg bg-gradient-to-br ${item.colors}`} />{t.themes[item.id]}</button>)}</div></fieldset>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button type="button" onClick={share} className="flex items-center justify-center gap-2 rounded-full bg-[#b7462f] px-5 py-3.5 font-bold text-white shadow-[0_10px_24px_rgba(183,70,47,.28)] transition hover:-translate-y-0.5"><Send size={18} /> {t.share}</button>
              <button type="button" onClick={download} className="flex items-center justify-center gap-2 rounded-full border border-[#28231e]/25 bg-white/70 px-5 py-3.5 font-bold transition hover:bg-white"><Download size={18} /> {t.download}</button>
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
