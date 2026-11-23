import { X, Clock, CheckCircle } from 'lucide-react';
import { assetUrl } from '../../utils';

export default function ArticleModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

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

        <div className="flex items-center gap-3 text-xs text-sage">
          <span className="font-semibold uppercase tracking-wider text-bronze">{article.category}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {article.time}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-forest-dark mt-3 leading-snug">
          {article.title}
        </h3>

        <div className="mt-5 h-56 rounded-xl overflow-hidden border border-light-border">
          <img src={assetUrl(article.img)} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="mt-6 text-sm text-sage leading-relaxed space-y-4">
          <p>
            При проектировании и строительстве загородного дома выбор правильного конструктивного решения напрямую определяет долговечность здания и исключает риск трещин или просадки фундамента.
          </p>
          <p>
            Наш инженерный отдел проводит расчет нагрузок и грунтовых вод до начала любых земляных работ. Это позволяет избежать необоснованного перерасхода бетона и арматуры, сохраняя максимальную прочность.
          </p>
          <div className="p-4 bg-cream rounded-xl border border-light-border text-xs text-forest-dark">
            <p className="font-bold mb-1">Рекомендация главного конструктора:</p>
            <p>Перед покупкой участка всегда заказывайте инженерно-геологические изыскания с бурением от 3 скважин. Мы выполняем этот аудит бесплатно при заключении договора.</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-forest text-white text-xs font-semibold rounded-lg hover:bg-forest/90 transition-colors"
          >
            Закрыть статью
          </button>
        </div>
      </div>
    </div>
  );
}
