import { assetUrl } from '../utils';

const FACTS = [
  { num: '01', title: 'Опыт с 2012 года', desc: 'Более 140 сданных домов в Московской и Ленинградской областях.' },
  { num: '02', title: 'Собственный технадзор', desc: 'Независимый инженерный контроль на каждом этапе по чек-листу из 84 пунктов.' },
  { num: '03', title: 'Прямые контракты с заводами', desc: 'Закупаем кирпич, бетон и арматуру напрямую у производителей со скидкой до 18%.' },
  { num: '04', title: 'Открытая стройка', desc: 'Доступ к объекту в любое время. Скрытые работы фиксируются фото- и видеоотчетами.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F9F9F9]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              О КОМПАНИИ
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-xl">
              Свой дом начинается с надежной команды
            </h2>
          </div>
          <p className="text-sage max-w-md text-xs sm:text-sm leading-relaxed">
            Собственная производственная база, техника и люди, которые отвечают за результат лично.
          </p>
        </div>

        {/* Grid with 4 facts and Team Builder Photo */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12 sm:mt-16 items-center">
          <div className="lg:col-span-6 space-y-4">
            {FACTS.map((f) => (
              <div
                key={f.num}
                className="bg-white rounded-xl p-5 sm:p-6 border border-light-border shadow-sm hover:shadow-md transition-all flex items-start gap-5"
              >
                <span className="text-bronze font-black text-xl tracking-wider shrink-0 mt-0.5">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-forest-dark font-bold text-sm sm:text-base leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sage text-xs sm:text-[13px] mt-1.5 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 h-80 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-light-border relative group">
            <img
              src={assetUrl('/images/extracted_298.jpeg')}
              alt="Команда инженеров и строителей на объекте"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block mb-1">
                Инженерный состав компании
              </span>
              <p className="text-white font-bold text-base sm:text-lg">
                Штатные прорабы, конструкторы и собственный технадзор
              </p>
            </div>
          </div>
        </div>

        {/* 2 Wide Photos: Village & Warehouse */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm group border border-light-border">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-extrabold text-base sm:text-lg">
                СВОЯ ТЕХНИКА. СВОЙ КОНТРОЛЬ.
              </p>
              <p className="text-white/80 text-xs mt-1">
                Никаких случайных бригад и скрытых подрядчиков
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm group border border-light-border">
            <img
              src={assetUrl('/images/Фото · Собственный склад материалов.png')}
              alt="Собственный склад"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-extrabold text-base sm:text-lg">
                Собственный склад материалов
              </p>
              <p className="text-white/80 text-xs mt-1">
                Сухое охраняемое хранение, доставка длинномерами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
