import { useState } from 'react';
import { ArrowUpRight, MapPin, Phone, CheckCircle, Clock } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-28 bg-[#F0F0EB]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
            ПЕРВЫЙ ШАГ — ПОНЯТНЫЙ РАСЧЕТ
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-dark leading-tight">
            Расскажите о планах.
            <br />
            <span className="text-forest font-semibold">
              Инженер подготовит предварительную смету с детализацией по этапам.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mt-12 sm:mt-16 items-start">
          {/* Left: Detailed Configuration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-light-border">
            <div className="flex items-center gap-3 pb-6 border-b border-light-border">
              <img src={assetUrl('/images/дом.svg')} alt="Да" className="w-10 h-10 shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-forest-dark">
                  ДАВАЙТЕ ОБСУДИМ ВАШ ДОМ
                </h3>
                <p className="text-xs text-sage">Каким будет ваш будущий проект?</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-14 text-center">
                <CheckCircle size={56} className="text-bronze mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-forest-dark">Расчет отправлен!</h4>
                <p className="text-sage text-sm mt-2 max-w-md mx-auto">
                  Главный инженер готовит детальную спецификацию и смету для площади {area} м² ({material}). Мы свяжемся с вами в течение 15 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Area Slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-xs sm:text-sm font-bold text-forest-dark">
                      Желаемая площадь
                    </label>
                    <span className="text-lg font-black text-bronze bg-cream px-3 py-0.5 rounded-lg border border-light-border">
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
                  <div className="flex justify-between text-[11px] text-ash mt-1 font-medium">
                    <span>120 м²</span>
                    <span>360 м²</span>
                    <span>600 м²</span>
                  </div>
                </div>

                {/* Material Select */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2.5">
                    Материал стен
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {MATERIALS.map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMaterial(m)}
                        className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                          material === m
                            ? 'bg-forest text-white border-forest shadow-sm'
                            : 'bg-[#F9F9F7] text-forest-dark border-light-border hover:bg-stone/20'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Land Select */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2.5">
                    У вас уже есть участок?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {LAND_OPTIONS.map((l) => (
                      <button
                        type="button"
                        key={l}
                        onClick={() => setLand(l)}
                        className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                          land === l
                            ? 'bg-forest text-white border-forest shadow-sm'
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
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2">
                    Ваш телефон для связи <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 444-33-22"
                    className="w-full px-5 py-3.5 rounded-xl border border-light-border text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-bronze text-white text-sm font-bold rounded-xl hover:bg-bronze-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Рассчитать смету с детализацией
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-[11px] text-ash text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact details, Office & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-light-border shadow-sm">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block mb-2">
                БУДЕМ РАДЫ ЗНАКОМСТВУ
              </span>

              <a
                href="tel:+74958219999"
                className="text-2xl sm:text-3xl font-extrabold text-forest-dark hover:text-bronze transition-colors block mt-2 flex items-center gap-3"
              >
                <div className="p-2.5 bg-bronze/10 rounded-xl text-bronze">
                  <Phone size={22} />
                </div>
                +7 (495) 821-99-99
              </a>

              <div className="mt-6 pt-6 border-t border-light-border space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-bronze mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-forest-dark">Офис и шоурум образцов кладки</p>
                    <p className="text-sage mt-0.5">Москва · по предварительной записи</p>
                    <p className="text-ash text-xs mt-1">Адрес офиса и время работы — уточняются при согласовании.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-bronze shrink-0" />
                  <span className="text-sage">Ежедневно с 09:00 до 21:00</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenConsultation?.("Встреча в офисе/шоуруме")}
                  className="flex-1 py-3 px-4 bg-forest text-white text-xs font-bold rounded-xl hover:bg-forest/90 transition-colors text-center cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  Договориться о встрече <ArrowUpRight size={14} />
                </button>
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 border border-light-border text-forest-dark text-xs font-bold rounded-xl hover:bg-cream transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  Мы на карте <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Stylized Office Preview Card */}
            <div className="bg-[#1E2522] rounded-3xl p-6 text-white border border-white/10 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-bronze/20 text-bronze flex items-center justify-center font-bold text-lg shrink-0">
                Да
              </div>
              <div>
                <p className="font-bold text-sm">Образцы материалов вживую</p>
                <p className="text-stone/75 text-xs mt-1">
                  Более 80 видов кирпича, блоков Porotherm, клинкера и кровельных пирогов в шоуруме.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
