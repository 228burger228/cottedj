import { assetUrl } from '../utils';

const FACTS = [
  { num: '01', title: 'Опыт с 2012 года', desc: 'Более 140 сданных домов в Московской и Ленинградской областях.' },
  { num: '02', title: 'Собственный технадзор', desc: 'Независимый инженерный контроль на каждом этапе по чек-листу из 84 пунктов.' },
  { num: '03', title: 'Прямые контракты с заводами', desc: 'Закупаем кирпич, бетон и арматуру напрямую у производителей со скидкой до 18%.' },
  { num: '04', title: 'Открытая стройка', desc: 'Доступ к объекту в любое время. Скрытые работы фиксируются фото- и видеоотчетами.' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">О компании</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight max-w-lg">
          Свой дом начинается с надежной команды
        </h2>
        <p className="text-sage mt-4 max-w-lg text-[15px] leading-relaxed">
          Собственная производственная база, техника и люди, которые отвечают за результат лично.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-14">
          {FACTS.map((f) => (
            <div key={f.num} className="bg-white rounded-xl p-6 border border-light-border">
              <span className="text-bronze font-bold text-sm">{f.num}</span>
              <h3 className="text-forest-dark font-bold text-[15px] mt-3 leading-snug">{f.title}</h3>
              <p className="text-sage text-[13px] mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Production strip */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={assetUrl('/images/Фото · Комплексная застройка поселка.png')}
              alt="Комплексная застройка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold text-sm uppercase tracking-wider">Своя техника. Свой контроль.</p>
              <p className="text-white/80 text-xs mt-1">Никаких случайных бригад и скрытых подрядчиков</p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={assetUrl('/images/Фото · Собственный склад материалов.png')}
              alt="Собственный склад"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold text-sm uppercase tracking-wider">Собственный склад материалов</p>
              <p className="text-white/80 text-xs mt-1">Сухое охраняемое хранение, доставка длинномерами</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
