import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.25),rgba(6,182,212,0.15)_40%,transparent_70%)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight"
        >
          Crafting delightful, scalable experiences for the web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-white/80"
        >
          Full‑stack engineer focused on impact: shipping polished products, performance, and DX. I turn complex ideas into intuitive interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#projects" className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2.5 text-black font-medium hover:opacity-95 transition-opacity">
            View Projects
          </a>
          <a href="#skills" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition-colors">
            Core Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
}
