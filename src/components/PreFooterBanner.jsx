import { assetUrl } from '../utils';

export default function PreFooterBanner() {
  return (
    <div className="w-full bg-[#0D1612] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-80 sm:h-96 lg:h-[500px]">
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
