import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

export default function Investors({ onOpenConsultation }) {
  return (
    <section id="investors" className="py-28 sm:py-36 bg-white">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#E5E1D8]">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              ДЕВЕЛОПЕРАМ И ИНВЕСТОРАМ
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
              Ваш инвестиционный проект.
              <br />
              <span className="text-[#8B7150] font-semibold">Наша строительная экспертиза.</span>
            </h2>
            <p className="text-[#5A6560] mt-5 text-sm sm:text-base leading-relaxed">
              Комплексный подряд для коттеджных поселков: строим типовые линейки домов,
              въездные группы и КПП со строгим соблюдением графика инвестиционного проекта.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-[#E5E1D8]">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#8B7150] block">От 5</span>
                <p className="text-[#1E2824] font-bold text-xs sm:text-sm mt-1.5">домов в пуле</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1E2824] block">Единый</span>
                <p className="text-[#5A6560] text-xs sm:text-sm mt-1.5">генподрядчик</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1E2824] block">Поэтапная</span>
                <p className="text-[#5A6560] text-xs sm:text-sm mt-1.5">сдача объектов</p>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Инвестиционный проект / Генподряд коттеджного поселка")}
              className="inline-flex items-center gap-2 mt-10 px-9 py-4 bg-[#1E2824] hover:bg-[#283832] text-white text-sm font-bold rounded-2xl transition-all shadow-[0_10px_30px_rgba(30,40,36,0.25)] hover:shadow-[0_15px_40px_rgba(30,40,36,0.35)] cursor-pointer group"
            >
              <span>Обсудить инвестиционный проект</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
