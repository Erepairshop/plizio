import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 7 – Free Practice – Plizio",
  description: "Free online math practice for Grade 7: algebra, linear equations, geometry and probability.",
  alternates: { canonical: "https://plizio.com/math-test/grade-7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
