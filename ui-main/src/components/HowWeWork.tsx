import { Reveal, WordReveal } from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    timeframe: 'Week 1\u20132',
    description:
      'We start by understanding your business, workflows, users, challenges, and goals. We identify where AI, automation, and software can create the greatest impact \u2014 based on real requirements, not assumptions.',
  },
  {
    number: '02',
    title: 'Design',
    timeframe: 'Week 2\u20134',
    description:
      'We transform those insights into a practical solution. We define the architecture, design workflows and interfaces, select the right technologies and AI models, and prototype the experience before moving into full implementation.',
  },
  {
    number: '03',
    title: 'Deploy',
    timeframe: 'Week 4\u20136',
    description:
      'We take the solution into production through controlled deployment, testing, monitoring, and validation. Security, reliability, performance, and human oversight are considered throughout \u2014 so the system is ready for real-world use.',
  },
  {
    number: '04',
    title: 'Evolve',
    timeframe: 'Ongoing',
    description:
      'Deployment is only the beginning. We monitor performance, analyze usage, improve workflows, refine AI behavior, and introduce new capabilities as your requirements grow \u2014 helping your technology become more valuable over time.',
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative py-32 px-6 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blue-400/40" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
              How We Work
            </span>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="From business challenge to" delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text font-medium">
                intelligent solution
              </span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              We keep the process clear, collaborative, and measurable. From
              understanding your operations to deploying and improving the final
              system, every stage has a purpose, visible progress, and defined
              outcomes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className="product-card group relative bg-white rounded-3xl p-8 border border-stone-200/60 shadow-sm h-full overflow-hidden">
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 ${
                    i % 2 === 0 ? 'glow-teal' : 'glow-blue'
                  } rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
                />
                <div className="relative">
                  {/* Step number badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-5 shadow-md">
                    <span className="text-white font-display text-lg font-medium">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-stone-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Connecting line between steps — desktop only */}
        <div className="hidden md:block mt-8">
          <div className="gradient-divider" />
        </div>
      </div>
    </section>
  );
}
