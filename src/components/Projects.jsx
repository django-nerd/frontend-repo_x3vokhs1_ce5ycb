import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'Docs, whiteboard, and video with CRDT-based sync, optimistic UI, and offline support. Built for teams that ship.',
    tags: ['React', 'CRDT', 'WebRTC', 'Tailwind'],
    link: '#',
    highlight: true,
  },
  {
    title: 'AI‑assisted Code Review',
    description:
      'Inline suggestions, pattern detection, and risk scoring that scales code quality across orgs.',
    tags: ['FastAPI', 'Python', 'OpenAI', 'Postgres'],
    link: '#',
  },
  {
    title: 'Edge‑first Ecommerce',
    description:
      'Sub‑100ms product listing with streaming SSR, search ranking, and analytics.',
    tags: ['React', 'Edge', 'Redis', 'Vercel'],
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative block rounded-xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors ${
        project.highlight ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 group-hover:text-white">
          <ExternalLink size={18} />
        </span>
      </div>
      <p className="mt-3 text-white/80">{project.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/80"
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
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-cyan-400/10" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Work that demonstrates impact, craft, and the skills recruiters care about.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
            Get the full case study
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
