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
    <section className="relative overflow-hidden min-h-[944px] flex items-end">
      {/* Background image & gradient overlay matching Figma */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${assetUrl('/images/image 3.png')}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0A140F]/85" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 pt-36 pb-14 w-full">
        {/* Main headline matching Figma coordinates and typography */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.12] tracking-tight">
            Каменные коттеджи
            <br />
            <span className="font-light text-white/90">и современные</span>
            <br />
            загородные резиденции
            <br />
            <span className="font-normal text-white/95">под ключ</span>
          </h1>

          <div className="mt-8 sm:mt-10">
            <button
              onClick={() => onOpenConsultation?.("Обсудить строительство коттеджа")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-bronze text-white text-sm font-semibold rounded-md hover:bg-bronze-light transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              Обсудить строительство
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Feature Columns with top white hairline border — EXACT FIGMA REPRODUCTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-16 sm:mt-24">
          {FEATURES.map((f) => (
            <div key={f.num} className="border-t border-white/40 pt-4">
              <div className="flex items-baseline gap-3">
                <span className="text-white/80 font-bold text-sm tracking-wider">
                  {f.num}
                </span>
                <h3 className="text-white font-bold text-[15px] leading-snug">
                  {f.title}
                </h3>
              </div>
              <p className="text-white/70 text-xs sm:text-[13px] mt-2 pl-7 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
