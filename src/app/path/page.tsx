import { loadCatalogSummary } from "@/lib/bootcamp/curriculum";
import { PathClient } from "@/components/path-client";

export default function PathPage() {
  return <PathClient catalog={loadCatalogSummary()} />;
}
