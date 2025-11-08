import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'Docs, whiteboard, and video with CRDT-based sync, optimistic UI, and offline support. Built for teams that ship.',
    tags: ['React', 'CRDT', 'WebRTC', 'Tailwind'],
    link: '#',
    accent: 'from-pink-500 via-rose-400 to-amber-400',
    highlight: true,
  },
  {
    title: 'AI‑assisted Code Review',
    description:
      'Inline suggestions, pattern detection, and risk scoring that scales code quality across orgs.',
    tags: ['FastAPI', 'Python', 'OpenAI', 'Postgres'],
    link: '#',
    accent: 'from-indigo-500 via-sky-400 to-cyan-400',
  },
  {
    title: 'Edge‑first Ecommerce',
    description:
      'Sub‑100ms product listing with streaming SSR, search ranking, and analytics.',
    tags: ['React', 'Edge', 'Redis', 'Vercel'],
    link: '#',
    accent: 'from-emerald-500 via-lime-400 to-teal-400',
  },
];

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative block rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors ${
        project.highlight ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl opacity-30 blur-xl bg-gradient-to-r ${project.accent}`} />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
          {project.highlight && (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-amber-400 to-pink-500 text-black">
              <Star size={14} />
            </span>
          )}
          {project.title}
        </h3>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 group-hover:text-white">
          <ExternalLink size={18} />
        </span>
      </div>
      <p className="relative z-10 mt-3 text-white/85">{project.description}</p>
      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/90"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/15 to-cyan-400/15" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Selected Projects</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Bright, energetic work that balances creative flair with rock‑solid engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
