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
    bio: 'Leads Devgrate\u2019s technology vision and innovation, driving the development of AI-powered solutions and exploring new technologies that create meaningful value for clients and businesses.',
    photo: '/akshaya.png',
    alt: 'Portrait of a businessman in formal attire',
  },
  {
    name: 'Sumedha Repalle',
    role: 'Founder & CEO | Strategy & Management',
    bio: 'Leads Devgrate\u2019s strategic direction and management, shaping business goals, planning growth initiatives, and ensuring the company stays aligned with its long-term vision.',
    photo: '/sumedha.png',
    alt: 'Portrait of a businessman in a black suit',
  },
  {
    name: 'Kavya Janapati',
    role: 'Founder & CEO | Business & Operations',
    bio: 'Oversees business operations and client relationships, ensuring projects are well-coordinated, efficiently executed, and successfully delivered from planning to deployment.',
    photo: '/kavya.png',
    alt: 'Portrait of a professional woman in a gray blazer',
  },
  {
    name: 'Aparna Avanapu',
    role: 'Founder & CEO | Technology & Product',
    bio: 'Drives product development and technical execution, transforming ideas into practical digital products while ensuring quality, usability, scalability, and continuous improvement.',
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
