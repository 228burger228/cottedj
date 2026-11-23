import { ArrowUpRight, Compass } from 'lucide-react';
import { assetUrl } from '../utils';

const WORKS_ROW_1 = [
  {
    isPlan: true,
    title: 'ЭСКИЗ ПЛАНА',
    meta: 'Индивидуальные планировочные концепции 01 / 02',
  },
  {
    title: 'Лесной квартал',
    meta: '218 м²   ·   Теплая керамика',
    img: '/images/Объект · Лесной квартал.png',
  },
  {
    title: 'Резиденция у воды',
    meta: '312 м²   ·   Монолит',
    img: '/images/Объект · Современная резиденция.png',
  },
];

const WORKS_ROW_2 = [
  {
    title: 'КП «Миллениум Парк»',
    meta: '380 м²   ·   7 месяцев',
    img: '/images/image 7.png',
  },
  {
    title: 'Семейный коттедж',
    meta: '245 м²   ·   Клинкер',
    img: '/images/Объект · Семейный коттедж.png',
  },
  {
    title: 'Дом в соснах',
    meta: '196 м²   ·   Газобетон',
    img: '/images/Объект · Дом в соснах.png',
  },
  {
    title: 'Современная резиденция',
    meta: '420 м²   ·   Монолит',
    img: '/images/Объект · Современная резиденция.png',
  },
];

export default function Portfolio({ onOpenConsultation }) {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F9F9F9]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              ПОРТФОЛИО
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Дома, в которых начинается новая жизнь
            </h2>
            <p className="text-sage mt-2 text-xs sm:text-sm">
              Архитектура, материалы и внимание к деталям — в каждом квадратном метре.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Каталог всех сданных объектов")}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-bronze hover:text-forest transition-colors shrink-0 cursor-pointer"
          >
            Все объекты <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Row 1: 3 Cards matching Figma */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-14">
          {WORKS_ROW_1.map((w, i) =>
            w.isPlan ? (
              <div
                key="plan"
                onClick={() => onOpenConsultation?.("Заказ индивидуального эскиза плана")}
                className="bg-[#242E2A] text-white rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all cursor-pointer border border-[#33403A] group min-h-[260px] sm:min-h-[290px]"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white/10 text-stone">
                    <Compass size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-bronze border border-bronze/30 px-3 py-1 rounded-md">
                    01 / 02
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider text-white group-hover:text-stone transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-stone/75 text-xs mt-2 leading-relaxed">
                    {w.meta}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-bronze mt-4 group-hover:translate-x-1 transition-transform">
                    Запросить концепцию <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            ) : (
              <div
                key={w.title}
                onClick={() => onOpenConsultation?.(`Презентация объекта: ${w.title}`)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-light-border"
              >
                <img
                  src={assetUrl(w.img)}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-stone transition-colors">
                      {w.title}
                    </h3>
                    <p className="text-stone/85 text-xs mt-1">
                      {w.meta}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-bronze transition-colors">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Row 2: 4 Cards matching Figma */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6">
          {WORKS_ROW_2.map((w) => (
            <div
              key={w.title}
              onClick={() => onOpenConsultation?.(`Презентация объекта: ${w.title}`)}
              className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-light-border"
            >
              <img
                src={assetUrl(w.img)}
                alt={w.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-[15px] group-hover:text-stone transition-colors leading-snug">
                    {w.title}
                  </h3>
                  <p className="text-stone/85 text-[11px] mt-1">
                    {w.meta}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-bronze transition-colors shrink-0">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Presentation Request Strip */}
        <div className="mt-8 p-5 sm:p-6 bg-white rounded-xl border border-light-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-forest-dark text-xs sm:text-sm font-medium">
            Фасады, планировки и инженерные решения — соберем подробную презентацию выбранного проекта.
          </p>
          <button
            onClick={() => onOpenConsultation?.("Запрос презентации проекта")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bronze text-white text-xs sm:text-[13px] font-bold rounded-lg hover:bg-bronze-light transition-all shadow shrink-0 cursor-pointer"
          >
            Запросить презентацию <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
