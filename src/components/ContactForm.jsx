import { useState } from 'react';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { assetUrl } from '../utils';

const MATERIALS = ['Керамика', 'Газобетон', 'Другой'];
const LAND = ['Да', 'В процессе подбора'];

export default function ContactForm() {
  const [area, setArea] = useState(245);
  const [material, setMaterial] = useState(0);
  const [hasLand, setHasLand] = useState(0);
  const [phone, setPhone] = useState('');

  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-sm text-sage">Первый шаг — понятный расчет</p>
        <p className="text-sage text-[15px] mt-1 max-w-md">
          Расскажите о планах. Инженер подготовит предварительную смету с детализацией по этапам.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 mt-10 items-start">
          {/* Form card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-light-border">
            <div className="flex items-center gap-3 mb-6">
              <img src={assetUrl('/images/дом.svg')} alt="" className="w-10 h-10" />
              <h3 className="text-lg font-bold text-forest-dark">Давайте обсудим ваш дом</h3>
            </div>

            <label className="block text-sm font-semibold text-forest-dark mb-2">Каким будет ваш дом?</label>

            {/* Area slider */}
            <label className="block text-xs font-medium text-sage mt-4 mb-2">Желаемая площадь</label>
            <div className="flex items-center gap-4">
              <span className="text-xs text-ash w-14">120 м²</span>
              <input
                type="range"
                min={120}
                max={600}
                value={area}
                onChange={(e) => setArea(+e.target.value)}
                className="flex-1 accent-bronze h-1.5 cursor-pointer"
              />
              <span className="text-xs text-ash w-14 text-right">600 м²</span>
            </div>
            <p className="text-center text-forest-dark font-bold mt-1">{area} м²</p>

            {/* Material */}
            <label className="block text-xs font-medium text-sage mt-5 mb-2">Материал стен</label>
            <div className="flex flex-wrap gap-2">
              {MATERIALS.map((m, i) => (
                <button
                  key={m}
                  onClick={() => setMaterial(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    material === i ? 'bg-forest text-white' : 'bg-cream text-sage hover:bg-stone'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Land */}
            <label className="block text-xs font-medium text-sage mt-5 mb-2">У вас уже есть участок?</label>
            <div className="flex flex-wrap gap-2">
              {LAND.map((l, i) => (
                <button
                  key={l}
                  onClick={() => setHasLand(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    hasLand === i ? 'bg-forest text-white' : 'bg-cream text-sage hover:bg-stone'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Phone */}
            <label className="block text-xs font-medium text-sage mt-5 mb-2">Ваш телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 444-33-22"
              className="w-full px-4 py-3 rounded-lg border border-light-border text-sm text-forest-dark placeholder:text-ash focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-colors"
            />

            {/* Submit */}
            <button className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-3.5 bg-bronze text-white text-sm font-semibold rounded-lg hover:bg-bronze-light transition-colors cursor-pointer">
              Рассчитать смету с детализацией
              <ArrowUpRight size={16} />
            </button>

            <p className="text-ash text-[11px] mt-3 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <a href="tel:+74958219999" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-forest-dark hover:text-forest transition-colors">
                <Phone size={22} className="text-bronze" />
                +7 (495) 821-99-99
              </a>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-bronze mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-forest-dark text-sm">Офис и шоурум образцов кладки</p>
                  <p className="text-sage text-sm mt-1">Москва · по предварительной записи</p>
                  <p className="text-ash text-xs mt-1">Адрес офиса и время работы — уточняются.</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze hover:text-bronze-light transition-colors"
            >
              Договориться о встрече <ArrowUpRight size={16} />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage hover:text-forest-dark transition-colors ml-4"
            >
              Мы на карте <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
