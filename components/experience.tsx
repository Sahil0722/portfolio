"use client";

import { experiences } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionShell } from "./section-shell";

export function Experience() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <SectionShell id="experience" title="Experience" subtitle="Impact-focused work across backend systems and product engineering.">
      <div className="relative ml-2 border-l border-white/15 pl-6 sm:ml-4 sm:pl-8">
        {experiences.map((item, idx) => {
          const open = active === idx;
          return (
            <motion.article
              key={`${item.company}-${item.role}-${item.duration}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:mb-8 sm:p-5"
              onMouseEnter={() => setActive(idx)}
              onClick={() => setActive(open ? null : idx)}
            >
              <span className="absolute -left-[2.1rem] top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(138,180,255,0.9)]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-slate-300">{item.duration}</p>
              </div>
              <p className="mt-1 text-sm text-primary">{item.company}</p>

              <motion.ul
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="mt-4 list-disc space-y-2 overflow-hidden pl-5 text-sm text-slate-300"
              >
                {item.achievements.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </motion.ul>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
