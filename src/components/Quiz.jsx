import { useState } from 'react';
import { ArrowUpRight, Phone, Calculator, CheckCircle2 } from 'lucide-react';

const MATERIALS = [
  { name: 'Керамика', coef: 1.15, desc: 'Керамоблоки Porotherm' },
  { name: 'Газобетон', coef: 1.0, desc: 'Блоки D400 премиум' },
  { name: 'Монолит & Hi-Tech', coef: 1.3, desc: 'Железобетонный каркас' },
  { name: 'Другой', coef: 1.1, desc: 'Комбинированный фасад' },
];

const LAND_OPTIONS = ['Да, в собственности', 'В процессе подбора', 'Планирую покупку'];

export default function Quiz({ onOpenConsultation }) {
  const [area, setArea] = useState(245);
  const [materialIdx, setMaterialIdx] = useState(0);
  const [landIdx, setLandIdx] = useState(0);

  // Dynamic cost calculation based on area & material
  const baseCostPerM2 = 72000; // руб/м²
  const estimatedCost = Math.round((area * baseCostPerM2 * MATERIALS[materialIdx].coef) / 100000) / 10;

  const handleStartEstimate = () => {
    onOpenConsultation?.(
      `Подбор проекта: ${area} м², материал: ${MATERIALS[materialIdx].name}, участок: ${LAND_OPTIONS[landIdx]} (оценка: от ${estimatedCost} млн ₽)`
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EDE7DC] border-y border-[#DDDCD5]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & Value proposition */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
              ПОДБЕРЕМ РЕШЕНИЕ ПОД ВАШ УЧАСТОК
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
              Не определились с проектом и материалом стен под ваш участок?
            </h2>
            <p className="text-forest-dark/80 mt-5 text-sm sm:text-base leading-relaxed max-w-lg">
              Ответьте на 4 вопроса инженера: подберем 3 оптимальных варианта фундамента и стен
              под геологию вашего участка и пришлем чек-лист типичных ошибок при стройке.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/60 max-w-md">
              <span className="text-5xl sm:text-6xl font-black text-bronze leading-none">
                4
              </span>
              <span className="text-forest-dark font-semibold text-xs sm:text-sm leading-snug">
                вопроса до подходящего<br />решения для вашего дома
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3 text-forest-dark/80 text-xs sm:text-sm">
              <div className="p-2.5 rounded-full bg-forest text-white">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs text-sage">Нужна срочная консультация главного инженера?</p>
                <a href="tel:+74959999999" className="text-sm font-bold text-forest-dark hover:text-bronze transition-colors">
                  Звоните: +7 (495) 999-99-99
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quiz Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-light-border/80">
              <div className="flex items-center justify-between pb-4 border-b border-light-border">
                <h3 className="text-lg sm:text-xl font-bold text-forest-dark">
                  Каким будет ваш дом?
                </h3>
                <span className="text-[11px] font-semibold text-bronze bg-cream px-3 py-1 rounded-full border border-light-border">
                  Интерактивный расчет
                </span>
              </div>

              {/* Step 1: Area Slider */}
              <div className="mt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs sm:text-sm font-bold text-forest-dark">
                    1. Желаемая площадь
                  </label>
                  <span className="text-lg font-black text-bronze bg-cream px-3 py-0.5 rounded-lg border border-light-border">
                    {area} м²
                  </span>
                </div>
                <input
                  type="range"
                  min={120}
                  max={600}
                  step={5}
                  value={area}
                  onChange={(e) => setArea(+e.target.value)}
                  className="w-full accent-bronze h-2 bg-stone/40 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-ash mt-1 font-medium">
                  <span>120 м²</span>
                  <span>300 м²</span>
                  <span>600 м²</span>
                </div>
              </div>

              {/* Step 2: Wall Material */}
              <div className="mt-6">
                <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2.5">
                  2. Материал несущих стен
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {MATERIALS.map((m, i) => (
                    <button
                      key={m.name}
                      onClick={() => setMaterialIdx(i)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border text-xs sm:text-[13px] ${
                        materialIdx === i
                          ? 'bg-forest text-white border-forest shadow-sm'
                          : 'bg-[#F9F9F7] text-forest-dark border-light-border hover:bg-stone/20'
                      }`}
                    >
                      <span className="font-bold block">{m.name}</span>
                      <span className={`text-[10px] block mt-0.5 ${materialIdx === i ? 'text-stone' : 'text-sage'}`}>
                        {m.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Land Status */}
              <div className="mt-6">
                <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2.5">
                  3. У вас уже есть земельный участок?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {LAND_OPTIONS.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => setLandIdx(i)}
                      className={`py-2.5 px-2 rounded-xl text-center text-xs font-semibold transition-all cursor-pointer border ${
                        landIdx === i
                          ? 'bg-forest text-white border-forest'
                          : 'bg-[#F9F9F7] text-forest-dark border-light-border hover:bg-stone/20'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Estimate Result Display */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F5F7F4] border border-[#DDDCD5] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-sage font-bold block">
                    Ориентировочная стоимость:
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-forest-dark">
                    от {estimatedCost} млн ₽
                  </span>
                </div>
                <div className="text-right text-[11px] text-sage">
                  <p>Теплый контур под ключ</p>
                  <p className="font-semibold text-bronze">Фиксированная смета</p>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                onClick={handleStartEstimate}
                className="w-full mt-6 py-4 px-6 bg-bronze text-white text-sm font-bold rounded-xl hover:bg-bronze-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                Получить подборку и расчет
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
