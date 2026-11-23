import { ArrowRight, ShieldCheck, CreditCard, FileCheck2, Smartphone } from 'lucide-react';

const STEPS_DATA = [
  { num: '01', title: 'Выезд на участок и геология', desc: 'Бурение скважин, анализ несущей способности грунта, топосъемка.' },
  { num: '02', title: 'Проект и смета', desc: 'Фиксация спецификации материалов и графика платежей.' },
  { num: '03', title: 'Фундаментные работы', desc: 'Земляные работы, дренаж, песчаная подушка, заливка монолитной плиты.' },
  { num: '04', title: 'Стены и перекрытия', desc: 'Кладка несущих стен, армопояса, межэтажные перекрытия.' },
  { num: '05', title: 'Теплый контур и кровля', desc: 'Стропильная система, утепление, окна и двери.' },
  { num: '06', title: 'Инженерия и сдача', desc: 'Разводка коммуникаций, пусконаладка котельной, акт приема-передачи.' },
];

export default function Steps() {
  return (
    <section id="steps" className="py-28 sm:py-36 bg-[#F4F2EE]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
          ЭТАПЫ И ГАРАНТИИ
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight max-w-xl">
          От первой встречи — до новоселья
        </h2>
        <p className="text-[#5A6560] mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed">
          Согласовываем детали на каждом этапе. Вы всегда знаете, что происходит на стройке и за что платите.
        </p>

        {/* 6 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-18">
          {STEPS_DATA.map((s, i) => (
            <div
              key={s.num}
              className="relative bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E1D8] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B7150] font-black text-2xl tracking-wider">
                    {s.num}
                  </span>
                  {i < STEPS_DATA.length - 1 && (
                    <ArrowRight size={19} className="text-[#8E9691]/40 group-hover:text-[#8B7150] group-hover:translate-x-1 transition-all" />
                  )}
                </div>
                <h3 className="text-[#1E2824] font-bold text-lg sm:text-xl mt-5 leading-snug group-hover:text-[#8B7150] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#5A6560] text-xs sm:text-[13px] mt-3 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees bar */}
        <div className="mt-12 sm:mt-14 p-7 sm:p-9 bg-[#1A2420] rounded-3xl text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8B7150]/20 rounded-2xl text-[#8B7150] shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl block">25 лет гарантии на конструктив</span>
              <span className="text-stone-300/80 text-xs sm:text-sm">Юридическая гарантия закреплена в официальном договоре</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 w-full lg:w-auto text-xs sm:text-sm font-semibold text-stone-200 border-t lg:border-t-0 lg:border-l border-white/15 pt-5 lg:pt-0 lg:pl-10">
            <div className="flex items-center gap-2.5">
              <CreditCard size={18} className="text-[#8B7150] shrink-0" />
              <span>Поэтапная оплата</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FileCheck2 size={18} className="text-[#8B7150] shrink-0" />
              <span>Акты скрытых работ</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Smartphone size={18} className="text-[#8B7150] shrink-0" />
              <span>Личный кабинет 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
