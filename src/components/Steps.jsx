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
    <section id="steps" className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Этапы и гарантии</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight max-w-xl">
          От первой встречи — до новоселья
        </h2>
        <p className="text-sage mt-4 max-w-lg text-[15px] leading-relaxed">
          Согласовываем детали на каждом этапе. Вы всегда знаете, что происходит на стройке и за что платите.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-14">
          {STEPS_DATA.map((s, i) => (
            <div key={s.num} className="relative bg-white rounded-xl p-6 border border-light-border group">
              {i < STEPS_DATA.length - 1 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-light-border text-xl">→</span>
              )}
              <span className="text-bronze font-bold text-2xl">{s.num}</span>
              <h3 className="text-forest-dark font-bold text-[15px] mt-3 leading-snug">{s.title}</h3>
              <p className="text-sage text-[13px] mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantees bar */}
        <div className="mt-10 p-5 md:p-6 bg-forest rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <span className="text-white font-bold text-sm">25 лет гарантии на конструктив</span>
          <span className="text-white/60 text-sm">Поэтапная оплата</span>
          <span className="text-white/60 text-sm">Акты скрытых работ</span>
          <span className="text-white/60 text-sm">Личный кабинет 24/7</span>
        </div>
      </div>
    </section>
  );
}
