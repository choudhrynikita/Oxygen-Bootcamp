import Link from "next/link";

export default function LibraryPage() {
  return (
    <div>
      <h1 className="text-3xl">Library</h1>
      <p>Official manuals, the v1 classroom, and sample packs. We link. We do not paste vendor books.</p>

      <section className="mt-6 rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">v1 classroom</h2>
        <p>
          The original 8-track static LMS. Progress there used a different key. Import it from Settings if you already
          ticked lessons. Import awards the Legacy classroom badge only — it does not invent 90-day completions.
        </p>
        <p>
          <a href="/legacy/index.html">Open v1 classroom</a>
        </p>
      </section>

      <section className="mt-4 rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Oxygen (Syncro Soft)</h2>
        <ul>
          <li>
            <a href="https://www.oxygenxml.com/doc/ug-editor/">Oxygen XML Editor User Guide 28.1</a>
          </li>
          <li>
            <a href="https://www.oxygenxml.com/documentation.html">All user manuals</a>
          </li>
          <li>
            <a href="https://www.oxygenxml.com/videos.html">Official video catalog</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@oxygenxml">YouTube @oxygenxml</a>
          </li>
          <li>
            <a href="https://blog.oxygenxml.com/topics/learnDita.html">learnDita blog</a>
          </li>
        </ul>
      </section>

      <section className="mt-4 rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">AEM</h2>
        <ul>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/quick-start">
              Cloud Service authoring quick start
            </a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/overview">
              AEM Guides overview
            </a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/install-conf-guide/editor-configs/editor-cloud-settings/conf-edit-in-oxygen">
              Configure Edit in Oxygen
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-4 rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">In this repo</h2>
        <ul>
          <li>
            <Link href="/practice">Practice files</Link>
          </li>
          <li>
            <a href="/docs/day1-slides.html">Day 1 slides</a>
          </li>
          <li>
            <a href="/docs/visual-guide.html">Visual UI atlas</a>
          </li>
          <li>
            <a href="/docs/official-references.html">Official references (static)</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
