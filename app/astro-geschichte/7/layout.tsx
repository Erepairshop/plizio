import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libertas: Frühe Neuzeit – Plizio",
  alternates: {
    canonical: "/astro-geschichte/7",
  },
};

export default function Grade7Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
