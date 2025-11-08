import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundFX from './components/BackgroundFX';
import SkillMarquee from './components/SkillMarquee';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-white/60">
      <p>
        © {new Date().getFullYear()} Your Name — Built with care.
        <span className="ml-2">Let’s create something extraordinary.</span>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-fuchsia-500/30 selection:text-white">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <SkillMarquee />
        <Projects />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
