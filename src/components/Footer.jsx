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
    <footer className="bg-[#142019] text-white border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold text-white">Да</span>
              <div className="border-l border-white/20 pl-3">
                <span className="block text-xs font-bold text-white uppercase tracking-wider leading-tight">
                  АРХИТЕКТУРА & ДОМ
                </span>
                <span className="block text-[10px] text-stone/60 leading-tight">
                  строительство каменных коттеджей
                </span>
              </div>
            </div>

            <p className="text-stone/60 text-xs mb-4">
              Проектирование и генеральный подряд полного цикла в Московской, Ленинградской и Тверской областях.
            </p>

            <a
              href="tel:+74959999999"
              className="text-white text-base font-bold hover:text-bronze transition-colors block mt-2"
            >
              +7 (495) 999-99-99
            </a>
            <p className="text-stone/60 text-xs mt-1">Москва · встречи по предварительной записи</p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-bronze hover:text-white transition-colors"
              >
                Telegram <ArrowUpRight size={13} />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-bronze hover:text-white transition-colors"
              >
                ВКонтакте <ArrowUpRight size={13} />
              </a>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Инвестиционный проект")}
              className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold text-bronze hover:text-white transition-colors cursor-pointer"
            >
              Обсудить инвестиционный проект <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Column 2: Tech Catalog */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-5">
              Каталог технологий
            </h4>
            <ul className="space-y-3">
              {TECH_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-xs sm:text-sm text-stone/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Typical Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-5">
              Типовые проекты
            </h4>
            <ul className="space-y-3">
              {PROJECT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#projects" className="text-xs sm:text-sm text-stone/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engineering & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-5">
              Инженерия и сервис
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-xs sm:text-sm text-stone/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone/80 mb-2">
                Офис и документы
              </h5>
              <p className="text-xs text-stone/50 leading-relaxed">
                СРО, допуски, лицензии и реквизиты предоставляются по запросу заказчика.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone/50">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white/80">Да</span>
            <span>АРХИТЕКТУРА & ДОМ</span>
            <span>·</span>
            <span>© 2026 Все права защищены</span>
          </div>

          <div className="flex flex-wrap gap-5 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Согласие на обработку данных</a>
          </div>
        </div>

        <p className="text-[10px] text-stone/40 mt-4 leading-relaxed">
          Не является публичной офертой. Все 3D-визуализации и фотографии выполнены для демонстрации концептуальных проектов компании.
        </p>
      </div>
    </footer>
  );
}
