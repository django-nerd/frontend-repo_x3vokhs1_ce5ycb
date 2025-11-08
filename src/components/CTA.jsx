import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-amber-400/20 to-cyan-400/20 p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-amber-400 text-black">
              <Sparkles size={18} />
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight">Ready to level up your product?</h3>
            <p className="mt-2 text-white/85">
              I bring colorful energy and calm reliability. Let’s collaborate on something remarkable.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="relative inline-flex items-center rounded-md bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 px-5 py-2.5 text-black font-semibold">
                <span className="absolute inset-0 rounded-md bg-white/30 opacity-0 transition-opacity hover:opacity-20" />
                Start a conversation
              </a>
              <a href="#projects" className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-5 py-2.5 text-white hover:bg-white/15 transition-colors">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
