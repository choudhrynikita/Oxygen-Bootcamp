import type { ReactNode } from "react";

export function UiFigure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-[10px] border border-dark-line bg-chrome font-[family-name:var(--font-sans)] text-xs">
        {children}
      </div>
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export function WorkbenchMock() {
  return (
    <UiFigure caption="Labeled mock of the Oxygen workbench — not an official screenshot. Menu path: Window docks these views. Verify labels in your version.">
      <div className="flex items-center gap-2 bg-chrome-bar px-2.5 py-1.5 text-chrome-fg">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        Title bar · project name · license edition
      </div>
      <div className="bg-chrome-menu px-2.5 py-1 text-chrome-muted">
        File Edit Find Document DITA Project Options Tools Window Help
      </div>
      <div className="grid min-h-[200px] grid-cols-1 md:grid-cols-[180px_1fr_160px]">
        <div className="border-r border-chrome-rule bg-chrome-rail p-2 text-ink">
          <strong>Left rail</strong>
          <br />
          Project
          <br />
          DITA Maps Manager
          <br />
          Open/Find Resource
        </div>
        <div className="bg-card p-4 text-ink">
          <p className="m-0 font-semibold">Center: editor stack</p>
          <p className="m-0">Breadcrumb: map / topic / conbody / p</p>
          <p className="m-0 bg-pick outline outline-2 outline-dashed outline-accent outline-offset-2">
            Author page (CSS)
          </p>
          <p className="m-0">Bottom tabs: Text · Grid · Author</p>
        </div>
        <div className="bg-chrome-rail p-2 text-ink">
          <strong>Right rail</strong>
          <br />
          Outline
          <br />
          Attributes
          <br />
          Review
          <br />
          Transformation
        </div>
      </div>
    </UiFigure>
  );
}

export function DualSurfaceMock() {
  return (
    <UiFigure caption="Labeled mock — not a screenshot. Left is Oxygen Maps Manager. Right is the AEM Sites console. They do not share a toolbar. Verify labels in your version.">
      <div className="grid min-h-[180px] grid-cols-1 md:grid-cols-2">
        <div className="border-b border-chrome-rule md:border-r md:border-b-0">
          <div className="bg-chrome-bar px-2.5 py-1.5 text-chrome-fg">Oxygen XML Editor · Maps Manager</div>
          <div className="bg-chrome-rail p-3 text-ink">
            <p className="m-0 font-semibold">DITA Maps Manager</p>
            <p className="m-0">flowers.ditamap (root map)</p>
            <p className="m-0 pl-3">hello-concept.dita</p>
            <p className="m-0 pl-3">change-water.dita</p>
            <p className="mt-2 mb-0 text-[11px] text-muted">Menu path: Window → Show View → DITA Maps Manager</p>
          </div>
        </div>
        <div>
          <div className="bg-chrome-bar px-2.5 py-1.5 text-chrome-fg">AEM · Sites</div>
          <div className="bg-chrome-rail p-3 text-ink">
            <p className="m-0 font-semibold">Sites console</p>
            <p className="m-0">Create → Page</p>
            <p className="m-0">Quick Publish</p>
            <p className="mt-2 mb-0 text-[11px] text-muted">
              Menu path: Adobe Experience Manager → Navigation → Sites
            </p>
          </div>
        </div>
      </div>
    </UiFigure>
  );
}
