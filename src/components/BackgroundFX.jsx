import { useEffect, useState } from 'react';

// Ambient colorful effects behind the content
export default function BackgroundFX() {
  // Subtle parallax for blobs
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#a855f71f,#06b6d41a_40%,transparent_70%)]" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-24 -left-20 h-[42rem] w-[42rem] rounded-full bg-fuchsia-500/30 blur-3xl mix-blend-screen"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />
      <div
        className="absolute -bottom-32 -right-24 h-[40rem] w-[40rem] rounded-full bg-cyan-400/30 blur-3xl mix-blend-screen"
        style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}
      />

      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Color ring vignette */}
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(168,85,247,0.2),transparent,rgba(6,182,212,0.2),transparent)] animate-[spin_30s_linear_infinite]" />
    </div>
  );
}
