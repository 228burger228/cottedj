import { MapPin } from 'lucide-react';

export default function Geography() {
  return (
    <section className="py-28 sm:py-36 bg-[#F4F2EE]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
                ГЕОГРАФИЯ И ЛОГИСТИКА
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
                Ближе, чем кажется.
                <br />
                <span className="text-[#8B7150] font-semibold">Надежно, где бы вы ни строили.</span>
              </h2>
            </div>

            <p className="text-[#1E2824] text-sm sm:text-base font-medium leading-relaxed">
              Строим по всей Московской, Ленинградской и Тверской областям в радиусе до 250 км от баз снабжения.
            </p>
            <p className="text-[#5A6560] text-xs sm:text-sm leading-relaxed">
              Собственная доставка длинномерами и манипуляторами. Координируем поставки с графиком работ, чтобы стройка не останавливалась.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-baseline gap-3 bg-white px-7 py-5 rounded-2xl border border-[#E5E1D8] shadow-sm">
                <span className="text-4xl sm:text-5xl font-black text-[#8B7150] leading-none">250</span>
                <span className="text-xs sm:text-sm font-bold text-[#1E2824]">км радиус работы от баз снабжения</span>
              </div>
            </div>
          </div>

          {/* Right Column: Supply Schema matching Figma */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E1D8] shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E2824]">
                СХЕМА ЗОН СНАБЖЕНИЯ
              </span>
              <span className="text-xs text-[#5A6560] font-medium">Северо-Запад & Центр</span>
            </div>

            {/* Stylized Map View */}
            <div className="relative mt-6 h-72 sm:h-84 bg-[#F9F9F7] rounded-2xl border border-[#E5E1D8] overflow-hidden flex items-center justify-center p-6">
              {/* Concentric dashed zones */}
              <div className="absolute w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full border border-dashed border-[#8B7150]/35 animate-pulse" />
              <div className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full border border-dashed border-[#1E2824]/20" />

              {/* M-11 Highway */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="28%" y1="22%" x2="50%" y2="50%" stroke="#8B7150" strokeWidth="2.5" strokeDasharray="5 5" />
                <line x1="50%" y1="50%" x2="72%" y2="78%" stroke="#8B7150" strokeWidth="2.5" strokeDasharray="5 5" />
              </svg>

              {/* City Dots */}
              <div className="absolute top-[18%] left-[26%] flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#1E2824] text-white flex items-center justify-center shadow-md border-2 border-white">
                  <MapPin size={10} />
                </div>
                <span className="text-[11px] font-bold text-[#1E2824] mt-1.5 bg-white px-2.5 py-0.5 rounded shadow-sm border border-[#E5E1D8]">
                  Санкт-Петербург
                </span>
              </div>

              <div className="absolute top-[46%] left-[48%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#8B7150] text-white flex items-center justify-center shadow border-2 border-white">
                  <MapPin size={9} />
                </div>
                <span className="text-[11px] font-bold text-[#1E2824] mt-1 bg-white px-2 py-0.5 rounded shadow-sm border border-[#E5E1D8]">
                  Тверь
                </span>
              </div>

              <div className="absolute bottom-[18%] right-[25%] flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#1E2824] text-[#8B7150] flex items-center justify-center shadow-lg border-2 border-[#8B7150]">
                  <MapPin size={12} />
                </div>
                <span className="text-xs font-black text-[#1E2824] mt-1.5 bg-white px-3 py-1 rounded shadow border border-[#8B7150]/30">
                  Москва
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E5E1D8] text-center">
              <p className="text-xs text-[#5A6560] font-medium">
                Базы снабжения   /   Московская · Ленинградская · Тверская области
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
