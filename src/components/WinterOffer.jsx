import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

export default function WinterOffer({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="bg-[#EDE7DC] rounded-3xl overflow-hidden border border-[#DDDCD5] shadow-sm grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
              ПОКУПАЙТЕ ВЫГОДНО. СТРОЙТЕ В СВОЙ СРОК.
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Зимние цены на материалы.
              <br />
              <span className="text-forest font-semibold">Хранение до сезона — за наш счет.</span>
            </h2>
            <p className="text-forest-dark/80 mt-5 text-sm sm:text-base leading-relaxed max-w-xl">
              Зафиксируйте зимние цены на кирпич и газобетон. Зимой заводы дают скидки до 20%:
              закупим материалы заранее, бесплатно сохраним на сухом охраняемом складе и привезем
              на участок точно в день начала кладки.
            </p>

            <div className="flex items-baseline gap-4 mt-8 sm:mt-10">
              <span className="text-5xl sm:text-6xl font-black text-bronze leading-none">
                до 20%
              </span>
              <span className="text-forest-dark font-bold text-xs sm:text-sm uppercase tracking-wider">
                зимняя экономия на закупке материалов
              </span>
            </div>

            <button
              onClick={() => onOpenConsultation?.("Фиксация зимних цен на материалы")}
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 px-8 py-4 bg-bronze text-white text-sm font-bold rounded-xl hover:bg-bronze-light transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              Зафиксировать стоимость
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[380px] relative overflow-hidden">
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
