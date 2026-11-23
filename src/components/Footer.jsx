import { ArrowUpRight } from 'lucide-react';

const TECH_LINKS = [
  'Теплая керамика',
  'Газобетон премиум',
  'Монолит & Hi-Tech',
  'Комбинированные фасады',
  'Усадьбы от 400 м²',
];

const PROJECT_LINKS = [
  'Дома до 200 м²',
  'Дома 200–300 м²',
  'Дома от 300 м²',
  'Одноэтажные коттеджи',
  'Индивидуальное проектирование',
];

const SERVICE_LINKS = [
  'Архитектурное бюро',
  'Инженерные сети',
  'Технический надзор',
  'Этапы и гарантии',
  'Инвесторам и девелоперам',
];

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-[#0D1612] text-white border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-extrabold text-white">Да</span>
              <div className="border-l border-white/20 pl-3">
                <span className="block text-xs font-bold text-white uppercase tracking-wider leading-tight">
                  АРХИТЕКТУРА & ДОМ
                </span>
                <span className="block text-[10px] text-stone-400 leading-tight mt-0.5">
                  строительство каменных коттеджей
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-[13px] leading-relaxed mb-6">
              Проектирование и генеральный подряд полного цикла в Московской, Ленинградской и Тверской областях.
            </p>

            <a
              href="tel:+74959999999"
              className="text-white text-lg font-bold hover:text-[#8B7150] transition-colors block"
            >
              +7 (495) 999-99-99
            </a>
            <p className="text-stone-400 text-xs mt-1">Москва · встречи по предварительной записи</p>

            <div className="flex gap-5 mt-6">
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8B7150] hover:text-white transition-colors"
              >
                Telegram <ArrowUpRight size={13} />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8B7150] hover:text-white transition-colors"
              >
                ВКонтакте <ArrowUpRight size={13} />
              </a>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Инвестиционный проект")}
              className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold text-[#8B7150] hover:text-white transition-colors cursor-pointer"
            >
              Обсудить инвестиционный проект <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Column 2: Tech Catalog */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B7150] mb-5">
              Каталог технологий
            </h4>
            <ul className="space-y-3">
              {TECH_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B7150] mb-5">
              Проекты домов
            </h4>
            <ul className="space-y-3">
              {PROJECT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B7150] mb-5">
              Компания и услуги
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} «Да — Архитектура & Дом». Все права защищены.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</span>
            <span className="hover:text-white transition-colors cursor-pointer">Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
