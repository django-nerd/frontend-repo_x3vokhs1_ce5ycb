import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,rgba(236,72,153,0.25),rgba(59,130,246,0.22)_35%,rgba(16,185,129,0.2)_65%,transparent_85%)]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Colorful overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute -inset-x-10 -top-24 h-72 bg-gradient-to-r from-pink-500/30 via-amber-400/30 to-emerald-400/30 blur-2xl" />
        <div className="absolute -inset-x-10 -bottom-24 h-72 bg-gradient-to-r from-indigo-500/30 via-sky-400/30 to-cyan-400/30 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Now accepting new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-fuchsia-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
            Colorful, interactive products that feel alive
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-white/80"
        >
          I blend 3D, motion, and delightful UX to craft memorable experiences. Fast, accessible, and production‑ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#projects" className="relative inline-flex items-center rounded-md bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 px-5 py-2.5 text-black font-semibold transition-transform active:scale-[0.98]">
            <span className="absolute inset-0 rounded-md bg-white/30 opacity-0 transition-opacity hover:opacity-20" />
            View Projects
          </a>
          <a href="#skills" className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-white hover:bg-white/15 transition-colors">
            Core Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
}
