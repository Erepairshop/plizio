import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Light Out – Plizio",
  description: "Toggle lights to turn them all off! A classic puzzle game with 10 expedition levels.",
  alternates: { canonical: "https://plizio.com/lightout/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
