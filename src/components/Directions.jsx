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
    <section id="directions" className="pt-28 sm:pt-36 pb-28 sm:pb-36 bg-[#FBFBFA]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              НАШИ НАПРАВЛЕНИЯ
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-[1.15] max-w-xl">
              Дом, который подходит вашему образу жизни
            </h2>
          </div>
          <p className="text-[#5A6560] max-w-sm text-sm sm:text-[15px] leading-relaxed">
            От семейного коттеджа до частной резиденции — единый стандарт качества в любом масштабе.
          </p>
        </div>

        {/* 2 Full-background Luxury Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14 sm:mt-18">
          {DIRS.map((d) => (
            <div
              key={d.num}
              className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[540px] flex flex-col justify-between p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] group border border-[#E5E1D8]/60 transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              {/* Background image & gradient overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 z-0"
                style={{ backgroundImage: `url('${assetUrl(d.img)}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1612]/95 via-[#0D1612]/55 to-[#0D1612]/20 z-0" />

              {/* Top number badge */}
              <div className="relative z-10">
                <span className="text-white/90 font-black text-sm tracking-widest bg-black/40 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                  {d.num}
                </span>
              </div>

              {/* Content & CTA */}
              <div className="relative z-10 mt-16">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white whitespace-pre-line leading-tight">
                  {d.title}
                </h3>
                <div className="mt-4 text-stone-200/90 text-xs sm:text-[13px] space-y-1.5 font-medium leading-relaxed">
                  <p>{d.line1}</p>
                  <p>{d.line2}</p>
                </div>

                <div className="mt-8">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="inline-flex items-center justify-between w-full sm:w-[300px] h-[52px] px-6 bg-white hover:bg-[#EDE7DC] text-[#1E2824] text-xs sm:text-[13px] font-bold rounded-xl transition-all shadow-md group/btn"
                    >
                      <span>{d.cta}</span>
                      <ArrowUpRight size={17} className="text-[#1E2824] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenConsultation?.("Индивидуальные проекты усадеб и SPA")}
                      className="inline-flex items-center justify-between w-full sm:w-[300px] h-[52px] px-6 bg-white hover:bg-[#EDE7DC] text-[#1E2824] text-xs sm:text-[13px] font-bold rounded-xl transition-all shadow-md cursor-pointer group/btn"
                    >
                      <span>{d.cta}</span>
                      <ArrowUpRight size={17} className="text-[#1E2824] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Bar matching Figma */}
        <div className="mt-10 p-6 sm:p-7 bg-[#EBEAE4] border border-[#DDDCD5] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <p className="text-[#1E2824] text-xs sm:text-sm font-medium">
            <span className="font-bold">Для девелоперов и инвесторов:</span> комплексная застройка участков и поселков от 5 домов.
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E2824] hover:text-[#8B7150] shrink-0 transition-colors"
          >
            Подробнее о генподряде <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
