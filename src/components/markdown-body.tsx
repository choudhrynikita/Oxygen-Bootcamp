import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DualSurfaceMock, WorkbenchMock } from "@/components/ui-figure";

export function MarkdownBody({ source }: { source: string }) {
  return (
    <div className="lesson-prose max-w-[70ch]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-8 mb-2 font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="my-3">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-accent-dark underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-track px-1 py-0.5 font-[family-name:var(--font-mono)] text-sm">
              {children}
            </code>
          ),
          ul: ({ children }) => <ul className="my-3 list-disc pl-5">{children}</ul>,
          ol: ({ children }) => <ol className="my-3 list-decimal pl-5">{children}</ol>,
          li: ({ children }) => <li className="my-1">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          pre: ({ children }) => <pre className="xml-scroll rounded-md bg-track p-3 text-sm">{children}</pre>,
        }}
      >
        {source}
      </ReactMarkdown>
      {source.includes("AEM Sites console") ? (
        <DualSurfaceMock />
      ) : source.includes("Labeled mock") || source.includes("wireframe") ? (
        <WorkbenchMock />
      ) : null}
    </div>
  );
}
