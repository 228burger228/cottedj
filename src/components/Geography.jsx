export default function Geography() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">География и логистика</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight max-w-xl">
          Ближе, чем кажется.
          <br />
          <span className="text-sage font-semibold">Надежно, где бы вы ни строили.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-10 md:mt-14 items-start">
          {/* Map visual */}
          <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-light-border min-h-[320px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-6">Схема зон снабжения</p>

            {/* Stylized map */}
            <div className="relative h-60 md:h-72">
              {/* Circles representing zones */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-stone opacity-50" />
                  {/* Middle circle */}
                  <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-stone opacity-30" />

                  {/* City markers */}
                  <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-forest" />
                    <span className="text-[11px] font-semibold text-forest-dark mt-1">Санкт-Петербург</span>
                  </div>
                  <div className="absolute top-[55%] left-[35%] -translate-x-1/2 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-bronze" />
                    <span className="text-[11px] font-semibold text-forest-dark mt-1">Тверь</span>
                  </div>
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-forest border-2 border-bronze" />
                    <span className="text-[11px] font-bold text-forest-dark mt-1">Москва</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sage text-[15px] leading-relaxed">
              Строим по всей Московской, Ленинградской и Тверской областям
              в радиусе до 250 км от баз снабжения.
            </p>
            <p className="text-sage text-[15px] leading-relaxed mt-4">
              Собственная доставка длинномерами и манипуляторами. Координируем
              поставки с графиком работ, чтобы стройка не останавливалась.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white rounded-xl p-5 border border-light-border flex-1 min-w-[180px]">
                <span className="text-3xl font-bold text-bronze">250</span>
                <span className="text-sm text-sage ml-1">км</span>
                <p className="text-sage text-xs mt-1">радиус работы от баз снабжения</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-light-border flex-1 min-w-[180px]">
                <span className="text-sm font-bold text-forest-dark">Базы снабжения</span>
                <p className="text-sage text-xs mt-2">Московская · Ленинградская · Тверская области</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
