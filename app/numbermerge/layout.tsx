import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Number Merge – Plizio",
  description: "Merge tiles to reach the target number! A 2048-style puzzle game with 10 expedition levels.",
  alternates: { canonical: "https://plizio.com/numbermerge/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
