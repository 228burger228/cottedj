import { assetUrl } from '../utils';

const FACTS = [
  { num: '01', title: 'Опыт с 2012 года', desc: 'Более 140 сданных домов в Московской и Ленинградской областях.' },
  { num: '02', title: 'Собственный технадзор', desc: 'Независимый инженерный контроль на каждом этапе по чек-листу из 84 пунктов.' },
  { num: '03', title: 'Прямые контракты с заводами', desc: 'Закупаем кирпич, бетон и арматуру напрямую у производителей со скидкой до 18%.' },
  { num: '04', title: 'Открытая стройка', desc: 'Доступ к объекту в любое время. Скрытые работы фиксируются фото- и видеоотчетами.' },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#FBFBFA]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
              О КОМПАНИИ
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight max-w-xl">
              Свой дом начинается с надежной команды
            </h2>
          </div>
          <p className="text-[#5A6560] max-w-md text-sm sm:text-base leading-relaxed">
            Собственная производственная база, техника и люди, которые отвечают за результат лично.
          </p>
        </div>

        {/* Grid with 4 facts and Team Builder Photo */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mt-14 sm:mt-18 items-center">
          <div className="lg:col-span-6 space-y-4">
            {FACTS.map((f) => (
              <div
                key={f.num}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex items-start gap-5"
              >
                <span className="text-[#8B7150] font-black text-xl tracking-wider shrink-0 mt-0.5">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-[#1E2824] font-bold text-base sm:text-lg leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-[#5A6560] text-xs sm:text-[13px] mt-1.5 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-[#E5E1D8] relative group">
            <img
              src={assetUrl('/images/extracted_298.jpeg')}
              alt="Команда инженеров и строителей на объекте"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs uppercase tracking-widest text-[#8B7150] font-bold block mb-1.5">
                Инженерный состав компании
              </span>
              <p className="text-white font-bold text-lg sm:text-xl">
                Штатные прорабы, конструкторы и собственный технадзор
              </p>
            </div>
          </div>
        </div>

        {/* 2 Wide Photos: Village & Warehouse */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 sm:mt-12">
          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm group border border-[#E5E1D8]">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-extrabold text-lg sm:text-xl">
                СВОЯ ТЕХНИКА. СВОЙ КОНТРОЛЬ.
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Никаких случайных бригад и скрытых подрядчиков
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm group border border-[#E5E1D8]">
            <img
              src={assetUrl('/images/Фото · Собственный склад материалов.png')}
              alt="Собственный склад"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-extrabold text-lg sm:text-xl">
                Собственный склад материалов
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Сухое охраняемое хранение, доставка длинномерами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
