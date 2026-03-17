import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 8 – Free Practice – Plizio",
  description: "Free online math practice for Grade 8: systems of equations, functions, Pythagorean theorem and statistics.",
  alternates: { canonical: "https://plizio.com/math-test/grade-8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
