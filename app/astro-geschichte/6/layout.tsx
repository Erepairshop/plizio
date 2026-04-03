import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medievia: Das Mittelalter – Plizio",
  alternates: {
    canonical: "/astro-geschichte/6",
  },
};

export default function Grade6Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
