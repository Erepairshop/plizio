import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geschichte Test – Plizio",
  alternates: {
    ...buildHreflangAlternates("/geschichtetest/"),
    canonical: "/geschichtetest/",
  },
};

export default function GeschichteTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
