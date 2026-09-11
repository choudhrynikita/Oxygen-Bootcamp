import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { emptyGame, freshState } from "../../progress/src/schema";
import { grantFreezeFromCurriculumDay, tickStreakFromBurst } from "./streak";

describe("streak and freeze", () => {
  it("increments on consecutive burst days", () => {
    let game = emptyGame();
    game = tickStreakFromBurst(game, "2026-09-01").game;
    game = tickStreakFromBurst(game, "2026-09-02").game;
    assert.equal(game.streak.current, 2);
  });

  it("breaks without a freeze after a gap", () => {
    let game = emptyGame();
    game = tickStreakFromBurst(game, "2026-09-01").game;
    game = tickStreakFromBurst(game, "2026-09-03").game;
    assert.equal(game.streak.current, 1);
  });

  it("spends a freeze across a gap", () => {
    let game = emptyGame();
    game.streak.freezes = 1;
    game = tickStreakFromBurst(game, "2026-09-01").game;
    const r = tickStreakFromBurst(game, "2026-09-03");
    assert.equal(r.spentFreeze, true);
    assert.equal(r.game.streak.freezes, 0);
    assert.equal(r.game.streak.current, 2);
  });

  it("cannot stack freezes from burst-only days", () => {
    let state = freshState();
    for (let i = 0; i < 14; i++) {
      const r = tickStreakFromBurst(state.game, `2026-09-${String(i + 1).padStart(2, "0")}`);
      state = { ...state, game: r.game };
    }
    assert.equal(state.game.streak.freezes, 0);
  });

  it("earns a freeze after 7 curriculum days, max 2", () => {
    let state = freshState();
    for (let i = 0; i < 7; i++) state = grantFreezeFromCurriculumDay(state);
    assert.equal(state.game.streak.freezes, 1);
    for (let i = 0; i < 7; i++) state = grantFreezeFromCurriculumDay(state);
    assert.equal(state.game.streak.freezes, 2);
    for (let i = 0; i < 7; i++) state = grantFreezeFromCurriculumDay(state);
    assert.equal(state.game.streak.freezes, 2);
  });
});
