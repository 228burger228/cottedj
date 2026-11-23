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
    <section className="relative overflow-hidden min-h-[92vh] flex items-end">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${assetUrl('/images/image 3.png')}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0A140F]/90" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 pt-32 sm:pt-40 pb-12 sm:pb-16 w-full">
        {/* Main headline */}
        <div className="max-w-3xl">
          <div className="inline-block mb-3 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-stone">
            Премиальное загородное домостроение
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.08] tracking-tight">
            Каменные коттеджи
            <br />
            <span className="text-stone font-light">и современные</span>
            <br />
            загородные резиденции
            <br />
            <span className="font-semibold text-white/95">под ключ</span>
          </h1>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onOpenConsultation?.("Обсудить строительство коттеджа")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-bronze text-white text-sm font-bold rounded-lg hover:bg-bronze-light transition-all group shadow-lg hover:shadow-xl cursor-pointer"
            >
              Обсудить строительство
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-lg backdrop-blur-md border border-white/20 transition-colors"
            >
              Смотреть проекты
            </a>
          </div>
        </div>

        {/* 4 Feature cards matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-20">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 hover:border-white/30 transition-all hover:-translate-y-1 group"
            >
              <span className="text-bronze font-extrabold text-base tracking-wider block">
                {f.num}
              </span>
              <h3 className="text-white font-bold text-[15px] mt-2.5 leading-snug group-hover:text-stone transition-colors">
                {f.title}
              </h3>
              <p className="text-white/75 text-xs sm:text-[13px] mt-2 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
