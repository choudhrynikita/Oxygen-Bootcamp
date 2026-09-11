import type { SourceRef, YoutubeRef } from "@/lib/bootcamp/types";

export function SourceBox({ sources, youtube }: { sources: SourceRef[]; youtube: YoutubeRef[] }) {
  return (
    <aside className="rounded-xl border-l-[5px] border-teal bg-lab p-4 text-ink">
      <h2 className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">Source box</h2>
      <p className="m-0 text-sm text-muted">Official pages. Prefer the manual that matches your installed version.</p>
      <ul className="mt-2 mb-0 list-disc pl-5">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-accent-dark">
              {s.label}
            </a>
            <span className="text-muted"> · dated {s.dated}</span>
          </li>
        ))}
      </ul>
      {youtube.length > 0 ? (
        <div className="mt-3">
          <p className="mb-1 font-[family-name:var(--font-sans)] text-sm font-medium">Watch for</p>
          {youtube.map((v) => (
            <div key={v.id} className="mb-2">
              <p className="m-0 text-sm">
                {v.title} ·{" "}
                <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">
                  Open on YouTube
                </a>
              </p>
              <ul className="mt-1 mb-0">
                {v.watchFor.map((w) => (
                  <li key={w} className="text-sm">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </aside>
  );
}
