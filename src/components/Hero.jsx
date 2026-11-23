import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const FEATURES = [
  { num: '01', title: 'Полный цикл строительства', desc: 'От анализа грунта и проекта до ландшафта и чистовой отделки.' },
  { num: '02', title: 'Фиксированная смета', desc: 'Стоимость закрепляется в договоре и не увеличивается в процессе.' },
  { num: '03', title: 'Видеонаблюдение 24/7', desc: 'Онлайн-трансляция стройплощадки в личном кабинете заказчика.' },
  { num: '04', title: 'Экскурсия на объекты', desc: 'Покажем 4 строящихся и сданных дома вживую до подписания договора.' },
];

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative overflow-hidden min-h-[900px] lg:min-h-screen flex flex-col justify-end">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.01]"
          style={{ backgroundImage: `url('${assetUrl('/images/image 3.png')}')` }}
        />
        {/* Multilayered luxury gradient for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1612]/80 via-[#0D1612]/45 to-[#0D1612]/95" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0D1612]/30 to-[#0D1612]/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-16 sm:pb-20 w-full">
        {/* Main headline */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-sm">
            Каменные коттеджи
            <br />
            <span className="font-light text-stone-200">и современные</span>
            <br />
            загородные резиденции
            <br />
            <span className="font-semibold text-white/95">под ключ</span>
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation?.("Обсудить строительство коттеджа")}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-bronze hover:bg-bronze-light text-white text-sm sm:text-base font-bold rounded-2xl transition-all duration-300 shadow-[0_12px_32px_rgba(139,113,80,0.4)] hover:shadow-[0_16px_45px_rgba(139,113,80,0.6)] transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Обсудить строительство</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Feature Columns with top white hairline border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-16 sm:mt-24 border-t border-white/20 pt-8">
          {FEATURES.map((f) => (
            <div key={f.num} className="flex flex-col">
              <div className="flex items-baseline gap-3">
                <span className="text-[#8B7150] font-black text-sm tracking-widest">
                  {f.num}
                </span>
                <h3 className="text-white font-bold text-[15px] leading-snug">
                  {f.title}
                </h3>
              </div>
              <p className="text-stone-300/85 text-xs sm:text-[13px] mt-2 pl-7 leading-relaxed font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
