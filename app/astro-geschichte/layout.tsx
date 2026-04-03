import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroGeschichte – Plizio",
  alternates: {
    canonical: "/astro-geschichte/",
  },
};

export default function AstroGeschichteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
