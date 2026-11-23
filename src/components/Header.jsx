import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

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

export default function Header({ onOpenConsultation }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-light-border shadow-sm py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-light-border/60 py-4 md:py-5'
    }`}>
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <span className="text-2xl md:text-3xl font-extrabold text-[#28332F] tracking-tight group-hover:text-forest transition-colors">Да</span>
          <div className="hidden sm:block border-l border-light-border pl-3">
            <span className="block text-[11px] font-bold text-forest-dark uppercase tracking-wider leading-tight">
              АРХИТЕКТУРА & ДОМ
            </span>
            <span className="block text-[10px] text-sage font-medium tracking-normal leading-tight">
              строительство каменных коттеджей
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-forest-dark/85 hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+74959999999"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-forest-dark hover:text-bronze transition-colors whitespace-nowrap"
          >
            <Phone size={16} className="text-bronze" />
            +7 (495) 999-99-99
          </a>
          <button
            onClick={() => onOpenConsultation?.("Подбор проекта коттеджа")}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-forest text-white text-[13px] font-semibold rounded-lg hover:bg-forest/90 transition-all shadow-sm hover:shadow cursor-pointer"
          >
            Каталог проектов
            <ArrowUpRight size={14} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 text-forest-dark hover:text-forest transition-colors"
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden bg-white border-t border-light-border px-5 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-forest-dark/90 hover:text-forest py-2 border-b border-light-border/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a href="tel:+74959999999" className="flex items-center gap-2 text-sm font-bold text-forest-dark py-1">
                <Phone size={16} className="text-bronze" />
                +7 (495) 999-99-99
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenConsultation?.("Заявка на консультацию");
                }}
                className="w-full py-3 bg-bronze text-white text-xs font-semibold rounded-lg text-center"
              >
                Обсудить строительство
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
