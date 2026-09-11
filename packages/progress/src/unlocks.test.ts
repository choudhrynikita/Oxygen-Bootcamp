import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { freshState } from "./schema";
import { canUnlock, syncLocks } from "./unlocks";

describe("unlocks", () => {
  it("opens day 1", () => {
    const s = freshState();
    assert.equal(canUnlock(s, 1), true);
    assert.equal(s.days["1"].status, "available");
  });

  it("keeps day 2 locked until day 1 lab is done", () => {
    const s = freshState();
    assert.equal(canUnlock(s, 2), false);
    s.days["1"] = { ...s.days["1"], status: "lab_done" };
    assert.equal(canUnlock(s, 2), true);
  });

  it("does not open next week from Friday lab if the boss is unfinished", () => {
    const s = freshState();
    s.days["6"] = {
      status: "lab_done",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
    };
    s.days["7"] = {
      status: "started",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
    };
    assert.equal(canUnlock(s, 8), false);
    const synced = syncLocks(s);
    assert.equal(synced.days["8"]?.status ?? "locked", "locked");
  });

  it("opens next week only when the boss day is complete", () => {
    const s = freshState();
    s.days["7"] = {
      status: "complete",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
      quizScore: 100,
      fieldNote: "Installed Oxygen and saved a page.",
    };
    assert.equal(canUnlock(s, 8), true);
    const synced = syncLocks(s);
    assert.equal(synced.days["8"].status, "available");
  });

  it("does not unlock day 8 from a mere day 7 start without Friday lab", () => {
    const s = freshState();
    s.days["7"] = {
      status: "started",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
    };
    assert.equal(canUnlock(s, 8), false);
  });
});
