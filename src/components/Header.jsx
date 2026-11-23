import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'О компании', href: '#about' },
  { label: 'Технологии', href: '#architecture' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Этапы и гарантии', href: '#steps' },
  { label: 'Инвесторам', href: '#investors' },
  { label: 'Отзывы', href: '#portfolio' },
  { label: 'Статьи', href: '#articles' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md border-b border-light-border shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm border-b border-light-border/50'
    }`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-xl md:text-2xl font-bold text-forest tracking-tight">Да</span>
          <span className="hidden sm:block text-[11px] leading-tight text-sage uppercase tracking-wider">
            Архитектура<br />& Дом
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-forest-dark/80 hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:+74959999999" className="hidden md:flex items-center gap-2 text-sm font-semibold text-forest-dark">
            <Phone size={16} className="text-bronze" />
            +7 (495) 999-99-99
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 bg-forest text-white text-[13px] font-semibold rounded-lg hover:bg-forest/90 transition-colors"
          >
            Каталог проектов
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-forest-dark"
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-light-border">
          <nav className="max-w-[1400px] mx-auto px-5 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-forest-dark/80 hover:text-forest py-2 border-b border-light-border/50"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+74959999999" className="flex items-center gap-2 text-sm font-semibold text-forest-dark py-2">
              <Phone size={16} className="text-bronze" />
              +7 (495) 999-99-99
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
