"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Portfolio</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}
