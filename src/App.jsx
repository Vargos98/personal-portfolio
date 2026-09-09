import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Work from '@/components/sections/Work';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Preloader from '@/components/ui/Preloader';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="min-h-screen bg-ink">
      {booting ? (
        <Preloader
          onReveal={() => setHeroReady(true)}
          onComplete={() => setBooting(false)}
        />
      ) : null}
      <Navbar />
      <main>
        <Hero ready={heroReady} />
        <Projects />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
