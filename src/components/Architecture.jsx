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

export default function Architecture({ onOpenConsultation }) {
  return (
    <section id="architecture" className="py-20 sm:py-28 bg-[#28332F] text-white">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2.5">
              ИНДИВИДУАЛЬНОЕ АРХИТЕКТУРНОЕ БЮРО
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-xl">
              Продуманный проект.
              <br />
              <span className="text-stone font-light">Безупречное исполнение.</span>
            </h2>
          </div>
          <p className="text-stone/80 max-w-md text-sm sm:text-[15px] leading-relaxed">
            Архитекторы, конструкторы и инженеры работают над вашим домом вместе под строгим контролем главного архитектора.
          </p>
        </div>

        {/* 3 Engineering Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {SECTIONS.map((s) => (
            <div
              key={s.abbr}
              className="bg-[#1E2522] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-bronze/40 transition-all flex flex-col group"
            >
              <div className="h-52 sm:h-60 overflow-hidden relative">
                <img
                  src={assetUrl(s.img)}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2522] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-bronze text-white text-xs font-extrabold rounded-md shadow-md">
                  {s.abbr}
                </span>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-stone transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-stone/75 text-xs sm:text-[13px] mt-2.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar with CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze animate-pulse" />
            <span className="text-xs sm:text-sm text-stone/90 font-medium">
              От эскизной концепции до полной рабочей документации
            </span>
          </div>
          <button
            onClick={() => onOpenConsultation?.("Встреча с главным архитектором")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-bronze text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bronze-light transition-all shadow cursor-pointer group"
          >
            Записаться на встречу с архитектором
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
