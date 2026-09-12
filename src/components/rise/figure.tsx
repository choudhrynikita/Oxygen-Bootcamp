"use client";

export function LeadLine({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="mt-8 mb-3 font-[family-name:var(--font-sans)] text-base font-bold text-navy">{text}</p>;
}

export function CourseFigure({
  src,
  alt,
  caption,
  credit = "Oxygen XML Editor User Guide, Syncro Soft",
  href,
}: {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  href?: string;
}) {
  return (
    <figure className="rise-enter my-6">
      <div className="overflow-hidden rounded-xl border border-line bg-card shadow-[var(--shadow-soft)]">
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-ink">{caption}</figcaption> : null}
      {credit ? (
        <p className="mt-1 mb-0 font-[family-name:var(--font-sans)] text-xs text-muted">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {credit}
            </a>
          ) : (
            credit
          )}
        </p>
      ) : null}
    </figure>
  );
}
