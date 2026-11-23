import { useState } from 'react';
import { X, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, title = "Обсудить строительство", subtitle = "Оставьте контакты, и главный инженер свяжется с вами в течение 15 минут для консультации по вашему проекту." }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setComment('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-light-border max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ash hover:text-forest-dark transition-colors rounded-full hover:bg-cream"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center animate-scaleUp">
            <CheckCircle size={56} className="mx-auto text-[#8B7150] mb-4" />
            <h3 className="text-2xl font-bold text-forest-dark">Заявка принята!</h3>
            <p className="text-sage text-sm mt-2 max-w-sm mx-auto">
              Инженер уже получил ваши данные и позвонит вам в ближайшее время.
            </p>
          </div>
        ) : (
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-bronze">
              Да — Архитектура & Дом
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-forest-dark mt-1 leading-snug">
              {title}
            </h3>
            <p className="text-sage text-xs sm:text-sm mt-2 leading-relaxed">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Константин"
                  className="w-full px-4 py-3 rounded-lg border border-light-border text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                  Номер телефона <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full px-4 py-3 rounded-lg border border-light-border text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                  Комментарий или пожелания по дому
                </label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Площадь около 250 м², участок в Истринском районе..."
                  className="w-full px-4 py-2.5 rounded-lg border border-light-border text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 bg-bronze text-white text-sm font-semibold rounded-lg hover:bg-bronze-light transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg"
              >
                Отправить заявку
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <p className="text-[11px] text-ash text-center leading-relaxed">
                Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
