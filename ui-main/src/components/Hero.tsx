import { ArrowDown } from 'lucide-react';
import { WordReveal, Reveal } from './Reveal';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6"
    >
      {/* Background gradient washes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-stone-50 to-teal-50/30" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-teal rounded-full float-slow" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] glow-coral rounded-full float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] glow-blue rounded-full float-slow" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <Reveal variant="soft" delay={100}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-stone-200/80 text-sm font-medium text-stone-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            End-to-end AI systems for growing businesses
          </span>
        </Reveal>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-stone-800 tracking-tight mb-6">
          <WordReveal text="AI that works while" delay={200} />
          <br />
          <Reveal variant="soft" delay={600} as="span">
            <span className="gradient-text font-medium">you don't have to</span>
          </Reveal>
        </h1>

        <Reveal variant="soft" delay={1400}>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            We design automations, AI support systems, and custom software that
            quietly take work off your plate — so your team can focus on what
            actually moves the business.
          </p>
        </Reveal>

        <Reveal variant="soft" delay={1700}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); window.history.replaceState(null, '', window.location.pathname); }}
              className="btn-primary px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium text-base shadow-md"
            >
              Book a call
            </a>
            <a
              href="/products"
              onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); window.history.replaceState(null, '', window.location.pathname); }}
              className="px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200 text-stone-700 font-medium text-base hover:bg-white hover:border-stone-300 transition-all duration-300"
            >
              See what we build
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-stone-400 font-light">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Built to scale
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Production-grade AI
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Built to evolve
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-stone-400 font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-stone-400 scroll-indicator-dot" />
      </div>
    </section>
  );
}
