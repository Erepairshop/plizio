import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadow Switch | Plizio",
  description: "Navigate through dual-layered logic puzzles. Switch between Light and Shadow worlds to reach the exit.",
  alternates: {
    canonical: "https://plizio.com/shadowswitch/",
  },
  openGraph: {
    title: "Shadow Switch | Plizio",
    description: "Switch between dimensions to solve challenging logic puzzles in Shadow Switch.",
    url: "https://plizio.com/shadowswitch/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Switch | Plizio",
    description: "Dimensions collide in this unique logic puzzle game.",
  },
};

export default function ShadowSwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
