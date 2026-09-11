import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { freshState } from "./schema";
import { applyGuard, parseExport, type GuardReport } from "./update-guard";

describe("update guard", () => {
  it("rejects unknown schemaVersion", () => {
    const result = parseExport({ schemaVersion: 2, curriculumVersion: "x", days: {}, game: {} });
    assert.equal(result.ok, false);
    if (!result.ok) assert.match(result.error, /Unknown schemaVersion/);
  });

  it("keep-skip does not wipe completed unchanged days", () => {
    const s = freshState();
    s.days["1"] = {
      status: "complete",
      checks: { a: true },
      burstsDone: [],
      sessionQuestsDone: ["a"],
      hourlyBlocksCompleted: 4,
    };
    s.game.badges = ["well-formed"];
    const report: GuardReport = {
      needed: true,
      fromVersion: "2026.09.0",
      toVersion: "2026.09.2",
      changedDays: [{ day: 3, reason: "lab changed" }],
      badgesKept: ["well-formed"],
      badgesDropped: [],
    };
    const next = applyGuard(s, "keep-skip", report, ["well-formed"], { "well-formed": 1 });
    assert.equal(next.days["1"].status, "complete");
    assert.equal(next.game.badges.includes("well-formed"), true);
    assert.equal(next.curriculumVersion, "2026.09.2");
  });

  it("drops badges whose lab no longer exists", () => {
    const s = freshState();
    s.days["1"] = {
      status: "complete",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
    };
    s.game.badges = ["ghost-badge"];
    const report: GuardReport = {
      needed: true,
      fromVersion: "old",
      toVersion: "2026.09.2",
      changedDays: [],
      badgesKept: [],
      badgesDropped: ["ghost-badge"],
    };
    const next = applyGuard(s, "keep-skip", report, ["well-formed"], { "well-formed": 1 });
    assert.equal(next.game.badges.includes("ghost-badge"), false);
  });
});
