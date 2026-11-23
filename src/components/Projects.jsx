import { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { assetUrl } from '../utils';

const CATEGORIES = [
  { label: 'Теплая керамика', count: 'Более 40 проектов' },
  { label: 'Газобетон премиум', count: 'Более 25 проектов' },
  { label: 'Монолит & Hi-Tech', count: 'Более 18 проектов' },
  { label: 'Комбинированные фасады', count: 'Более 12 проектов' },
  { label: 'Усадьбы от 400 м²', count: 'Более 10 проектов' },
];

const HOUSES = [
  {
    name: 'Риверсайд · 245',
    area: '245 м²',
    img: '/images/Фото проекта · Риверсайд · 245.png',
    specs: '2 этажа  |  4 спальни  |  3 санузла',
    feature: 'Гараж на 2 авто',
    time: 'Коробка дома — 4,5 месяца',
  },
  {
    name: 'Лесной · 218',
    area: '218 м²',
    img: '/images/Фото проекта · Лесной · 218.png',
    specs: '2 этажа  |  4 спальни  |  3 санузла',
    feature: 'Крытая терраса 32 м²',
    time: 'Коробка дома — 4 месяца',
  },
  {
    name: 'Горизонт · 312',
    area: '312 м²',
    img: '/images/Фото проекта · Горизонт · 312.png',
    specs: '2 этажа  |  5 спален  |  4 санузла',
    feature: 'Гараж на 2 авто',
    time: 'Коробка дома — 5 месяцев',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Наши проекты</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark leading-tight">
          Найдите свой будущий дом
        </h2>
        <p className="text-sage mt-3 max-w-lg text-[15px]">
          Архитектура, проверенная жизнью. Каждый проект адаптируем под ваш участок.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mt-8 md:mt-10">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                active === i
                  ? 'bg-forest text-white'
                  : 'bg-cream text-sage hover:bg-stone'
              }`}
            >
              {cat.label}
              <span className="block text-[11px] font-normal mt-0.5 opacity-70">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* House cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {HOUSES.map((house) => (
            <div key={house.name} className="bg-cream rounded-2xl overflow-hidden group">
              <div className="relative h-52 md:h-56 overflow-hidden">
                <img
                  src={assetUrl(house.img)}
                  alt={house.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-white/90 text-forest-dark text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                  {house.area}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-forest-dark">{house.name}</h3>
                <p className="text-sage text-[13px] mt-2">{house.specs}</p>
                <p className="text-sage text-[13px]">{house.feature}</p>
                <p className="text-bronze text-[13px] font-medium mt-1">{house.time}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-forest hover:text-forest/80 transition-colors"
                  >
                    Смотреть планировки <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-sage hover:text-forest-dark transition-colors"
                  >
                    Скачать смету PDF <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sage text-sm mt-8 text-center italic">
          Все проекты можно адаптировать: изменить планировку, фасады и состав инженерных систем.
        </p>
      </div>
    </section>
  );
}
