import { ArrowUpRight, Clock } from 'lucide-react';
import { assetUrl } from '../utils';

const ARTICLES = [
  {
    category: 'Фундамент',
    time: '7 минут',
    title: 'Монолитная плита vs Свайно-ростверковый фундамент: что выбрать на пучинистом грунте?',
    img: '/images/Иллюстрация статьи.png',
  },
  {
    category: 'Материалы',
    time: '6 минут',
    title: 'Керамоблок или газобетон: сравнение теплоемкости, усадки и итоговой стоимости дома',
    img: '/images/image 4.png',
  },
  {
    category: 'Технологии',
    time: '5 минут',
    title: '5 ошибок в устройстве плоской кровли в климате средней полосы России',
    img: '/images/image 5.png',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Полезные материалы</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight">
              Разбираемся в строительстве вместе
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors shrink-0"
          >
            Все статьи <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10 md:mt-14">
          {ARTICLES.map((a) => (
            <article key={a.title} className="bg-cream rounded-2xl overflow-hidden group cursor-pointer">
              <div className="h-44 md:h-48 overflow-hidden">
                <img
                  src={assetUrl(a.img)}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 text-xs text-sage">
                  <span className="font-semibold uppercase tracking-wider text-bronze">{a.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {a.time}
                  </span>
                </div>
                <h3 className="text-forest-dark font-bold text-sm md:text-[15px] mt-3 leading-snug group-hover:text-forest transition-colors">
                  {a.title}
                </h3>
                <span className="inline-flex items-center gap-1 mt-4 text-[13px] font-semibold text-bronze group-hover:text-bronze-light transition-colors">
                  Читать материал <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
