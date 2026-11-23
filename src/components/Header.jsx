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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5E1D8] shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3' 
        : 'bg-white/90 backdrop-blur-md border-b border-[#E5E1D8]/60 py-4 lg:py-5'
    }`}>
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <span className="text-3xl font-black text-[#1E2824] tracking-tight group-hover:text-[#8B7150] transition-colors leading-none">
            Да
          </span>
          <div className="border-l border-[#E5E1D8] pl-3 py-0.5">
            <span className="block text-[11px] font-bold text-[#1E2824] uppercase tracking-[0.16em] leading-tight">
              АРХИТЕКТУРА & ДОМ
            </span>
            <span className="block text-[10px] text-[#5A6560] font-medium leading-tight mt-0.5">
              строительство каменных коттеджей
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#1E2824]/85 hover:text-[#8B7150] transition-colors relative py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a
            href="tel:+74959999999"
            className="hidden md:flex items-center gap-2 text-[14px] font-bold text-[#1E2824] hover:text-[#8B7150] transition-colors"
          >
            <Phone size={15} className="text-[#8B7150]" />
            +7 (495) 999-99-99
          </a>
          <button
            onClick={() => onOpenConsultation?.("Подбор проекта коттеджа")}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1E2824] text-white text-[13px] font-semibold rounded-xl hover:bg-[#283832] transition-all shadow-sm hover:shadow cursor-pointer"
          >
            Каталог проектов
            <ArrowUpRight size={14} className="text-stone-300" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 text-[#1E2824] hover:text-[#8B7150] transition-colors"
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden bg-white border-t border-[#E5E1D8] px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[#1E2824] hover:text-[#8B7150] py-2.5 border-b border-[#E5E1D8]/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+74959999999" className="flex items-center gap-2 text-base font-bold text-[#1E2824] py-1">
                <Phone size={18} className="text-[#8B7150]" />
                +7 (495) 999-99-99
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenConsultation?.("Заявка на консультацию");
                }}
                className="w-full py-3.5 bg-[#8B7150] text-white text-sm font-bold rounded-xl text-center shadow-md cursor-pointer"
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
