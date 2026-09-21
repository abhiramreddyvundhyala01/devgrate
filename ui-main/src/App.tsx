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
  return (
    <div className="relative min-h-screen bg-[#faf9f7] text-stone-800 antialiased">
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
