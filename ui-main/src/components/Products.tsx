import { Reveal, WordReveal } from './Reveal';

export function Products() {
  return (
    <section id="products" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blue-400/40" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
              Our Products
            </span>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="Products we've built" delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text font-medium">in-house</span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              We don't just consult — we build. Each product below solves one
              specific problem, built by us, used by real businesses.
            </p>
          </Reveal>
        </div>

        {/* Empty product space with centered message */}
        <Reveal variant="soft" delay={200}>
          <div className="flex items-center justify-center min-h-[280px] rounded-3xl border border-dashed border-stone-200/80 bg-white/40 backdrop-blur-sm">
            <p className="text-center text-stone-400 text-lg font-display font-light italic">
              More in the works — ask us what's next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
