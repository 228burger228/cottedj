import { ArrowUpRight, Phone } from 'lucide-react';
import { assetUrl } from '../utils';

export default function Quiz({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative bg-[#EDE7DC] rounded-[32px] p-8 sm:p-14 lg:p-16 overflow-hidden border border-[#DCD5C9] shadow-[0_10px_35px_rgba(0,0,0,0.04)] grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
                ПОДБЕРЕМ РЕШЕНИЕ ПОД ВАШ УЧАСТОК
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E2824] leading-[1.2] max-w-xl">
                Не определились с проектом
                <br />
                и материалом стен под ваш участок?
              </h2>
              <p className="text-[#1E2824]/80 mt-5 text-sm sm:text-base leading-relaxed max-w-xl">
                Ответьте на 4 вопроса инженера: подберем 3 оптимальных варианта фундамента и стен под геологию вашего участка и пришлем чек-лист типичных ошибок при стройке.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1E2824]/10 flex items-center gap-3.5 text-[#1E2824]">
              <div className="w-10 h-10 rounded-full bg-[#1E2824] text-white flex items-center justify-center shrink-0">
                <Phone size={16} className="text-[#EDE7DC]" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-[#5A6560] block">Нужна срочная консультация главного инженера?</span>
                <a href="tel:+74959999999" className="font-bold text-[#1E2824] hover:text-[#8B7150] transition-colors text-sm sm:text-base">
                  Звоните: +7 (495) 999-99-99
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Original Architect Image + Badge + CTA */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-between h-full relative">
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-lg relative border border-white/60 group">
              <img
                src={assetUrl('/images/extracted_312.jpeg')}
                alt="Архитектор за работой"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#E5E1D8] flex items-center gap-3">
                <span className="text-3xl font-black text-[#8B7150] leading-none">4</span>
                <span className="text-xs font-bold text-[#1E2824] leading-tight">
                  вопроса до подходящего<br />решения для вашего дома
                </span>
              </div>
            </div>

            <div className="mt-7 w-full max-w-[420px] flex justify-end">
              <button
                onClick={() => onOpenConsultation?.("Подборка проекта и расчет фундамента")}
                className="w-full sm:w-auto px-8 py-4 bg-[#8B7150] hover:bg-[#9E825E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_8px_25px_rgba(139,113,80,0.35)] cursor-pointer flex items-center justify-center gap-2 group"
              >
                Получить подборку и расчет
                <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
