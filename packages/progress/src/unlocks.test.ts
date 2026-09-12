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

  it("opens the next day after a checkpoint lab, without a weekly gate", () => {
    const s = freshState();
    s.days["7"] = {
      status: "lab_done",
      checks: {},
      burstsDone: [],
      sessionQuestsDone: [],
      hourlyBlocksCompleted: 0,
    };
    assert.equal(canUnlock(s, 8), true);
    const synced = syncLocks(s);
    assert.equal(synced.days["8"].status, "available");
  });

  it("still waits if the previous day was only started", () => {
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

  it("lets you chain days in one sitting", () => {
    const s = freshState();
    s.days["1"] = { ...s.days["1"], status: "lab_done" };
    s.days["2"] = { ...s.days["1"], status: "checked" };
    const synced = syncLocks(s);
    assert.equal(synced.days["3"].status, "available");
  });
});
