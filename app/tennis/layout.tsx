import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis – Plizio",
  description: "Arcade tennis game with side-view court, bounce mechanics and perfect hit timing. Play solo or challenge friends!",
  alternates: { canonical: "https://plizio.com/tennis/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
