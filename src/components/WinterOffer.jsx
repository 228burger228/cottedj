import { ArrowUpRight } from 'lucide-react';

export default function WinterOffer() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="relative bg-forest rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-bronze mb-3">
              Покупайте выгодно. Стройте в свой срок.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Зимние цены на материалы.
              <br />
              <span className="text-stone">Хранение до сезона — за наш счет.</span>
            </h2>
            <p className="text-white/70 mt-5 text-[15px] leading-relaxed">
              Зафиксируйте зимние цены на кирпич и газобетон. Зимой заводы дают скидки до 20%:
              закупим материалы заранее, бесплатно сохраним на сухом охраняемом складе и привезем
              на участок точно в день начала кладки.
            </p>

            <div className="flex items-baseline gap-3 mt-8">
              <span className="text-5xl md:text-6xl font-bold text-bronze">до 20%</span>
              <span className="text-white/60 text-sm">зимняя экономия</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-bronze text-white text-sm font-semibold rounded-lg hover:bg-bronze-light transition-colors"
            >
              Зафиксировать стоимость
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Decorative background gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-olive/30 to-transparent hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
