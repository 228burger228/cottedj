import { useState } from 'react';
import { ArrowUpRight, Phone, CheckCircle } from 'lucide-react';
import { assetUrl } from '../utils';

const MATERIALS = ['Керамика', 'Газобетон', 'Другой'];
const LAND_OPTIONS = ['Да', 'В процессе подбора'];

export default function ContactForm({ onOpenConsultation, onToast }) {
  const [area, setArea] = useState(245);
  const [material, setMaterial] = useState('Керамика');
  const [land, setLand] = useState('Да');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic price calculation
  const baseRate = material === 'Керамика' ? 76000 : material === 'Газобетон' ? 68000 : 72000;
  const estimatedCost = ((area * baseRate) / 1000000).toFixed(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSubmitted(true);
    onToast?.(`Заявка принята! Расчет для дома ${area} м² отправлен инженеру.`);
    setTimeout(() => {
      setIsSubmitted(false);
      setPhone('');
    }, 4500);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#FBFBFA]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7150] mb-3">
            ДАВАЙТЕ ОБСУДИМ ВАШ ДОМ
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2824] leading-tight max-w-xl">
            Первый шаг — понятный расчет
          </h2>
          <p className="text-[#5A6560] mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Расскажите о планах. Инженер подготовит предварительную смету с детализацией по этапам.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mt-14 sm:mt-18 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E5E1D8]">
            <div className="flex items-center justify-between pb-6 border-b border-[#E5E1D8]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2824]">
                Каким будет ваш дом?
              </h3>
              <div className="text-right">
                <span className="text-[11px] font-bold text-[#8E9691] uppercase tracking-wider block">Ориентир сметы</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#8B7150]">~ {estimatedCost} млн ₽</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-14 text-center">
                <CheckCircle size={56} className="text-[#8B7150] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#1E2824]">Заявка принята!</h4>
                <p className="text-[#5A6560] text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                  Инженер подготовит предварительную смету для {area} м² ({material}) и свяжется с вами в течение 30 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                {/* Area Slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-[#1E2824]">
                      Желаемая площадь дома
                    </label>
                    <span className="text-xl font-bold text-[#1E2824] bg-[#F4F2EE] px-3.5 py-1 rounded-xl">
                      {area} м²
                    </span>
                  </div>
                  <input
                    type="range"
                    min={120}
                    max={600}
                    step={5}
                    value={area}
                    onChange={(e) => setArea(+e.target.value)}
                    className="w-full accent-[#8B7150] h-2.5 bg-[#E1DDD5] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#8E9691] mt-2">
                    <span>120 м²</span>
                    <span>600 м²</span>
                  </div>
                </div>

                {/* Wall Material */}
                <div>
                  <label className="block text-sm font-semibold text-[#1E2824] mb-3">
                    Материал несущих стен
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {MATERIALS.map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMaterial(m)}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                          material === m
                            ? 'bg-[#1E2824] text-white border-[#1E2824] shadow-md'
                            : 'bg-[#F9F9F7] text-[#1E2824] border-[#E5E1D8] hover:bg-[#E1DDD5]/40'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Land Status */}
                <div>
                  <label className="block text-sm font-semibold text-[#1E2824] mb-3">
                    У вас уже есть земельный участок?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {LAND_OPTIONS.map((l) => (
                      <button
                        type="button"
                        key={l}
                        onClick={() => setLand(l)}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                          land === l
                            ? 'bg-[#1E2824] text-white border-[#1E2824] shadow-md'
                            : 'bg-[#F9F9F7] text-[#1E2824] border-[#E5E1D8] hover:bg-[#E1DDD5]/40'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#1E2824] mb-2">
                    Ваш номер телефона
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-5 py-4 rounded-xl border border-[#E5E1D8] text-sm text-[#1E2824] placeholder:text-[#8E9691] focus:outline-none focus:border-[#8B7150] focus:ring-1 focus:ring-[#8B7150] bg-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4.5 px-8 bg-[#8B7150] hover:bg-[#9E825E] text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_8px_25px_rgba(139,113,80,0.35)] hover:shadow-[0_12px_35px_rgba(139,113,80,0.5)] group"
                >
                  <span>Рассчитать смету с детализацией</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-xs text-[#8E9691] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработки персональных данных.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Office, Phone, Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E1D8] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-start justify-between pb-6 border-b border-[#E5E1D8]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8B7150] font-bold block mb-1.5">
                    БУДЕМ РАДЫ ЗНАКОМСТВУ
                  </span>
                  <a
                    href="tel:+74958219999"
                    className="text-2xl sm:text-3xl font-extrabold text-[#1E2824] hover:text-[#8B7150] transition-colors block"
                  >
                    +7 (495) 821-99-99
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-[#8B7150] leading-none">Да</span>
                  <img src={assetUrl('/images/дом.svg')} alt="Дом" className="w-8 h-8 opacity-80" />
                </div>
              </div>

              <div className="mt-6 space-y-3 text-xs sm:text-sm">
                <p className="font-bold text-[#1E2824] text-base">Офис и шоурум образцов кладки</p>
                <p className="text-[#5A6560]">Москва · по предварительной записи</p>
                <p className="text-[#8E9691] text-xs">Пн–Сб: 10:00 — 19:00. Встреча с главным архитектором проекта.</p>
              </div>

              <div className="mt-7">
                <button
                  onClick={() => onOpenConsultation?.("Встреча в офисе/шоуруме")}
                  className="w-full py-3.5 px-5 bg-[#1E2824] hover:bg-[#283832] text-white text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  Договориться о встрече <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Map Thumbnail from Figma */}
              <div className="mt-7 rounded-2xl overflow-hidden border border-[#E5E1D8]">
                <img
                  src={assetUrl('/images/extracted_372.jpeg')}
                  alt="Схема проезда к офису"
                  className="w-full h-44 object-cover"
                />
              </div>

              <div className="mt-4 text-right">
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B7150] hover:text-[#1E2824] transition-colors"
                >
                  Посмотреть на Яндекс.Картах <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
