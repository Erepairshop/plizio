import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";

export const metadata: Metadata = {
  title: "Data Sources & Methodology | Plizio",
  description: "Where Plizio's travel data comes from: OpenStreetMap, Wikidata, Wikipedia, Open-Meteo, Ticketmaster and OpenRouteService, with licenses and methodology.",
  alternates: buildHreflangAlternates("/data-sources/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
