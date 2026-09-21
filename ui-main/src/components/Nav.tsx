import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Products', href: '#products' },
    { label: 'Why Devgrate', href: '#why-devgrate' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Founders', href: '#founders' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-xl font-medium text-stone-800 tracking-tight">
            Devgrate
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-sm"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
