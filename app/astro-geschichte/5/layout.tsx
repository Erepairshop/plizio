import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronos: Die Antike – Plizio",
  alternates: {
    canonical: "/astro-geschichte/5",
  },
};

export default function Grade5Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
