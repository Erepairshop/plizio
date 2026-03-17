import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Math Games for Kids – Fun Practice – Plizio",
  description: "Discover the best free online math games for kids in grades 1–8. Make learning math fun with interactive challenges and instant feedback.",
  alternates: { canonical: "https://plizio.com/blog/free-math-games-kids/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
