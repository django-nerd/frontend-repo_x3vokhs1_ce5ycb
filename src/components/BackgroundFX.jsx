import { useEffect, useState } from 'react';

// Ambient, colorful, lively background effects
export default function BackgroundFX() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep colorful base */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_0%,rgba(236,72,153,0.25),rgba(59,130,246,0.2)_35%,rgba(16,185,129,0.18)_60%,transparent_80%)]" />

      {/* Aurora blobs with parallax */}
      <div
        className="absolute -top-40 -left-28 h-[48rem] w-[48rem] rounded-full bg-fuchsia-500/35 blur-3xl mix-blend-screen"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />
      <div
        className="absolute -bottom-40 -right-36 h-[46rem] w-[46rem] rounded-full bg-cyan-400/35 blur-3xl mix-blend-screen"
        style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}
      />
      <div
        className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-violet-500/30 blur-3xl mix-blend-screen"
        style={{ transform: `translate(${offset.x * 0.6}px, ${-offset.y * 0.6}px)` }}
      />

      {/* Soft rainbow beams */}
      <div className="absolute inset-x-0 top-[-10%] h-[60%] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute left-1/4 top-0 h-full w-40 rotate-12 bg-gradient-to-b from-pink-500/40 via-amber-400/40 to-emerald-400/40 blur-2xl" />
        <div className="absolute right-1/4 top-0 h-full w-40 -rotate-12 bg-gradient-to-b from-indigo-500/40 via-sky-400/40 to-cyan-400/40 blur-2xl" />
      </div>

      {/* Starfield dots */}
      <svg className="absolute inset-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dot" cx="50%" cy="50%" r="0.5">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={Math.random() * 1600} cy={Math.random() * 1000} r={Math.random() * 1.6 + 0.4} fill="url(#dot)" />
        ))}
      </svg>

      {/* Rotating conic halo */}
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(236,72,153,0.25),rgba(59,130,246,0.25),rgba(16,185,129,0.25),rgba(244,63,94,0.25),rgba(236,72,153,0.25))] opacity-40 animate-[spin_40s_linear_infinite]" />
    </div>
  );
}
