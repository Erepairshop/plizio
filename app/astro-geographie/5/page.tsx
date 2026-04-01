"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK5Explorer from "@/app/astro-geographie/games/k5/GeographieK5Explorer";

export default function AstroGeographieK5Page() {
  const router = useRouter();
  const { lang } = useLang();
  const geoLang = lang === "en" ? "de" : lang;

  return <GeographieK5Explorer key={geoLang} lang={geoLang} onDone={() => router.push("/astro-geographie")} onClose={() => router.push("/astro-geographie")} />;
}
