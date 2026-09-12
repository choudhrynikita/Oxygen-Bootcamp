import Link from "next/link";

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl">Library</h1>
      <p className="text-muted">Official manuals. We link. We do not paste vendor books.</p>

      <ul className="mt-6 list-none space-y-3 p-0">
        <li>
          <a href="https://www.oxygenxml.com/doc/ug-editor/">Oxygen XML Editor User Guide 28.1</a>
        </li>
        <li>
          <a href="https://www.oxygenxml.com/videos.html">Official Oxygen videos</a>
        </li>
        <li>
          <a href="https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/overview">
            AEM Guides overview
          </a>
          <span className="block font-[family-name:var(--font-sans)] text-sm text-muted">
            Adobe waits until week 9.
          </span>
        </li>
        <li>
          <Link href="/practice">Practice files</Link>
        </li>
      </ul>

      <details className="mt-8">
        <summary className="cursor-pointer font-[family-name:var(--font-sans)] text-sm font-bold">More links</summary>
        <ul className="mt-3">
          <li>
            <a href="/legacy/index.html">v1 classroom</a>
          </li>
          <li>
            <a href="https://www.oxygenxml.com/documentation.html">All Oxygen manuals</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@oxygenxml">YouTube @oxygenxml</a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/authoring/quick-start">
              AEM Sites authoring quick start
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
}
