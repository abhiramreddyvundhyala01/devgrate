import { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

function scrollTo(id: string) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  // Keep URL clean — replace hash with bare path
  window.history.replaceState(null, '', window.location.pathname);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'What We Do', target: 'what-we-do' },
    { label: 'Products', target: 'products' },
    { label: 'Why Devgrate', target: 'why-devgrate' },
    { label: 'How We Work', target: 'how-we-work' },
    { label: 'Founders', target: 'founders' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(target);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, 'top')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-medium text-stone-800 tracking-tight">
              Devgrate
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.target}
                href={`/${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:inline-flex btn-primary text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-sm"
          >
            Get in touch
          </a>

          {/* Mobile: hamburger + CTA */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn-primary text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-sm"
            >
              Get in touch
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-stone-100 transition-colors"
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-stone-700" />
              ) : (
                <>
                  <span className="w-5 h-0.5 bg-stone-700 rounded-full transition-all" />
                  <span className="w-5 h-0.5 bg-stone-700 rounded-full transition-all" />
                  <span className="w-5 h-0.5 bg-stone-700 rounded-full transition-all" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-down menu panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white/98 backdrop-blur-md pt-20 pb-8 px-6 shadow-xl border-b border-stone-200 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <a
                key={link.target}
                href={`/${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="flex items-center justify-between py-4 border-b border-stone-100 last:border-0 text-base font-medium text-stone-700 hover:text-teal-600 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-stone-300 text-lg">›</span>
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-6 w-full flex items-center justify-center btn-primary py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium text-base shadow-md"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}

