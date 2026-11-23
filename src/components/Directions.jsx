import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const DIRS = [
  {
    num: '01',
    title: 'Коттеджи для постоянного проживания',
    img: '/images/Направление · Коттеджи для постоянного проживания.png',
    tags: ['Керамические блоки Porotherm', 'Облицовочный клинкер', 'Газобетон D400', 'Монолитный фундамент', 'Мягкая кровля'],
    cta: { label: 'Перейти в каталог домов', href: '#projects' },
  },
  {
    num: '02',
    title: 'Загородные усадьбы и SPA-комплексы',
    img: '/images/Направление · Загородные усадьбы_и SPA-комплексы.png',
    tags: ['Индивидуальные виллы', 'Бассейны и банные комплексы', 'Гаражи на 3+ авто', 'Панорамное остекление Reynaers'],
    cta: { label: 'Индивидуальные проекты', href: '#contact' },
  },
];

export default function Directions() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Наши направления</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight max-w-xl">
          Дом, который подходит вашему образу жизни
        </h2>
        <p className="text-sage mt-4 max-w-lg text-[15px] leading-relaxed">
          От семейного коттеджа до частной резиденции — единый стандарт качества в любом масштабе.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 md:mt-14">
          {DIRS.map((d) => (
            <div key={d.num} className="bg-white rounded-2xl overflow-hidden group">
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={assetUrl(d.img)}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-forest/80 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                  {d.num}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-forest-dark">{d.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {d.tags.map((tag) => (
                    <span key={tag} className="text-[12px] text-sage bg-cream px-3 py-1.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={d.cta.href}
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors group/link"
                >
                  {d.cta.label}
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 md:p-6 bg-forest rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/90 text-sm leading-relaxed">
            <span className="font-semibold text-white">Для девелоперов и инвесторов:</span> комплексная застройка участков и поселков от 5 домов.
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze shrink-0 hover:text-bronze-light transition-colors"
          >
            Подробнее о генподряде <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
