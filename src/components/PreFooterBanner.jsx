import { assetUrl } from '../utils';

export default function PreFooterBanner() {
  return (
    <div className="w-full bg-[#1E2522] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 py-10 sm:py-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-72 sm:h-96 lg:h-[460px]">
          <img
            src={assetUrl('/images/image 3.png')}
            alt="Загородный дом под ключ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 right-8">
            <span className="text-xs uppercase tracking-widest text-bronze font-extrabold block mb-2">
              НАДЕЖНЫЙ СТРОИТЕЛЬНЫЙ ПАРТНЕР
            </span>
            <p className="text-white font-black text-2xl sm:text-4xl max-w-2xl leading-tight">
              Создаем дома, в которых комфортно жить нескольким поколениям.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
