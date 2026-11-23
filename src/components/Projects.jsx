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
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 4,5 месяца',
    },
    {
      name: 'Лесной · 218',
      area: '218 м²',
      img: '/images/Фото проекта · Лесной · 218.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Крытая терраса 32 м²',
      time: 'Коробка дома — 4 месяца',
    },
    {
      name: 'Горизонт · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа   |   5 спален   |   4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
  ],
  aerated: [
    {
      name: 'Дом в соснах · 196',
      area: '196 м²',
      img: '/images/Объект · Дом в соснах.png',
      specs: '2 этажа   |   3 спальни   |   2 санузла',
      feature: 'Панорамное остекление',
      time: 'Коробка дома — 3,5 месяца',
    },
    {
      name: 'Семейный · 245',
      area: '245 м²',
      img: '/images/Объект · Семейный коттедж.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Навес на 2 авто',
      time: 'Коробка дома — 4 месяца',
    },
    {
      name: 'Лесной · 218',
      area: '218 м²',
      img: '/images/Фото проекта · Лесной · 218.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Крытая терраса 32 м²',
      time: 'Коробка дома — 4 месяца',
    },
  ],
  monolith: [
    {
      name: 'Горизонт · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа   |   5 спален   |   4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
    {
      name: 'Современная резиденция · 420',
      area: '420 м²',
      img: '/images/Объект · Современная резиденция.png',
      specs: '2 этажа   |   6 спален   |   5 санузлов',
      feature: 'Бассейн и SPA-комплекс',
      time: 'Коробка дома — 6 месяцев',
    },
    {
      name: 'Риверсайд · 245',
      area: '245 м²',
      img: '/images/Фото проекта · Риверсайд · 245.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 4,5 месяца',
    },
  ],
  combined: [
    {
      name: 'Лесной квартал · 218',
      area: '218 м²',
      img: '/images/Объект · Лесной квартал.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Фасад планкен + клинкер',
      time: 'Коробка дома — 4 месяца',
    },
    {
      name: 'Семейный коттедж · 245',
      area: '245 м²',
      img: '/images/Объект · Семейный коттедж.png',
      specs: '2 этажа   |   4 спальни   |   3 санузла',
      feature: 'Комбинированный кирпич',
      time: 'Коробка дома — 4,5 месяца',
    },
    {
      name: 'Горизонт · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа   |   5 спален   |   4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
  ],
  estates: [
    {
      name: 'Резиденция КП Миллениум · 380',
      area: '380 м²',
      img: '/images/image 7.png',
      specs: '2 этажа   |   5 спален   |   5 санузлов',
      feature: 'SPA-зона и гараж на 3 авто',
      time: 'Срок реализации — 7 месяцев',
    },
    {
      name: 'Современная резиденция · 420',
      area: '420 м²',
      img: '/images/Объект · Современная резиденция.png',
      specs: '2 этажа   |   6 спален   |   5 санузлов',
      feature: 'Бассейн и террасы 90 м²',
      time: 'Срок реализации — 7 месяцев',
    },
    {
      name: 'Горизонт Grand · 312',
      area: '312 м²',
      img: '/images/Фото проекта · Горизонт · 312.png',
      specs: '2 этажа   |   5 спален   |   4 санузла',
      feature: 'Гараж на 2 авто',
      time: 'Коробка дома — 5 месяцев',
    },
  ],
};

export default function Projects({ onOpenFloorPlan, onOpenEstimate }) {
  const [activeTab, setActiveTab] = useState('ceramics');
  const projects = ALL_PROJECTS[activeTab] || ALL_PROJECTS.ceramics;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F4F2EE]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
          НАШИ ПРОЕКТЫ
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight">
          Найдите свой будущий дом
        </h2>
        <p className="text-[#5A6560] mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
          Архитектура, проверенная жизнью. Каждый проект адаптируем под ваш участок.
        </p>

        {/* 5 Category tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-12 sm:mt-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                activeTab === cat.id
                  ? 'bg-[#1E2824] text-white border-[#1E2824] shadow-md transform -translate-y-0.5'
                  : 'bg-white text-[#1E2824] border-[#E5E1D8] hover:border-[#8B7150]/50 hover:shadow-sm'
              }`}
            >
              <span className="block text-sm sm:text-[15px] font-bold leading-snug">
                {cat.label}
              </span>
              <span className={`block text-[11px] mt-1.5 font-medium ${activeTab === cat.id ? 'text-stone-300' : 'text-[#8E9691]'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 3 House Cards — Luxury Architecture Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {projects.map((house) => (
            <div
              key={house.name}
              className="bg-white rounded-[26px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col border border-[#E5E1D8] group transform hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-76 overflow-hidden">
                <img
                  src={assetUrl(house.img)}
                  alt={house.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-[#1E2824] text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md border border-black/5">
                  {house.area}
                </span>
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E2824] group-hover:text-[#8B7150] transition-colors leading-snug">
                    {house.name}
                  </h3>
                  <p className="text-[#5A6560] text-xs sm:text-[13px] mt-3 font-medium">
                    {house.specs}
                  </p>
                  <p className="text-[#5A6560] text-xs sm:text-[13px] mt-1">
                    {house.feature}
                  </p>
                  <p className="text-[#8B7150] text-xs sm:text-[13px] font-bold mt-3">
                    {house.time}
                  </p>
                </div>

                <div className="pt-7 mt-7 border-t border-[#E5E1D8]/80 flex flex-col items-center gap-3.5">
                  {/* Primary Solid Bronze Button */}
                  <button
                    onClick={() => onOpenFloorPlan?.(house)}
                    className="w-full h-[50px] bg-[#8B7150] hover:bg-[#9E825E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_6px_20px_rgba(139,113,80,0.25)] hover:shadow-[0_10px_30px_rgba(139,113,80,0.4)]"
                  >
                    Смотреть планировки <ArrowUpRight size={16} />
                  </button>

                  {/* Secondary Text Link with Arrow Down */}
                  <button
                    onClick={() => onOpenEstimate?.(house)}
                    className="text-[#8B7150] hover:text-[#1E2824] text-xs sm:text-[13px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    Скачать смету PDF <ArrowDown size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#8E9691] text-xs sm:text-sm mt-12 text-center italic">
          Все проекты можно адаптировать: изменить планировку, фасады и состав инженерных систем.
        </p>
      </div>
    </section>
  );
}
