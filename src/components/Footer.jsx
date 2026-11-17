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

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Да</span>
              <span className="text-[11px] leading-tight text-white/60 uppercase tracking-wider">
                Архитектура<br />& Дом
              </span>
            </div>
            <p className="text-white/50 text-xs mb-4">строительство каменных коттеджей</p>
            <p className="text-white/80 text-sm font-semibold">+7 (495) 999-99-99</p>
            <p className="text-white/50 text-xs mt-1">Москва · встречи по записи</p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-medium text-bronze hover:text-bronze-light transition-colors"
              >
                Telegram <ArrowUpRight size={12} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-medium text-bronze hover:text-bronze-light transition-colors"
              >
                ВКонтакте <ArrowUpRight size={12} />
              </a>
            </div>

            <a
              href="#investors"
              className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-bronze hover:text-bronze-light transition-colors"
            >
              Обсудить инвестиционный проект <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Tech catalog */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Каталог технологий</h4>
            <ul className="space-y-2.5">
              {TECH_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project types */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Типовые проекты</h4>
            <ul className="space-y-2.5">
              {PROJECT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Инженерия и сервис</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Офис и документы</h4>
              <p className="text-xs text-white/50">СРО, лицензии и реквизиты</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-2xl font-bold text-white/20">Да</span>
            <span className="text-[11px] text-white/30 uppercase tracking-wider">Архитектура & Дом</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/70 transition-colors">Согласие на обработку персональных данных</a>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-white/30">
          <span>© 2026 Архитектура & Дом</span>
          <span>Не является публичной офертой. Фото — визуализации проектов.</span>
        </div>
      </div>
    </footer>
  );
}
