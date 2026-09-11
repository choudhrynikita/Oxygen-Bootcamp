import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { burstPoolForDay, pickBurstType } from "./bursts";

describe("burst rotation", () => {
  it("Days 1–7 primary types are not the same two days in a row", () => {
    const primaries = [];
    for (let d = 1; d <= 7; d++) primaries.push(burstPoolForDay(d)[0]);
    for (let i = 1; i < primaries.length; i++) {
      assert.notEqual(primaries[i], primaries[i - 1], `day ${i + 1} repeated ${primaries[i]}`);
    }
  });

  it("picker never repeats last type when another is available", () => {
    const pool = burstPoolForDay(3);
    const pick = pickBurstType(pool, pool[0], "2026-09-11");
    assert.notEqual(pick, pool[0]);
  });
});
