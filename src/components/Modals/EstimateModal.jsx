import { useState } from 'react';
import { X, Download, Check, FileText } from 'lucide-react';

export default function EstimateModal({ isOpen, onClose, project }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !project) return null;

  const handleDownload = () => {
    setDownloading(true);
    // Simulate generation & download of PDF file
    setTimeout(() => {
      const content = `СМЕТНЫЙ РАСЧЕТ ПРОЕКТА ${project.name.toUpperCase()}\nПлощадь: ${project.area}\nСрок возведения: ${project.time}\n\n1. Проект и геодезия: 350 000 руб\n2. Монолитный фундамент (плита 300мм): 2 850 000 руб\n3. Стены и армопояса (керамика Porotherm / газобетон D400): 4 600 000 руб\n4. Межэтажные перекрытия: 1 450 000 руб\n5. Теплый контур и кровля: 2 950 000 руб\n6. Остекление Reynaers: 1 900 000 руб\n\nИТОГО ТЕПЛЫЙ КОНТУР: Фиксируется договором. Гарантия 25 лет.`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Смета_${project.name.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-light-border max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ash hover:text-forest-dark transition-colors rounded-full hover:bg-cream"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2">
          <FileText size={18} className="text-bronze" />
          <span className="text-xs uppercase tracking-wider text-bronze font-semibold">
            Детализированная смета
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-forest-dark mt-2">
          Смета строительства: {project.name}
        </h3>
        <p className="text-sage text-xs sm:text-sm mt-1">
          Все цены фиксируются в договоре и не растут в процессе стройки.
        </p>

        {/* Breakdown table */}
        <div className="mt-6 border border-light-border rounded-xl overflow-hidden text-xs sm:text-sm">
          <div className="bg-cream p-3 font-semibold text-forest-dark flex justify-between border-b border-light-border">
            <span>Этап строительства</span>
            <span>Статус / Спецификация</span>
          </div>
          <div className="divide-y divide-light-border/60">
            <div className="p-3 flex justify-between items-center bg-white">
              <div>
                <p className="font-semibold text-forest-dark">01. Геология и топосъемка</p>
                <p className="text-xs text-sage">3 скважины по 10м, отчет грунтовых вод</p>
              </div>
              <span className="text-xs font-semibold text-forest">Включено</span>
            </div>
            <div className="p-3 flex justify-between items-center bg-cream/30">
              <div>
                <p className="font-semibold text-forest-dark">02. Монолитная плита 300 мм</p>
                <p className="text-xs text-sage">Бетон B25 W6 F150, арматура А500С, дренаж</p>
              </div>
              <span className="text-xs font-semibold text-forest">По спецификации</span>
            </div>
            <div className="p-3 flex justify-between items-center bg-white">
              <div>
                <p className="font-semibold text-forest-dark">03. Несущие стены и перегородки</p>
                <p className="text-xs text-sage">Porotherm 38 Thermo / Газобетон D400</p>
              </div>
              <span className="text-xs font-semibold text-forest">Прямые поставки</span>
            </div>
            <div className="p-3 flex justify-between items-center bg-cream/30">
              <div>
                <p className="font-semibold text-forest-dark">04. Кровля и теплый контур</p>
                <p className="text-xs text-sage">Утепление 250 мм Rockwool, водосточка</p>
              </div>
              <span className="text-xs font-semibold text-forest">Гарантия 25 лет</span>
            </div>
          </div>
        </div>

        {/* Benefits bar */}
        <div className="mt-5 p-4 bg-[#F5F7F4] rounded-xl flex items-center justify-between text-xs text-forest-dark">
          <span>Срок возведения коробки: <strong>{project.time}</strong></span>
          <span>Оплата: <strong>Поэтапная</strong></span>
        </div>

        {/* Action button */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 py-3 px-6 bg-bronze text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-bronze-light transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            {downloaded ? (
              <>
                <Check size={16} /> Смета скачана
              </>
            ) : downloading ? (
              'Формирование документа...'
            ) : (
              <>
                <Download size={16} /> Скачать смету (PDF / TXT)
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="py-3 px-6 border border-light-border text-forest-dark text-xs sm:text-sm font-semibold rounded-lg hover:bg-cream transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
