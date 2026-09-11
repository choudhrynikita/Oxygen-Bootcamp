import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { burstPoolForDay, pickBurstType } from "./bursts";

describe("burst rotation", () => {
  it("week 1 only uses install-safe types", () => {
    for (let d = 1; d <= 7; d++) {
      const pool = burstPoolForDay(d);
      assert.deepEqual(pool, ["warmup-match", "menu-path-race"]);
    }
  });

  it("week 1 does not ask about maps or AEM types", () => {
    const pool = burstPoolForDay(1);
    assert.equal(pool.includes("glossary-lightning"), false);
    assert.equal(pool.includes("output-oracle"), false);
  });

  it("picker never repeats last type when another is available", () => {
    const pool = burstPoolForDay(3);
    const pick = pickBurstType(pool, pool[0], "2026-09-11");
    assert.notEqual(pick, pool[0]);
  });
});
