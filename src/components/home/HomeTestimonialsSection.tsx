import { motion } from 'framer-motion';
import { reveal } from './reveal';

const testimonials = [
  {
    text: 'Velik dio edukacije temelji se na vježbama koje se odmah mogu primijeniti u svakodnevnom radu.',
    attr: 'Bruna Prnjak, fizioterapeutkinja',
  },
  {
    text: 'Osjećam veću sigurnost u radu, a klijenti mi sve više poklanjaju povjerenje.',
    attr: 'Irena Škarić, terapeutkinja',
  },
];

export function HomeTestimonialsSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-start">

          <motion.div {...reveal()} className="md:col-span-4">
            <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#8a7436' }}>
              Nakon edukacije
            </p>
            <div className="w-10 h-px mb-6" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <p className="text-body-l font-normal max-w-[22rem]" style={{ color: '#5F5A52' }}>
              Kratka iskustva terapeuta koji su završili edukaciju.
            </p>
          </motion.div>

          <div className="md:col-span-7 md:col-start-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                {...reveal(i * 0.07)}
                className={i > 0 ? 'mt-10 pt-10' : ''}
                style={i > 0 ? { borderTop: '1px solid rgba(31,29,26,0.14)' } : {}}
              >
                <p className="font-playfair text-quote mb-5" style={{ color: '#1F1D1A' }}>
                  {item.text}
                </p>
                <p className="text-label uppercase tracking-[0.2em] font-normal" style={{ color: '#5F5A52' }}>
                  {item.attr}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
