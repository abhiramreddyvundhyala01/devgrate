import { Sparkles } from 'lucide-react';

function scrollTo(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  window.history.replaceState(null, '', window.location.pathname);
}

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-stone-50/80 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display text-lg font-medium text-stone-700">
              Devgrate
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="/what-we-do" onClick={(e) => scrollTo(e, 'what-we-do')} className="text-sm text-stone-500 hover:text-teal-600 transition-colors">What We Do</a>
            <a href="/products" onClick={(e) => scrollTo(e, 'products')} className="text-sm text-stone-500 hover:text-teal-600 transition-colors">Products</a>
            <a href="/founders" onClick={(e) => scrollTo(e, 'founders')} className="text-sm text-stone-500 hover:text-teal-600 transition-colors">Founders</a>
            <a href="/contact" onClick={(e) => scrollTo(e, 'contact')} className="text-sm text-stone-500 hover:text-teal-600 transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-stone-400 font-light">
            &copy; {new Date().getFullYear()} Devgrate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

