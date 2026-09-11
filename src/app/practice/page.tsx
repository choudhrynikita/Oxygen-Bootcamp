export default function PracticePage() {
  return (
    <div>
      <h1 className="text-3xl">Practice files</h1>
      <p>Open these in Oxygen except anything under a broken pack — those are meant to fail completeness.</p>
      <ul className="mt-4 space-y-3">
        <li className="rounded-xl border border-line bg-card p-4">
          <strong>flower-docs</strong>
          <p className="mb-1 text-sm">Week 1–2 pack. Open flowers.ditamap in DITA Maps Manager.</p>
          <a href="/samples/flower-docs/flowers.ditamap">flowers.ditamap</a>
        </li>
        <li className="rounded-xl border border-line bg-card p-4">
          <strong>kitepump-dita</strong>
          <p className="mb-1 text-sm">Weeks 3–7. A small product handbook you extend with keys and reuse.</p>
          <a href="/samples/kitepump-dita/kitepump.ditamap">kitepump.ditamap</a>
        </li>
        <li className="rounded-xl border border-line bg-card p-4">
          <strong>kitepump-broken-map</strong>
          <p className="mb-1 text-sm">Week 8 clinic. Completeness should fail until you repair it.</p>
          <a href="/samples/kitepump-broken-map/README.md">README</a>
        </li>
        <li className="rounded-xl border border-line bg-card p-4">
          <strong>aem-author-field-log</strong>
          <p className="mb-1 text-sm">Weeks 9–11. Labeled mocks and a field log. Not a live AEM instance.</p>
          <a href="/samples/aem-author-field-log/README.md">README</a>
        </li>
        <li className="rounded-xl border border-line bg-card p-4">
          <strong>guides-oxygen-handoff</strong>
          <p className="mb-1 text-sm">Week 12. Who edits where.</p>
          <a href="/samples/guides-oxygen-handoff/README.md">README</a>
        </li>
      </ul>
    </div>
  );
}
