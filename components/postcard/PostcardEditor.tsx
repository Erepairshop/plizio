"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Camera, Download, ImagePlus, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { canvasToBlob, renderPostcard, type PostcardTheme } from "@/lib/postcard/renderPostcard";

const themes: { id: PostcardTheme; name: string; colors: string }[] = [
  { id: "sunset", name: "Naplemente", colors: "from-[#f8c76c] to-[#ef674b]" },
  { id: "coast", name: "Tengerpart", colors: "from-[#c9e7df] to-[#4aa6aa]" },
  { id: "paper", name: "Régi képeslap", colors: "from-[#eee4d2] to-[#bda789]" },
];

export default function PostcardEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [place, setPlace] = useState("Budapest");
  const [country, setCountry] = useState("Magyarország");
  const [message, setMessage] = useState("Üdvözlet erről a csodálatos helyről!");
  const [sender, setSender] = useState("");
  const [theme, setTheme] = useState<PostcardTheme>("sunset");
  const [photoName, setPhotoName] = useState("");
  const [notice, setNotice] = useState("");
  const date = new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "short", day: "numeric" }).format(new Date());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialPlace = params.get("place");
    const initialCountry = params.get("country");
    if (initialPlace) setPlace(initialPlace.slice(0, 28));
    if (initialCountry) setCountry(initialCountry.slice(0, 30));
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    renderPostcard(canvasRef.current, imageRef.current, { place, country, message, sender, theme, date });
  }, [place, country, message, sender, theme, date, photoName]);

  useEffect(() => () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

  function loadPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setNotice("Kérlek, képfájlt válassz.");
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
    };
    image.onerror = () => setNotice("A képet nem sikerült megnyitni.");
    image.src = url;
  }

  async function getFile() {
    if (!canvasRef.current) return null;
    const blob = await canvasToBlob(canvasRef.current);
    return blob ? new File([blob], `plizio-kepeslap-${place.toLowerCase().replace(/[^a-z0-9]+/gi, "-") || "utazas"}.png`, { type: "image/png" }) : null;
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
    setNotice("A képeslap elkészült.");
  }

  async function share() {
    const file = await getFile();
    if (!file) return;
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: `Üdvözlet ${place} városából`, text: "Ezt a képeslapot neked készítettem a Plizión." });
      return;
    }
    await download();
    setNotice("A böngésződön a közvetlen megosztás nem elérhető, ezért letöltöttem a képet.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4ead8] text-[#28231e]">
      <div className="pointer-events-none fixed inset-0 opacity-35 [background-image:radial-gradient(#875f3b_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="font-serif text-xl font-black tracking-[0.18em]">PLIZIO</a>
        <span className="rounded-full border border-[#28231e]/15 bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">Postcard studio</span>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:pt-10">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#b7462f]"><Sparkles size={16} /> Egy utazásból személyes emlék</p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl">Küldj egy darabot<br />a világból.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#54493e]">Készíts valódi, személyes képeslapot saját fotódból. Nincs regisztráció, a képed nem hagyja el a telefonodat.</p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[28px] border border-[#6d5037]/20 bg-[#fffaf0]/85 p-5 shadow-[0_24px_70px_rgba(63,42,22,.12)] backdrop-blur sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><MapPin size={15} /> Hely</span><input value={place} maxLength={28} onChange={(e) => setPlace(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
              <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">Ország</span><input value={country} maxLength={30} onChange={(e) => setCountry(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>
            </div>

            <label className="mt-5 block cursor-pointer rounded-2xl border-2 border-dashed border-[#b7462f]/35 bg-[#f8dec0]/35 p-5 text-center transition hover:bg-[#f8dec0]/65">
              <input type="file" accept="image/*" className="sr-only" onChange={loadPhoto} />
              <ImagePlus className="mx-auto text-[#b7462f]" />
              <span className="mt-2 block font-bold">{photoName || "Saját fotó kiválasztása"}</span>
              <span className="mt-1 block text-xs text-[#6b5c4e]">JPG, PNG vagy telefonos fotó</span>
            </label>

            <label className="mt-5 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">Üzenet</span><textarea value={message} maxLength={150} rows={3} onChange={(e) => setMessage(e.target.value)} className="w-full resize-none rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /><span className="mt-1 block text-right text-xs text-[#76685b]">{message.length}/150</span></label>
            <label className="mt-3 block"><span className="mb-2 block text-xs font-bold uppercase tracking-widest">Aláírás</span><input value={sender} maxLength={30} placeholder="A neved (nem kötelező)" onChange={(e) => setSender(e.target.value)} className="w-full rounded-xl border border-[#6d5037]/20 bg-white/70 px-4 py-3 outline-none focus:border-[#b7462f]" /></label>

            <fieldset className="mt-6"><legend className="text-xs font-bold uppercase tracking-widest">Stílus</legend><div className="mt-3 grid grid-cols-3 gap-2">{themes.map((item) => <button type="button" key={item.id} onClick={() => setTheme(item.id)} className={`rounded-xl border p-2 text-xs font-bold transition ${theme === item.id ? "border-[#28231e] bg-white shadow-md" : "border-transparent"}`}><span className={`mx-auto mb-2 block h-8 rounded-lg bg-gradient-to-br ${item.colors}`} />{item.name}</button>)}</div></fieldset>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button type="button" onClick={share} className="flex items-center justify-center gap-2 rounded-full bg-[#b7462f] px-5 py-3.5 font-bold text-white shadow-[0_10px_24px_rgba(183,70,47,.28)] transition hover:-translate-y-0.5"><Send size={18} /> Megosztás</button>
              <button type="button" onClick={download} className="flex items-center justify-center gap-2 rounded-full border border-[#28231e]/25 bg-white/70 px-5 py-3.5 font-bold transition hover:bg-white"><Download size={18} /> Letöltés</button>
            </div>
            {notice ? <p className="mt-4 text-center text-sm font-semibold text-[#8f3928]" role="status">{notice}</p> : null}
            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#65584c]"><ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#47745f]" />A fotót a böngésződ dolgozza fel. Nem töltjük fel és nem tároljuk.</p>
          </div>

          <div className="relative lg:sticky lg:top-6">
            <div className="absolute -inset-5 -rotate-2 rounded-[36px] bg-[#dfc5a0]/70" />
            <div className="relative rotate-[1deg] rounded-[22px] bg-white p-3 shadow-[0_32px_80px_rgba(56,36,16,.25)] transition duration-500 hover:rotate-0 sm:p-5">
              <canvas ref={canvasRef} className="block h-auto w-full rounded-[10px] bg-[#e7cda7]" aria-label="A képeslap előnézete" />
            </div>
            <p className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[#65584c]"><Camera size={17} /> Az előnézet automatikusan frissül</p>
          </div>
        </div>
      </section>
    </main>
  );
}
