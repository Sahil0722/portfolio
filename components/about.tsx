"use client";

import { journey, profile, skillPills } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { SectionShell } from "./section-shell";

export function About() {
  return (
    <SectionShell id="about" title="About Me" subtitle={profile.intro}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Core Strengths</h3>
          <div className="flex flex-wrap gap-3">
            {skillPills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Journey</h3>
          <div className="space-y-4">
            {journey.map((item) => (
              <motion.div
                key={item.year}
                whileHover={{ scale: 1.01 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <p className="text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
