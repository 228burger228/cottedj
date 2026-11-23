import { MapPin, Navigation, Truck } from 'lucide-react';

const CITIES = [
  { name: 'Санкт-Петербург', role: 'База снабжения СЗФО', desc: 'Ленинградская область до 250 км' },
  { name: 'Тверь', role: 'Промежуточный логистический хаб', desc: 'Тверская область и трасса М-11' },
  { name: 'Москва', role: 'Центральная база и склад', desc: 'Вся Московская область и Новая Москва' },
];

export default function Geography() {
  return (
    <section className="py-20 sm:py-28 bg-[#F0F0EB]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
          ГЕОГРАФИЯ И ЛОГИСТИКА
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-xl">
          Ближе, чем кажется.
          <br />
          <span className="text-forest font-semibold">Надежно, где бы вы ни строили.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12 sm:mt-16 items-center">
          {/* Map Visual Card matching Figma supply schema */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-light-border shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-light-border">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                СХЕМА ЗОН СНАБЖЕНИЯ
              </span>
              <span className="text-[11px] text-bronze font-semibold flex items-center gap-1.5">
                <Navigation size={13} /> 250 км охват
              </span>
            </div>

            {/* Stylized Map Area */}
            <div className="relative mt-8 h-80 sm:h-96 bg-[#F9F9F7] rounded-2xl border border-light-border overflow-hidden flex items-center justify-center p-6">
              {/* Concentric dashed zones */}
              <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full border border-dashed border-bronze/40 animate-pulse pointer-events-none" />
              <div className="absolute w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full border border-dashed border-forest/30 pointer-events-none" />

              {/* Highway M-11 Route Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="#8B7150" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#8B7150" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* City Markers */}
              {/* SPB */}
              <div className="absolute top-[16%] left-[28%] flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin size={11} />
                </div>
                <span className="text-xs font-bold text-forest-dark mt-1 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  Санкт-Петербург
                </span>
                <span className="text-[10px] text-sage font-medium">База снабжения</span>
              </div>

              {/* Tver */}
              <div className="absolute top-[46%] left-[48%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-bronze text-white flex items-center justify-center shadow-md border-2 border-white">
                  <MapPin size={9} />
                </div>
                <span className="text-xs font-bold text-forest-dark mt-1 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  Тверь
                </span>
                <span className="text-[10px] text-sage font-medium">Хаб М-11</span>
              </div>

              {/* Moscow */}
              <div className="absolute bottom-[16%] right-[26%] flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-forest text-bronze flex items-center justify-center shadow-xl border-2 border-bronze">
                  <MapPin size={13} />
                </div>
                <span className="text-xs font-black text-forest-dark mt-1 bg-white px-2.5 py-0.5 rounded shadow">
                  Москва & МО
                </span>
                <span className="text-[10px] text-bronze font-bold">Главный центр</span>
              </div>
            </div>
          </div>

          {/* Logistics Information */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-forest-dark text-base sm:text-lg font-medium leading-relaxed">
              Строим по всей Московской, Ленинградской и Тверской областям в радиусе до 250 км от баз снабжения.
            </p>
            <p className="text-sage text-sm sm:text-[15px] leading-relaxed">
              Собственная доставка длинномерами и манипуляторами. Координируем поставки с графиком работ, чтобы стройка не останавливалась ни на день.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-light-border shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-bronze block">
                  250 <span className="text-base font-bold text-forest-dark">км</span>
                </span>
                <p className="text-sage text-xs mt-2 font-medium">
                  радиус оперативной работы от баз снабжения
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-light-border shadow-sm">
                <span className="text-lg font-bold text-forest-dark flex items-center gap-2">
                  <Truck size={20} className="text-bronze" /> 3 базы
                </span>
                <p className="text-sage text-xs mt-2 font-medium">
                  Московская · Ленинградская · Тверская области
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
