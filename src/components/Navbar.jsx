import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">YourName.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="Email"
              href="#contact"
              className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 px-3 text-sm font-medium text-black hover:opacity-95 transition-opacity"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
