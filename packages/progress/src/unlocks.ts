import type { DayRecord, DayStatus, LearnerState } from "./schema";
import { emptyDay } from "./schema";

export const BOSS_DAYS = [7, 14, 21, 28, 35, 42, 49, 55, 62, 69, 75, 82];
export const FRIDAY_DAYS = [6, 13, 20, 27, 34, 41, 48, 54, 61, 68, 74, 81];

const OPEN_STATUSES: DayStatus[] = [
  "available",
  "started",
  "lab_done",
  "checked",
  "complete",
];

export function isOpenStatus(status: DayStatus | undefined): boolean {
  return !!status && OPEN_STATUSES.includes(status);
}

export function isProgressed(status: DayStatus | undefined): boolean {
  return status === "lab_done" || status === "checked" || status === "complete";
}

export function dayRecord(state: LearnerState, day: number): DayRecord {
  return state.days[String(day)] ?? emptyDay();
}

/** Next week still unlocks if the Friday lab is done, even when the boss failed. */
export function canUnlock(state: LearnerState, day: number): boolean {
  if (day <= 1) return true;
  const prev = dayRecord(state, day - 1);
  if (isProgressed(prev.status)) return true;
  if (BOSS_DAYS.includes(day - 1)) {
    const friday = FRIDAY_DAYS.find((f) => f === day - 2) ?? day - 2;
    return isProgressed(dayRecord(state, friday).status);
  }
  return false;
}

export function syncLocks(state: LearnerState, totalDays = 90): LearnerState {
  const days = { ...state.days };
  for (let n = 1; n <= totalDays; n++) {
    const key = String(n);
    const rec = days[key] ?? emptyDay();
    if (n === 1 && rec.status === "locked") {
      days[key] = { ...rec, status: "available" };
      continue;
    }
    if (rec.status === "locked" && canUnlock({ ...state, days }, n)) {
      days[key] = { ...rec, status: "available" };
    }
  }
  return { ...state, days };
}

export function startDay(state: LearnerState, day: number, now = new Date()): LearnerState {
  if (!canUnlock(state, day) && day !== 1) return state;
  const key = String(day);
  const rec = dayRecord(state, day);
  if (rec.status === "complete" || rec.status === "lab_done" || rec.status === "checked") {
    return syncLocks({
      ...state,
      days: {
        ...state.days,
        [key]: { ...rec, status: rec.status, startedAt: rec.startedAt ?? now.toISOString() },
      },
    });
  }
  return syncLocks({
    ...state,
    days: {
      ...state.days,
      [key]: {
        ...rec,
        status: rec.status === "locked" ? "started" : rec.status === "available" ? "started" : rec.status,
        startedAt: rec.startedAt ?? now.toISOString(),
      },
    },
  });
}
