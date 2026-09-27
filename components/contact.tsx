"use client";

import { socials } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { SectionShell } from "./section-shell";

export function Contact() {
  return (
    <SectionShell id="contact" title="Contact" subtitle="Tell me about your team, product, or next big challenge.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ y: -2 }}
              type="button"
              className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
            >
              Send Message
            </motion.button>
          </div>
        </form>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-slate-300">Prefer direct reach out? Connect via social channels.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">{socials.email}</p>
          <p className="mt-1 text-sm text-slate-400">{socials.phone}</p>
        </div>
      </div>
    </SectionShell>
  );
}
