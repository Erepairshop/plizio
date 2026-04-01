"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK7Explorer from "@/app/astro-geographie/games/k7/GeographieK7Explorer";

export default function AstroGeographieK7Page() {
  const router = useRouter();
  const { lang } = useLang();
  const geoLang = lang === "en" ? "de" : lang;
  return <GeographieK7Explorer key={geoLang} lang={geoLang} onDone={() => router.push("/astro-geographie")} onClose={() => router.push("/astro-geographie")} />;
}
