"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-x-hidden bg-bg text-slate-100"
    >
      {children}
    </motion.main>
  );
}
