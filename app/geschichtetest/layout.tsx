import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geschichte Test – Plizio",
  alternates: {
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
