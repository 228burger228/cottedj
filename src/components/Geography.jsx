import { MapPin, Navigation, Truck } from 'lucide-react';

export default function Geography() {
  return (
    <section className="py-20 sm:py-28 bg-[#F0F0EB]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Text & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
                ГЕОГРАФИЯ И ЛОГИСТИКА
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
                Ближе, чем кажется.
                <br />
                <span className="text-forest font-semibold">Надежно, где бы вы ни строили.</span>
              </h2>
            </div>

            <p className="text-forest-dark text-sm sm:text-base font-medium leading-relaxed">
              Строим по всей Московской, Ленинградской и Тверской областям в радиусе до 250 км от баз снабжения.
            </p>
            <p className="text-sage text-xs sm:text-sm leading-relaxed">
              Собственная доставка длинномерами и манипуляторами. Координируем поставки с графиком работ, чтобы стройка не останавливалась.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-baseline gap-2 bg-white px-6 py-4 rounded-2xl border border-light-border shadow-sm">
                <span className="text-4xl sm:text-5xl font-black text-bronze leading-none">250</span>
                <span className="text-xs sm:text-sm font-bold text-forest-dark">км радиус работы от баз снабжения</span>
              </div>
            </div>
          </div>

          {/* Right Column: Supply Schema matching Figma (y=7356) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-light-border shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-light-border">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                СХЕМА ЗОН СНАБЖЕНИЯ
              </span>
              <span className="text-[11px] text-sage font-medium">Северо-Запад & Центр</span>
            </div>

            {/* Stylized Map View */}
            <div className="relative mt-6 h-72 sm:h-80 bg-[#F9F9F7] rounded-2xl border border-light-border overflow-hidden flex items-center justify-center p-6">
              {/* Concentric dashed zones */}
              <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full border border-dashed border-bronze/40 animate-pulse" />
              <div className="absolute w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full border border-dashed border-forest/30" />

              {/* M-11 Highway */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="28%" y1="22%" x2="50%" y2="50%" stroke="#8B7150" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="72%" y2="78%" stroke="#8B7150" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* City Dots */}
              <div className="absolute top-[18%] left-[26%] flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-forest text-white flex items-center justify-center shadow-md border-2 border-white">
                  <MapPin size={9} />
                </div>
                <span className="text-[11px] font-bold text-forest-dark mt-1 bg-white/95 px-2 py-0.5 rounded shadow-sm">
                  Санкт-Петербург
                </span>
              </div>

              <div className="absolute top-[46%] left-[48%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-bronze text-white flex items-center justify-center shadow border-2 border-white">
                  <MapPin size={8} />
                </div>
                <span className="text-[11px] font-bold text-forest-dark mt-1 bg-white/95 px-2 py-0.5 rounded shadow-sm">
                  Тверь
                </span>
              </div>

              <div className="absolute bottom-[18%] right-[25%] flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-forest text-bronze flex items-center justify-center shadow-lg border-2 border-bronze">
                  <MapPin size={11} />
                </div>
                <span className="text-[11px] font-black text-forest-dark mt-1 bg-white px-2 py-0.5 rounded shadow">
                  Москва
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-light-border text-center">
              <p className="text-xs text-sage font-medium">
                Базы снабжения   /   Московская · Ленинградская · Тверская области
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
