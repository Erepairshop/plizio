"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK8Explorer from "@/app/astro-geographie/games/k8/GeographieK8Explorer";

export default function AstroGeographieK8Page() {
  const router = useRouter();
  const { lang } = useLang();
  return <GeographieK8Explorer lang={lang} onDone={() => {}} onClose={() => router.push("/astro-geographie")} />;
}
