import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

export default function WinterOffer({ onOpenConsultation }) {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#EDE7DC] rounded-[32px] overflow-hidden border border-[#DCD5C9] shadow-sm grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-14 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              ПОКУПАЙТЕ ВЫГОДНО. СТРОЙТЕ В СВОЙ СРОК.
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
              Зимние цены на материалы.
              <br />
              <span className="text-[#8B7150] font-semibold">Хранение до сезона — за наш счет.</span>
            </h2>
            <p className="text-[#1E2824]/80 mt-5 text-sm sm:text-base leading-relaxed max-w-xl">
              Зафиксируйте зимние цены на кирпич и газобетон. Зимой заводы дают скидки до 20%:
              закупим материалы заранее, бесплатно сохраним на сухом охраняемом складе и привезем
              на участок точно в день начала кладки.
            </p>

            <div className="flex items-baseline gap-4 mt-8 sm:mt-10">
              <span className="text-5xl sm:text-6xl font-black text-[#8B7150] leading-none">
                до 20%
              </span>
              <span className="text-[#1E2824] font-bold text-xs sm:text-sm uppercase tracking-wider">
                зимняя экономия на закупке материалов
              </span>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Фиксация зимних цен на материалы")}
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 px-8 py-4 bg-[#8B7150] hover:bg-[#9E825E] text-white text-sm font-bold rounded-xl transition-all shadow-[0_8px_25px_rgba(139,113,80,0.35)] cursor-pointer group"
            >
              Зафиксировать стоимость
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[420px] relative overflow-hidden">
            <img
              src={assetUrl('/images/Фото · Собственный склад материалов.png')}
              alt="Собственный склад материалов"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EDE7DC] via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
