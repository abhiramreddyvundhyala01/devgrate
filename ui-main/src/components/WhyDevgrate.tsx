import { Shield, Layers, Zap, Eye, RefreshCw, Handshake } from 'lucide-react';
import { Reveal, WordReveal } from './Reveal';

const reasons = [
  {
    title: 'Security from the start',
    description:
      'Security isn\u2019t something we add later. Every solution is designed with strong access controls, encryption, secure data handling, and clear audit trails built into its foundation.',
    icon: Shield,
    gradient: 'from-teal-500 to-teal-600',
    shadow: 'shadow-teal-200',
    glow: 'glow-teal',
  },
  {
    title: 'Designed to scale',
    description:
      'Our modular approach lets you start where it makes sense. Begin with a single automation, introduce intelligent AI agents, and expand into a connected platform as your needs grow \u2014 without starting over.',
    icon: Layers,
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-200',
    glow: 'glow-blue',
  },
  {
    title: 'Built for performance',
    description:
      'Fast systems create better experiences. We engineer for low latency, efficient resource usage, reliability, and consistent performance \u2014 even as workloads and users increase.',
    icon: Zap,
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-200',
    glow: 'glow-coral',
  },
  {
    title: 'Clear and transparent',
    description:
      'You should understand what your systems are doing. We provide visibility into AI decisions, automation workflows, logs, performance, and system health \u2014 so you stay informed and in control.',
    icon: Eye,
    gradient: 'from-teal-500 to-teal-600',
    shadow: 'shadow-teal-200',
    glow: 'glow-teal',
  },
  {
    title: 'Built to evolve',
    description:
      'Your business won\u2019t stand still, and neither should your technology. We design systems that can adapt to new workflows, data, integrations, and opportunities as your business evolves.',
    icon: RefreshCw,
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-200',
    glow: 'glow-blue',
  },
  {
    title: 'More than a technology vendor',
    description:
      'We approach every project as a partnership. Our focus isn\u2019t simply delivering software \u2014 it\u2019s building technology that creates measurable value for your business and continues delivering it over time.',
    icon: Handshake,
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-200',
    glow: 'glow-coral',
  },
];

export function WhyDevgrate() {
  return (
    <section
      id="why-devgrate"
      className="relative py-32 px-6"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-teal-400/40" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-teal-600">
              Why Devgrate
            </span>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="AI that doesn't just work." delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text font-medium">
                AI that works for your business.
              </span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Building an AI demo is easy. Building intelligent systems that are
              secure, reliable, scalable, and genuinely useful is different.
              Devgrate bridges that gap &mdash; turning AI and automation into
              systems your business can depend on every day.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 120}>
                <div className="product-card group relative bg-white rounded-3xl p-8 border border-stone-200/60 shadow-sm h-full overflow-hidden">
                  <div
                    className={`absolute -top-12 -right-12 w-40 h-40 ${reason.glow} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-5 shadow-md ${reason.shadow}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-medium text-stone-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
