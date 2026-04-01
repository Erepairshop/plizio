"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, MapPinned, Compass, Globe2 } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: {
    title: "AstroGeographie",
    subtitle: "Explore maps, climate, landscapes and global geography across four grade levels.",
    back: "Home",
  },
  hu: {
    title: "AstroFöldrajz",
    subtitle: "Térképek, éghajlat, tájak és globális földrajz négy évfolyamon át.",
    back: "Kezdőlap",
  },
  de: {
    title: "AstroGeographie",
    subtitle: "Entdecke Karten, Klima, Landschaften und globale Geografie über vier Klassen hinweg.",
    back: "Startseite",
  },
  ro: {
    title: "AstroGeografie",
    subtitle: "Explorează hărți, climă, peisaje și geografie globală pe patru clase.",
    back: "Acasă",
  },
};

export default function AstroGeographiePage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.20),_transparent_42%),linear-gradient(180deg,_#06121a_0%,_#081724_55%,_#040b10_100%)] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute left-10 top-12 text-cyan-300/40"><Globe2 size={120} /></div>
        <div className="absolute right-12 top-28 text-white/10"><Compass size={96} /></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-teal-300/10"><MapPinned size={220} /></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-4 py-10 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80">
          <Compass className="h-4 w-4" />
          Geography Explorer
        </div>
        <h1 className="text-4xl font-black tracking-[0.18em] text-cyan-100 sm:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{t.subtitle}</p>

        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/astro-geographie/5", icon: <MapPinned className="h-5 w-5" />, title: "Grade 5", text: "Maps, directions and rivers." },
            { href: "/astro-geographie/6", icon: <Compass className="h-5 w-5" />, title: "Grade 6", text: "Earth layers, climate and water." },
            { href: "/astro-geographie/7", icon: <Globe2 className="h-5 w-5" />, title: "Grade 7", text: "Asia, natural forces and monsoon." },
            { href: "/astro-geographie/8", icon: <MapPinned className="h-5 w-5" />, title: "Grade 8", text: "Globalization, cities and climate." },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => router.push(item.href)}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">{item.icon}</div>
              <div className="text-lg font-semibold text-white">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-white/65">{item.text}</div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => router.push("/")}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            <Home className="mr-2 inline-block h-4 w-4" />
            {t.back}
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(6,182,212,0.14))]"
        animate={{ opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
