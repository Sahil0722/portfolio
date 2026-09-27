"use client";

import { ProjectItem, projects } from "@/data/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useState } from "react";
import { SectionShell } from "./section-shell";

export function Projects() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <SectionShell id="projects" title="Projects" subtitle="Selected builds demonstrating architecture, reliability, and user impact.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.button
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(project)}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 text-left"
          >
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-end overflow-y-auto bg-slate-950/75 p-3 backdrop-blur-sm sm:place-items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl border border-white/10 bg-surface p-5 sm:rounded-3xl sm:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-2xl font-semibold text-white">{selected.name}</h4>
                  <p className="mt-2 text-slate-300">{selected.details}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl border border-white/15 p-2 text-slate-300 transition hover:text-white"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {selected.stack.map((tech: string) => (
                  <span key={tech} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
