import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/20 to-indigo-500/20 p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
              <Sparkles size={18} />
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Ready to level up your product?</h3>
            <p className="mt-2 text-white/80">
              I help teams ship faster with a high bar for UX and reliability. Let’s collaborate on something remarkable.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2.5 text-black font-medium hover:opacity-95 transition-opacity">
                Start a conversation
              </a>
              <a href="#projects" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition-colors">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
