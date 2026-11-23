import { ArrowUpRight, Clock } from 'lucide-react';
import { assetUrl } from '../utils';

const ARTICLES = [
  {
    category: 'ФУНДАМЕНТ',
    time: '7 МИНУТ',
    title: 'Монолитная плита vs Свайно-ростверковый фундамент: что выбрать на пучинистом грунте?',
    img: '/images/Иллюстрация статьи.png',
  },
  {
    category: 'МАТЕРИАЛЫ',
    time: '6 МИНУТ',
    title: 'Керамоблок или газобетон: сравнение теплоемкости, усадки и итоговой стоимости дома',
    img: '/images/image 4.png',
  },
  {
    category: 'ТЕХНОЛОГИИ',
    time: '5 МИНУТ',
    title: '5 ошибок в устройстве плоской кровли в климате средней полосы России',
    img: '/images/image 5.png',
  },
];

export default function Articles({ onOpenArticle, onOpenConsultation }) {
  return (
    <section id="articles" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              ПОЛЕЗНЫЕ МАТЕРИАЛЫ
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Разбираемся в строительстве вместе
            </h2>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Подписка на инженерные статьи")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-bronze hover:text-forest transition-colors shrink-0 cursor-pointer"
          >
            Все статьи <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              onClick={() => onOpenArticle?.(a)}
              className="bg-[#F9F9F7] rounded-2xl overflow-hidden border border-light-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="h-48 sm:h-52 overflow-hidden relative">
                <img
                  src={assetUrl(a.img)}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-sage">
                    <span className="font-bold uppercase tracking-wider text-bronze">
                      {a.category}
                    </span>
                    <span>/</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock size={12} /> {a.time}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-forest-dark mt-3 leading-snug group-hover:text-bronze transition-colors">
                    {a.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-light-border/60">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-bronze group-hover:text-forest transition-colors">
                    Читать материал <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
