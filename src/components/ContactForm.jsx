import { useState } from 'react';
import { ArrowUpRight, Phone, CheckCircle, MapPin } from 'lucide-react';
import { assetUrl } from '../utils';

const MATERIALS = ['Керамика', 'Газобетон', 'Другой'];
const LAND_OPTIONS = ['Да', 'В процессе подбора'];

export default function ContactForm({ onOpenConsultation, onToast }) {
  const [area, setArea] = useState(245);
  const [material, setMaterial] = useState('Керамика');
  const [land, setLand] = useState('Да');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSubmitted(true);
    onToast?.(`Заявка принята! Расчет для дома ${area} м² отправлен инженеру.`);
    setTimeout(() => {
      setIsSubmitted(false);
      setPhone('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F9F9F9]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
            ДАВАЙТЕ ОБСУДИМ ВАШ ДОМ
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight max-w-xl">
            Первый шаг — понятный расчет
          </h2>
          <p className="text-sage mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed">
            Расскажите о планах. Инженер подготовит предварительную смету с детализацией по этапам.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mt-12 sm:mt-16 items-start">
          {/* Left Column: Form Card matching Figma (x=80..788) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-light-border">
            <h3 className="text-lg sm:text-xl font-bold text-forest-dark pb-4 border-b border-light-border">
              Каким будет ваш дом?
            </h3>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle size={52} className="text-bronze mx-auto mb-3" />
                <h4 className="text-xl font-bold text-forest-dark">Заявка принята!</h4>
                <p className="text-sage text-xs sm:text-sm mt-2 max-w-sm mx-auto">
                  Инженер подготовит предварительную смету для {area} м² ({material}) и свяжется с вами.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Area Slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-xs sm:text-sm font-semibold text-forest-dark">
                      Желаемая площадь
                    </label>
                    <span className="text-lg font-bold text-forest-dark">
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
                    className="w-full accent-bronze h-2 bg-stone/40 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-ash mt-1">
                    <span>120 м²</span>
                    <span>600 м²</span>
                  </div>
                </div>

                {/* Wall Material */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-forest-dark mb-2">
                    Материал стен
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {MATERIALS.map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMaterial(m)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                          material === m
                            ? 'bg-forest text-white border-forest'
                            : 'bg-[#F9F9F7] text-forest-dark border-light-border hover:bg-stone/20'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Land Status */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-forest-dark mb-2">
                    У вас уже есть участок?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {LAND_OPTIONS.map((l) => (
                      <button
                        type="button"
                        key={l}
                        onClick={() => setLand(l)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                          land === l
                            ? 'bg-forest text-white border-forest'
                            : 'bg-[#F9F9F7] text-forest-dark border-light-border hover:bg-stone/20'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-forest-dark mb-2">
                    Ваш телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 444-33-22"
                    className="w-full px-4 py-3 rounded-lg border border-light-border text-xs sm:text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-bronze text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bronze-light transition-all flex items-center justify-center gap-2 cursor-pointer shadow group"
                >
                  Рассчитать смету с детализацией
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-[11px] text-ash text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Office, Phone, Map (x=840..1520 in Figma) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-light-border shadow-sm">
              <div className="flex items-start justify-between pb-5 border-b border-light-border">
                <div>
                  <span className="text-xs uppercase tracking-widest text-bronze font-bold block mb-1">
                    БУДЕМ РАДЫ ЗНАКОМСТВУ
                  </span>
                  <a
                    href="tel:+74958219999"
                    className="text-2xl sm:text-3xl font-extrabold text-forest-dark hover:text-bronze transition-colors block"
                  >
                    +7 (495) 821-99-99
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-bronze leading-none">Да</span>
                  <img src={assetUrl('/images/дом.svg')} alt="Дом" className="w-8 h-8 opacity-80" />
                </div>
              </div>

              <div className="mt-5 space-y-3 text-xs sm:text-sm">
                <p className="font-bold text-forest-dark">Офис и шоурум образцов кладки</p>
                <p className="text-sage">Москва · по предварительной записи</p>
                <p className="text-ash text-xs">Адрес офиса и время работы — уточняются.</p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onOpenConsultation?.("Встреча в офисе/шоуруме")}
                  className="w-full py-3 px-4 bg-forest text-white text-xs font-bold rounded-lg hover:bg-forest/90 transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Договориться о встрече <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Map Thumbnail from Figma (xref 372) */}
              <div className="mt-6 rounded-xl overflow-hidden border border-light-border">
                <img
                  src={assetUrl('/images/extracted_372.jpeg')}
                  alt="Схема проезда к офису"
                  className="w-full h-36 object-cover"
                />
              </div>

              <div className="mt-3 text-right">
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-bronze hover:text-forest transition-colors"
                >
                  Мы на карте <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
