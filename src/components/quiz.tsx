"use client";

import { useMemo, useState } from "react";
import type { QuizItem } from "@/lib/bootcamp/types";
import { useBootcamp } from "@/lib/bootcamp/store";
import type { SkillId } from "@progress/schema";

export function Quiz({
  day,
  items,
  skills,
}: {
  day: number;
  items: QuizItem[];
  skills: SkillId[];
}) {
  const completeQuiz = useBootcamp((s) => s.completeQuiz);
  const saved = useBootcamp((s) => s.days[String(day)]?.quizScore);
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(typeof saved === "number");

  const score = useMemo(() => {
    if (!items.length) return 0;
    let right = 0;
    items.forEach((q, i) => {
      if (picks[i] === q.answer) right += 1;
    });
    return Math.round((right / items.length) * 100);
  }, [items, picks]);

  function submit() {
    setSubmitted(true);
    completeQuiz(day, score, skills);
  }

  return (
    <section className="mt-8 border-t border-dashed border-line pt-4" aria-labelledby="quiz-h">
      <h2 id="quiz-h" className="font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
        Check
      </h2>
      <p className="text-sm text-muted">Not restated from the lesson. Read the options.</p>
      {items.map((q, i) => (
        <fieldset key={q.q} className="mt-4">
          <legend className="font-semibold">{q.q}</legend>
          <div className="mt-2 flex flex-col gap-2">
            {q.options.map((opt, j) => {
              const picked = picks[i] === j;
              const show = submitted;
              const correct = j === q.answer;
              return (
                <button
                  key={`${j}-${opt}`}
                  type="button"
                  disabled={submitted}
                  onClick={() => setPicks((p) => ({ ...p, [i]: j }))}
                  className={`rounded-[10px] border px-3 py-2 text-left ${
                    show && correct
                      ? "border-good bg-good-bg"
                      : show && picked && !correct
                        ? "border-warn bg-warn-bg"
                        : picked
                          ? "border-accent bg-pick"
                          : "border-line bg-card"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted ? <p className="mt-2 text-sm text-muted">{q.why}</p> : null}
        </fieldset>
      ))}
      {!submitted ? (
        <button
          type="button"
          className="mt-4 rounded-full bg-navy px-4 py-2 font-[family-name:var(--font-sans)] text-sm text-accent-fg"
          data-testid="quiz-submit"
          onClick={submit}
          disabled={Object.keys(picks).length < items.length}
        >
          Score check
        </button>
      ) : (
        <p className="mt-4 font-[family-name:var(--font-sans)] text-sm">
          Score {typeof saved === "number" ? saved : score}%. 70% required for the check. You can retry the day from
          Settings if you need a clean quiz.
        </p>
      )}
    </section>
  );
}
