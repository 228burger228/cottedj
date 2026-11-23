import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const DIRS = [
  {
    num: '01',
    title: 'Коттеджи для постоянного проживания',
    img: '/images/Направление · Коттеджи для постоянного проживания.png',
    tags: ['Керамические блоки Porotherm', 'Облицовочный клинкер', 'Газобетон D400', 'Монолитный фундамент', 'Мягкая кровля'],
    cta: 'Перейти в каталог домов',
    href: '#projects',
  },
  {
    num: '02',
    title: 'Загородные усадьбы и SPA-комплексы',
    img: '/images/Направление · Загородные усадьбы_и SPA-комплексы.png',
    tags: ['Индивидуальные виллы', 'Бассейны и банные комплексы', 'Гаражи на 3+ авто', 'Панорамное остекление Reynaers'],
    cta: 'Индивидуальные проекты',
    action: 'усадьбы',
  },
];

export default function Directions({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F9F7]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              НАШИ НАПРАВЛЕНИЯ
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-xl">
              Дом, который подходит вашему образу жизни
            </h2>
          </div>
          <p className="text-sage max-w-md text-sm sm:text-[15px] leading-relaxed">
            От семейного коттеджа до частной резиденции — единый стандарт качества в любом масштабе.
          </p>
        </div>

        {/* 2 Big Direction Cards matching Figma dark visual style */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {DIRS.map((d) => (
            <div
              key={d.num}
              className="bg-[#242E2A] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#33403A]"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={assetUrl(d.img)}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242E2A] via-transparent to-transparent opacity-80" />
                <span className="absolute top-5 left-5 bg-black/60 text-bronze text-xs font-extrabold px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  {d.num}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-stone transition-colors">
                    {d.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] text-stone/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 mt-4 border-t border-white/10">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-bronze hover:text-white transition-colors group/link"
                    >
                      {d.cta}
                      <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenConsultation?.("Индивидуальные проекты усадеб и SPA")}
                      className="inline-flex items-center gap-2 text-sm font-bold text-bronze hover:text-white transition-colors group/link cursor-pointer"
                    >
                      {d.cta}
                      <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Bar */}
        <div className="mt-8 p-6 sm:p-7 bg-[#EBEAE4] border border-[#DDDCD5] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-forest-dark text-sm sm:text-[15px] leading-relaxed">
            <span className="font-bold">Для девелоперов и инвесторов:</span> комплексная застройка участков и поселков от 5 домов.
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-bronze shrink-0 transition-colors"
          >
            Подробнее о генподряде <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
