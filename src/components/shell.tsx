"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BarChart3, BookOpen, CalendarDays, FileText, Map, Settings, Wrench } from "lucide-react";
import { useBootcamp } from "@/lib/bootcamp/store";
import { GuardDialog } from "@/components/guard-dialog";

const NAV = [
  { href: "/", label: "Today", icon: CalendarDays, match: (p: string) => p === "/" },
  {
    href: "/path",
    label: "Path",
    icon: Map,
    match: (p: string) => p.startsWith("/path") || p.startsWith("/day") || p.startsWith("/session"),
  },
  { href: "/workshop", label: "Workshop", icon: Wrench, match: (p: string) => p.startsWith("/workshop") },
  { href: "/library", label: "Library", icon: BookOpen, match: (p: string) => p.startsWith("/library") },
  { href: "/progress", label: "Progress", icon: BarChart3, match: (p: string) => p.startsWith("/progress") },
  { href: "/settings", label: "Settings", icon: Settings, match: (p: string) => p.startsWith("/settings") },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const flags = useBootcamp((s) => s.flags);
  const hydrated = useBootcamp((s) => s.hydrated);
  const setHydrated = useBootcamp((s) => s.setHydrated);
  const immersive = pathname.startsWith("/session");

  useEffect(() => {
    if (!hydrated) {
      const unsub = useBootcamp.persist.onFinishHydration(() => setHydrated(true));
      if (useBootcamp.persist.hasHydrated()) setHydrated(true);
      return unsub;
    }
  }, [hydrated, setHydrated]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${16 * flags.textScale}px`;
    if (flags.contrast === "high") root.setAttribute("data-contrast", "high");
    else root.removeAttribute("data-contrast");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      if (mq.matches) root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [flags.textScale, flags.contrast]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div className="min-h-screen">
        <header className="sticky top-0 z-40 border-b border-line bg-sidebar text-sidebar-fg">
          <div className={`mx-auto flex items-center gap-3 px-4 py-3 ${immersive ? "max-w-none" : "max-w-6xl"}`}>
            <Link href="/" className="flex items-center gap-2 text-sidebar-fg no-underline">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-[12px] bg-accent text-accent-fg"
              >
                <FileText className="h-4 w-4" />
              </span>
              <span className="font-[family-name:var(--font-sans)] text-sm font-semibold tracking-wide">
                Oxygen Bootcamp
              </span>
            </Link>
            {immersive ? (
              <Link
                href="/"
                className="ml-auto rounded-full px-3 py-2 font-[family-name:var(--font-sans)] text-sm text-sidebar-muted no-underline hover:text-sidebar-fg"
              >
                Exit
              </Link>
            ) : (
              <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
                {NAV.map((item) => {
                  const active = item.match(pathname);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-3 py-2 font-[family-name:var(--font-sans)] text-sm no-underline ${
                        active
                          ? "bg-nav-active font-bold text-accent"
                          : "text-sidebar-muted hover:bg-nav-active hover:text-sidebar-fg"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>
        </header>
        <main id="main" className={immersive ? "p-0" : "mx-auto max-w-6xl px-4 py-6 pb-28 md:pb-10"}>
          {children}
        </main>
        {immersive ? null : (
          <nav
            aria-label="Primary"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-sidebar text-sidebar-fg md:hidden"
          >
            <ul className="mx-auto grid max-w-6xl grid-cols-6 p-0">
              {NAV.map((item) => {
                const active = item.match(pathname);
                const Icon = item.icon;
                return (
                  <li key={item.href} className="list-none">
                    <Link
                      href={item.href}
                      className={`flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 font-[family-name:var(--font-sans)] text-[11px] no-underline ${
                        active ? "font-bold text-accent" : "text-sidebar-muted"
                      }`}
                    >
                      <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
      <GuardDialog />
    </>
  );
}
