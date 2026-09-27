import { profile, socials } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:px-8">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with detail.</p>
        <div className="flex gap-4">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
