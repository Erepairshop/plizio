import { notFound } from "next/navigation";
import LocalizedRoute from "@/components/LocalizedRoute";
import RouteComponent from "@/app/deutschtest/page";
import type { Language } from "@/lib/language";

const LANGS = ["de", "hu", "ro", "en"] as const;

// Static export: emit all 4 language URLs at build (no ISR runtime).
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LocalizedPage_deutschtest({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(LANGS as readonly string[]).includes(lang)) notFound();
  return (
    <LocalizedRoute lang={lang as Language}>
      <RouteComponent />
    </LocalizedRoute>
  );
}
