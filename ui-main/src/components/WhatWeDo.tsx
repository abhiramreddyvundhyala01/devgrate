import { Workflow, Headphones, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { Reveal, WordReveal } from './Reveal';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-32 px-6">
      {/* Connecting gradient line from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-teal-400/40" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-teal-600">
              What We Do
            </span>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="Three ways we save" delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text-warm font-medium">you time</span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Most businesses lose time in two places: repetitive work and slow
              customer response. We fix both.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Automations */}
          <Reveal delay={100}>
            <div className="product-card group relative bg-gradient-to-br from-white to-stone-50/80 rounded-3xl p-10 border border-stone-200/60 shadow-sm h-full">
              <div className="absolute top-6 right-6 w-28 h-28 glow-teal rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-md shadow-teal-200">
                  <Workflow className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-medium text-stone-800 mb-3">
                  AI Automations
                </h3>
                <p className="text-stone-500 leading-relaxed font-light">
                  Your team shouldn't spend hours on work a machine can do in
                  seconds. We build automations that plug into your existing
                  tools and handle data entry, document processing, and workflow
                  steps — no rip-and-replace required.
                </p>
                <div className="mt-6 flex items-center gap-2 text-teal-600 font-medium text-sm">
                  <span>No workflow rebuild required</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* AI Customer Support */}
          <Reveal delay={250}>
            <div className="product-card group relative bg-gradient-to-br from-white to-stone-50/80 rounded-3xl p-10 border border-stone-200/60 shadow-sm h-full">
              <div className="absolute top-6 right-6 w-28 h-28 glow-coral rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-md shadow-orange-200">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-medium text-stone-800 mb-3">
                  AI Customer Support
                </h3>
                <p className="text-stone-500 leading-relaxed font-light">
                  Your customers expect fast, accurate answers — day or night.
                  We build support agents trained on your actual business, not a
                  generic script, so routine questions get handled instantly and
                  your team only steps in when it matters.
                </p>
                <div className="mt-6 flex items-center gap-2 text-orange-600 font-medium text-sm">
                  <span>Trained on your business, not a script</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Intelligent SaaS */}
          <Reveal delay={400}>
            <div className="product-card group relative bg-gradient-to-br from-white to-stone-50/80 rounded-3xl p-10 border border-stone-200/60 shadow-sm h-full">
              <div className="absolute top-6 right-6 w-28 h-28 glow-blue rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-md shadow-blue-200">
                  <MonitorSmartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-medium text-stone-800 mb-3">
                  Intelligent SaaS
                </h3>
                <p className="text-stone-500 leading-relaxed font-light">
                  Software built around how your business actually runs. Custom
                  software with AI built into the core — predictive dashboards,
                  smart interfaces, tools that adapt as your business grows. No
                  bloated features you'll never use.
                </p>
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <span>Built to scale, not to rebuild</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
