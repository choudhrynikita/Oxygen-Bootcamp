import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { freshState } from "./schema";
import { importLegacy, LEGACY_CLASSROOM_BADGE } from "./legacy-import";

describe("v1 import", () => {
  it("does not invent day completions from a v1 tick", () => {
    const s = freshState();
    const next = importLegacy(s, ["t0-what", "t3-maps"], { "t0-what": [1], "t3-maps": [5, 6] });
    assert.equal(next.days["1"].status, "available");
    assert.deepEqual(next.days["1"].legacyLessonIds, ["t0-what"]);
    assert.equal(next.days["5"]?.status ?? "locked", "locked");
    assert.ok(next.game.badges.includes(LEGACY_CLASSROOM_BADGE));
  });

  it("does nothing with an empty v1 list", () => {
    const s = freshState();
    const next = importLegacy(s, [], { "t0-what": [1] });
    assert.equal(next.game.badges.includes(LEGACY_CLASSROOM_BADGE), false);
  });
});
