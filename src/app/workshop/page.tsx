import { loadCatalogSummary } from "@/lib/bootcamp/curriculum";
import { WorkshopClient } from "@/components/workshop-client";
import badges from "../../../content/game/badges.json";
import cards from "../../../content/game/tool-cards.json";
import glossary from "../../../content/game/glossary.json";

export default function WorkshopPage() {
  return (
    <WorkshopClient
      catalog={loadCatalogSummary()}
      badges={badges}
      cards={cards}
      glossary={glossary}
    />
  );
}
