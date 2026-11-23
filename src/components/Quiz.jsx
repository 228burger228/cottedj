import { ArrowUpRight, Phone } from 'lucide-react';
import { assetUrl } from '../utils';

export default function Quiz({ onOpenConsultation }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="relative bg-[#EDE7DC] rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-[#DDDCD5] shadow-sm grid lg:grid-cols-12 gap-8 items-center min-h-[334px]">
          {/* Left Column matching Figma text hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
                ПОДБЕРЕМ РЕШЕНИЕ ПОД ВАШ УЧАСТОК
              </p>
              <h2 className="text-xl sm:text-3xl font-extrabold text-forest-dark leading-tight max-w-xl">
                Не определились с проектом
                <br />
                и материалом стен под ваш участок?
              </h2>
              <p className="text-forest-dark/80 mt-4 text-xs sm:text-sm leading-relaxed max-w-lg">
                Ответьте на 4 вопроса инженера: подберем 3 оптимальных варианта фундамента и стен под геологию вашего участка и пришлем чек-лист типичных ошибок при стройке.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center gap-3 text-forest-dark">
              <Phone size={16} className="text-bronze shrink-0" />
              <div className="text-xs sm:text-[13px]">
                <span className="text-sage">Нужна срочная консультация главного инженера? </span>
                <a href="tel:+74959999999" className="font-bold text-forest-dark hover:text-bronze transition-colors">
                  Звоните: +7 (495) 999-99-99
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Original Architect Image + Badge + CTA */}
          <div className="lg:col-span-5 flex flex-col items-end justify-between h-full relative">
            <div className="w-full sm:w-[380px] rounded-2xl overflow-hidden shadow-md relative border border-white/40">
              <img
                src={assetUrl('/images/extracted_312.jpeg')}
                alt="Архитектор за работой"
                className="w-full h-56 sm:h-60 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-2 rounded-xl shadow-md backdrop-blur-sm border border-light-border flex items-center gap-2.5">
                <span className="text-2xl font-black text-bronze leading-none">4</span>
                <span className="text-[11px] font-bold text-forest-dark leading-tight">
                  вопроса до подходящего<br />решения для вашего дома
                </span>
              </div>
            </div>

            <div className="mt-6 w-full sm:w-[380px] flex justify-end">
              <button
                onClick={() => onOpenConsultation?.("Подборка проекта и расчет фундамента")}
                className="w-full sm:w-auto px-7 py-3.5 bg-bronze text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bronze-light transition-all shadow cursor-pointer flex items-center justify-center gap-2 group"
              >
                Получить подборку и расчет
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
