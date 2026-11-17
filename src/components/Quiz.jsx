import { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';

const MATERIALS = ['Керамика', 'Газобетон', 'Другой'];
const LAND = ['Да', 'В процессе подбора'];

export default function Quiz() {
  const [area, setArea] = useState(245);
  const [material, setMaterial] = useState(0);
  const [hasLand, setHasLand] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-forest">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bronze mb-3">
              Подберём решение под ваш участок
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Не определились с проектом и материалом стен под ваш участок?
            </h2>
            <p className="text-white/70 mt-4 text-[15px] leading-relaxed max-w-md">
              Ответьте на 4 вопроса инженера: подберем 3 оптимальных варианта фундамента и стен
              под геологию вашего участка и пришлем чек-лист типичных ошибок при стройке.
            </p>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-bold text-bronze">4</span>
              <span className="text-white/70 text-sm leading-snug">
                вопроса до подходящего<br />решения для вашего дома
              </span>
            </div>
            <div className="mt-8 flex items-center gap-2 text-white/60 text-sm">
              <Phone size={16} className="text-bronze" />
              Нужна срочная консультация главного инженера?
              <a href="tel:+74959999999" className="text-white font-semibold ml-1">+7 (495) 999-99-99</a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-forest-dark mb-6">Каким будет ваш дом?</h3>

            {/* Area slider */}
            <label className="block text-sm font-medium text-sage mb-2">Желаемая площадь</label>
            <div className="flex items-center gap-4">
              <span className="text-xs text-ash">120 м²</span>
              <input
                type="range"
                min={120}
                max={600}
                value={area}
                onChange={(e) => setArea(+e.target.value)}
                className="flex-1 accent-bronze h-1.5 cursor-pointer"
              />
              <span className="text-xs text-ash">600 м²</span>
            </div>
            <p className="text-center text-forest-dark font-bold text-lg mt-2">{area} м²</p>

            {/* Material */}
            <label className="block text-sm font-medium text-sage mt-6 mb-3">Материал стен</label>
            <div className="flex flex-wrap gap-2">
              {MATERIALS.map((m, i) => (
                <button
                  key={m}
                  onClick={() => setMaterial(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    material === i
                      ? 'bg-forest text-white'
                      : 'bg-cream text-sage hover:bg-stone'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Land */}
            <label className="block text-sm font-medium text-sage mt-6 mb-3">У вас уже есть участок?</label>
            <div className="flex flex-wrap gap-2">
              {LAND.map((l, i) => (
                <button
                  key={l}
                  onClick={() => setHasLand(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    hasLand === i
                      ? 'bg-forest text-white'
                      : 'bg-cream text-sage hover:bg-stone'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full mt-8 px-6 py-3.5 bg-bronze text-white text-sm font-semibold rounded-lg hover:bg-bronze-light transition-colors"
            >
              Получить подборку и расчет
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
