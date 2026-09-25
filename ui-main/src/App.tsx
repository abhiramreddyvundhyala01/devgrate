import { useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { WhatWeDo } from '@/components/WhatWeDo';
import { Products } from '@/components/Products';
import { WhyDevgrate } from '@/components/WhyDevgrate';
import { HowWeWork } from '@/components/HowWeWork';
import { Founders } from '@/components/Founders';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  // Auto-scroll to section based on URL path (e.g. /founders → scroll to #founders)
  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (path) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', '/');
        }
      }, 300);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#faf9f7] text-stone-800 antialiased overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Products />
        <WhyDevgrate />
        <HowWeWork />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
