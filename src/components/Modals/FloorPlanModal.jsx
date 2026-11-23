import { useState } from 'react';
import { X, Bed, Bath, Maximize2, Layers } from 'lucide-react';
import { assetUrl } from '../../utils';

export default function FloorPlanModal({ isOpen, onClose, project }) {
  const [activeFloor, setActiveFloor] = useState(1);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-light-border max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ash hover:text-forest-dark transition-colors rounded-full hover:bg-cream"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-forest text-white text-xs font-bold rounded-md">
            {project.area}
          </span>
          <span className="text-xs uppercase tracking-wider text-bronze font-semibold">
            Планировочные решения
          </span>
        </div>

        <h3 className="text-2xl font-bold text-forest-dark mt-2">
          {project.name}
        </h3>
        <p className="text-sage text-sm mt-1">{project.specs} · {project.feature}</p>

        {/* Floor switcher tabs */}
        <div className="flex gap-2 mt-6 border-b border-light-border pb-3">
          <button
            onClick={() => setActiveFloor(1)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeFloor === 1 ? 'bg-forest text-white' : 'bg-cream text-sage hover:bg-stone'
            }`}
          >
            <Layers size={14} /> 1 этаж (Гостиная, Кухня, Терраса)
          </button>
          <button
            onClick={() => setActiveFloor(2)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeFloor === 2 ? 'bg-forest text-white' : 'bg-cream text-sage hover:bg-stone'
            }`}
          >
            <Layers size={14} /> 2 этаж (Мастер-спальни, Санузлы)
          </button>
        </div>

        {/* Floor plan layout representation */}
        <div className="mt-6 bg-[#F9F9F7] rounded-xl p-6 border border-light-border/70 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden border border-light-border bg-white flex items-center justify-center p-4 relative group">
            <img
              src={assetUrl(project.img)}
              alt={project.name}
              className="w-full h-full object-cover rounded-md opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-forest/40 flex items-center justify-center text-white text-center p-4 rounded-lg">
              <div>
                <p className="text-xs uppercase tracking-widest text-bronze font-semibold">Схема {activeFloor} этажа</p>
                <p className="font-bold text-base mt-1">
                  {activeFloor === 1 ? 'Общая зона: 142 м²' : 'Приватная зона: 103 м²'}
                </p>
                <p className="text-xs text-white/80 mt-1">Высота потолков — 3.4 м</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-3">
            <h4 className="font-bold text-forest-dark text-sm border-b border-light-border pb-2">
              Экспликация помещений ({activeFloor} этаж):
            </h4>
            {activeFloor === 1 ? (
              <ul className="text-xs text-sage space-y-2">
                <li className="flex justify-between"><span>01. Холл и гардеробная</span><span className="font-semibold text-forest-dark">16.4 м²</span></li>
                <li className="flex justify-between"><span>02. Кухня-гостиная с камином</span><span className="font-semibold text-forest-dark">54.8 м²</span></li>
                <li className="flex justify-between"><span>03. Гостевая спальня / кабинет</span><span className="font-semibold text-forest-dark">18.2 м²</span></li>
                <li className="flex justify-between"><span>04. Санузел гостевой</span><span className="font-semibold text-forest-dark">4.6 м²</span></li>
                <li className="flex justify-between"><span>05. Котельная и постирочная</span><span className="font-semibold text-forest-dark">9.8 м²</span></li>
                <li className="flex justify-between"><span>06. Крытая терраса с барбекю</span><span className="font-semibold text-forest-dark">38.2 м²</span></li>
              </ul>
            ) : (
              <ul className="text-xs text-sage space-y-2">
                <li className="flex justify-between"><span>01. Мастер-спальня с гардеробной</span><span className="font-semibold text-forest-dark">26.5 м²</span></li>
                <li className="flex justify-between"><span>02. Мастер-ванная комната</span><span className="font-semibold text-forest-dark">10.2 м²</span></li>
                <li className="flex justify-between"><span>03. Спальня детская №1</span><span className="font-semibold text-forest-dark">19.4 м²</span></li>
                <li className="flex justify-between"><span>04. Спальня детская №2</span><span className="font-semibold text-forest-dark">18.7 м²</span></li>
                <li className="flex justify-between"><span>05. Санузел второго этажа</span><span className="font-semibold text-forest-dark">7.1 м²</span></li>
                <li className="flex justify-between"><span>06. Балкон / лаунж-зона</span><span className="font-semibold text-forest-dark">12.0 м²</span></li>
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-light-border">
          <p className="text-xs text-sage italic">
            Планировку можно бесплатно скорректировать под состав вашей семьи.
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-forest text-white text-xs font-semibold rounded-lg hover:bg-forest/90 transition-colors"
          >
            Закрыть планировки
          </button>
        </div>
      </div>
    </div>
  );
}
