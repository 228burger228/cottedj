import { ArrowUpRight } from 'lucide-react';

export default function Investors() {
  return (
    <section id="investors" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <img
              src="/images/Фото · Комплексная застройка поселка.png"
              alt="Комплексная застройка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Девелоперам и инвесторам</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight">
              Ваш инвестиционный проект.
              <br />
              <span className="text-sage font-semibold">Наша строительная экспертиза.</span>
            </h2>
            <p className="text-sage mt-4 text-[15px] leading-relaxed">
              Комплексный подряд для коттеджных поселков: строим типовые линейки домов,
              въездные группы и КПП со строгим соблюдением графика инвестиционного проекта.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <span className="text-2xl md:text-3xl font-bold text-bronze">От 5</span>
                <p className="text-sage text-sm mt-1">домов</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-forest-dark">Единый</span>
                <p className="text-sage text-sm mt-1">генподряд</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-forest-dark">Поэтапная</span>
                <p className="text-sage text-sm mt-1">сдача</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-forest/90 transition-colors"
            >
              Обсудить инвестиционный проект
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
