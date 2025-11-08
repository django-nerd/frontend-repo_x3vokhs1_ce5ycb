import { motion } from 'framer-motion';
import { Rocket, Cpu, Boxes, Gauge, Shield } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Engineering',
    points: [
      'React, performance optimization, and a11y-first UI',
      'Design systems, dark mode, and micro-interactions',
      'SSR/ISR, streaming, and edge rendering patterns',
    ],
    icon: Rocket,
  },
  {
    title: 'Backend & APIs',
    points: [
      'FastAPI, Node, and typed contracts with OpenAPI',
      'Auth, RBAC, rate limiting, and observability',
      'Async, queues, and scalable architectures',
    ],
    icon: Cpu,
  },
  {
    title: 'Data & Infra',
    points: [
      'Postgres, MongoDB, Redis, and Prisma/SQLAlchemy',
      'Cloud costs, caching, and CI/CD pipelines',
      'Testing culture and meaningful metrics',
    ],
    icon: Boxes,
  },
  {
    title: 'Quality & Velocity',
    points: [
      'DX tooling, linting, and type safety',
      'Storybook-driven UIs and visual regression',
      'Performance budgets and error budgets',
    ],
    icon: Gauge,
  },
];

function SkillCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
          <Icon size={18} />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc pl-5">
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
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Core Skills</h2>
          <p className="mt-2 text-white/70 max-w-2xl">The capabilities I bring to your team from day one.</p>
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
