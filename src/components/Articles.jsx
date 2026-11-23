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
    <section id="articles" className="py-28 sm:py-36 bg-white">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              ПОЛЕЗНЫЕ МАТЕРИАЛЫ
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
              Разбираемся в строительстве вместе
            </h2>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Подписка на инженерные статьи")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8B7150] hover:text-[#1E2824] transition-colors shrink-0 cursor-pointer"
          >
            Все статьи <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-14 sm:mt-18">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              onClick={() => onOpenArticle?.(a)}
              className="bg-[#FBFBFA] rounded-3xl overflow-hidden border border-[#E5E1D8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img
                  src={assetUrl(a.img)}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#5A6560]">
                    <span className="font-bold uppercase tracking-wider text-[#8B7150]">
                      {a.category}
                    </span>
                    <span>/</span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock size={13} /> {a.time}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1E2824] mt-4 leading-snug group-hover:text-[#8B7150] transition-colors">
                    {a.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E1D8]">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8B7150] group-hover:text-[#1E2824] transition-colors">
                    Читать материал <ArrowUpRight size={15} />
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
