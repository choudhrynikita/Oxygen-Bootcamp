"use client";

/**
 * Guest side of the grok-web ↔ sandbox preview postMessage bridge.
 * Noops when the app is not embedded.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CHANNEL = "grok-preview-bridge";
const VERSION = 1;
const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";

function isSafeBridgePath(path: string): boolean {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return false;
  }
  try {
    const resolved = new URL(path, "https://preview.invalid");
    return resolved.origin === "https://preview.invalid";
  } catch {
    return false;
  }
}

function isGrokEmbedderOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    const host = url.hostname.toLowerCase();
    if (host === "grok.com" || host.endsWith(".grok.com")) return true;
    if (host === "localhost" || host === "127.0.0.1") return true;
    return false;
  } catch {
    return false;
  }
}

function resolveParentOrigin(): string | null {
  if (typeof window === "undefined") return null;
  if (window.parent === window) return null;
  const ancestor =
    typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0
      ? location.ancestorOrigins[0]
      : "";
  for (const candidate of [document.referrer, ancestor].filter(Boolean)) {
    try {
      const origin = new URL(candidate).origin;
      if (isGrokEmbedderOrigin(origin)) return origin;
    } catch {
      /* skip */
    }
  }
  return null;
}

export function PreviewHostBridge() {
  const router = useRouter();

  useEffect(() => {
    const parentOrigin = resolveParentOrigin();
    if (parentOrigin === null) return;

    const post = (message: object) => {
      window.parent.postMessage(message, parentOrigin);
    };

    const reportLocation = () => {
      post({
        channel: CHANNEL,
        version: VERSION,
        type: "location",
        path: window.location.pathname || "/",
        search: window.location.search,
        hash: window.location.hash,
      });
    };

    const announce = () => {
      reportLocation();
      post({
        channel: CHANNEL,
        version: VERSION,
        type: "routes",
        paths: ["/", "/path", "/workshop", "/library", "/progress", "/settings", "/practice"],
      });
      post({ channel: CHANNEL, version: VERSION, type: "ready" });
    };

    try {
      const current = window.history.state;
      const alreadyTagged =
        current !== null && typeof current === "object" && ROOT_STATE_KEY in current;
      if (!alreadyTagged) {
        const isRoot = window.history.length <= 1;
        const marked =
          current && typeof current === "object"
            ? { ...current, [ROOT_STATE_KEY]: isRoot }
            : { [ROOT_STATE_KEY]: isRoot };
        window.history.replaceState(marked, "", window.location.href);
      }
    } catch {
      /* ignore */
    }

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== parentOrigin) return;
      const data = event.data;
      if (!data || data.channel !== CHANNEL) return;
      if (data.type === "hello") announce();
      if (data.type === "navigate" && typeof data.path === "string" && isSafeBridgePath(data.path)) {
        router.push(data.path);
        queueMicrotask(reportLocation);
      }
      if (data.type === "history" && (data.delta === -1 || data.delta === 1)) {
        if (data.delta === -1) router.back();
        else router.forward();
      }
    };

    window.addEventListener("message", onMessage);
    announce();
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  return null;
}
