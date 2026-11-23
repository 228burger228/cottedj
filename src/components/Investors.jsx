import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

export default function Investors({ onOpenConsultation }) {
  return (
    <section id="investors" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-light-border">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
              ДЕВЕЛОПЕРАМ И ИНВЕСТОРАМ
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Ваш инвестиционный проект.
              <br />
              <span className="text-forest font-semibold">Наша строительная экспертиза.</span>
            </h2>
            <p className="text-sage mt-5 text-sm sm:text-base leading-relaxed">
              Комплексный подряд для коттеджных поселков: строим типовые линейки домов,
              въездные группы и КПП со строгим соблюдением графика инвестиционного проекта.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 py-6 border-y border-light-border">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-bronze block">От 5</span>
                <p className="text-forest-dark font-bold text-xs sm:text-sm mt-1">домов в пуле</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-forest-dark block">Единый</span>
                <p className="text-sage text-xs sm:text-sm mt-1">генподрядчик</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-forest-dark block">Поэтапная</span>
                <p className="text-sage text-xs sm:text-sm mt-1">сдача объектов</p>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Инвестиционный проект / Генподряд коттеджного поселка")}
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 px-8 py-4 bg-forest text-white text-sm font-bold rounded-xl hover:bg-forest/90 transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              Обсудить инвестиционный проект
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
