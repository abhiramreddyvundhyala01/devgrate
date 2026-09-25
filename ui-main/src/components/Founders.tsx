import { Reveal, WordReveal } from './Reveal';

type Founder = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  alt: string;
};

const founders: Founder[] = [
  {
    name: 'Akshaya Reddy',
    role: 'Founder & CEO | Technology & Innovation',
    bio: 'Leads Devgrate\u2019s vision and business strategy, working closely with clients to identify where AI can create the most value for their operations.',
    photo: '/akshaya.png',
    alt: 'Portrait of a businessman in formal attire',
  },
  {
    name: 'Sumedha Repalle',
    role: 'Founder & CEO | Business & Operations',
    bio: 'Oversees the technical architecture across all Devgrate products, ensuring every system is built to be reliable, scalable, and genuinely useful.',
    photo: '/sumedha.png',
    alt: 'Portrait of a businessman in a black suit',
  },
  {
    name: 'Kavya Janapati',
    role: 'Founder & CEO | Strategy & Management',
    bio: 'Directs the AI and machine learning work behind Devgrate\u2019s products, from model selection to deployment, keeping outcomes practical and grounded.',
    photo: '/kavya.png',
    alt: 'Portrait of a professional woman in a gray blazer',
  },
  {
    name: 'Aparna Avanapu',
    role: 'Founder & CEO | Technology & Product',
    bio: 'Manages day-to-day operations and client relationships, making sure projects move smoothly from initial conversation to working deployment.',
    photo: '/aparna.png',
    alt: 'Portrait of a professional woman with glasses',
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="relative py-20 md:py-32 px-4 sm:px-6"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-orange-400/40" />

      {/* Warm gradient wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] glow-coral rounded-full float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] glow-teal rounded-full float-slower" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600">
              Meet the Founders
            </span>
          </Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="The team you'll actually" delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text-warm font-medium">work with</span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              We're a small, hands-on team. When you work with Devgrate,
              you're working directly with us.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="founder-card group bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm">
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={founder.photo}
                    alt={founder.alt}
                    className="founder-photo w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-stone-800 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-medium text-teal-600 mb-3">
                    {founder.role}
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
