import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
