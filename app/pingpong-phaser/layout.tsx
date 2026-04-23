import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Tennis Phaser – Plizio",
  description: "Asztalitenisz játék Phaser game engine-nel – összehasonlítás.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/pingpong-phaser/"),
    canonical: "https://plizio.com/pingpong-phaser/"
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
