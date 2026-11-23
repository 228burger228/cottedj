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
    <section id="portfolio" className="py-28 sm:py-36 bg-[#FBFBFA]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              ПОРТФОЛИО
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
              Дома, в которых начинается новая жизнь
            </h2>
            <p className="text-[#5A6560] mt-3 text-sm sm:text-base leading-relaxed">
              Архитектура, материалы и внимание к деталям — в каждом квадратном метре.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Каталог всех сданных объектов")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8B7150] hover:text-[#1E2824] transition-colors shrink-0 cursor-pointer"
          >
            Все объекты <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Row 1: 3 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 sm:mt-18">
          {WORKS_ROW_1.map((w) =>
            w.isPlan ? (
              <div
                key="plan"
                onClick={() => onOpenConsultation?.("Заказ индивидуального эскиза плана")}
                className="bg-[#1A2420] text-white rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer border border-white/10 group min-h-[280px] sm:min-h-[320px]"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-white/10 text-stone-200">
                    <Compass size={26} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8B7150] border border-[#8B7150]/30 px-3 py-1 rounded-xl">
                    01 / 02
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider text-white group-hover:text-stone-200 transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-stone-300/80 text-xs sm:text-sm mt-2 leading-relaxed">
                    {w.meta}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B7150] mt-5 group-hover:translate-x-1 transition-transform">
                    Запросить концепцию <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            ) : (
              <div
                key={w.title}
                onClick={() => onOpenConsultation?.(`Презентация объекта: ${w.title}`)}
                className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 border border-[#E5E1D8]"
              >
                <img
                  src={assetUrl(w.img)}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-stone-200 transition-colors">
                      {w.title}
                    </h3>
                    <p className="text-stone-300/90 text-xs mt-1">
                      {w.meta}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8B7150] transition-colors shrink-0">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Row 2: 4 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-8">
          {WORKS_ROW_2.map((w) => (
            <div
              key={w.title}
              onClick={() => onOpenConsultation?.(`Презентация объекта: ${w.title}`)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 border border-[#E5E1D8]"
            >
              <img
                src={assetUrl(w.img)}
                alt={w.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-stone-200 transition-colors leading-snug">
                    {w.title}
                  </h3>
                  <p className="text-stone-300/90 text-xs mt-1">
                    {w.meta}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8B7150] transition-colors shrink-0">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Presentation Request Strip */}
        <div className="mt-10 p-6 sm:p-7 bg-white rounded-2xl border border-[#E5E1D8] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#1E2824] text-xs sm:text-sm font-medium">
            Фасады, планировки и инженерные решения — соберем подробную презентацию выбранного проекта.
          </p>
          <button
            onClick={() => onOpenConsultation?.("Запрос презентации проекта")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B7150] hover:bg-[#9E825E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow shrink-0 cursor-pointer"
          >
            Запросить презентацию <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
