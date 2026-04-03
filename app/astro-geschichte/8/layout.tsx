import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bellum: Das 20. Jahrhundert – Plizio",
  alternates: {
    canonical: "/astro-geschichte/8",
  },
};

export default function Grade8Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
