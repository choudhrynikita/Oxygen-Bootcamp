import type { GameState, LearnerState } from "../../progress/src/schema";

function ymd(d: Date, timeZone?: string): string {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(d);
}

function yesterdayOf(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() - 1);
  return dt.toISOString().slice(0, 10);
}

export function localDate(now = new Date(), timeZone?: string): string {
  return ymd(now, timeZone);
}

/** Burst-only days never increment curriculumDaysTowardFreeze. */
export function tickStreakFromBurst(
  game: GameState,
  today: string,
): { game: GameState; spentFreeze: boolean } {
  if (game.streak.lastActiveDate === today) {
    return { game, spentFreeze: false };
  }
  const yesterday = yesterdayOf(today);
  if (game.streak.lastActiveDate === yesterday || game.streak.lastActiveDate === "") {
    const current = game.streak.lastActiveDate === "" ? 1 : game.streak.current + 1;
    return {
      spentFreeze: false,
      game: {
        ...game,
        streak: {
          ...game.streak,
          current,
          longest: Math.max(game.streak.longest, current),
          lastActiveDate: today,
        },
      },
    };
  }
  if (game.streak.freezes > 0) {
    return {
      spentFreeze: true,
      game: {
        ...game,
        streak: {
          ...game.streak,
          freezes: game.streak.freezes - 1,
          current: game.streak.current + 1,
          longest: Math.max(game.streak.longest, game.streak.current + 1),
          lastActiveDate: today,
        },
      },
    };
  }
  return {
    spentFreeze: false,
    game: {
      ...game,
      streak: {
        ...game.streak,
        current: 1,
        lastActiveDate: today,
      },
    },
  };
}

export function grantFreezeFromCurriculumDay(state: LearnerState): LearnerState {
  const toward = state.game.streak.curriculumDaysTowardFreeze + 1;
  if (toward >= 7 && state.game.streak.freezes < 2) {
    return {
      ...state,
      game: {
        ...state.game,
        streak: {
          ...state.game.streak,
          curriculumDaysTowardFreeze: toward - 7,
          freezes: state.game.streak.freezes + 1,
        },
      },
    };
  }
  return {
    ...state,
    game: {
      ...state.game,
      streak: { ...state.game.streak, curriculumDaysTowardFreeze: toward },
    },
  };
}
