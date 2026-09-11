import { loadCatalogSummary, loadDay } from "@/lib/bootcamp/curriculum";
import { TodayClient } from "@/components/today-client";

export default function TodayPage() {
  const catalog = loadCatalogSummary();
  const day1 = loadDay(1);
  return <TodayClient catalog={catalog} day1={day1} />;
}
