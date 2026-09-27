"use client";

import { profile, socials } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const interval = setTimeout(
      () => {
        if (!deleting && text.length < current.length) {
          setText(current.slice(0, text.length + 1));
          return;
        }
        if (deleting && text.length > 0) {
          setText(current.slice(0, text.length - 1));
          return;
        }
        if (!deleting) {
          setDeleting(true);
          return;
        }
        setDeleting(false);
        setIndex((prev: number) => prev + 1);
      },
      deleting ? 40 : 85
    );
    return () => clearTimeout(interval);
  }, [deleting, index, text, words]);

  return text;
}

const highlights = [
  { label: "Experience", value: "4+ yrs" },
  { label: "Focus", value: "Backend systems" },
  { label: "Based in", value: "Mumbai" }
];

export function Hero() {
  const typed = useTyping(profile.taglineWords);

  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] sm:h-[36rem] sm:w-[36rem]"
        />
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-40 h-56 w-56 rounded-full bg-indigo-500/25 blur-[90px] sm:h-72 sm:w-72"
        />
        <motion.div
          animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[-4rem] h-64 w-64 rounded-full bg-secondary/25 blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-6xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex max-w-4xl flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </div>

          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.32em]">
            Software Engineer / Backend
          </p>
          <h1 className="mt-3 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            Designing scalable APIs, automation pipelines, and data-driven architectures that stay fast in production.
          </p>

          <p className="mt-6 min-h-[2.5rem] text-sm text-primary sm:text-lg md:text-xl">
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-primary align-middle" />
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.18)]"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/25 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/25 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {highlights.map((item) => (
            <div key={item.label} className="px-5 py-4 text-left sm:text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
