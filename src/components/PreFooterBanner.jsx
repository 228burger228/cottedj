import { assetUrl } from '../utils';

export default function PreFooterBanner() {
  return (
    <div className="w-full bg-[#142019] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 py-8 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 h-72 sm:h-96 lg:h-[480px]">
          <img
            src={assetUrl('/images/extracted_200.jpeg')}
            alt="Строительство и транспортировка коттеджа"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
