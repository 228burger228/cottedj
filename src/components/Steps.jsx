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
    <section id="steps" className="py-20 sm:py-28 bg-[#F0F0EB]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
          ЭТАПЫ И ГАРАНТИИ
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-xl">
          От первой встречи — до новоселья
        </h2>
        <p className="text-sage mt-3.5 max-w-xl text-sm sm:text-[15px] leading-relaxed">
          Согласовываем детали на каждом этапе. Вы всегда знаете, что происходит на стройке и за что платите.
        </p>

        {/* 6 Steps Grid matching Figma */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
          {STEPS_DATA.map((s, i) => (
            <div
              key={s.num}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-light-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-bronze font-black text-2xl tracking-wider">
                    {s.num}
                  </span>
                  {i < STEPS_DATA.length - 1 && (
                    <ArrowRight size={18} className="text-ash/40 group-hover:text-bronze group-hover:translate-x-1 transition-all" />
                  )}
                </div>
                <h3 className="text-forest-dark font-bold text-base sm:text-lg mt-4 leading-snug group-hover:text-bronze transition-colors">
                  {s.title}
                </h3>
                <p className="text-sage text-xs sm:text-[13px] mt-2.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees bar */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 bg-[#28332F] rounded-2xl text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md border border-[#3A4A40]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-bronze/20 rounded-xl text-bronze">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg block">25 лет гарантии на конструктив</span>
              <span className="text-stone/75 text-xs">Юридическая гарантия закреплена в официальном договоре</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-auto text-xs sm:text-sm font-semibold text-stone/90 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-2">
              <CreditCard size={16} className="text-bronze shrink-0" />
              <span>Поэтапная оплата</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 size={16} className="text-bronze shrink-0" />
              <span>Акты скрытых работ</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={16} className="text-bronze shrink-0" />
              <span>Личный кабинет 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
