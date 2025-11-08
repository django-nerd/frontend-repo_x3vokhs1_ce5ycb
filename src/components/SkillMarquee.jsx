import { motion } from 'framer-motion';

const items = [
  'React',
  'TypeScript',
  'FastAPI',
  'Node.js',
  'Design Systems',
  'Accessibility',
  'Postgres',
  'MongoDB',
  'Redis',
  'Edge/SSR',
  'Testing',
  'CI/CD',
];

function Row({ reverse = false, speed = 35 }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex min-w-max gap-3 py-2"
        animate={{ x: reverse ? [0, '50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' }}
      >
        {list.map((item, idx) => (
          <span
            key={idx + item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-indigo-400/20 px-3 py-1 text-xs text-white/90 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillMarquee() {
  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <Row />
          <Row reverse speed={40} />
        </div>
      </div>
    </section>
  );
}
