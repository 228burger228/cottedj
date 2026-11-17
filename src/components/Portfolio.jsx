import { ArrowUpRight } from 'lucide-react';

const WORKS = [
  { title: 'Лесной квартал', meta: '218 м²  ·  Теплая керамика', img: '/images/Объект · Лесной квартал.png' },
  { title: 'Резиденция у воды', meta: '312 м²  ·  Монолит', img: '/images/Объект · Современная резиденция.png' },
  { title: 'КП «Миллениум Парк»', meta: '380 м²  ·  7 месяцев', img: '/images/image 7.png' },
  { title: 'Семейный коттедж', meta: '245 м²  ·  Клинкер', img: '/images/Объект · Семейный коттедж.png' },
  { title: 'Дом в соснах', meta: '196 м²  ·  Газобетон', img: '/images/Объект · Дом в соснах.png' },
  { title: 'Современная резиденция', meta: '420 м²  ·  Монолит', img: '/images/Объект · Современная резиденция.png' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Портфолио</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight">
              Дома, в которых начинается новая жизнь
            </h2>
            <p className="text-sage mt-3 text-[15px]">
              Архитектура, материалы и внимание к деталям — в каждом квадратном метре.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors shrink-0"
          >
            Все объекты <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-14">
          {WORKS.map((w) => (
            <a
              key={w.title}
              href="#contact"
              className="group relative h-56 md:h-64 rounded-2xl overflow-hidden block"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-sm">{w.title}</h3>
                <p className="text-white/70 text-xs mt-1">{w.meta}</p>
              </div>
              <ArrowUpRight size={18} className="absolute top-4 right-4 text-white/70 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-10 p-5 md:p-6 bg-white rounded-xl border border-light-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sage text-sm">
            Фасады, планировки и инженерные решения — соберем подробную презентацию выбранного проекта.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors shrink-0"
          >
            Запросить презентацию <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
