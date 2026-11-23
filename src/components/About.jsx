import { assetUrl } from '../utils';

const FACTS = [
  { num: '01', title: 'Опыт с 2012 года', desc: 'Более 140 сданных домов в Московской и Ленинградской областях.' },
  { num: '02', title: 'Собственный технадзор', desc: 'Независимый инженерный контроль на каждом этапе по чек-листу из 84 пунктов.' },
  { num: '03', title: 'Прямые контракты с заводами', desc: 'Закупаем кирпич, бетон и арматуру напрямую у производителей со скидкой до 18%.' },
  { num: '04', title: 'Открытая стройка', desc: 'Доступ к объекту в любое время. Скрытые работы фиксируются фото- и видеоотчетами.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F9F9F7]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
          О КОМПАНИИ
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-2xl">
          Свой дом начинается с надежной команды
        </h2>
        <p className="text-sage mt-3.5 max-w-xl text-sm sm:text-[15px] leading-relaxed">
          Собственная производственная база, техника и люди, которые отвечают за результат лично.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 sm:mt-16">
          {FACTS.map((f) => (
            <div
              key={f.num}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-light-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <span className="text-bronze font-black text-xl tracking-wider block">
                {f.num}
              </span>
              <h3 className="text-forest-dark font-bold text-base mt-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-sage text-xs sm:text-[13px] mt-2 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Wide Production Photos */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md group border border-light-border">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка поселка"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block mb-1">
                Генеральный подряд
              </span>
              <p className="text-white font-extrabold text-lg sm:text-xl leading-snug">
                Своя техника. Свой контроль.
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Никаких случайных бригад и скрытых субподрядчиков
              </p>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md group border border-light-border">
            <img
              src={assetUrl('/images/Фото · Собственный склад материалов.png')}
              alt="Собственный склад материалов"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block mb-1">
                Логистика и снабжение
              </span>
              <p className="text-white font-extrabold text-lg sm:text-xl leading-snug">
                Собственный склад материалов
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Сухое охраняемое хранение, доставка длинномерами и манипуляторами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
