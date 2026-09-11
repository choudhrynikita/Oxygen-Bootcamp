import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { freshState } from "../../progress/src/schema";
import { awardSkillXp, rankFor, XP } from "./xp";

describe("xp and rank", () => {
  it("does not grant rank from burst XP alone", () => {
    let s = freshState();
    s = { ...s, game: awardSkillXp(s.game, XP.burst * 40, ["xmlLiteracy"]) };
    assert.equal(rankFor(s).id, "trainee");
  });

  it("requires both days and XP floors", () => {
    const s = freshState();
    for (let i = 1; i <= 7; i++) {
      s.days[String(i)] = {
        status: "complete",
        checks: {},
        burstsDone: [],
        sessionQuestsDone: [],
        hourlyBlocksCompleted: 4,
      };
    }
    assert.equal(rankFor(s).id, "trainee");
    s.game = awardSkillXp(s.game, 200, ["oxygenUi"]);
    assert.equal(rankFor(s).id, "bench-author");
  });
});
