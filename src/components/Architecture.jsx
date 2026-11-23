import { ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../utils';

const SECTIONS = [
  {
    abbr: 'АР',
    title: 'Архитектурный раздел',
    desc: 'Посадка дома по сторонам света, инсоляция, эргономика комнат. Создаем пространство под привычки вашей семьи.',
    img: '/images/Фото · Архитектурный проект.png',
  },
  {
    abbr: 'КР',
    title: 'Конструктивные решения',
    desc: 'Расчет несущих нагрузок, армирование, гидроизоляция фундамента. Надежность, подтвержденная расчетами.',
    img: '/images/Фото · Армирование фундамента.png',
  },
  {
    abbr: 'ОВ / ВК / ЭОМ',
    title: 'Инженерные сети',
    desc: 'Котельная, отопление водяным полом, приточно-вытяжная вентиляция. Комфорт, встроенный в архитектуру.',
    img: '/images/Фото · Инженерные сети.png',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">
          Индивидуальное архитектурное бюро
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight max-w-xl">
          Продуманный проект. Безупречное исполнение.
        </h2>
        <p className="text-sage mt-4 max-w-lg text-[15px] leading-relaxed">
          Архитекторы, конструкторы и инженеры работают над вашим домом вместе.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 md:mt-14">
          {SECTIONS.map((s) => (
            <div key={s.abbr} className="bg-cream rounded-2xl overflow-hidden group">
              <div className="h-48 md:h-52 overflow-hidden">
                <img
                  src={assetUrl(s.img)}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-forest text-white text-xs font-bold rounded-md">
                  {s.abbr}
                </span>
                <h3 className="text-forest-dark font-bold text-base mt-3">{s.title}</h3>
                <p className="text-sage text-[13px] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors"
          >
            Записаться на встречу с архитектором <ArrowUpRight size={16} />
          </a>
          <span className="text-sage text-sm">От эскизной концепции до полной рабочей документации</span>
        </div>
      </div>
    </section>
  );
}
