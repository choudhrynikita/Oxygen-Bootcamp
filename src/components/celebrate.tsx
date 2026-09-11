"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBootcamp } from "@/lib/bootcamp/store";

export function Celebrate({ show, label }: { show: boolean; label: string }) {
  const flag = useBootcamp((s) => s.flags.reducedMotion);
  const system = useReducedMotion();
  const reduced = flag || system;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!show) return;
    setOpen(true);
    const t = window.setTimeout(() => setOpen(false), reduced ? 0 : 180);
    return () => window.clearTimeout(t);
  }, [show, reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.p
          role="status"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-2 font-[family-name:var(--font-sans)] text-sm text-good"
        >
          {label}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}
