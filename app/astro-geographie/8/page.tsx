"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK8Explorer from "@/app/astro-geographie/games/k8/GeographieK8Explorer";

export default function AstroGeographieK8Page() {
  const router = useRouter();
  const { lang } = useLang();
  const geoLang = lang === "en" ? "de" : lang;
  return <GeographieK8Explorer key={geoLang} lang={geoLang} onDone={() => router.push("/astro-geographie")} onClose={() => router.push("/astro-geographie")} />;
}
