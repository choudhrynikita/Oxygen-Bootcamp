import { notFound } from "next/navigation";
import { loadDay, listDayNumbers } from "@/lib/bootcamp/curriculum";
import { SessionClient } from "@/components/session-client";

export function generateStaticParams() {
  return listDayNumbers().map((n) => ({ n: String(n) }));
}

export default async function SessionPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const dayNum = Number(n);
  if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 90) notFound();
  const day = loadDay(dayNum);
  return <SessionClient day={day} />;
}
