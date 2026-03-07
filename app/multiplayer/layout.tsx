import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multiplayer – Plizio",
  description: "Challenge your friends to a multiplayer match! Compare scores in Quick Pick, Memory Flash, Reflex Grid, Math Test and more.",
  alternates: { canonical: "https://plizio.com/multiplayer/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
