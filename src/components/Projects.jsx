import { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { assetUrl } from '../utils';

const CATEGORIES = [
  { id: 'ceramics', label: 'Теплая керамика', count: 'Более 40 проектов' },
  { id: 'aerated', label: 'Газобетон премиум', count: 'Более 25 проектов' },
  { id: 'monolith', label: 'Монолит & Hi-Tech', count: 'Более 18 проектов' },
  { id: 'combined', label: 'Комбинированные фасады', count: 'Более 12 проектов' },
  { id: 'estates', label: 'Усадьбы от 400 м²', count: 'Более 10 проектов' },
];

const ALL_PROJECTS = {
  ceramics: [
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
  ],
  aerated: [
    {
      name: 'Дом в соснах · 196',
      area: '196 м²',
      img: '/images/Объект · Дом в соснах.png',
      specs: '2 этажа  |  3 спальни  |  2 санузла',
      feature: 'Панорамное остекление',
      time: 'Коробка дома — 3,5 месяца',
    },
    {
      name: 'Семейный · 245',
      area: '245 м²',
      img: '/images/Объект · Семейный коттедж.png',
      specs: '2 этажа  |  4 спальни  |  3 санузла',
      feature: 'Навес на 2 авто',
      time: 'Коробка дома — 4 месяца',
    },
    {
      name: 'Лесной · 218',
      area: '218 м²',
      img: '/images/Фото проекта · Лесной · 218.png',
      specs: '2 этажа  |  4 спальни  |  3 санузла',
      feature: 'Крытая терраса 32 м²',
      time: 'Коробка дома — 4 месяца',
    },
  ],
  monolith: [
    {
      name: 'Горизонт · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа  |  5 спален  |  4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
    {
      name: 'Современная резиденция · 420',
      area: '420 м²',
      img: '/images/Объект · Современная резиденция.png',
      specs: '2 этажа  |  6 спален  |  5 санузлов',
      feature: 'Бассейн и SPA-комплекс',
      time: 'Коробка дома — 6 месяцев',
    },
    {
      name: 'Риверсайд · 245',
      area: '245 м²',
      img: '/images/Фото проекта · Риверсайд · 245.png',
      specs: '2 этажа  |  4 спальни  |  3 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 4,5 месяца',
    },
  ],
  combined: [
    {
      name: 'Лесной квартал · 218',
      area: '218 м²',
      img: '/images/Объект · Лесной квартал.png',
      specs: '2 этажа  |  4 спальни  |  3 санузла',
      feature: 'Фасад планкен + клинкер',
      time: 'Коробка дома — 4 месяца',
    },
    {
      name: 'Семейный коттедж · 245',
      area: '245 м²',
      img: '/images/Объект · Семейный коттедж.png',
      specs: '2 этажа  |  4 спальни  |  3 санузла',
      feature: 'Комбинированный кирпич',
      time: 'Коробка дома — 4,5 месяца',
    },
    {
      name: 'Горизонт · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа  |  5 спален  |  4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
  ],
  estates: [
    {
      name: 'Резиденция КП Миллениум · 380',
      area: '380 м²',
      img: '/images/image 7.png',
      specs: '2 этажа  |  5 спален  |  5 санузлов',
      feature: 'SPA-зона и гараж на 3 авто',
      time: 'Срок реализации — 7 месяцев',
    },
    {
      name: 'Современная резиденция · 420',
      area: '420 м²',
      img: '/images/Объект · Современная резиденция.png',
      specs: '2 этажа  |  6 спален  |  5 санузлов',
      feature: 'Бассейн и террасы 90 м²',
      time: 'Срок реализации — 7 месяцев',
    },
    {
      name: 'Горизонт Grand · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа  |  5 спален  |  4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
  ],
};

export default function Projects({ onOpenFloorPlan, onOpenEstimate }) {
  const [activeTab, setActiveTab] = useState('ceramics');
  const projects = ALL_PROJECTS[activeTab] || ALL_PROJECTS.ceramics;

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F0F0EB]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
          НАШИ ПРОЕКТЫ
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
          Найдите свой будущий дом
        </h2>
        <p className="text-sage mt-3 max-w-xl text-sm sm:text-[15px] leading-relaxed">
          Архитектура, проверенная жизнью. Каждый проект адаптируем под ваш участок.
        </p>

        {/* 5 Category tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10 sm:mt-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === cat.id
                  ? 'bg-forest text-white border-forest shadow-md'
                  : 'bg-white/80 text-forest-dark border-light-border hover:bg-white hover:border-bronze/40'
              }`}
            >
              <span className="block text-[13px] sm:text-sm font-bold leading-snug">
                {cat.label}
              </span>
              <span className={`block text-[11px] mt-1 ${activeTab === cat.id ? 'text-stone' : 'text-sage'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 3 House Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {projects.map((house) => (
            <div
              key={house.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-light-border group"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={assetUrl(house.img)}
                  alt={house.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-white/95 text-forest-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm">
                  {house.area}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-forest-dark group-hover:text-bronze transition-colors">
                    {house.name}
                  </h3>
                  <p className="text-sage text-xs sm:text-[13px] mt-2 font-medium">
                    {house.specs}
                  </p>
                  <p className="text-sage text-xs sm:text-[13px]">
                    {house.feature}
                  </p>
                  <p className="text-bronze text-xs sm:text-[13px] font-bold mt-2.5">
                    {house.time}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-light-border/60 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenFloorPlan?.(house)}
                    className="flex-1 py-2.5 px-3 bg-bronze text-white text-xs font-bold rounded-lg hover:bg-bronze-light transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    Смотреть планировки <ArrowUpRight size={14} />
                  </button>
                  <button
                    onClick={() => onOpenEstimate?.(house)}
                    className="flex-1 py-2.5 px-3 border border-light-border hover:border-forest text-forest-dark text-xs font-bold rounded-lg hover:bg-cream transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Скачать смету PDF <ArrowDown size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sage text-xs sm:text-sm mt-8 text-center italic">
          Все проекты можно адаптировать: изменить планировку, фасады и состав инженерных систем.
        </p>
      </div>
    </section>
  );
}
