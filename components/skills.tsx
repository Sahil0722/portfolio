"use client";

import { skillCategories } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { SectionShell } from "./section-shell";

export function Skills() {
  return (
    <SectionShell id="skills" title="Skills" subtitle="A practical mix of backend engineering, product development, and platform reliability.">
      <div className="space-y-8">
        {skillCategories.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="mb-5 text-lg font-semibold text-white">{group.category}</h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-slate-400">{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
