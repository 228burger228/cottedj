import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const WORKS = [
  { title: 'Лесной квартал', meta: '218 м²  ·  Теплая керамика', img: '/images/Объект · Лесной квартал.png' },
  { title: 'Резиденция у воды', meta: '312 м²  ·  Монолит', img: '/images/Объект · Современная резиденция.png' },
  { title: 'КП «Миллениум Парк»', meta: '380 м²  ·  7 месяцев', img: '/images/image 7.png' },
  { title: 'Семейный коттедж', meta: '245 м²  ·  Клинкер', img: '/images/Объект · Семейный коттедж.png' },
  { title: 'Дом в соснах', meta: '196 м²  ·  Газобетон', img: '/images/Объект · Дом в соснах.png' },
  { title: 'Современная резиденция', meta: '420 м²  ·  Монолит', img: '/images/Объект · Современная резиденция.png' },
];

export default function Portfolio({ onOpenConsultation }) {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F9F9F7]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              ПОРТФОЛИО
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Дома, в которых начинается новая жизнь
            </h2>
            <p className="text-sage mt-3 text-sm sm:text-[15px]">
              Архитектура, материалы и внимание к деталям — в каждом квадратном метре.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Каталог всех построенных объектов")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-bronze hover:text-forest transition-colors shrink-0 cursor-pointer"
          >
            Все объекты <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 6 Cards Grid (3x2) matching Figma */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {WORKS.map((w, i) => (
            <div
              key={w.title + i}
              onClick={() => onOpenConsultation?.(`Презентация объекта: ${w.title}`)}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-light-border"
            >
              <img
                src={assetUrl(w.img)}
                alt={w.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-stone transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-stone/85 text-xs sm:text-[13px] mt-1 font-medium">
                    {w.meta}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-bronze transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Presentation Request Strip */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 bg-white rounded-2xl border border-light-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-forest-dark text-sm sm:text-[15px] font-medium leading-relaxed">
            Фасады, планировки и инженерные решения — соберем подробную презентацию выбранного проекта.
          </p>
          <button
            onClick={() => onOpenConsultation?.("Запрос презентации проекта")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-bronze text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bronze-light transition-all shadow shrink-0 cursor-pointer"
          >
            Запросить презентацию <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
