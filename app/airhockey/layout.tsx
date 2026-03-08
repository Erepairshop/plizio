import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Hockey – Plizio",
  description: "Fast-paced arcade air hockey game. Play against AI or challenge friends in multiplayer!",
  alternates: { canonical: "https://plizio.com/airhockey/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
