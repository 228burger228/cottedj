import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const DIRS = [
  {
    num: '01',
    title: 'Коттеджи для постоянного проживания',
    img: '/images/Направление · Коттеджи для постоянного проживания.png',
    line1: 'Керамические блоки Porotherm   ·   Облицовочный клинкер',
    line2: 'Газобетон D400   ·   Монолитный фундамент   ·   Мягкая кровля',
    cta: 'Перейти в каталог домов',
    href: '#projects',
  },
  {
    num: '02',
    title: 'Загородные усадьбы\nи SPA-комплексы',
    img: '/images/Направление · Загородные усадьбы_и SPA-комплексы.png',
    line1: 'Индивидуальные виллы   ·   Бассейны и банные комплексы',
    line2: 'Гаражи на 3+ авто   ·   Панорамное остекление Reynaers',
    cta: 'Индивидуальные проекты',
    action: 'усадьбы',
  },
];

export default function Directions({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-24 bg-[#F9F9F9]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              НАШИ НАПРАВЛЕНИЯ
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-md">
              Дом, который подходит вашему образу жизни
            </h2>
          </div>
          <p className="text-sage max-w-sm text-xs sm:text-sm leading-relaxed">
            От семейного коттеджа до частной резиденции — единый стандарт качества в любом масштабе.
          </p>
        </div>

        {/* 2 Full-background Cards (708px x 416px in Figma) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {DIRS.map((d) => (
            <div
              key={d.num}
              className="relative rounded-2xl overflow-hidden min-h-[416px] flex flex-col justify-between p-8 sm:p-10 shadow-sm group border border-black/5"
            >
              {/* Background image & gradient overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 z-0"
                style={{ backgroundImage: `url('${assetUrl(d.img)}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142019] via-[#142019]/80 to-[#142019]/40 z-0" />

              {/* Top number */}
              <div className="relative z-10">
                <span className="text-white/80 font-bold text-sm tracking-wider">
                  {d.num}
                </span>
              </div>

              {/* Content & CTA */}
              <div className="relative z-10 mt-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-white whitespace-pre-line leading-tight">
                  {d.title}
                </h3>
                <div className="mt-4 text-stone/85 text-xs sm:text-[13px] space-y-1 font-medium">
                  <p>{d.line1}</p>
                  <p>{d.line2}</p>
                </div>

                <div className="mt-8">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="inline-flex items-center justify-between w-full sm:w-[292px] h-[46px] px-6 bg-[#F9F9F9] text-forest-dark text-xs sm:text-[13px] font-bold rounded-lg hover:bg-white transition-all shadow-sm group/btn"
                    >
                      <span>{d.cta}</span>
                      <ArrowUpRight size={16} className="text-forest-dark group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenConsultation?.("Индивидуальные проекты усадеб и SPA")}
                      className="inline-flex items-center justify-between w-full sm:w-[292px] h-[46px] px-6 bg-[#F9F9F9] text-forest-dark text-xs sm:text-[13px] font-bold rounded-lg hover:bg-white transition-all shadow-sm cursor-pointer group/btn"
                    >
                      <span>{d.cta}</span>
                      <ArrowUpRight size={16} className="text-forest-dark group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Bar matching Figma (y=1672) */}
        <div className="mt-8 p-5 sm:p-6 bg-[#EBEAE4] border border-[#DDDCD5] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-forest-dark text-xs sm:text-sm font-medium">
            <span className="font-bold">Для девелоперов и инвесторов:</span> комплексная застройка участков и поселков от 5 домов.
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest hover:text-bronze shrink-0 transition-colors"
          >
            Подробнее о генподряде <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
