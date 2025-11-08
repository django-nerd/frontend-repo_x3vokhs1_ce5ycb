import { motion } from 'framer-motion';
import { Rocket, Cpu, Boxes, Gauge } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Engineering',
    points: [
      'React, performance optimization, and a11y-first UI',
      'Design systems, dark mode, and micro-interactions',
      'SSR/ISR, streaming, and edge rendering patterns',
    ],
    icon: Rocket,
    accent: 'from-pink-500 via-rose-400 to-amber-400',
  },
  {
    title: 'Backend & APIs',
    points: [
      'FastAPI, Node, and typed contracts with OpenAPI',
      'Auth, RBAC, rate limiting, and observability',
      'Async, queues, and scalable architectures',
    ],
    icon: Cpu,
    accent: 'from-indigo-500 via-sky-400 to-cyan-400',
  },
  {
    title: 'Data & Infra',
    points: [
      'Postgres, MongoDB, Redis, and Prisma/SQLAlchemy',
      'Cloud costs, caching, and CI/CD pipelines',
      'Testing culture and meaningful metrics',
    ],
    icon: Boxes,
    accent: 'from-emerald-500 via-lime-400 to-teal-400',
  },
  {
    title: 'Quality & Velocity',
    points: [
      'DX tooling, linting, and type safety',
      'Storybook-driven UIs and visual regression',
      'Performance budgets and error budgets',
    ],
    icon: Gauge,
    accent: 'from-fuchsia-500 via-violet-400 to-indigo-400',
  },
];

function SkillCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors"
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl opacity-25 blur-xl bg-gradient-to-r ${item.accent}`} />
      <div className="relative z-10 flex items-start gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black shadow-[0_0_0_2px_rgba(255,255,255,0.15)_inset]">
          <Icon size={18} />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <ul className="mt-3 space-y-2 text-white/90 text-sm list-disc pl-5">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Core Skills</h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">The capabilities I bring to your team from day one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <SkillCard key={s.title} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
