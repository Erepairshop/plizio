import AstroAIGradeClient from "./AstroAIGradeClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ grade: "5" }, { grade: "6" }, { grade: "7" }, { grade: "8" }];
}

export default function Page({ params }: { params: Promise<{ grade: string }> }) {
  return <AstroAIGradeClient params={params} />;
}
