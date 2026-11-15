import { Bell, BookOpen, Users } from "lucide-react";

const HAIRLINE = '1px solid rgba(31,29,26,0.14)';

/**
 * Newsletter block in the editorial system: flat, one axis, hairlines.
 * Content is unchanged (the form itself is still the Brevo placeholder).
 */
export const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20 md:py-28" style={{ background: '#F4F1EA' }}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 items-end mb-12 md:mb-16">
          <div className="md:col-span-7">
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold text-h2" style={{ color: '#1F1D1A' }}>
              Ostanite <span style={{ color: '#8a7436' }}>informirani</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-body-l font-normal" style={{ color: '#4A463F' }}>
              Prijavite se na naš newsletter i prvi saznajte o novim tečajevima, 
              edukativnim sadržajima i ekskluzivnim ponudama
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-8 pt-10 md:pt-12" style={{ borderTop: HAIRLINE }}>
          {/* Left side - Benefits */}
          <div className="lg:col-span-6">
            <h3 className="font-playfair font-semibold text-h3 mb-8" style={{ color: '#1F1D1A' }}>
              Što dobivate s našim newsletterom?
            </h3>
            <div>
              {[
                { Icon: Bell, title: 'Rane najave', text: 'Prvi saznajte o novim tečajevima i rasporedu' },
                { Icon: BookOpen, title: 'Ekskluzivni sadržaji', text: 'Besplatni e-bookovi, videouputstva i savjeti' },
                { Icon: Users, title: 'Popusti za članove', text: 'Ekskluzivne ponude samo za pretplatnike' },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-5 py-5" style={{ borderTop: HAIRLINE }}>
                  <Icon className="w-4 h-4 mt-1.5 flex-shrink-0" style={{ color: '#8a7436' }} aria-hidden="true" />
                  <div>
                    <div className="text-body-l font-medium" style={{ color: '#1F1D1A' }}>{title}</div>
                    <div className="text-body mt-1" style={{ color: '#5F5A52' }}>
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="p-8 md:p-10" style={{ background: '#FAF8F4', border: HAIRLINE }}>
              <h4 className="font-playfair font-semibold text-h3 mb-8" style={{ color: '#1F1D1A' }}>
                Prijavite se na newsletter
              </h4>

              {/* Brevo Embed Placeholder */}
              <div className="py-6" style={{ borderTop: HAIRLINE, borderBottom: HAIRLINE }}>
                <p className="text-body font-medium mb-2" style={{ color: '#4A463F' }}>
                  Brevo Newsletter Form
                </p>
                <p className="text-body mb-6" style={{ color: '#5F5A52' }}>
                  Ovdje će biti ugrađena Brevo newsletter forma
                </p>
                <button className="w-full bg-[#1F1D1A] hover:bg-[#141311] active:bg-[#000] text-[#ede9e3] px-8 py-3.5 text-xs font-medium rounded-sm tracking-[0.16em] uppercase transition-colors duration-300">
                  Prijavite se
                </button>
              </div>

              <p className="text-caption mt-5" style={{ color: '#5F5A52' }}>
                Poštujemo vašu privatnost. Možete se odjaviti bilo kada.
              </p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-x-6 md:gap-x-8 mt-14 md:mt-20" style={{ borderTop: HAIRLINE }}>
          {[
            { value: '2000+', label: 'Pretplatnika' },
            { value: 'Mjesečno', label: 'Nova izdanja' },
            { value: '0', label: 'Spam poruka' },
          ].map(({ value, label }) => (
            <div key={label} className="pt-6">
              <div className="font-playfair text-h3 md:text-h2 font-normal mb-2" style={{ color: 'rgba(138,116,54,0.85)' }}>{value}</div>
              <div className="text-label uppercase tracking-[0.2em]" style={{ color: '#5F5A52' }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
