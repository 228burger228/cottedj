import { ArrowUpRight } from 'lucide-react';

const FEATURES = [
  { num: '01', title: 'Полный цикл строительства', desc: 'От анализа грунта и проекта до ландшафта и чистовой отделки.' },
  { num: '02', title: 'Фиксированная смета', desc: 'Стоимость закрепляется в договоре и не увеличивается в процессе.' },
  { num: '03', title: 'Видеонаблюдение 24/7', desc: 'Онлайн-трансляция стройплощадки в личном кабинете заказчика.' },
  { num: '04', title: 'Экскурсия на объекты', desc: 'Покажем 4 строящихся и сданных дома вживую до подписания договора.' },
];

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image 3.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-28 pb-12 md:pb-20">
        {/* Main headline */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
            Каменные коттеджи
            <br />
            <span className="text-stone">и современные</span>
            <br />
            загородные резиденции
            <br />
            <span className="font-medium text-white/90">под ключ</span>
          </h1>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 md:mt-12 px-7 py-3.5 bg-bronze text-white text-sm font-semibold rounded-lg hover:bg-bronze-light transition-colors group"
          >
            Обсудить строительство
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-20">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10"
            >
              <span className="text-bronze font-bold text-sm">{f.num}</span>
              <h3 className="text-white font-semibold text-[15px] mt-2 leading-snug">{f.title}</h3>
              <p className="text-white/70 text-[13px] mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
